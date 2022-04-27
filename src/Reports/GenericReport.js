import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PdfHighlighting from './KAPPdfHighlighting';
import './GenericReport.css';
import PDF from './DLMPdfHighlighting';


export default function exampleReport(props) {
const [heigh,setHeigh]=useState("");
  const check = useState(props.data)
  const [noOfPages, setNoOfPages] = useState(null);
  // To load the pages based on available number of pages
  function onDocumentLoadSuccess({ numPages }) {
    setNoOfPages(numPages);
console.log(document.getElementsByClassName('col'));

}

  return (
    <div className='container' >
      <div className='row middle-xs' >
        <div className="col">
          {props.data == "KAP" ? <>
            <Document file="/pdf/High School Math.pdf" onLoadSuccess={onDocumentLoadSuccess} >
              {Array.from(new Array(noOfPages),
                (el, index) => (<Page size="A3" pageNumber={index + 1}
                 width={30} scale={100} alignment={'center'}
                />),
              )}
            </Document> <PdfHighlighting /></> : <> <div id="docu"><Document file="/pdf/Individual_Student_Score_Report_IE_ELA.pdf" onLoadSuccess={onDocumentLoadSuccess} >
              {Array.from(new Array(noOfPages),
                (el, index) => (<Page size="A3" pageNumber={index + 1}
                  width={100} scale={10} alignment={'center'}
                />),
              )}
            </Document></div> <PDF data={noOfPages} /></>}
        </div>
      </div>
    </div>
  );
}