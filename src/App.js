import './App.css'
import DataTable from "react-data-table-view";
import React, { Component } from 'react';
import DataService from './services/index';
import { CONSTANTS } from './constants/index';

class App extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            data: [],
            error: ''
        };
    }

    componentWillMount() {
        DataService.getData((res) => {
            if (res && res.status && res.data) {
                if (res.status === CONSTANTS.STATUS.SUCCESS) {
                    this.setState({
                        data: res.data
                    });
                } else {
                    this.setState({
                        error: res.data
                    });
                }
            }
        });
    }

    render() {
        const options = {
                'title': 'My First Table',
                'theme': 'dark', //basic
                'strip': false,
                'hover': true
            };
        if (this.state.data.length) {
            return (
                <div className="App">
                    <DataTable data={this.state.data} options={options}></DataTable>
                </div>
            );
        } else if (this.state.error) {
            return (
                <div className="error">
                    {this.state.error}
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

export default App
