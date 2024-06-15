import React from "react";
import { Link } from "react-router-dom";

export default function HowToRecyclePage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fs-2 fw-bold text-info">How to Recycle</div>
      <div className="alert alert-info fs-5 mt-2" role="alert">
        Recycling is easy! You're just a couple steps away from making this planet cleaner.
      </div>
      <div className="d-flex fled-row flex-wrap justify-content-center">
        <div className="card w-25 m-3 bg-info rounded shadow text-light">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Step 1</div>
            <hr />
            <ul>
              <li className="card-text my-2">Determine the type of item you're holding by visiting <Link className="fw-bold border-bottom" to="/materials">this</Link> page</li>
              <li className="card-text my-2">Is it plastic? Cardboard? Metal? A banana peel? Knowing what kind of item you're holding is crucial.</li>
            </ul>
          </div>
        </div>
        <div className="card w-25 m-3 bg-info rounded shadow text-light">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Step 2</div>
            <hr />
            <ul>
              <li className="card-text my-2">Place the CLEAN item in the correct receptacle.</li>
              <li className="card-text my-2">If you're at home, then you should have multiple receptacles for recyclabes. For example: one for plastic films and bags, one for metals cans, bottles, and jugs, and another for cardboard boxes.</li>
              <li className="card-text my-2">If you're in a public area, there's a chance the receptacles are labeled accordingly for the item your holding.</li>
            </ul>
          </div>
        </div>
        <div className="card w-25 m-3 bg-info rounded shadow text-light">
          <div className="card-body">
            <div className="card-title text-center fs-3 fw-bold">Step 3</div>
            <hr />
            <ul>
              <li className="card-text my-2">If you're at home, figure out how to dispose of each receptacle</li>
              <li className="card-text my-2">If you're collecting organics, try composting or learning about other companies that will come pick up organic recyclables.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
