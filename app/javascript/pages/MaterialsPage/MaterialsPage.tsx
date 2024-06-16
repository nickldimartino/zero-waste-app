// ---------------------------------- Modules -----------------------------------
// External
import axios from "axios";
import React, { useState, useEffect } from "react";

// Internal
import MaterialItem from "../../components/Materials/MaterialItem";
import MaterialForm from "../../components/Materials/MaterialNewForm";

// ---------------------------------- Component ---------------------------------
export default function MaterialsPage() {
  // state variables
  const [loaded, setLoaded] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const [materials, setMaterials] = useState<any>([]);
  const [material, setMaterial] = useState({
    name: "",
    tips: "",
    facts: "",
  });

  // toggle the visibility of the Add Material Form
  const handleShowMaterialAddForm = () => {
    setShowAddButton(!showAddButton);
  };

  // update the state of a material as a user types
  const handleChange = (evt: any) => {
    evt.preventDefault();
    const newMaterialData = {
      ...material,
      [evt.target.name]: evt.target.value,
    };
    setMaterial(newMaterialData);
  };

  // adds the user inputted material to the database
  const handleSubmit = (evt: any) => {
    // create a CSRF token for the POSZ request
    const csrfToken: any = document
      .querySelector("[name=csrf-token]")
      ?.getAttribute("content");

    // set the axios request headers to the created CSRF token
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    // send a POST request to the Rails backend with the material
    axios
      .post(`/api/v1/materials`, { material })
      .then((res: any) => {
        // set the received materials from the database to the state
        setMaterials([...materials, material]);

        // set the current material state to empty
        setMaterial({
          name: "",
          tips: "",
          facts: "",
        });
      })
      .catch((res) => console.log("Error" + res));
  };

  // hook to update the page whenever the materials state is changed
  useEffect(() => {
    // GET request the the Rails backend
    axios
      .get("/api/v1/materials.json")
      .then((res) => {
        // update the materials state with the received materials
        setMaterials(res.data.data);

        // set the loaded state to true
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, [materials.length]);

  // create a list of Materials items
  const materialsList: React.JSX.Element[] = materials.map(
    (material: any, idx: number) => {
      return (
        <MaterialItem key={idx} attributes={material.attributes}></MaterialItem>
      );
    }
  );

  // render the Materials page
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      {loaded && (
        <>
          <h1 className="text-center fw-bolder fs-1 text-info">
            Recyclable Materials
          </h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            {materialsList}
          </div>
          {!showAddButton ? (
            <button
              className="btn btn-info w-25 shadow-sm text-light"
              onClick={handleShowMaterialAddForm}
            >
              Click to add a new material
            </button>
          ) : (
            <button
              className="btn btn-info w-25 shadow-sm"
              onClick={handleShowMaterialAddForm}
            >
              Click to hide form
            </button>
          )}

          {showAddButton && (
            <MaterialForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </>
      )}
    </div>
  );
}
