import React, { useState, useEffect, useContext } from "react";
import App from "../App.css";
import { Pts, WPts, Fin } from "./Game";
import swal from "sweetalert";

function Question() {
  const CPts = useContext(Pts)
  const WCPts = useContext(WPts)
  const FinC = useContext(Fin)
  const [count, setCount] = useState(0);
  const [qBank, setQbank] = useState([
    {
      id: "q1",
      ans: "yf",
      ques: "Which is the earliest possible date to go out for a picnic?",
    },
    {
      id: "q2",
      ans: "yl",
      ques: "Which is the last possible date to go out for a picnic?",
    },
    { id: "q3", ans: "y", ques: "Which date is good to go out for a picnic?" },
    {
      id: "q4",
      ans: "yf",
      ques:
        "Which is the earliest possible date to wash clothes and put them out in the Sun?",
    },
    {
      id: "q5",
      ans: "yl",
      ques:
        "Which is the last possible date to wash clothes and put them out in the Sun?",
    },
    {
      id: "q6",
      ans: "y",
      ques: "Which date is good to wash clothes and put them out in the Sun?",
    },
    {
      id: "q7",
      ans: "gf",
      ques:
        "Which is the first date when Rain-Water-Harvesting system will function?",
    },
    {
      id: "q8",
      ans: "gl",
      ques:
        "Which is the last date when Rain-Water-Harvesting system will function?",
    },
    {
      id: "q9",
      ans: "g",
      ques:
        "On which date the rain-water-harvesting system of Mr. Ben's house will be used?",
    },
    {
      id: "q10",
      ans: "bf",
      ques:
        "On which earliest date should the windmill operations be monitored?",
    },
    {
      id: "q11",
      ans: "bl",
      ques:
        "Which is the last date to monitor the windmill operations?",
    },
    {
      id: "q12",
      ans: "b",
      ques:
        "On which date should the windmill operations be monitored?",
    },
  ]);
  const [usedQ, setUsedQ] = useState([]);


  useEffect(() => {
    if (count >= 5) {
      FinC.setFin(true)
      document.getElementsByClassName("question")[0].innerHTML = ""
      swal("Answers submitted successfully!", "", "success");
    }
    else {
      const elem = document.getElementsByClassName("question")[0];

      var i = Math.floor(Math.random() * 12) + 1;
      var q = "q" + i;
      while (usedQ.includes(q)) {
        i = Math.floor(Math.random() * 12) + 1;
        q = "q" + i;
      }
      elem.innerHTML = qBank[i - 1].ques;
      elem.classList.add(qBank[i - 1].ans);
      setUsedQ([...usedQ, q]);
      setCount(count + 1)
    }
    return () => {
      setUsedQ([])
    }
  }, [CPts.points, WCPts.wPoints]);


  return <div>  </div>;
}

export default Question;
