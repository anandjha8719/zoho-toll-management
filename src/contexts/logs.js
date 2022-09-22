import { createContext, useState } from 'react';

export const LogsContext = createContext({
    vehicleType: [],
    setVehicleType: () => {},
    vehicleNumber: [],
    setVehicleNumber: () => {},
    date: [],
    setDate: () => {},
    time: [],
    setTime: () => {},
    tollName: [],
    setTollName: () => {},
    tarrif: [],
    setTarrif: () => {}
});

export const LogsProvider = ({children}) => {
    const [ vehicleType, setVehicleType] = useState([]);
    const [vehicleNumber, setVehicleNumber] = useState([]);
    const [date, setDate] = useState([]);
    

};

const value = {

}