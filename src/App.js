import './App.css'
import DataTable from "react-data-table-view";

import React, { Component } from 'react'

class App extends Component {
    state = { loading: false }
    render() {
        const data = [],
            options = {
                'title': 'My First Table',
                'theme': 'dark', //basic
                'strip': false,
                'hover': true
            };
        return <div className="App">
            <DataTable data={data} options={options}></DataTable>
        </div>
    }
}

export default App
