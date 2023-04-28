import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {postUserData} from '../factory/api'

const Add = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const data = {
    name: user.name,
    email: user.email
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    postUserData(data).then(res => {
      console.log(res);
    })
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='w-50 rounded p-3'>
        <form action="" onSubmit={handleSubmit}>
            <h3>Add Student</h3>
            <div className='d-flex justify-content-end'>
                <Link to="/" className="btn btn-secondary"> Go Back </Link>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Your Name...' className='form-control' required
                  value = {user.name}
                  onChange={e => {
                    console.log(e);
                    setUser({...user, name: e.target.value})
                  }}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Your Email...' className='form-control' required
                   onChange={e => {
                    console.log(e);
                    setUser({...user, email: e.target.value})
                  }}
                />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Add
