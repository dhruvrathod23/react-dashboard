import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Addqna extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            optionone: '',
            optiontwo: '',
            optionthree: '',
            optionfour: '',
            options: [],
            answer: '',
            status: '',
            isDeleted: ''
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

    addqna() {
        debugger;
        if (this.state.question == "" || this.state.question == undefined) {
            alert("question is required");
        } else if (this.state.optionone == "" || this.state.optionone == undefined) {
            alert("first option is required");
        } else if (this.state.optiontwo == "" || this.state.optiontwo == undefined) {
            alert("second option is required");
        } else if (this.state.optionthree == "" || this.state.optionthree == undefined) {
            alert("third option is required");
        } else if (this.state.optionfour == "" || this.state.optionfour == undefined) {
            alert("fourth option is required");
        } else if (this.state.answer == "" || this.state.answer == undefined) {
            alert("answer is required");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            question: this.state.question,
            options: [this.state.optionone, this.state.optiontwo, this.state.optionthree, this.state.optionfour],
            answer: this.state.answer,
            status: true,
            isDeleted: false
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body)
        };

        let baseurl = BaseapiUrl + "/api/v1/web/qna";
        fetch(baseurl, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    if (result) {
                        debugger;
                        alert("Added successfully!");
                        this.setState({
                            question: '',
                            optionone: '',
                            optiontwo: '',
                            optionthree: '',
                            optionfour: '',
                            answer: ''
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
                <div class="container-fluid">
                    <h1>Add QNA</h1>
                    <Link variant="primary" to="/qna/qna">View Qna list</Link>
                </div>

                <div className="container-fluid">
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Label>Question</Form.Label>
                                <Form.Row controlId="question">
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            name="question"
                                            value={this.state.question}
                                            onChange={this.handleChange}
                                            placeholder="Enter Your Question" />
                                    </Col>
                                </Form.Row>

                                <Form.Label>Options</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name="optionone"
                                            value={this.state.optionone}
                                            onChange={this.handleChange}
                                            placeholder="Enter first option" />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name="optiontwo"
                                            value={this.state.optiontwo}
                                            onChange={this.handleChange}
                                            placeholder="Enter second option" />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name="optionthree"
                                            value={this.state.optionthree}
                                            onChange={this.handleChange}
                                            placeholder="Enter third option" />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name="optionfour"
                                            value={this.state.optionfour}
                                            onChange={this.handleChange}
                                            placeholder="Enter fourth option" />
                                    </Col>
                                </Form.Row>

                                <Form.Label>Answer</Form.Label>
                                <Form.Row controlId="answer">
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            name="answer"
                                            value={this.state.answer}
                                            onChange={this.handleChange}
                                            placeholder="Enter Correct Answer" />
                                    </Col>
                                </Form.Row>
                                <br />
                                <Form.Row controlId="btnsubmit">
                                    <Col>
                                        <Form.Group>
                                            <Button variant="success" onClick={() => this.addqna()}>Add</Button>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </div>

            </div >
        )
    }
}
export default Addqna;