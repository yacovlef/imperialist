import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Select from '../../@common/Select';

import { projectStatusList } from '../../../config/data.json';

import './project-filter.css';

class ProjectFilter extends Component {
    state = {
        OrderId: null,
        status: ''
    }

    componentDidMount() {
        const { OrderId } = this.props.match.params

        if (OrderId) {
            this.setState({OrderId});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.setProjectFilter(this.state);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="project_filter control__column">
                <Select
                    label="Статус"
                    name="status"
                    value={this.state.status}
                    optionList={projectStatusList}
                    handleChange={this.handleChange}
                />
            </div>
        );

    }
}

export default withRouter(ProjectFilter);
