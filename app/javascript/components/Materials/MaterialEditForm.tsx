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
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="border border-2 border-info shadow m-2 p-1 bg-light text-info rounded d-flex flex-column justify-content-center align-items-center" style={{"width": "50%"}}>
        <div className="fs-4">Edit the Material</div>
        <div className="mb-1 w-75">
          <input name="name" onChange={handleChange} type="text" className="form-control" id="material-name" placeholder="Material Name" />
        </div>
        <div className="mb-1 w-75">
          <input name="tips" onChange={handleChange} type="text" className="form-control" id="material-tips" placeholder="Material Tips" />
        </div>
        <div className="mb-1 w-75">
          <input name="facts" onChange={handleChange} type="text" className="form-control" id="material-facts" placeholder="Material Facts" />
        </div>
        <button type="submit" className="btn btn-info my-2 text-light w-25">Submit</button>
      </form>
    </div>
  )
}

export default MaterialEditForm