import React from 'react'
import { useState, useEffect } from 'react'
import http from '../axios'

export default function Albums() {
  const [albums, setAlbums] = useState([])
  const [select, setSelect] = useState()
  const [page, setPage] = useState(1)

  const getAlbums =()=>{
    http.get(`/albums?_page=${page}&_limit=${select}`).then(response=>{
      setAlbums(response.data)
    })
  }

  const handleChange=(e)=>{
    e.preventDefault();
    setSelect(e.target.value)
  }

  const increasePage =(page)=>{
    setPage(page+1)
  }

  const decreasePage =(page)=>{
    if(page !== 1){
      setPage(page-1)}
  }

  useEffect(()=>{
    getAlbums()
  }, [page, select])
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
          <select className='form-control mt-3 success' onChange={(e)=>handleChange(e)}>
            <option value="" selected hidden>Select page...</option> 
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>


        <div className="row">
        {
        albums.map((item,index)=>{
            return <div className="col-md-3 my-2">
            <div className="card">
                <div className="card-header text-center">
                    <h1>User Id: {item.userId}</h1>
                    <h1>Id: {item.id}</h1>
                </div>

                <div className="card-body">
                <p>
                    <span className='text-primary'>Title: </span>
                    <span>{item.title}</span>
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
    </div>
  )
}
