import axios from "axios";
import React, { useState } from "react";
import Navigation from "./Navigation";

const AddScholar = () => {

    const [input, changeInput] = useState({
        scholID: "",
        scholName: "",
        scholType: "",
        eligpa: "",
        maxfaminc: "",
        scholAmt: "",
        lastDate: "",
        desc: ""
    });

    const [error, setError] = useState("");

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {

        console.log(input);

        axios.post("http://localhost:3000/add-schol", input)
            .then((response) => {

                console.log(response.data);
                alert("Scholarship Added Successfully");

                changeInput({
                    scholID: "",
                    scholName: "",
                    scholType: "",
                    eligpa: "",
                    maxfaminc: "",
                    scholAmt: "",
                    lastDate: "",
                    desc: ""
                });

            })
            .catch((error) => {
                console.error("Error Adding Scholarship", error);
                setError("Failed to add scholarship");
            });

    };

    return (
        <div>

            <Navigation />

            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12">

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        <div className="row g-3">

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Scholarship ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="scholID"
                                    value={input.scholID}
                                    onChange={inputHandler}
                                    placeholder="SCH101"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Scholarship Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="scholName"
                                    value={input.scholName}
                                    onChange={inputHandler}
                                    placeholder="Merit Scholarship"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Scholarship Type</label>
                                <select
                                    className="form-control"
                                    name="scholType"
                                    value={input.scholType}
                                    onChange={inputHandler}
                                >
                                    <option value="">----Select Type----</option>
                                    <option value="Merit">Merit</option>
                                    <option value="Need Based">Need Based</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Minority">Minority</option>
                                </select>
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Eligibility CGPA</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="form-control"
                                    name="eligpa"
                                    value={input.eligpa}
                                    onChange={inputHandler}
                                    placeholder="8.50"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Maximum Family Income</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="maxfaminc"
                                    value={input.maxfaminc}
                                    onChange={inputHandler}
                                    placeholder="300000"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Scholarship Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="scholAmt"
                                    value={input.scholAmt}
                                    onChange={inputHandler}
                                    placeholder="50000"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Last Date to Apply</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="lastDate"
                                    value={input.lastDate}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    name="desc"
                                    value={input.desc}
                                    onChange={inputHandler}
                                    placeholder="Enter Scholarship Description"
                                ></textarea>
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
    );
};

export default AddScholar;