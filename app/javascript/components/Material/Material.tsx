import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import MaterialItem from "../Materials/MaterialItem";

export default function Material(props: any) {
  const [material, setMaterial] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

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

  const [name, tips, facts, slug] = material.attributes;

  return (
    <>
      {loaded &&
        <MaterialItem key={material.id} attributes={material.attributes}></MaterialItem>
      }
    </>
  );
}