import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const ViewStud = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-std")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <Navigation />

            <div className="container">

                <h1><center>VIEW STUDENTS</center></h1>

                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered table-striped">

                            <thead>

                                <tr>
                                    <th>Student ID</th>
                                    <th>Student Name</th>
                                    <th>Register Number</th>
                                    <th>Department</th>
                                    <th>Course</th>
                                    <th>Year of Study</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {

                                        return (

                                            <tr key={index}>

                                                <td>{value.stuID}</td>
                                                <td>{value.stuName}</td>
                                                <td>{value.regNo}</td>
                                                <td>{value.dept}</td>
                                                <td>{value.course}</td>
                                                <td>{value.yos}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>

                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                        </table>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ViewStud