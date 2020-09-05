import React, { useContext } from 'react'
import { Pts, WPts } from './Game'

function CurrentPts() {
    const CPts = useContext(Pts)
    const WCPts = useContext(WPts)
    return (
        <div><center>
            <h2 className="inHeads">Points</h2>
            <span className="inheadtxt">

                {CPts.points}/
            {WCPts.wPoints + CPts.points}
            </span>
        </center>
        </div>
    )
}

export default CurrentPts
