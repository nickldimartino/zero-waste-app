// ---------------------------------- Modules -----------------------------------
// External
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ---------------------------------- Component ---------------------------------
export default function MaterialEditForm() {
  // state variable for the edit material
  const [editMaterial, setEditMaterial] = useState<any>({
    name: "",
    tips: "",
    facts: "",
  });

  // get the location and navigation
  const location = useLocation();
  const navigate = useNavigate();

  // update the editMaterial state whenever the user inputs values
  const handleChange = (evt: React.ChangeEvent<any> ) => {
    evt.preventDefault();
    const newMaterialData = {
      ...editMaterial,
      [evt.target.name]: evt.target.value,
    };
    setEditMaterial(newMaterialData);
  };

  // updates the editted material in the database when the form is submitted
  const handleSubmit = (evt: React.ChangeEvent<any>) => {
    // prevent the page refresh on submission
    evt.preventDefault();

    // create a CSRF token
    const csrfToken: any = document
      .querySelector("[name=csrf-token]")
      ?.getAttribute("content");

    // updates the axios header with the created CSRF token
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    // get the slug id from the URL
    const slug = location.pathname.split("/").pop();

    // URL for the axios request
    const url: string = `/api/v1/materials/${slug}`;

    // change the name of the state for the axios request
    const material: any = editMaterial;

    // PATCH (update) request to the Rails backend with the editted material
    axios
      .patch(url, { material })
      .then(() => {
        // edit the material state
        setEditMaterial(editMaterial);

        // update the state to be empty
        setEditMaterial({
          name: "",
          tips: "",
          facts: "",
        });

        // navigate to the previous page (Materials Page)
        navigate(-1);
      })
      .catch((res) => console.log("Error" + res));
  };

  // render the Material Edit Form
  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="border border-2 border-info shadow m-2 p-1 bg-info text-light rounded d-flex flex-column justify-content-center align-items-center"
        style={{ width: "50%" }}
      >
        <div className="fs-4">Edit the Material</div>
        <div className="mb-1 w-75">
          <input
            name="name"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="material-name"
            placeholder="Material Name"
          />
        </div>
        <div className="mb-1 w-75">
          <input
            name="tips"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="material-tips"
            placeholder="Material Tips"
          />
        </div>
        <div className="mb-1 w-75">
          <input
            name="facts"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="material-facts"
            placeholder="Material Facts"
          />
        </div>
        <button type="submit" className="btn btn-light my-2 w-25">
          Submit
        </button>
      </form>
    </div>
  );
}
