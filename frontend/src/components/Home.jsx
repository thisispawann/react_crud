import React, { useEffect, useState } from 'react'
import { getStudentList } from '../factory/api';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        getStudentList().then(res => {
            console.log(res);
            setData(res);
        });
    }, [])
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='w-50 rounded p-3'>
        <h3>Student Lists</h3>
        <div className='d-flex justify-content-end'>
            <Link to="/add" className="btn btn-secondary">Add +</Link>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student, index) => {
                    return <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.Name}</td>
                        <td>{student.Email}</td>
                        <td>
                            <button className='btn btn-sm btn-primary'>View</button>
                            <button className='btn btn-sm btn-outline-secondary mx-2'>Update</button>
                            <button className='btn btn-sm btn-danger'>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
