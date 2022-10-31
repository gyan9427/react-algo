// import React,{ Component } from "react";
import Cell from "./Cell";
import "./RowElement.css";

const RowElement = (props) =>{
    // let rowCount = props.rowNumber;
    let cellNumber = [];
    for(let i=0;i<props.colNumber;i++){
        cellNumber.push(i);
    }
    
    return (<div className="Row">
        {
            cellNumber.map(cell=><Cell/>)
        }
    </div>)
}

export default RowElement;