import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const ViewScholar = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-schol")
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

                <h1><center>VIEW SCHOLARSHIPS</center></h1>

                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered table-striped">

                            <thead>

                                <tr>
                                    <th>Scholarship ID</th>
                                    <th>Scholarship Name</th>
                                    <th>Scholarship Type</th>
                                    <th>Eligibility CGPA</th>
                                    <th>Maximum Family Income</th>
                                    <th>Scholarship Amount</th>
                                    <th>Last Date to Apply</th>
                                    <th>Description</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {

                                        return (

                                            <tr key={index}>

                                                <td>{value.scholID}</td>
                                                <td>{value.scholName}</td>
                                                <td>{value.scholType}</td>
                                                <td>{value.eligpa}</td>
                                                <td>{value.maxfaminc}</td>
                                                <td>{value.scholAmt}</td>
                                                <td>{value.lastDate}</td>
                                                <td>{value.desc}</td>

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

export default ViewScholar