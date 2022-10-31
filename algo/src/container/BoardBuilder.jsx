import React,{ Component } from "react";
import RowElement from "../components/static_components/RowElement";
import "./BoardBuilder.css";

class BoardBuilder extends Component{
    state = {
        rowNum : 70,
        colNum : 90,
    }
    render(){
        return (
            <div className="Board">
                <RowElement
                    rowNumber = {this.state.rowNum}
                    colNumber = {this.state.colNum}
                 />
            </div>
        )
    }
}

export default BoardBuilder;