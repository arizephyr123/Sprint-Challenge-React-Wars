import React, { useEffect, useState } from "react";
import axios from "axios";
// import PetCard from "./PetCard";
import styled from "styled-components";

export default function SWAPIData(){
    const [data, setData] = useState([]);
    axios
    .get("https://swapi.co")
    .then(res => {
        const info = res;
        console.log(info);
setData(info);
    })
    .catch(error =>{
        console.log("SWAPI not returned:", error);
    })
} 