import React, { useState } from "react";
import { Table } from './Table'


export const Dashboard = () => {

    const [addEntryPopup, setAddEntryPopup] = useState(false);
    const handleAddEntryOpen = () => {
        setAddEntryPopup(true);
    }
    const handleAddEntryClose = () => {
        setAddEntryPopup(false);
    }
    const handleAddEntry = () => {



        setAddEntryPopup(false)
    }


    const logs = [
        {

        }
    ]
    return (
        <>

            <div className="header1-table">
                <div className="left">
                    <p className="p1">Toll entries/Vehicle entries</p>
                    <p className="p1"><i class="fa-solid fa-filter"></i></p>
                    <p className="p1"><div className="search"><i class="fa-solid fa-magnifying-glass"></i><input className="input-search" placeholder="Search Vehicle"></input></div></p>
                </div>
                <div className="right">
                    <p className="p1"><button onClick={handleAddEntryOpen} className="button">Add new entry</button></p>
                    {addEntryPopup && <div className="addEntryForm">
                        <h3 className="add-entry-heading">Add NEW ENTRY</h3>
                        
                            <label style={{marginBottom: "12px"}} for="toll-name">Select Toll Name*</label>
                            <select style={{outline: "none", padding: "8px 16px 8px 16px", marginBottom:"24px"}} name="toll-name" id="toll-name" required="true">
                                <option value="kappalur">kappalur</option>
                                <option value="Krishnagiri">Krishnagiri</option>
                                <option value="Delhi">Delhi</option>
                            </select>

                            <label style={{marginBottom: "12px"}} for="toll-name">Select Vehicle Type*</label>
                            <select style={{outline: "none", padding: "8px 16px 8px 16px", marginBottom:"24px"}} name="toll-name" id="toll-name"  required="true">
                                <option value="car-jeep-van">car/jeep/van</option>
                                <option value="heavy">heavy</option>
                                <option value="Bike">bike</option>
                            </select>

                            <label  style={{marginBottom: "12px"}} for="vehicle-number">Vehicle Number*</label>
                            <input style={{outline: "none", padding: "8px 16px 8px 16px", marginBottom:"24px"}} name="vehicle-number" type="text" required="true"></input>

                            <label style={{marginBottom: "12px"}} for="tariff">Tariff*</label>
                            <input  style={{outline: "none", padding: "8px 16px 8px 16px", marginBottom:"24px"}} name="tariff" type="text" required="true"></input>

                            <button type="submit" onClick={handleAddEntryClose} className="button">ok</button>
                        
                        

                        
                    </div>}
                    <p className="p1"><button className="button">Add new toll</button></p>
                    <p className="p1"><button className="button">view all tolls</button></p>
                </div>
            </div>
            <Table />

        </>


    )
}
