import { React, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [navbar, setNavbar] = useState([
        {name: "Users", path: '/'},
        {name: "Todos", path: '/todos'},
        {name: "Photos", path: '/photos'},
        {name: "Albums", path: '/albums'},
        {name: "Comments", path: '/comments'},
        {name: "Posts", path: '/posts'},
    ])
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-12 bg-danger d-flex justify-content-center align-items-center">
                <ul className='d-flex gap-5'>
                    {
                        navbar.map((item, index)=>{
                            return <li key={index} className='list-unstyled'>
                                <Link to={item.path} className='text-decoration-none text-white'>{item.name}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
