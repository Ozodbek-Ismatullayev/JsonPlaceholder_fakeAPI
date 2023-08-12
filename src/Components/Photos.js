import React from 'react'
import { useState, useEffect } from 'react'
import http from '../axios'

export default function Photos() {

  const [photos, setPhotos] = useState([])
  const [select, setSelect] = useState()
  const [page, setPage] = useState(1)

  const getPhotos =()=>{
    http.get(`/photos?_page=${page}&_limit=${select}`).then(response=>{
      setPhotos(response.data)
    })
  }

  const handleChange=(e)=>{
    e.preventDefault();
    setSelect(e.target.value)
  }

  useEffect(()=>{
    getPhotos()
  }, [page, select])

  const increasePage =(page)=>{
    setPage(page+1)
  }

  const decreasePage =(page)=>{
    if(page !== 1){
      setPage(page-1)}
  }
  return (
    <div className='container'>
      <div className="row my-3">
        <div className="col-md-3">
          <select onChange={(e)=>handleChange(e)} className='form-control'>
            <option value="" selected hidden>Select...</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>

      <div className="row">
        {
          photos.map((item,index)=>{
            return <div className="col-md-4 my-2">
              <div className="card">
                <div className="card-header text-center">
                  <img src={item.url} alt="" className='w-100 h-100 border-2 rounded-3'/>
                </div>

                <div className="card-body">
                  <p>
                    <span className='mx-2 fs-1'>{item.id}</span>
                    <span className='fs-2'>{item.title}</span>
                  </p>
                </div>
              </div>
            </div>
          })
        }
      </div>

      <div className="col-md-12 text-center">
          <button className="btn btn-info" onClick={()=>decreasePage(page)}>prev</button>
          <span className='mx-2 fs-1'>{page}</span>
          <button className="btn btn-primary" onClick={()=>increasePage(page)}>next</button>
        </div>
  </div>
  )
}
