import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Material() {
  const [material, setMaterial] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname.split("/").pop();
  const url = `/api/v1/materials/${slug}`;

  const deleteMaterial = (slug: any) => {
    const csrfToken: any = document.querySelector('[name=csrf-token]')?.getAttribute('content');
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios.delete(`/api/v1/materials/${slug}`)
      .then((res: any) => {
        console.log(res.data)
      })
      .catch((res: any) => {
        console.log(`Error ${res}`)
      });
    navigate("/materials");
  }

  useEffect(() => {
    // api/v1/materials/:slug
    axios.get(url)
      .then(res => {
        setMaterial(res.data.data)
        setLoaded(true)
      })
      .catch(res => console.log(res))
  }, []);

  return (
    <>
      {loaded &&
        <div className="card m-3 bg-info rounded shadow w-50" style={{ "width": "18rem" }}>
          <div className="card-body">
            <h5 className="card-title text-light fs-3">{material.attributes.name}</h5>
            <hr />
            <div className="fs-5 text-light fw-bold">Tips</div>
            <ul>{material.attributes.tips.split(".").map((tip: string, idx: number) => { return <li key={idx} className="fs-7 text-light fst-italic">{tip}</li> })}</ul>
            <hr />
            <div className="fs-5 text-light fw-bold">Facts</div>
            <ul>{material.attributes.facts.split(".").map((fact: string, idx: number) => { return <li key={idx} className="fs-7 text-light fst-italic">{fact}</li> })}</ul>
            <div className="d-flex flex-row">
              <Link className="btn btn-warning" to={`/materials/edit/${slug}`}>Edit Material</Link>
              <form onClick={() => deleteMaterial(material.attributes.slug)}>
                <button type="submit" className="btn btn-danger ml-2">Delete</button>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
}