import { useEffect, useRef, useState } from "react";

export function useObserver({ options }) {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);

    //observedEntries es un array que devuelve la funcion "function" de callback cada que intersecta
    const observer = useRef(new IntersectionObserver(function(observedEntries) {
        setEntries(observedEntries)
    }, options));

    useEffect(() => {
        const currentObserver = observer.current
        currentObserver.disconnect();
        if (elements.length > 0) {
            elements.forEach(element => currentObserver.observe(element))
        }
        return function cleanUp() {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        }
    },[elements])

    return [observer.current, setElements, entries]
}