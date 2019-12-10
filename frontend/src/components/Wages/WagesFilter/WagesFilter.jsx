import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Input from '../../@common/Input';

import './wages-filter.css';

class WagesFilter extends Component {
    state = {
        PerformerId: ''
    }

    componentDidMount() {
        const { performer: PerformerId } = queryString.parse(this.props.location.search);

        if (PerformerId) {
            this.setState({PerformerId});
        } else {
            this.props.fetchWagesList();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.setWagesFilter(this.state);
        }
    }

    componentWillUnmount() {
        this.props.wagesListReset();
        this.props.wagesFilterReset();
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="wages-filter">
                <div>
                    <Input
                        label="# Исполнителя в изделии"
                        name="PerformerId"
                        type="text"
                        value={this.state.PerformerId}
                        handleChange={this.handleChange}
                    />
                </div>
            </div>
        );

    }
}

export default withRouter(WagesFilter);
