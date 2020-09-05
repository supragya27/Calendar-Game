import React, { useState, useContext, useEffect } from 'react'
import { Pts, Tmr, WPts } from './Game'

function HighestS() {
    const CPts = useContext(Pts)
    const TmrC = useContext(Tmr)
    const CWPts = useContext(WPts)

    const [HS, setHS] = useState(0)
    const setwidth = () => {
        document.getElementsByClassName('question')[0].classList.add('zeroWt');
        document.getElementById('fp').classList.remove('zeroWt')
        document.getElementById('fp').classList.add('finalRes')
        document.getElementById('cp').classList.add('finalRes')

    }
    useEffect(() => {
        if (((CPts.points * 10) - (TmrC.timer - 10)) > 50)
            setHS(50)
        else if (CPts.points == 0)
            setHS(0)
        else if (((CPts.points * 10) - (TmrC.timer - 10)) > 0)
            setHS((CPts.points * 10) - (TmrC.timer - 10))
        else
            setHS(0)
    }, [CPts.points])
    return (
        <div>
            {CPts.points + CWPts.wPoints > 4 ? <div>
                <center>
                    {setwidth()}
                    <h3 className="inHeads">Final Score</h3>{HS.toPrecision(3)}</center> </div> : ""}
        </div>
    )
}

export default HighestS
