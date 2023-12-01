import { React, useState, useEffect } from "react";
import "./_pdfViewer.scss";

import { Document, Page, Outline, pdfjs } from "react-pdf";

import pdfFile from "../../Assets/docs/Catalogo.pdf";//Catalogo.pdf
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PdfViewer({ prop }) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth); 
    const [width, setWidth] = useState();
    const [numPages, setNumPages] = useState(null);
    const [bookmark, setBookmark] = useState();
    const [lengthArr,setLengthArr] = useState();
    const [pageNumber, setPageNumber] = useState();
    const [catPage, setCatPage] = useState([]);
    const [move, setMove] = useState(50);

    const resize_ob = new ResizeObserver(function() {
        setScreenWidth(window.innerWidth);        
    });

    useEffect(() => {
        const item = document.querySelector(".rctPdf");
        let pct = parseInt(screenWidth * 82 / 100);
        let widthPage = 0;
        
        if ((pct % 2) === 0){
            item.style.width = pct + "px";
            widthPage = pct/2;
            if(screenWidth < 636) widthPage = pct
        }else{
            item.style.width = (pct-1) + "px";
            widthPage = (pct-1)/2;
            if(screenWidth < 636) widthPage = pct-1
            console.log("salio impar que loko");
        }
        setWidth(widthPage);
    },[screenWidth])

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        resize_ob.observe(document.querySelector(".catalogo"));
    };

    useEffect(() => {
        let carga = 8;

        setPageNumber(bookmark);
        if((bookmark+carga) > numPages) {carga = numPages - bookmark;
            console.log("carga: "+ carga);
        }
        
        const initialArray = [];

        for (let i = 0; i < carga; i++) {
            initialArray.push(<Page
                className={"pagePdf"}
                pageNumber={((bookmark) + i)}
            />);
        }

        setLengthArr(carga);
        setCatPage(initialArray);

        if(screenWidth < 636){
            setMove(100);
        }else{
            setMove(50);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[bookmark, screenWidth]);

    function nextPage() {
        var newPages = 4;
        const nPage = bookmark + lengthArr;//ultima pagina que debe generar
        const item = document.querySelector('.pagesContainer');//esto es lo que se mueve
        var posX = (parseFloat(item.style.left));

        if(screenWidth < 636 ){
            setMove(100);
        }else{
            setMove(50);
        }

        if((pageNumber === numPages) || (pageNumber === numPages+1)){
            return;
        }else if(-posX >= (((lengthArr-1)/2)-1)*100){
            if((pageNumber+newPages)> numPages) newPages = numPages - bookmark - lengthArr + 1;
            item.style.left = (posX - 50) + "%";
            setPageNumber(pageNumber+1);
            const array = catPage;
            for (let i = 0; i < newPages; i++) {
                array.push(<Page
                    className={"pagePdf"}
                    pageNumber={nPage + i}
                />);
            }
            setCatPage(array);
            setLengthArr(lengthArr + 4);
        }
        item.style.left = (posX - move) + "%";
        item.style.transition = '1000ms';
        setPageNumber(pageNumber+1);
    }
    
    function previousPage() {
        const item = document.querySelector('.pagesContainer');

        if(screenWidth < 636 ){
            setMove(100);
        }else{
            setMove(50);
        }

        var posX = (parseFloat(item.style.left));
        if(posX === 0){
            return;
        }else {
            item.style.left = (posX + move) + "%";
            item.style.transition = '1000ms';
            setPageNumber(pageNumber-1);
        }
    }    

    /*------------------------------------------*/
    return (
        <>
            <Document className={"rctPdf"} file={pdfFile} loading={'Cargando... Por favor espere'} onLoadSuccess={onDocumentLoadSuccess}>
                <Outline className={"hide-outline"} onLoadSuccess={ (outline) => {
                        const outlines = outline.filter(item => item.title === prop);
                        outlines.map((item) => setBookmark(item.dest[0]+1));
                    }}
                />

                {bookmark && <div className='pagesContainer'
                    style={{ left: '0%'}}>
                    {
                        catPage.map((paginas, index) => (
                            <div className='d-flex' key={index} style={{ width: `${width}px`}}>
                                {paginas}
                            </div>
                        ))
                    }
                </div>}

                {<button onClick={previousPage} className="prevPdf">
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </button>}

                {
                <button onClick={nextPage} className="nextPdf">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>}

            </Document>
        </>
  )
}
