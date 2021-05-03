import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Editpdf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pdfname: '',
            pdflink: ''
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
        var Pdfid = this.props.match.params.id;
        this.GetEmployeeById(Pdfid);
    }
    GetEmployeeById(Pdfid) {
        const apiUrl = BaseapiUrl + "/api/v1/web/pdf/" + Pdfid;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    if (result) {
                        this.setState({
                            pdfname: result.data.name,
                            pdflink: result.data.link
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

    Updatepdf() {
        debugger;
        if (this.state.pdfname == "" || this.state.pdfname == undefined) {
            alert("PDF Name is required");
        } else if (this.state.pdflink == "" || this.state.pdflink == undefined) {
            alert("PDF link is required");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            Id: this.props.match.params.id,
            name: this.state.pdfname,
            link: this.state.pdflink
        };

        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = BaseapiUrl + "/api/v1/web/pdf/" + this.props.match.params.id;
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
        return (
            <div>
                <h1>Edit Pdf</h1>
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
                                <Button variant="success" onClick={() => this.Updatepdf()}>Update</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default Editpdf;