import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
        props.history.listen(location => {

            if (location.pathname.indexOf('user') !== -1) {
                this.setState({
                    active: true,
                })
            } else {
                this.setState({
                    active: false,
                })
            }
        })
    }
    render() {
        return (
            <nav className="navbar navbar-light fixed-top bg-primary flex-md-nowrap p-0 shadow" >
                <button disabled={!this.state.active} className="btn btn-secondary" onClick={() => { this.props.history.goBack(); }}><span>&#706;&#45;</span>Back</button>
            </nav>
        );
    }
}

export default withRouter(NavBar);