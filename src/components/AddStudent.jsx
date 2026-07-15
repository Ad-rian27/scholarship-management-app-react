import axios from "axios";
import React, { useState } from "react";
import Navigation from "./Navigation";

const AddStudent = () => {

    const [input, changeInput] = useState({
    stuID: "",
    stuName: "",
    regNo: "",
    dept: "",
    course: "",
    yos: "",
    email: "",
    phone: ""
  });

    const [error, setError] = useState("");

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-std", input).then(

            (response) => {
                console.log(response.data)
                alert("Student added successfully")
            }

        ).catch(
            (error) => (
                console.error("Error Adding Student", error)
            )
        )

    }

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
                                <label className="form-label">Student ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="stuID"
                                    value={input.stuID}
                                    onChange={inputHandler}
                                    placeholder="ST101"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Student Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="stuName"
                                    value={input.stuName}
                                    onChange={inputHandler}
                                    placeholder="John Mathew"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Register Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="regNo"
                                    value={input.regNo}
                                    onChange={inputHandler}
                                    placeholder="REG2026001"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Department</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="dept"
                                    value={input.dept}
                                    onChange={inputHandler}
                                    placeholder="Computer Science"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Course</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={input.course}
                                    onChange={inputHandler}
                                    placeholder="MCA"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Year of Study</label>
                                <select
                                    className="form-control"
                                    name="yos"
                                    value={input.yos}
                                    onChange={inputHandler}
                                >
                                    <option value="">----Select Year----</option>
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                </select>
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                    placeholder="student@gmail.com"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                    placeholder="9876543210"
                                    pattern="[0-9]{10}"
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
    );
};

export default AddStudent;