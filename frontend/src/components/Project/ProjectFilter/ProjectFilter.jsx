import React, { Component } from 'react';

import Select from '../../@common/Select';

import { projectStatusList } from '../../../config/data.json';

import './project-filter.css';

class ProjectFilter extends Component {
    state = {
        status: ''
    }

    componentDidMount() {
        this.setState({ ...this.props.projectFilter });
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
            <div className="project-filter">
                <div>
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

export default ProjectFilter;
