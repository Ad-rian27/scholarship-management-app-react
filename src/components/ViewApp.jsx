import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const ViewApp = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-app")
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

                <h1><center>VIEW APPLICATIONS</center></h1>

                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered table-striped">

                            <thead>

                                <tr>
                                    <th>Application ID</th>
                                    <th>Student ID</th>
                                    <th>Scholarship ID</th>
                                    <th>Application Date</th>
                                    <th>CGPA</th>
                                    <th>Family Income</th>
                                    <th>Status</th>
                                    <th>Reference Number</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {

                                        return (

                                            <tr key={index}>

                                                <td>{value.appID}</td>
                                                <td>{value.stuID}</td>
                                                <td>{value.scholID}</td>
                                                <td>{value.appDate}</td>
                                                <td>{value.cgpa}</td>
                                                <td>{value.faminc}</td>
                                                <td>{value.status}</td>
                                                <td>{value.refNo}</td>

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

export default ViewApp