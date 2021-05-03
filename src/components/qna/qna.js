import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

//Bootstrap and jQuery libraries
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min.js';

import $ from 'jquery';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Qna extends React.Component {
    constructor() {
        super();
        this.state = {
            qnas: [],
            datas: [],
            cols: []
        }
    }

    componentDidMount() {
        debugger;
        //init Datatable  
        setTimeout(() => {
            $('#tblqna').DataTable(
                {
                    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
                    "bDestroy": true
                }
            );
        }, 1000);

        fetch(BaseapiUrl + '/api/v1/web/qna?skip=0&limit=100&search=w&column=1&order=asc')
            .then((resp) => {
                resp.json()
                    .then((result) => {
                        console.warn(result.data.interest);
                        this.setState({
                            qnas: result.data.interest,
                            datas: result.data.rows,
                            cols: result.data.cols
                        });
                    })
            });
    }

    deleteqna(QnaId) {
        debugger;
        const { qnas } = this.state;
        const apiUrl = BaseapiUrl + "/api/v1/web/qna/" + QnaId;

        fetch(apiUrl, { method: 'DELETE' })
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({
                    qnas: qnas.filter(qna => qna._id !== QnaId)
                });
                alert('Delete successful');
            })
            .catch(error => {
                alert('There was an error!');
                console.error('There was an error!', error);
            });
    }

    render() {
        var qnalist = this.state.qnas;
        debugger;
        if (qnalist && qnalist.length > 0) {
            return (
                <div>
                    <div className="container-fluid">
                        <h2>Qna List</h2>
                        <Link variant="primary" to="/qna/addqna">Add Qna</Link>
                        {/* {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>} */}
                        <Table id="tblqna" className="table table-striped table-bordered dt-responsive nowrap" style={{width:"100%"}} >
                            <thead>
                                <tr>
                                    {/*<th>QnaID</th>*/}
                                    <th>Question</th>
                                    <th>Options</th>
                                    <th>Answer</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {qnalist.map(qna => (
                                    <tr key={qna._id}>
                                        <td>{qna.question}</td>
                                        <td>{qna.options}</td>
                                        <td>{qna.answer}</td>
                                        <td>
                                            <Link variant="success" to={"/qna/editqna/" + qna._id}><i className="fa fa-edit"></i></Link>
                                            <Button variant="danger" style={{ border: "none" }} onClick={() => this.deleteqna(qna._id)}><i className="fa fa-trash"></i></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div class="cardd">
                        <div class="card-body">
                            <div id="table" class="table-editable"></div>
                            <h2>No Record Found</h2>
                            <Link variant="primary" to="/qna/addqna">Add Qna</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Qna;