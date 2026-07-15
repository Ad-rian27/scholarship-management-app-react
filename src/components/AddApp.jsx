import React, { useState } from 'react'
import axios from 'axios'
import Navigation from './Navigation'

const AddApp = () => {

    const [input, changeInput] = useState({
        appID: "",
        stuID: "",
        scholID: "",
        appDate: "",
        cgpa: "",
        faminc: "",
        status: "",
        refNo: ""
    })

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-app", input)
            .then((response) => {
                console.log(response.data)
                alert("Application added successfully")
            })
            .catch((error) => {
                console.error("Error Adding Application", error)
            })
    }

    return (
        <div>

            <Navigation />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Application ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="appID"
                                    value={input.appID}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Student ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="stuID"
                                    value={input.stuID}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Scholarship ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="scholID"
                                    value={input.scholID}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Application Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="appDate"
                                    value={input.appDate}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">CGPA</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    max="10"
                                    className="form-control"
                                    name="cgpa"
                                    value={input.cgpa}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Family Income</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="faminc"
                                    value={input.faminc}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Status</label>
                                <select
                                    className="form-control"
                                    name="status"
                                    value={input.status}
                                    onChange={inputHandler}
                                >
                                    <option value="">--Select Status--</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Reference Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="refNo"
                                    value={input.refNo}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12">
                                <button
                                    className="btn btn-success"
                                    onClick={readValue}
                                >
                                    Submit
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddApp