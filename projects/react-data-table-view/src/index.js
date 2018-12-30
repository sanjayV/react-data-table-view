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
        return <div>
            {this.props.title}
            <table className="react-tables">
                <thead>
                    <tr>
                        <td>
                            Test Header 1
                        </td>
                        <td>
                            Test Header 2
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Test Data Row 1 col 1
                        </td>
                        <td>
                            Test Data Row 1 col 2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Test Data Row 2 col 1
                        </td>
                        <td>
                            Test Data Row 2 col 2
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default TableWrapper;