import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

//Bootstrap and jQuery libraries
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/jquery/dist/jquery.min.js';

import $ from 'jquery';

//const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
const BaseapiUrl = 'http://localhost:5000';

class Mcq extends React.Component {
    constructor() {
        super();
        this.state = {
            mcqs: [],
            datas: [],
            cols: []
        }
    }

    componentDidMount() {
        debugger;
        //init Datatable
        setTimeout(() => {
            $('#tblmcq').DataTable(
                {
                    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
                    "bDestroy": true
                }
            );
        }, 1000);

        fetch(BaseapiUrl + '/api/v1/web/mcq?skip=0&limit=100&search=&column=1&order=asc')
            .then((resp) => {
                resp.json()
                    .then((result) => {
                        console.warn(result.data.mcq);
                        this.setState({
                            mcqs: result.data.mcq,
                            datas: result.data.rows,
                            cols: result.data.cols
                        });
                    })
            });
    }

    deletemcq(McqId) {
        debugger;
        const { mcqs } = this.state;
        const apiUrl = BaseapiUrl + "/api/v1/web/mcq/" + McqId;

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
                    mcqs: mcqs.filter(mcq => mcq._id !== McqId)
                });
                alert('Delete successful');
            })
            .catch(error => {
                alert('There was an error!');
                console.error('There was an error!', error);
            });
    }

    render() {
        var mcqslist = this.state.mcqs;
        debugger;
        if (mcqslist && mcqslist.length > 0) {
            return (
                <div>
                    <div className="container-fluid">
                        <h2>Mcq List</h2>
                        <Link variant="primary" to="/mcqs/addmcq">Add Mcq</Link>
                        {/* {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>} */}
                        <Table id="tblmcq" className="table table-striped table-bordered dt-responsive nowrap" style={{ width: "100%" }} >
                            <thead>
                                <tr>
                                    <th>Mcqid</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mcqslist.map(mcq => (
                                    <tr key={mcq._id}>
                                        <td>{mcq._id}</td>
                                        <td>{mcq.name}</td>
                                        <td>
                                            <Link variant="info" to={"/mcqs/editmcq/" + mcq._id}><i className="fa fa-edit"></i></Link>
                                            <Button variant="danger" style={{ border: "none" }} onClick={() => this.deletemcq(mcq._id)}><i className="fa fa-trash"></i></Button>
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
                            <Link variant="primary" to="/mcqs/addmcq">Add Mcq</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Mcq;