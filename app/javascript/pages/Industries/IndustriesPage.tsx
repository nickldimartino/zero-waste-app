import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialItem from "../../components/Materials/MaterialItem";
import MaterialForm from "../../components/Materials/MaterialNewForm";

export default function IndustriesPage() {
  const [loaded, setLoaded] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const [materials, setMaterials] = useState<any>([]);
  const [material, setMaterial] = useState({
    name: "",
    tips: "",
    facts: ""
  });

  const handleShowMaterialAddForm = () =>  {
    setShowAddButton(!showAddButton);
  }

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
      .then(res => {
        setMaterials(res.data.data);
        setLoaded(true);
      })
      .catch(res => console.log(res))
  }, [materials.length]);

  const materialsList: React.JSX.Element[] = materials.map((material: any, idx: number) => {
    return (<MaterialItem key={idx} attributes={material.attributes}></MaterialItem>)
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {loaded &&
        <>
          <h1 className="text-center fw-bolder fs-1">Recyclable Materials</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap">{materialsList}</div>
          {!showAddButton ?
            <button className="btn btn-warning w-25 shadow-sm" onClick={handleShowMaterialAddForm}>Click to add a new material</button>
           : 
            <button className="btn btn-warning w-25 shadow-sm" onClick={handleShowMaterialAddForm}>Click to hide form</button>
          }
          
          {showAddButton && 
            <MaterialForm handleChange={handleChange} handleSubmit={handleSubmit} />
          }
        </>
      }
    </div>
  );
}