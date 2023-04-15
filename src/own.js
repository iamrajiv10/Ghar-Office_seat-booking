
// this is only front end we can even store the data in database using backend . later on all the booked seats will be available even after refreshing the page.
import React, { useState } from "react";
import './own.css';

function Own() {
    const [seattype, setSeattype] = useState("");  // State for selected seat type
    const [seatnum, setSetnum] = useState();   // State for seat count

    //// State for every row seat statuses
    const [smallBoxStatesRow1, setSmallBoxStatesRow1] = useState(Array(12).fill('available'));
    const [smallBoxStatesRow2, setSmallBoxStatesRow2] = useState(Array(12).fill('available'));
    const [smallBoxStatesRow3, setSmallBoxStatesRow3] = useState(Array(14).fill('available'));
    const [smallBoxStatesRow4, setSmallBoxStatesRow4] = useState(Array(14).fill('available'));
    const [smallBoxStatesRow5, setSmallBoxStatesRow5] = useState(Array(14).fill('available'));
    const [smallBoxStatesRow6, setSmallBoxStatesRow6] = useState(Array(14).fill('available'));
    const [smallBoxStatesRow7, setSmallBoxStatesRow7] = useState(Array(14).fill('available'));
    const [smallBoxStatesRow8, setSmallBoxStatesRow8] = useState(Array(14).fill('available'));



// ############################################ OnClick Functions ########################################

// Function to handle seat count
 const handleCount = () => {
    if(seatnum > 0){
    setSetnum(seatnum - 1);
 }else{
    alert("please increase the seat limit if you want more seat")
 }
}


// Function to handle seat selection in every row 

    function selectRow1(index) {
        if(seattype === 'Premium'){
        if (smallBoxStatesRow1[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow1];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow1(updatedStates);
        } else if (smallBoxStatesRow1[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow1];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow1(updatedStates);
        }
    } else {
        alert("choose only selected seat type!")
    }
    }

    function selectRow2(index) {
        if(seattype === 'Premium'){
        if (smallBoxStatesRow2[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow2];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow2(updatedStates);
        } else if (smallBoxStatesRow2[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow2];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow2(updatedStates);
        }
    } else {
        alert ("choose only selected seat type!")
    }
    }

    
    function selectRow3(index) {
        if(seattype === 'Regular'){
        if (smallBoxStatesRow3[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow3];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow3(updatedStates);
        } else if (smallBoxStatesRow3[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow3];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow3(updatedStates);
        }
    } else{
        alert ("choose only selected seat type!")
    }
}

    function selectRow4(index) {
        if(seattype === 'Regular'){
        if (smallBoxStatesRow4[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow4];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow4(updatedStates);
        } else if (smallBoxStatesRow4[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow4];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow4(updatedStates);
        }
    } else{
        alert ("choose only selected seat type!")
    }
    }

    function selectRow5(index) {
        if(seattype === 'Regular'){
        if (smallBoxStatesRow5[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow5];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow5(updatedStates);
        } else if (smallBoxStatesRow5[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow5];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow5(updatedStates);
        }
    } else{
        alert ("choose only selected seat type!")
    }
    }

    function selectRow6(index) {
        if(seattype === 'Regular'){
        if (smallBoxStatesRow6[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow6];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow6(updatedStates);
        } else if (smallBoxStatesRow6[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow6];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow6(updatedStates);
        }
    } else{
        alert ("choose only selected seat type!")
    }
    }

    function selectRow7(index) {
        if(seattype === 'Regular'){
        if (smallBoxStatesRow7[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow7];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow7(updatedStates);
        } else if (smallBoxStatesRow7[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow7];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow7(updatedStates);
        }
    } else{
        alert ("choose only selected seat type!")
    }
    }

    function selectRow8(index) {
        if(seattype === 'Regular'){
        if (smallBoxStatesRow8[index] === 'available') {
            const updatedStates = [...smallBoxStatesRow8];
            updatedStates[index] = "selected";
            setSmallBoxStatesRow8(updatedStates);
        } else if (smallBoxStatesRow8[index] === 'selected'){
            const updatedStates = [...smallBoxStatesRow8];
            updatedStates[index] = 'available';
            setSmallBoxStatesRow8(updatedStates);
        }
    } else{
        alert ("choose only selected seat type!")
    }
    }

// ####################################### Submiting booking ######################################

// Function to handle submission of selected seats
// Update state for every row's seats, mark selected seats as unavailable

    function SubmitingSeats() {
        const updatedStates1 = smallBoxStatesRow1.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow1(updatedStates1);

        const updatedStates2 = smallBoxStatesRow2.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow2(updatedStates2);

        const updatedStates3 = smallBoxStatesRow3.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow3(updatedStates3);

        const updatedStates4 = smallBoxStatesRow4.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow4(updatedStates4);

        const updatedStates5 = smallBoxStatesRow5.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow5(updatedStates5);

        const updatedStates6 = smallBoxStatesRow6.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow6(updatedStates6);

        const updatedStates7 = smallBoxStatesRow7.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow7(updatedStates7);

        const updatedStates8 = smallBoxStatesRow8.map(state => {
            if (state === 'selected') {
                return 'unavailable';
            } else {
                return state;
            }
        });
        setSmallBoxStatesRow8(updatedStates8);


        setSeattype("");
        setSetnum("");
    }



    return (
        <div className="fullContainer">
            <div className="selector">
            <label>Select your seat type:
                    <select value={seattype} onChange={(e) => { setSeattype(e.target.value) }} >
                        <option>Select</option>
                        <option>Premium</option>
                        <option>Regular</option>
                    </select>
                </label>
                </div>
                <div className="selector">
                <label>Select number of seats:
                    <select value={seatnum} onChange={(e) => { setSetnum(e.target.value)}}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </label>
            </div>
            <div className="seatContainer">
                <table className="fulltable">
                    <tbody className="hall">
                        <tr>
                            <td>
                                <div className="seatclas">Premius - 250rs<hr /></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="seats">A</td>
                            {smallBoxStatesRow1.slice(0, 3).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow1(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow1.slice(3, 6).map((state, index) => (
                                <td key={index + 3}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow1(index + 3); handleCount()}}>{index+4}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow1.slice(6,9).map((state, index) => (
                                <td key={index + 6}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow1(index + 6); handleCount()}}>{index+7}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow1.slice(9,12).map((state, index) => (
                                <td key={index + 9}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow1(index + 9); handleCount()}}>{index+10}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        <tr>
                            <td className="seats">B</td>
                            {smallBoxStatesRow2.slice(0, 3).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow2(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow2.slice(3, 6).map((state, index) => (
                                <td key={index + 3}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow2(index + 3); handleCount()}}>{index+4}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow2.slice(6,9).map((state, index) => (
                                <td key={index + 6}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow2(index + 6); handleCount()}}>{index+7}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow2.slice(9,12).map((state, index) => (
                                <td key={index + 9}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow2(index + 9); handleCount()}}>{index+10}
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <br/>
                        <tr>
                            <td>
                                <div className="seatclas">Regular - 190rs<hr /></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="seats">C</td>
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow3.slice(0, 8).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow3(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow3.slice(8,14).map((state, index) => (
                                <td key={index + 8}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow3(index + 8); handleCount()}}>{index+9}
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="seats">D</td>
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow4.slice(0, 8).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow4(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow4.slice(8,14).map((state, index) => (
                                <td key={index + 8}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow4(index + 8); handleCount()}}>{index+9}
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="seats">E</td>
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow5.slice(0, 8).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow5(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow5.slice(8,14).map((state, index) => (
                                <td key={index + 8}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow5(index + 8); handleCount()}}>{index+9}
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="seats">F</td>
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow6.slice(0, 8).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow6(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow6.slice(8,14).map((state, index) => (
                                <td key={index + 8}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow6(index + 8); handleCount()}}>{index+9}
                                    </div>
                                </td>
                            ))}
                        </tr><tr>
                            <td className="seats">G</td>
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow7.slice(0, 8).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow7(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            
                            {smallBoxStatesRow7.slice(8,14).map((state, index) => (
                                <td key={index + 8}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow7(index + 8); handleCount()}}>{index+9}
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="seats">H</td>
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow8.slice(0, 8).map((state, index) => (
                                <td key={index}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow8(index); handleCount()}}>{index+1}
                                    </div>
                                </td>
                            ))}
                            <td><div>&nbsp;</div></td>
                            <td><div>&nbsp;</div></td>
                            {smallBoxStatesRow8.slice(8,14).map((state, index) => (
                                <td key={index + 8}>
                                    <div className={`smallBox ${state}`} onClick={() => {selectRow8(index + 8); handleCount()}}>{index+9}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <div className="seatInfo">
                    <label><div className="smallBox"></div>&nbsp; - Available Seats</label>
                    <label><div className="smallBoxSelected"></div>&nbsp; - Selected Seats</label>
                    <label><div className="smallBoxunavailable"></div>&nbsp; - Booked Seats</label>
                    <br /><br />
                    <button type="submit" onClick={SubmitingSeats}>Confirm Booking</button>
                </div>
            </div>
            <div className="show">
            <div className="Screen">Screen</div>
            </div>
        </div>
    );
}
export default Own;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
