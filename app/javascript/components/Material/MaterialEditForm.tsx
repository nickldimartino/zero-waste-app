import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

function MaterialEditForm({slug}: {slug: any}) {
  const [editMaterial, setEditMaterial] = useState<any>({
    name: "",
    tips: "",
    facts: ""
  });
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
    const material: any = editMaterial;
    axios.patch(`/api/v1/materials/${slug}`, { material })
      .then((res: any) => {
        setEditMaterial([...editMaterial, editMaterial])

        setEditMaterial({
          name: "",
          tips: "",
          facts: ""
        });
      })
      .catch(res => console.log("Error" + res))
  }

useEffect(() => {

}, [editMaterial]);

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