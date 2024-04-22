import React from "react"
import './style.css'

const PlayerTable = (props) => {
    return(
        <div className="p-container">
            <div className="p-category">
                <h2 className="p-gender">{props.gender}</h2>
                <p className="p-weight">{props.weight} kg</p>
                <p className="p-viewdraw">(View Draw)</p>
            </div>
            <div className="p-table">
                <table>
                    <thead>
                        <th>Athlete 1 name</th>
                        <th>State name</th>
                        <th>Side</th>
                        <th>Points</th>
                        <th>Athlete 2 name</th>
                        <th>State name</th>
                        <th>Side</th>
                        <th>Score</th>
                        <th>Winner</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Piyush</td>
                            <td>Uttrakhand</td>
                            <td>Red</td>
                            <td>3</td>
                            <td>Kumar</td>
                            <td>Madhya Pradesh</td>
                            <td>one</td>
                            <td>0</td>
                            <td>Piyush</td>
                        </tr>
                        <tr>
                            <td>Anurag</td>
                            <td>Uttrakhand</td>
                            <td>Red</td>
                            <td>3</td>
                            <td>Kumar</td>
                            <td>Madhya Pradesh</td>
                            <td>one</td>
                            <td>0</td>
                            <td>Piyush</td>
                        </tr>
                        <tr>
                            <td>Tushar</td>
                            <td>Uttrakhand</td>
                            <td>Red</td>
                            <td>3</td>
                            <td>Kumar</td>
                            <td>Madhya Pradesh</td>
                            <td>one</td>
                            <td>0</td>
                            <td>Piyush</td>
                        </tr>
                        <tr>
                            <td>Nikhil</td>
                            <td>Uttrakhand</td>
                            <td>Red</td>
                            <td>3</td>
                            <td>Kumar</td>
                            <td>Madhya Pradesh</td>
                            <td>one</td>
                            <td>0</td>
                            <td>Piyush</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerTable