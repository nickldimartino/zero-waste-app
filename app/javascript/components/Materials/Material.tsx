// ---------------------------------- Modules -----------------------------------
// External
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// ---------------------------------- Component ---------------------------------
export default function Material() {
  // state varaibles
  const [material, setMaterial] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);

  // save the location and navigation
  const location = useLocation();
  const navigate = useNavigate();

  // save the slug id for the current material from the URL
  const slug = location.pathname.split("/").pop();

  // save the URL
  const url = `/api/v1/materials/${slug}`;

  // delete a Material from the database
  const deleteMaterial = () => {
    // create a CSRF token
    const csrfToken: any = document
      .querySelector("[name=csrf-token]")
      ?.getAttribute("content");

    // updates the axios header with the created CSRF token
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    // DELETE request to the Rails backend
    axios
      .delete(url)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((res: any) => {
        console.log(`Error ${res}`);
      });

    // navigate the the Materials Page
    navigate("/materials");
  };

  // hook to update page
  useEffect(() => {
    // GET request to the Rails backend
    axios
      .get(url)
      .then((res) => {
        // set the current material from the database
        setMaterial(res.data.data);

        // set the loaded state to true
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);

  // render the Material page
  return (
    <div className="d-flex justify-content-center align-items-center">
      {loaded && (
        <div
          className="card m-3 bg-info rounded shadow w-50"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title text-light fs-3">
              {material.attributes.name}
            </h5>
            <hr />
            <div className="fs-5 text-light fw-bold">Tips</div>
            <ul>
              {material.attributes.tips
                .split(".")
                .map((tip: string, idx: number) => {
                  return (
                    <li key={idx} className="fs-7 text-light fst-italic">
                      {tip}
                    </li>
                  );
                })}
            </ul>
            <hr />
            <div className="fs-5 text-light fw-bold">Facts</div>
            <ul>
              {material.attributes.facts
                .split(".")
                .map((fact: string, idx: number) => {
                  return (
                    <li key={idx} className="fs-7 text-light fst-italic">
                      {fact}
                    </li>
                  );
                })}
            </ul>
            <hr />
            <div className="d-flex flex-row mt-3">
              <Link className="btn btn-warning" to={`/materials/edit/${slug}`}>
                Edit Material
              </Link>
              <form onClick={deleteMaterial}>
                <button type="submit" className="btn btn-danger ms-2">
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
