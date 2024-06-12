import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialItem from "./MaterialItem";

export default function Materials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    // get all materials from api
    // update materials in our state

    axios.get('/api/v1/materials.json')
      .then( res => {
        setMaterials(res.data.data)
      })
      .catch( res => console.log(res))
  }, [materials.length]);

  const materialsList: React.JSX.Element[] = materials.map( (material: any) => {
    return (<MaterialItem key={material.id} attributes={material.attributes} ></MaterialItem>)
  })

  return (
    <>
      <h1>This is the Materials#index</h1>
      <ul>{materialsList}</ul>
    </>
  );
}