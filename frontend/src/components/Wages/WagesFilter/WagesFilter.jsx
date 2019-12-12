import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Input from '../../@common/Input';
import Select from '../../@common/Select';
import DatePicker from '../../@common/DatePicker';

import './wages-filter.css';

class WagesFilter extends Component {
    state = {
        PerformerId: '',
        UserId: '',
        startDate: null,
        endDate: null
    }

    componentDidMount() {
        const { performer: PerformerId } = queryString.parse(this.props.location.search);

        this.props.fetchUserList();

        if (PerformerId) {
            this.setState({PerformerId});
        } else {
            this.props.fetchWagesList();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            const { startDate, endDate } = this.state;

            const data = Object.assign({}, this.state);

            if (startDate) {
                data.startDate = startDate.format();
            }

            if (endDate) {
                data.endDate = endDate.format();
            }

            this.props.setWagesFilter(data);
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

    handleChangeDatePicker = ({ startDate, endDate }) => this.setState({ startDate, endDate });

    selectOptionUserList = () => {
        return this.props.userList
            .filter(({ interest }) => interest !== null)
            .map(({ id, firstName, lastName }) => {

                return {
                    label: `${lastName} ${firstName}`,
                    value: id
                };
            });
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
                <div>
                    <DatePicker
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={this.handleChangeDatePicker}
                    />
                </div>
                <div>
                    <Select
                        label="Исполнитель"
                        name="UserId"
                        value={this.state.UserId}
                        optionList={this.selectOptionUserList()}
                        handleChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(WagesFilter);
