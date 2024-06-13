import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Material(props: any) {
  const [material, setMaterial] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    const slug = location.pathname.split("/").pop();
    const url = `/api/v1/materials/${slug}`;

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
        <div className="card" style={{"width":"18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{material.attributes.name}</h5>
          <p className="card-text">{material.attributes.tips}</p>
          <p className="card-text">{material.attributes.facts}</p>
          <form onClick={() => deleteMaterial(material.attributes.slug)}>
            <button type="submit" className="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
      }
    </>
  );
}