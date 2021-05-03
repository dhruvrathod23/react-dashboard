import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Editppt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pptname: '',
            pptlink: ''
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
    componentDidMount(props) {
        var Pptid = this.props.match.params.id;
        this.GetEmployeeById(Pptid);
    }
    GetEmployeeById(Pptid) {
        debugger;
        const apiUrl = BaseapiUrl + "/api/v1/web/ppt/" + Pptid;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    if (result) {
                        console.log(result);
                        this.setState({
                            pptname: result.data.name,
                            pptlink: result.data.link
                        });
                    }
                    else {
                        alert("employeee record not found!")
                    }
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }

    Updateppt() {
        debugger;
        if (this.state.pptname == "" || this.state.pptname == undefined) {
            alert("PPT Name is required");
        } else if (this.state.pptlink == "" || this.state.pptlink == undefined) {
            alert("PPT link is required");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            Id:this.props.match.params.id,
            name: this.state.pptname,
            link: this.state.pptlink
        };

        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = BaseapiUrl + "/api/v1/web/ppt/"+this.props.match.params.id;
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Updated successfully!");
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
                <h1>Edit Ppt</h1>
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
                                <Button variant="success" onClick={() => this.Updateppt()}>Update</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default Editppt;