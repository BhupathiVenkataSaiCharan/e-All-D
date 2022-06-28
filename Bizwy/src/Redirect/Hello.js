import React, { Component } from "react";
import { Link } from "react-router-dom";
import BodyCard from "../Components/BodyCard";

class Hello extends Component{
    render(){
        return(
            <>
                 <Link to="https://www.google.com/"><BodyCard imgSrc="/assets/images/landimg1.png" /></Link>
            </>
        );
    }
}

export default Hello;