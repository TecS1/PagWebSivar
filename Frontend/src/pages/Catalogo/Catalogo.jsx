import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PdfViewer } from "../../Componentes/PdfViewer/PdfViewer";
import "./_Catalogo.scss";

export function Catalogo() {

    const nCategoria = useLocation();
    const bookMark = nCategoria.state?.bookM;

    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        setRefreshKey(prevKey => prevKey + 1);        
    },[bookMark])

    return (
        <>
            <div className="catalogo">

                <div className="row">
                    <div className="col pdfViewer">
                        <PdfViewer
                            key={refreshKey}
                            prop={bookMark}
                        />                        
                    </div>
                </div>
                
            </div>

        </>
    );
}
