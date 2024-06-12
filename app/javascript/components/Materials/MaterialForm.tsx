import React from 'react'

type Props = {}

export default function MaterialForm({ handleChange, handleSubmit }: {handleChange: any, handleSubmit: any}) {
  return (
    <form onSubmit={handleSubmit} className="border border-primary m-2 p-1">
      <div className="mb-3">
        <label className="form-label">Material Name</label>
        <input name="name" onChange={handleChange} type="text" className="form-control" id="material-name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Material Tips</label>
        <input name="tips" onChange={handleChange} type="text" className="form-control" id="material-tips"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Material Facts</label>
        <input name="facts" onChange={handleChange} type="text" className="form-control" id="material-facts"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
