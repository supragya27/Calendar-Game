import React, { useEffect, useState, useContext } from 'react'
import { Tmr, Fin } from './Game';
import { Button } from "react-bootstrap";

function Timer() {
    const TmrC = useContext(Tmr)
    const FinC = useContext(Fin)
    useEffect(() => {
        const interval = setInterval(() => {
            TmrC.setTimer(TmrC.timer + 1)
        }, 1000);
        return () => clearInterval(interval);
    }, [TmrC.timer]);
    return (
        <div>
            {FinC.fin ? <Button className="srt" variant="warning" onClick={() => window.location.reload()}>
                Go to Home...
          </Button> : (<div><center ><h3 className="inHeads">Time Lapsed</h3> {TmrC.timer}</center> </div>)
            }
        </div>
    )
}

export default Timer
