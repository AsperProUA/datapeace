import React, { Component } from 'react';
import axios from 'axios';

import Table from './Table';
import Pagination from './Pagination';
import apiPath from '../../services/apiPath';

const fields = ['first_name', 'last_name', 'company_name', 'city', 'state', 'zip', 'email', 'web', 'age'];
const pageLimit = 5;

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: [],
            sort: 0,
            sortOrder: true,
            page: 1,
            currentUsers: [],
            pagesQuantity: 0,
            sample: '',
        }
    }

    componentDidMount() {
        axios.get(apiPath).then((resp) => {
            this.setState({ usersData: resp.data, pagesQuantity: Math.ceil(resp.data.length / pageLimit) });
            this.createCurrentUsersArr();
        });
    }

    createCurrentUsersArr = () => {
        const { usersData } = this.state;

        this.setState(currentState => {
            let allUsers = usersData.slice(0);

            if(currentState.sample.length > 0){
                allUsers = allUsers.filter(user => {
                    if(user.first_name.toUpperCase().indexOf(currentState.sample.toUpperCase()) != -1){
                        return user;
                    }
                });
            }

            allUsers.sort((a, b) => {
                if (currentState.sortOrder) {
                    if (String(a[fields[currentState.sort]]).toUpperCase() > String(b[fields[currentState.sort]]).toUpperCase())
                        return 1;
                    else return -1;
                } else {
                    if (String(a[fields[currentState.sort]]).toUpperCase() < String(b[fields[currentState.sort]]).toUpperCase())
                        return 1;
                    else return -1;
                }
            });


            return currentState.currentUsers = allUsers.slice(currentState.page * pageLimit - pageLimit, currentState.page * pageLimit)
        });
    }

    handleSort = (sort) => {
        this.setState((state) => {
            if (state.sort === sort) {
                state.sortOrder = !state.sortOrder;
            } else {
                state.sort = sort;
                state.sortOrder = true;
            }
            return state;
        });
        this.createCurrentUsersArr();
    }

    paginate = (page) => {
        this.setState({ page: page });
        this.createCurrentUsersArr();
    }

    findName = (sample) => {
        this.setState({sample: sample});
        this.createCurrentUsersArr();
    }

    render() {
        const { currentUsers, sort, sortOrder, page, pagesQuantity } = this.state;
        return (
            <div>
                <input onInput={(e)=>{this.findName(e.target.value)}} className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
                <div className="table-responsive">
                    <Table
                        head={fields}
                        users={currentUsers}
                        sort={sort}
                        sortOrder={sortOrder}
                        handleSort={this.handleSort}
                    />
                    <Pagination
                        page={page}
                        pagesQuantity={pagesQuantity}
                        createPaginationPage={this.paginate}
                    />
                </div>
            </div>
        );
    }
}

export default Users;