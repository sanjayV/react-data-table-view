import prop from 'prop-types';
import React, { Component } from 'react';
import './styles/table.css';

class TableWrapper extends Component {
    static propTypes = {
        title: prop.string,
    }
    static defaultProps = {
        title: 'Default title',
    }
    render() {
        return (
            <div className="basic">
                <div className="table-responsive">
                    <div className="table-title">{this.props.title}</div>
                    <table className="react-tables">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Test Header 1</th>
                                <th>Test Header 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Test Data Row 1 col 1</td>
                                <td>Test Data Row 1 col 2</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TableWrapper;