import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";
import Question from "./Question";
import CurrentPts from "./CurrentPts";
import HighestS from "./HighestS";
import Timer from "./Timer";

export const Pts = React.createContext();
export const WPts = React.createContext();
export const Fin = React.createContext();
export const Tmr = React.createContext();

function Game() {
  const [points, setPoints] = useState(0)
  const [wPoints, setWPoints] = useState(0)
  const [arr, setArr] = useState([])
  const [fin, setFin] = useState(false)
  const [timer, setTimer] = useState(0)

  let fyp = -1, lyp = -1, fbp = -1, lbp = -1, fgp = -1, lgp = -1;
  useEffect(() => {
    for (var i = 1; i <= 30; i++) {
      if (i == 2 || i == 14 || i == 27) continue;

      var j = Math.floor(Math.random() * 3) + 1;
      if (j == 1) document.getElementById(i).classList.add("yellow");
      else if (j == 2) document.getElementById(i).classList.add("blue");
      if (j == 3) document.getElementById(i).classList.add("grey");
    }
    var dates = document.getElementsByClassName("date")
    for (var i = 0; i < 30; i++) {
      if (fyp == -1 && dates[i].classList.contains("yellow"))
        fyp = i + 1;
      else if (fbp == -1 && dates[i].classList.contains("blue"))
        fbp = i + 1;
      else if (fgp == -1 && dates[i].classList.contains("grey"))
        fgp = i + 1;
    }
    for (var i = 29; i >= 0; i--) {
      if (lyp == -1 && dates[i].classList.contains("yellow"))
        lyp = i + 1;
      else if (lbp == -1 && dates[i].classList.contains("blue"))
        lbp = i + 1;
      else if (lgp == -1 && dates[i].classList.contains("grey"))
        lgp = i + 1;
    }
    setArr([fyp, fgp, fbp, lyp, lgp, lbp])
  }, []);

  const submitAns = (e) => {
    var elem = document.getElementsByClassName("question")[0]
    var answerArr = elem.classList
    var answer = answerArr[answerArr.length - 1]

    if (answer == "y") {
      if (e.target.classList.contains("yellow")) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "b") {
      if (e.target.classList.contains("blue")) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "g") {
      if (e.target.classList.contains("grey")) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "yf") {
      if (arr[0] == e.target.id) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "gf") {
      if (arr[1] == e.target.id) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "bf") {
      if (arr[2] == e.target.id) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "yl") {
      if (arr[3] == e.target.id) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "gl") {
      if (arr[4] == e.target.id) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    else if (answer == "bl") {
      if (arr[5] == e.target.id) {
        setPoints(points + 1)
      }
      else {
        setWPoints(wPoints + 1)
      }
    }
    if (elem.classList.contains("y") ||
      elem.classList.contains("b") ||
      elem.classList.contains("g") ||
      elem.classList.contains("yl") ||
      elem.classList.contains("bl") ||
      elem.classList.contains("gl") ||
      elem.classList.contains("yf") ||
      elem.classList.contains("bf") ||
      elem.classList.contains("gf"))
      elem.classList.remove(answer)
  }

  return (
    <div>
      <Tmr.Provider value={{ timer, setTimer }}>
        <Fin.Provider value={{ fin, setFin }}>
          <div className="rowtop">
            <Pts.Provider value={{ points, setPoints }}>
              <WPts.Provider value={{ wPoints, setWPoints }}>
                <div className="question" xs={8}>
                  <Question />
                </div>
                <div id="cp"><CurrentPts /></div>
                <div id="fp" className="zeroWt"><HighestS /></div>
              </WPts.Provider>
            </Pts.Provider>
          </div>
          <div id="calandtime">
            <div id="cal">
              <div
                className="date" id="1" onClick={(e) =>
                  submitAns(e)
                }>
                1
            </div>
              <div className="date grey" id="2" onClick={(e) =>
                submitAns(e)
              }>
                2
            </div>
              <div className="date" id="3" onClick={(e) =>
                submitAns(e)
              }>
                3
            </div>
              <div className="date" id="4" onClick={(e) =>
                submitAns(e)
              }>
                4
            </div>
              <div className="date" id="5" onClick={(e) =>
                submitAns(e)
              }>
                5
            </div>
              <div className="date" id="6" onClick={(e) =>
                submitAns(e)
              }>
                6
            </div>
              <div className="date" id="7" onClick={(e) =>
                submitAns(e)
              }>
                7
            </div>
              <div className="date" id="8" onClick={(e) =>
                submitAns(e)
              }>
                8
            </div>
              <div className="date" id="9" onClick={(e) =>
                submitAns(e)
              }>
                9
            </div>
              <div className="date" id="10" onClick={(e) =>
                submitAns(e)
              }>
                10
            </div>
              <div className="date" id="11" onClick={(e) =>
                submitAns(e)
              }>
                11
            </div>
              <div className="date" id="12" onClick={(e) =>
                submitAns(e)
              }>
                12
            </div>
              <div className="date" id="13" onClick={(e) =>
                submitAns(e)
              }>
                13
            </div>
              <div className="date blue" id="14" onClick={(e) =>
                submitAns(e)
              }>
                14
            </div>
              <div className="date" id="15" onClick={(e) =>
                submitAns(e)
              }>
                15
            </div>
              <div className="date" id="16" onClick={(e) =>
                submitAns(e)}>16</div>
              <div className="date" id="17" onClick={(e) =>
                submitAns(e)
              }>
                17
            </div>
              <div className="date" id="18" onClick={(e) =>
                submitAns(e)
              }>
                18
            </div>
              <div className="date" id="19" onClick={(e) =>
                submitAns(e)
              }>
                19
            </div>
              <div className="date" id="20" onClick={(e) =>
                submitAns(e)
              }>
                20
            </div>
              <div className="date" id="21" onClick={(e) =>
                submitAns(e)
              }>
                21
            </div>
              <div className="date" id="22" onClick={(e) =>
                submitAns(e)
              }>
                22
            </div>
              <div className="date" id="23" onClick={(e) =>
                submitAns(e)
              }>
                23
            </div>
              <div className="date" id="24" onClick={(e) =>
                submitAns(e)
              }>
                24
            </div>
              <div className="date" id="25" onClick={(e) =>
                submitAns(e)
              }>
                25
            </div>
              <div className="date" id="26" onClick={(e) =>
                submitAns(e)
              }>
                26
            </div>
              <div className="date yellow" id="27" onClick={(e) =>
                submitAns(e)
              }>
                27
            </div>
              <div className="date" id="28" onClick={(e) =>
                submitAns(e)
              }>
                28
            </div>
              <div className="date" id="29" onClick={(e) =>
                submitAns(e)
              }>
                29
            </div>
              <div className="date" id="30" onClick={(e) =>
                submitAns(e)
              }>
                30
            </div>
            </div>

            <div id="time"><Timer /></div>
          </div>
        </Fin.Provider>
      </Tmr.Provider>
    </div>
  );
}

export default Game;
