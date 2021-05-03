import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Editmcq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mcqname: '',
            qnaoptionlist: '',
            qnaoptionlistarr: [],
            qna: '',
            status: '',
            isDeleted: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.drpdwnhandleChange = this.drpdwnhandleChange.bind(this);
    }

    handleChange(event) {
        debugger;
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    drpdwnhandleChange(event) {
        debugger;
        const getQnaIdvalue = (Array.isArray(event) ? event.map(x => x.value) : []);
        this.setState({
            qnaoptionlist: getQnaIdvalue
        })
    }

    componentDidMount(props) {
        var Mcqid = this.props.match.params.id;
        this.GetMcqById(Mcqid);
    }
    GetMcqById(Mcqid) {
        const apiUrl = BaseapiUrl + "/api/v1/web/mcq/" + Mcqid;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    if (result) {
                        console.warn(result.data.qna);
                        this.setState({
                            mcqname: result.data.name,
                            qnaoptionlistarr: result.data.qna,
                            qnaoptionlist: result.data.qna
                        });
                        debugger;
                        var preselectedoptions = [...this.state.qnaoptionlistarr];
                        preselectedoptions.forEach(function (file) {
                            file.isFixed = "true"
                        })
                        this.setState({
                            qnaoptionlistarr: preselectedoptions
                        });
                    }
                    else {
                        alert("record not found!")
                    }
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }

    Updatemcq() {
        debugger;
        if (this.state.employeeName == "" || this.state.employeeName == undefined) {
            alert("employee Name is required");
        } else if (this.state.employeeSalary == "" || this.state.employeeSalary == undefined) {
            alert("employee Salary is required");
        } else if (this.state.employeeAddress == "" || this.state.employeeAddress == undefined) {
            alert("employee Address  is required");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            Id: this.props.match.params.id,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
            Adress: this.state.employeeAddress
        };

        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = BaseapiUrl + "/api/v1/web/mcq/" + this.props.match.params._id;
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Updated successfully!");
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    render() {
        debugger;
        let options = this.state.qnaoptionlistarr.map(function (opt) {
            return { value: opt._id, label: opt.question, isFixed: true };
        });
        return (
            <div>
                <h1>Edit Mcq</h1>
                <Link variant="primary" to="/mcqs/mcq">View Mcq list</Link>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="mcqname">
                                <Form.Label>Mcq Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mcqname"
                                    value={this.state.mcqname}
                                    onChange={this.handleChange}
                                    placeholder="Mcq Name" />
                            </Form.Group>
                            <Form.Group controlId="qnaoptionlist">
                                <Select
                                    name="qnaoptionlist"
                                    value={this.state.value}
                                    defaultValue={options[0], options[1]}
                                    onChange={this.drpdwnhandleChange}
                                    options={options}
                                    isMulti={true}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.Updatemcq()}>Update</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default Editmcq;