import React from 'react';
import {Link} from 'react-router-dom';

import './Table.css';

function Table(props) {
    const { users, sort, sortOrder, head, handleSort } = props;
    return (
        <div className="px-5">
            <table className="table-container table table-xl table-bordered">
                <thead>
                    <tr>
                        {head.map((field, i) => {
                            return <th key={i} onClick={() => { handleSort(i) }}>
                                <div>
                                    {(i === sort) ? (sortOrder ? <span>˄</span> : <span>&#709;</span>) : <span>˄<br />&#709;</span>}
                                    {field}
                                </div>
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td><Link to={`user/${user.id}`}>{user.first_name}</Link></td>
                                <td>{user.last_name}</td>
                                <td>{user.company_name}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.zip}</td>
                                <td>{user.email}</td>
                                <td><a href={user.web}>{user.web}</a></td>
                                <td>{user.age}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;