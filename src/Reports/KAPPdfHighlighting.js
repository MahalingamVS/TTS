import React from "react";
import "./GenericReport.css";

export default class PdfHighlighting extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: false,
      highlightText0: false,
      highlightText1: false,
      highlightText2: false,
      highlightText3: false,
      highlightText4: false,
      highlightText5: false,
      highlightText6: false,
      highlightText7: false,
      highlightText8: false,
      highlightText9: false,
      highlightText10: false
    };
    this.clickHighlight = this.clickHighlight.bind(this);
    this.navigatePageHandler = this.navigatePageHandler.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
    this.exitPage = this.exitPage.bind(this);
    this.printPage = this.printPage.bind(this);
  }

  //Used to Navigate page dynamically while playing the audio
  navigatePageHandler() {
    setTimeout(function () {
      window.location.href = "/KAPReport#marks-level";
      window.location.href = "/KAPReport#score-describtion";
      window.location.href = "/KAPReport#performance-level-describtion";
      window.location.href = "/KAPReport#student-performance-describtion";
      window.location.href = "/KAPReport#addtional-describtion";
    }, 100);
  }

  clickHighlight() {
    this.setState({
      disableButton: true
    })
    const audioElement = [
      document.getElementsByClassName("audio-element0")[0],
      document.getElementsByClassName("audio-element1")[0],
      document.getElementsByClassName("audio-element2")[0],
      document.getElementsByClassName("audio-element3")[0],
      document.getElementsByClassName("audio-element4")[0],
      document.getElementsByClassName("audio-element5")[0],
      document.getElementsByClassName("audio-element6")[0],
      document.getElementsByClassName("audio-element7")[0],
      document.getElementsByClassName("audio-element8")[0],
      document.getElementsByClassName("audio-element9")[0],
      document.getElementsByClassName("audio-element10")[0]
    ];
    var timeInterval = [1000];
    const playInterval = 2000; // to add interval between the audios

    for (let ti = 0; ti < audioElement.length; ti++) {
      timeInterval[ti + 1] = timeInterval[ti] + (audioElement[ti].duration) * 1000 + playInterval;
    }

    for (let i = 0; i < audioElement.length; i++) {
      setTimeout(() => {
        abc(i);
        if (i !== audioElement.length) audioElement[i].play();
      }, timeInterval[i]);
    }

    const abc = (i) => {
      this.setState({
        highlightText0: false,
        highlightText1: false,
        highlightText2: false,
        highlightText3: false,
        highlightText4: false,
        highlightText5: false,
        highlightText6: false,
        highlightText7: false,
        highlightText8: false,
        highlightText9: false,
        highlightText10: false,
      });

      switch (i) {
        case 0:
          this.setState({
            highlightText0: true,
          });
          break;
        case 1:
          this.setState({
            highlightText1: true,
          });
          break;
        case 2:
          this.setState({
            highlightText2: true,
          });
          break;
        case 3:
          this.navigatePageHandler();
          this.setState({
            highlightText3: true,
          });
          break;
        case 4:
          this.navigatePageHandler();
          this.setState({
            highlightText4: true,
          });
          break;
        case 5:
          this.navigatePageHandler();
          this.setState({
            highlightText5: true,
          });
          break;
        case 6:
          this.navigatePageHandler();
          this.setState({
            highlightText6: true,
          });
          break;
        case 7:
          this.setState({
            highlightText7: true,
          });
          break;
        case 8:
          this.navigatePageHandler();
          this.setState({
            highlightText8: true,
          });
          break;
        case 9:
          this.setState({
            highlightText9: true,
          });
          break;
        case 10:
          this.setState({
            highlightText10: true,
          });
          break;

        default:
          this.setState({
            highlightText0: false,
            highlightText1: false,
            highlightText2: false,
            highlightText3: false,
            highlightText4: false,
            highlightText5: false,
            highlightText6: false,
            highlightText7: false,
            highlightText8: false,
            highlightText9: false,
            highlightText10: false,
          });
          break;
      }
    };
  }

  //to stop the audio
  stopAudio() {
    setTimeout(function () {
      window.location.href = "/KAPReport";
    }, 100);

  }

  //to exit the report page
  exitPage() {
    setTimeout(function () {
      window.location.href = "/";
    }, 100);
  }

  //to print the pdf document
  printPage(e) {
    window.print();
  }
  render() {
    return (
      <div >
        <div id={`${this.state.highlightText0 ? "full-pdf" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText1 ? "level-score" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText2 ? "score" : "alert-hidden"}`}  ></div>
        <div id={`${this.state.highlightText3 ? "marks-level" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText4 ? "score-describtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText5 ? "performance-level-describtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText6 ? "student-performance-describtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText7 ? "symbol-describtion" : "alert-hidden"}`}  ></div>
        <div id={`${this.state.highlightText8 ? "addtional-describtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText9 ? "act-scoring" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText10 ? "measure" : "alert-hidden"}`} ></div>


        <button className="download-button"><a href='/pdf/High School Math.pdf' download >Download</a></button>
        <button className="play-button" onClick={this.clickHighlight} disabled={this.state.disableButton}>Play</button>
        <button className="cancel-button" onClick={this.stopAudio}>Stop</button>
        <button className="stop-button" onClick={this.exitPage}>Exit</button>
        <button className="print-button" onClick={
          (e) => { this.printPage(e) }} >
          Print</button>
        <div className="element">
          <audio className="audio-element0" preload="auto">
            <source src="/Audio/speech_0.mp3" ></source>
          </audio>
          <audio className="audio-element1" preload="auto">
            <source src="/Audio/speech_1.mp3"></source>
          </audio>
          <audio className="audio-element2" preload="auto">
            <source src="/Audio/speech_2.mp3"></source>
          </audio>
          <audio className="audio-element3" preload="auto">
            <source src="/Audio/speech_3.mp3"></source>
          </audio>
          <audio className="audio-element4" preload="auto">
            <source src="/Audio/speech_4.mp3"></source>
          </audio>
          <audio className="audio-element5" preload="auto">
            <source src="/Audio/speech_5.mp3"></source>
          </audio>
          <audio className="audio-element6" preload="auto">
            <source src="/Audio/speech_6.mp3"></source>
          </audio>
          <audio className="audio-element7" preload="auto">
            <source src="/Audio/speech_7.mp3"></source>
          </audio>
          <audio className="audio-element8" preload="auto">
            <source src="/Audio/speech_8.mp3"></source>
          </audio>
          <audio className="audio-element9" preload="auto">
            <source src="/Audio/speech_9.mp3"></source>
          </audio>
          <audio className="audio-element10" preload="auto">
            <source src="/Audio/speech_1_0.mp3"></source>
          </audio>
        </div>
      </div>
    );
  }
}