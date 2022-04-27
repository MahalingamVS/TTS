import React from "react";
import "./GenericReport.css";

export default class Pdf extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: false,
      highlightText0: false,
      highlightText1: false,
      highlightText2: false,
      highlightText3: false,
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
      window.location.href = "/DLMReport#overall-result";
      window.location.href = "/DLMReport#conceptual-area";
      window.location.href = "/DLMReport#learning-profile";
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
      });

      switch (i) {
        case 0:
          this.setState({
            highlightText0: true,
          });
          break;
        case 1:
          this.navigatePageHandler();
          this.setState({
            highlightText1: true,
          });
          break;
        case 2:
          this.navigatePageHandler();
          this.setState({
            highlightText2: true,
          });
          break;
        case 3:
          this.navigatePageHandler();
          this.setState({
            highlightText3: true,

          });console.log(document.getElementById('doc').scrollHeight);
;
          break;
        default:
          this.setState({
            highlightText0: false,
            highlightText1: false,
            highlightText2: false,
            highlightText3: false,
          });
          break;
      }
    };
  }

  //to stop the audio
  stopAudio() {
    setTimeout(function () {
      window.location.href = "/DLMReport";
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
      <div>
<div id="doc">
        <div id={`${this.state.highlightText0 ? "DLMfull-pdf" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText1 ? "overall-result" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText2 ? "conceptual-area" : "alert-hidden"}`}  ></div>
        <div id={`${this.state.highlightText3 ? "learning-profile" : "alert-hidden"}`} ></div>
</div>
        <button className="download-button"><a href='/pdf/Individual_Student_Score_Report_IE_ELA.pdf' download >Download</a></button>
        <button className="play-button" onClick={this.clickHighlight} disabled={this.state.disableButton}>Play</button>
        <button className="cancel-button" onClick={this.stopAudio}>Stop</button>
        <button className="stop-button" onClick={this.exitPage}>Exit</button>
        <button className="print-button" onClick={
          (e) => { this.printPage(e) }} >
          Print</button>
        <div className="element">
          <audio className="audio-element0" preload="auto">
            <source src="/Audio/dlm_intro_overview.mp3" ></source>
          </audio>
          <audio className="audio-element1" preload="auto">
            <source src="/Audio/dlm_performanceprofile_part1.mp3"></source>
          </audio>
          <audio className="audio-element2" preload="auto">
            <source src="/Audio/dlm_performanceprofile_part2.mp3"></source>
          </audio>
          <audio className="audio-element3" preload="auto">
            <source src="/Audio/dlm_learningprofile.mp3"></source>
          </audio>
        </div>
      </div>
    );
  }
}