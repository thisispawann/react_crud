import React, { useEffect, useState } from 'react'
import { getStudentList } from '../factory/api';

const Home = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        getStudentList().then(res => {
            console.log(res);
            setData(res);
        });
    }, [])
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='w-50 rounded p-3'>
        <h3>Student Lists</h3>
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
                            <button className='btn btn-sm btn-warning'>View</button>
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
