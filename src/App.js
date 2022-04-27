import React from 'react';
import axios from "axios";
 // eslint-disable-next-line
import PDFViewer from 'pdf-viewer-reactjs'
import GenericReport from './Reports/GenericReport';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactComponent as KiteLogo } from './images/kite_logo.svg';
import './App.css';

function App() {

  //to generate polly for the Data that needs to be highlighted 
  // the method will used for future implementation with polly
   // eslint-disable-next-line
  const generatePolly = () => {
    axios
      .post(`http://localhost:8080/polly`,
        {
          firstName: 'FirstName',
          lastName: 'LastName',
          level: "Your Student Mathematics score : level 4",
          performance: "Your student has scored 341 percentile.",
          school: "Your student's school Median percentile is 276. Total number of students in your students school is 103. Your student is out performed in  school level.",
          district: "Your student's district Median percentile is 276. Total number of students in your students school is 103. Your student is out performed in  district level.",
          state: "Your student's state Median percentile is 280. Total number of students in your students school is 36,140. Your student is out performed in  state level.",
        },
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then((res) => {
        console.log("Return Data ---->>>", res.data);
      })
      .catch((err) => {
        console.log("Error Data ---->>>", err);
      });
  }

  return (
    <div className="login-background " >
      <div className="login">
        <KiteLogo data-testid="logo-element" className="logo-margin" />
        <h1 className="link-data" >STUDENT REPORT GENERATION </h1> {/*This comes with logo. this line will go away*/}
        <h3 className="line link-data">Select the subject to view the report</h3>
        <ul className="list-data">
          <li>
            <a id="content" href="/KAPReport" >KAP REPORT TTS</a>
          </li>
          <li>
            <a id="content" href="/DLMReport" >DLM REPORT(IE) TTS</a>
          </li>
        </ul>
      </div>
    </div>
  )
};
export default App;