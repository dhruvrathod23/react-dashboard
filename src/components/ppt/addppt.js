import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Addppt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pptname: '',
            pptlink: '',
            status:'',
            isDeleted:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    addppt() {
        debugger;
        if (this.state.pptname == "" || this.state.pptname == undefined) {
            alert("PPT Name is required");
        } else if (this.state.pptlink == "" || this.state.pptlink == undefined) {
            alert("PPT link is required");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            name: this.state.pptname,
            link: this.state.pptlink,
            status:true,
            isDeleted:false
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = BaseapiUrl + "/api/v1/web/ppt/";
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Added successfully!");
                    this.setState({
                        pptname: '',
                        pptlink: ''
                    })
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    render() {
        return (
            <div>
                <h1>Add Ppt</h1>
                <Link variant="primary" to="/ppt/ppt">View Ppt list</Link>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="pptname">
                                <Form.Label>PPT Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pptname"
                                    value={this.state.pptname}
                                    onChange={this.handleChange}
                                    placeholder="PPT Name" />
                            </Form.Group>
                            <Form.Group controlId="pptlink">
                                <Form.Label>PPT Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pptlink"
                                    value={this.state.pptlink}
                                    onChange={this.handleChange}
                                    placeholder="PPT Link" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.addppt()}>Add</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default Addppt;