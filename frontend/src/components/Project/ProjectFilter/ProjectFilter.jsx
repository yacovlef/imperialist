import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Input from '../../@common/Input';
import Select from '../../@common/Select';

import { projectStatusList } from '../../../config/data.json';

import './project-filter.css';

class ProjectFilter extends Component {
    state = {
        OrderId: '',
        status: ''
    }

    componentDidMount() {
        const { OrderId } = this.props.match.params

        if (OrderId) {
            this.setState({OrderId});
        } else {
            this.props.fetchProjectList();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.setProjectFilter(this.state);
        }
    }

    componentWillUnmount() {
        this.props.projectListReset();
        this.props.projectFilterReset();
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="project_filter">
                <div className="control__column">
                    <Input
                        label="# Заказа"
                        name="OrderId"
                        type="text"
                        value={this.state.OrderId}
                        handleChange={this.handleChange}
                    />
                </div>

                <div className="control__column">
                    <Select
                        label="Статус"
                        name="status"
                        value={this.state.status}
                        optionList={projectStatusList}
                        handleChange={this.handleChange}
                    />
                </div>
            </div>
        );

    }
}

export default withRouter(ProjectFilter);
