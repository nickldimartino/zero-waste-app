import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialItem from "./MaterialItem";
import MaterialForm from "./MaterialForm";

export default function Materials() {
  const [materials, setMaterials] = useState<any>([]);
  const [material, setMaterial] = useState({
    name: "",
    tips: "",
    facts: ""
  });

  const handleChange = (evt: any) => {
    evt.preventDefault();
    const newMaterialData = {
      ...material,
      [evt.target.name]: evt.target.value,
    };
    setMaterial(newMaterialData)
  }

  const handleSubmit = (evt: any) => {
    const csrfToken: any = document.querySelector('[name=csrf-token]')?.getAttribute('content');
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios.post(`/api/v1/materials`, { material })
      .then((res: any) => {
        setMaterials([...materials, material])

        setMaterial({
          name: "",
          tips: "",
          facts: ""
        });
      })
      .catch(res => console.log("Error" + res))
  }

  useEffect(() => {
    // get all materials from api
    // update materials in our state

    axios.get('/api/v1/materials.json')
      .then( res => {
        setMaterials(res.data.data)
      })
      .catch( res => console.log(res))
  }, [materials.length]);

  const materialsList: React.JSX.Element[] = materials.map( (material: any, idx: number) => {
    return (<MaterialItem key={idx} attributes={material.attributes}></MaterialItem>)
  });

  return (
    <>
      <h1>This is the Materials#index</h1>
      <ul>{materialsList}</ul>
      <MaterialForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  );
}