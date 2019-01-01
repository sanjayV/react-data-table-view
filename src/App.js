import './App.css'
import DataTable from "react-data-table-view";

import React, { Component } from 'react'

class App extends Component {
    state = {loading: false}
    /* <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">React</span></h2>
    </div> */
    render() {
        return <div className="App">
            <DataTable title="Test Data"></DataTable>
        </div>
    }
}

export default App
