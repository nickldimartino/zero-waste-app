// ---------------------------------- Modules -----------------------------------
// External
import axios from "axios";
import React, { useEffect, useState } from "react";

// Interal
import EmissionsItem from "../../components/Emissions/EmissionsItem";
import { EmissionType } from "../../types";

// ---------------------------------- Component ---------------------------------
export default function EmissionsPage() {
  // state variables for emissions and loading
  const [emissions, setEmissions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // hook for when the page renders
  useEffect(() => {
    // send a GET request to the Rails backend and get the emissions in the database
    axios
      .get("/api/v1/emissions.json")
      .then((res) => {
        // set the received emissions from the database to the state
        setEmissions(res.data.data);

        // set the loaded state to true
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);

  // crreate a list of the Emssions items from the database
  const emissionsList: React.JSX.Element[] = emissions.map(
    (emission: EmissionType, idx: number) => {
      return (
        <EmissionsItem
          key={idx}
          attributes={emission.attributes}
        ></EmissionsItem>
      );
    }
  );

  // render the Emissions Page
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      {loaded && (
        <>
          <h1 className="text-center fw-bold fs-1 text-info">
            Scope Emissions
          </h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            {emissionsList}
          </div>
          <div className="alert alert-info mt-3 mb-4" role="alert">
            More information can be found out at{" "}
            <a
              className="border-bottom fw-bold"
              href="https://www.epa.gov/climateleadership/scope-1-and-scope-2-inventory-guidance"
              target="_blank"
            >
              epa.gov
            </a>
          </div>
        </>
      )}
    </div>
  );
}
