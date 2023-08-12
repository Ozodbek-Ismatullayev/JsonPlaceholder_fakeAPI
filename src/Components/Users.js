import React from 'react'
import { useState, useEffect } from 'react'
import http from '../axios'

export default function Users() {
  const [users, setUsers] = useState([])
  const [select, setSelect] = useState()
  const [page, setPage] = useState(1)

  const getUsers =()=>{
    http.get(`/users?_page=${page}&_limit=${select}`).then(response=>{
      setUsers(response.data)
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
    getUsers()
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
        <div className="col-md-12 mt-4">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Company</th>
              </tr>
            </thead>

            <tbody>
              {
                users.map((item,index)=>{
                  return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                    <td>{item.phone}</td>
                    <td>{item.company.name}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
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
