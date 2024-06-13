import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

type Props = {}

function MaterialEditForm() {
  const [editMaterial, setEditMaterial] = useState<any>({
    name: "",
    tips: "",
    facts: ""
  });
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (evt: any) => {
    evt.preventDefault();
    const newMaterialData = {
      ...editMaterial,
      [evt.target.name]: evt.target.value,
    };
    setEditMaterial(newMaterialData)
  }

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const csrfToken: any = document.querySelector('[name=csrf-token]')?.getAttribute('content');
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    const slug = location.pathname.split("/").pop();
    const url = `/api/v1/materials/${slug}`;
    const material: any = editMaterial;
    axios.patch(url, { material })
      .then((res: any) => {
        setEditMaterial(editMaterial)

        setEditMaterial({
          name: "",
          tips: "",
          facts: ""
        });
        
        navigate(-1);
      })
      .catch(res => console.log("Error" + res))
  }

  return (
    <form onSubmit={handleSubmit} className="border border-primary m-2 p-1">
      <h1>Edit Material</h1>
      <div className="mb-3">
        <label className="form-label">Material Name</label>
        <input name="name" onChange={handleChange} type="text" className="form-control" id="material-name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Material Tips</label>
        <input name="tips" onChange={handleChange} type="text" className="form-control" id="material-tips"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Material Facts</label>
        <input name="facts" onChange={handleChange} type="text" className="form-control" id="material-facts"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default MaterialEditForm