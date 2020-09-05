import React, { useState } from "react";
import Game from "./Game";
import { Button } from "react-bootstrap";

function Body() {
  const [start, setStart] = useState(false);



  return (
    <div>
      {start ? (
        <Game />
      ) : (
          <center>

            <div className="rules">
              Hey there! Welcome to the Calendar Game..<br />
Mr. Ben is a very busy man. He is barely able to take out time to open the weather forecast and decide the dates for various events which rely on the weather.
Given the calendar of a month, you need to help him out in doing so.<br /><br />

Each date is colored with one of the following 3 colors:<br />
1.<span style={{ color: "grey" }}> grey - rainy day</span><br />
2. <span style={{ color: "skyblue" }}>blue - windy day</span><br />
3. <span style={{ color: "rgb(255, 145, 0)" }}>yellow - sunny day</span><br /><br />

A question appears at the top, and accordingly you need to click on the desired date. A total of 5 questions will come, which you need to answer in the minimum possible time.
Your final score is calculated using the formula:<br />
(number of correct answers*10)-(time taken in seconds-10)<br /><br />

Maximum achievable score is 50.<br />
If in any case your score is calculated to be negative, the final score will be 0.<br />
If multiple answers are possible, choose any one.<br /><br />

All the best!
          </div>
            <Button
              className="srt"
              variant="success"
              onClick={() => {
                setStart(!start);
              }}
            >
              START the game!
          </Button>
          </center>
        )}
    </div>
  );
}

export default Body;
