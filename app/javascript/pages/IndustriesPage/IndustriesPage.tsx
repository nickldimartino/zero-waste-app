import React, { useState, useEffect } from "react";
import axios from 'axios';
import IndustryItem from "../../components/Industries/IndustryItem";

export default function IndustriesPage() {
  const [loaded, setLoaded] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const [industries, setIndustries] = useState<any>([]);
  const [industry, setIndustry] = useState({
    name: "",
    recyclables: "",
    companies: ""
  });

  const handleShowIndustryAddForm = () => {
    setShowAddButton(!showAddButton);
  }

  const handleChange = (evt: any) => {
    evt.preventDefault();
    const newIndustryData = {
      ...industry,
      [evt.target.name]: evt.target.value,
    };
    setIndustry(newIndustryData)
  }

  const handleSubmit = (evt: any) => {
    const csrfToken: any = document.querySelector('[name=csrf-token]')?.getAttribute('content');
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios.post(`/api/v1/industries`, { industry })
      .then((res: any) => {
        setIndustries([...industries, industry])

        setIndustry({
          name: "",
          recyclables: "",
          companies: ""
        });
      })
      .catch(res => console.log("Error" + res))
  }

  useEffect(() => {
    // get all industries from api
    // update industries in our state

    axios.get('/api/v1/industries.json')
      .then(res => {
        setIndustries(res.data.data);
        setLoaded(true);
      })
      .catch(res => console.log(res))
  }, [industries.length]);

  const industriesList: React.JSX.Element[] = industries.map((industry: any, idx: number) => {
    return (<IndustryItem key={idx} attributes={industry.attributes}></IndustryItem>)
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      {loaded &&
        <>
          <h1 className="text-center fw-bold fs-1">Impacted Industries and Companies of RoadRunner Waste Management</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap">{industriesList}</div>
        </>
      }
    </div>
  );
}