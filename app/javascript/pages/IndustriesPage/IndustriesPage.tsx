// ---------------------------------- Modules -----------------------------------
// External
import axios from "axios";
import React, { useState, useEffect } from "react";

// Internal
import IndustryItem from "../../components/Industries/IndustryItem";
import { IndustryType } from "../../types";

// ---------------------------------- Component ---------------------------------
export default function IndustriesPage() {
  // state variables
  const [loaded, setLoaded] = useState(false);
  const [industries, setIndustries] = useState<any>([]);

  // hook for when the page renders
  useEffect(() => {
    // send a GET request to the Rails backend and get the industries in the database
    axios
      .get("/api/v1/industries.json")
      .then((res) => {
        // set the industries state with the received industries from the database
        setIndustries(res.data.data);

        // set the loaded state to true
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);

  // create a list of all the industry items
  const industriesList: React.JSX.Element[] = industries.map(
    (industry: IndustryType, idx: number) => {
      return (
        <IndustryItem key={idx} attributes={industry.attributes}></IndustryItem>
      );
    }
  );

  // render the Industries Page
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      {loaded && (
        <>
          <h1 className="text-center fw-bold fs-1 text-info">
            Impacted Industries and Companies of RoadRunner Waste Management
          </h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            {industriesList}
          </div>
        </>
      )}
    </div>
  );
}
