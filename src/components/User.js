import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import apiPath from '../services/apiPath';

import './user.css';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        axios.get(apiPath).then(resp => {
            let user = resp.data.find(user => {
                return user.id == this.props.match.params.id
            });
            this.setState({ user: user });
        });

    }

    render() {
        const { user } = this.state;
        return (
            <div>
                <div className='text-left px-5'>
                    <h2>{`${user.first_name} ${user.last_name}`}</h2>
                </div>
                <div className="table-container table-sm table-responsive-xl px-5">
                    <table className="table table-hover table-striped">
                        <tbody>
                            <tr><th>Company</th><td>{user.company_name}</td></tr>
                            <tr><th>City</th><td>{user.city}</td></tr>
                            <tr><th>State</th><td>{user.state}</td></tr>
                            <tr><th>Zip</th><td>{user.zip}</td></tr>
                            <tr><th>Email</th><td>{user.email}</td></tr>
                            <tr><th>Web</th><td>{user.web}</td></tr>
                            <tr><th>Age</th><td>{user.age}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(User);