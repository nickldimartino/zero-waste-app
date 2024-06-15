import React from 'react'

type Props = {}

export default function MaterialNewForm({ handleChange, handleSubmit }: {handleChange: any, handleSubmit: any}) {
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center border border-2 border-info rounded m-2 p-2 w-25 shadow">
      <div className="mb-1 w-75">
        <input name="name" onChange={handleChange} type="text" className="form-control" id="material-name" placeholder="Material Name"/>
      </div>
      <div className="mb-1 w-75">
        <input name="tips" onChange={handleChange} type="text" className="form-control" id="material-tips" placeholder="Material Tips"/>
      </div>
      <div className="mb-1 w-75">
        <input name="facts" onChange={handleChange} type="text" className="form-control" id="material-facts" placeholder="Material Facts"/>
      </div>
      <button type="submit" className="btn btn-info text-light">Submit</button>
    </form>
  )
}
