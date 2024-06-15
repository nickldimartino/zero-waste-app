import axios from "axios";
import React, { useEffect, useState } from "react";
import EmissionsItem from "../../components/Emissions/EmissionsItem";

export default function EmissionsPage () {
  const [emissions, setEmissions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('/api/v1/emissions.json')
      .then(res => {
        setEmissions(res.data.data);
        setLoaded(true)
      })
      .catch(res => console.log(res))
  }, []);

  const emissionsList: React.JSX.Element[] = emissions.map((emission: any, idx: number) => {
    return (<EmissionsItem key={idx} attributes={emission.attributes}></EmissionsItem>)
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      {loaded &&
        <>
          <h1 className="text-center fw-bold fs-1">Scope Emissions</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap">{emissionsList}</div>
        </>
      }
    </div>
  )
}
