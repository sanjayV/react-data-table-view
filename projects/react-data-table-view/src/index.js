import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CONSTANTS } from './constant/index';
import './styles/table.css';

class TableWrapper extends Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        let theme = 'table';
        const userOptions = this.props.options || {};
        const options = { ...CONSTANTS.DEFAULT_OPTIONS, ...userOptions };
        if (options.theme
            && typeof (options.theme) === 'string'
            && CONSTANTS.SUPPORTED_THEME[options.theme.toLowerCase()]) {
            theme += `${' '}${CONSTANTS.SUPPORTED_THEME[options.theme.toLowerCase()]}`;
        }

        if (options.strip) {
            theme += `${' '}${'table-striped'}`
        }

        if (options.hover) {
            theme += `${' '}${'table-hover'}`
        }

        return (
            <div className={theme}>
                <div className="table-responsive">
                    <div className="table-title">{this.props.options.title}</div>
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
     * Table data
     */
    data: PropTypes.array.isRequired,
    /**
     * Table options
     */
    options: PropTypes.shape({
        title: PropTypes.string,
        theme: PropTypes.string, //basic
        strip: PropTypes.bool,
        hover: PropTypes.bool
    })
};

TableWrapper.defaultProps = {
    data: [],
    options: {
        title: '',
        theme: 'basic',
        strip: false,
        hover: false
    }
};

export default TableWrapper;