import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Addmcq extends Component {
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
            [name]: value,
        })
    }

    drpdwnhandleChange(event) {
        debugger;
        const getQnaIdvalue = (Array.isArray(event) ? event.map(x => x.value) : []);
        this.setState({
            qnaoptionlist: getQnaIdvalue
        })
    }

    componentDidMount() {
        debugger;
        fetch(BaseapiUrl + '/api/v1/web/qna/optionList')
            .then((resp) => {
                resp.json()
                    .then((result) => {
                        console.warn(result.data);
                        this.setState({
                            qnaoptionlistarr: result.data
                        });
                    })
            });
    }

    addmcq() {
        debugger;
        if (this.state.mcqname == "" || this.state.mcqname == undefined) {
            alert("Mcq Name is required");
        } else if (this.state.qnaoptionlist == "" || this.state.qnaoptionlist == undefined) {
            alert("Please select option list");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            name: this.state.mcqname,
            qna: this.state.qnaoptionlist,
            status: true,
            isDeleted: false
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = BaseapiUrl + "/api/v1/web/admin/mcq/";
        fetch(baseurl, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    if (result) {
                        debugger;
                        alert("Added successfully!");
                        this.setState({
                            mcqname: '',
                            qnaoptionlist: ''
                        });
                    }
                })
            .catch((e) => {
                console.warn(e);
                alert(e);
            });
    }

    render() {
        let options = this.state.qnaoptionlistarr.map(function (opt) {
            return { value: opt._id, label: opt.question };
        })
        debugger;
        return (
            <div>
                <h1>Add Mcq</h1>
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
                                {/*<select className="form-control" onChange={this.handleChange}>
                                    <option>---select---</option>
                                    {this.state.qnaoptionlistarr.map(function (data, key) {
                                        return (
                                            <option key={key._id} value={data._id}>{data.question}</option>)
                                    })}
                                </select>*/}

                                <Select
                                    name="qnaoptionlist"
                                    value={this.state.value}
                                    onChange={this.drpdwnhandleChange}
                                    labelKey='_id'
                                    valueKey='question'
                                    options={options}
                                    isMulti
                                />
                            </Form.Group>

                            <Form.Group>
                                <Button variant="success" onClick={() => this.addmcq()}>Add</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default Addmcq;