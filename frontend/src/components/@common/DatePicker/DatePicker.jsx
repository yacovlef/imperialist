import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import './date-picker.css';

moment.locale('ru');

class DatePicker extends Component {
    state = {focusedInput: null}

    handleFocusChange = (focusedInput) => this.setState({ focusedInput })

    render() {
        const {
            startDate,
            endDate,
            onDatesChange
        } = this.props;

        return (
            <>
                <label htmlFor="">Дата</label><br/>
                <DateRangePicker
                    startDate={startDate}
                    startDateId="date_picker"
                    startDatePlaceholderText="От"
                    endDate={endDate}
                    endDateId="date_picker"
                    endDatePlaceholderText="До"
                    onDatesChange={onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.handleFocusChange}
                    isOutsideRange={() => false}
                />
            </>
        );
    }
}

export default DatePicker;
