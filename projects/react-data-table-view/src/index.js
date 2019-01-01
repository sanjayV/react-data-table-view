import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles/table.css';

class TableWrapper extends Component {
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
                                <th>Test Header 3</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Test Data Row 1 col 1</td>
                                <td>Test Data Row 1 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Test Data Row 2 col 1</td>
                                <td>Test Data Row 2 col 2</td>
                                <td>Test Data Row 3</td>
                                <td><button type="button">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TableWrapper.propTypes = {
    /**
     * Table heading
     */
    title: PropTypes.string,

    /**
     * Table theme
     */
    theme: PropTypes.string,

    /**
     * Adds borders on all sides of the table and cells.
     */
    bordered: PropTypes.bool,

    /**
     * Enable a hover state on table rows within a `<tbody>`.
     */
    hover: PropTypes.bool
};

TableWrapper.defaultProps = {
    title: 'Default title',
    theme: 'basic',
    bordered: false,
    hover: true
};

export default TableWrapper;