import {IUseState} from "../types";
import React from "react";


const handleChange = <T extends Record<string, any>>(event: React.ChangeEvent<HTMLInputElement>, setData: IUseState<T>) => {
    const {name, value} = event.target;
    setData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};

export {handleChange}