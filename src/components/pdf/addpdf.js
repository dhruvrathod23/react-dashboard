import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Addpdf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pdfname: '',
            pdflink: '',
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
    addpdf() {
        debugger;
        if (this.state.pdfname == "" || this.state.pdfname == undefined) {
            alert("Pdf Name is required");
        } else if (this.state.pdflink == "" || this.state.pdflink == undefined) {
            alert("pdf link is required");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            name: this.state.pdfname,
            link: this.state.pdflink,
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

        let baseurl = BaseapiUrl + "/api/v1/web/pdf/";
        fetch(baseurl, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    if (result) {
                        debugger;
                        alert("Added successfully!");
                        this.setState({
                            pdfname: '',
                            pdflink: ''
                        });
                    }
                })
            .catch((e) => {
                console.warn(e);
                alert(e);
            });
    }

    render() {
        return (
            <div>
                <h1>Add Pdf</h1>
                <Link variant="primary" to="/pdf/pdf">View Pdf list</Link>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="pdfname">
                                <Form.Label>Pdf Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pdfname"
                                    value={this.state.pdfname}
                                    onChange={this.handleChange}
                                    placeholder="Pdf Name" />
                            </Form.Group>
                            <Form.Group controlId="pdflink">
                                <Form.Label>Pdf link</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pdflink"
                                    value={this.state.pdflink}
                                    onChange={this.handleChange}
                                    placeholder="Pdf link" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.addpdf()}>Add</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default Addpdf;