import React from "react";

export default function BenefitsPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">Benefits of Recycling and Moving to Zero Waste</div>
      <div className="d-flex fled-row flex-wrap justify-content-center">
        <div className="card w-25 m-3 bg-light rounded shadow text-info border border-2 border-info">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Environment</div>
            <hr />
            <ul>
              <li className="card-text my-2">Reduces the amount of waste sent to landfills and incinerators.</li>
              <li className="card-text my-2">Conserves natural resources such as timber, water and minerals.</li>
              <li className="card-text my-2">Prevents pollution and reduces greenhouse gases by reducing the need to mine and process new raw materials.</li>
            </ul>
          </div>
        </div>
        <div className="card w-25 m-3 bg-light rounded shadow text-info border border-2 border-info">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Economy</div>
            <hr />
            <ul>
              <li className="card-text my-2">Increases economic security by tapping a domestic source of materials.</li>
              <li className="card-text my-2">Saves energy.</li>
            </ul>
          </div>
        </div>
        <div className="card w-25 m-3 bg-light rounded shadow text-info border border-2 border-info">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Communities</div>
            <hr />
            <ul>
              <li className="card-text my-2">Supports American manufacturing and conserves valuable resources.</li>
              <li className="card-text my-2">Helps create jobs in the recycling and manufacturing industries in the United States.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fs-2 fw-bold text-info">Drawbacks and Challenges</div>
      <div className="d-flex fled-row flex-wrap justify-content-center">
        <div className="card w-25 m-3 bg-light rounded shadow text-info border border-2 border-info">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Knowledge and Understanding</div>
            <hr />
            <ul>
              <li className="card-text my-2">Most Americans want to recycle, as they believe recycling provides an opportunity for them to be responsible caretakers of the Earth.</li>
              <li className="card-text my-2">Tt can be difficult for consumers to understand what materials can be recycled, how materials can be recycled, and where to recycle different materials.</li>
              <li className="card-text my-2">This confusion often leads to placing recyclables in the trash or throwing trash in the recycling bin or cart.</li>
            </ul>
          </div>
        </div>
        <div className="card w-25 m-3 bg-light rounded shadow text-info border border-2 border-info">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Domestic Markets</div>
            <hr />
            <ul>
              <li className="card-text my-2">Historically, some of the recycled materials generated in the United States have been exported internationally.</li>
              <li className="card-text my-2">Changing international policies have limited the export of materials. We need to better integrate recycled materials and end-of-life management into product and packaging designs.</li>
              <li className="card-text my-2">We need to improve communication among the different sectors of the recycling system to strengthen existing materials markets and to develop new innovative markets.</li>
            </ul>
          </div>
        </div>
        <div className="card w-25 m-3 bg-light rounded shadow text-info border border-2 border-info">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Infrastructure</div>
            <hr />
            <ul>
              <li className="card-text my-2">America's recycling infrastructure has not kept pace with today's waste stream.</li>
              <li className="card-text my-2">Communication between the manufacturers of new materials and products and the recycling industry needs to be enhanced to prepare for and optimally manage the recycling of new materials.</li>
            </ul>
          </div>
        </div>
        <div className="card w-25 m-3 bg-light rounded shadow text-info border border-2 border-info">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Consistent Measurements</div>
            <hr />
            <ul>
              <li className="card-text my-2">Entities across the recycling system agree that more consistent measurement methodologies are needed to measure recycling system performance.</li>
              <li className="card-text my-2">These more standardized metrics can then be used to create effective goals and track progress.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="alert alert-info mt-3 mb-4" role="alert">
        More information can be found out at <a className="link-underline-dark" href="https://www.epa.gov/circulareconomy/us-recycling-system" target="_blank">epa.gov</a>
      </div>
    </div>
  )
}
