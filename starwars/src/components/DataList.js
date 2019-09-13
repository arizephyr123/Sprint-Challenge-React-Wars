import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import CharCard from "./DataCard"

export default function SWAPIData() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
      .get("https://swapi.co/api/people/")
      .then(res => {
          const info = res.data.results;
          console.log(info);
  setData(info);
      })
      .catch(error =>{
          console.log("SWAPI not returned:", error);
      });
    }, []);

    return (
      <Container>
        <Row>
            {data.map(data =>{
                return(
<CharCard key={data.id} name={data.name} height={data.height} mass={data.mass} eyeColor={data.eye_color} />

                )
            })}

        </Row>
      </Container>
    );
  }