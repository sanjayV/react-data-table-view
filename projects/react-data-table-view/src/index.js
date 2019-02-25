import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CONSTANTS } from './constant/index';
import './styles/table.css';

class TableWrapper extends Component {
    constructor(...props) {
        super(...props);
    }

    componentWillMount() {
        console.log('this.props.data',this.props.data)
        this.computeTable(this.props.data);
    }

    computeTable(data) {
        const settings = { header: [], rows: [] };
        if (this.props.showSerialNumber) {
            settings.header = settings.header.concat('#');
        }
        if (data && data.length > 0) {
            this.table = data.reduce((data, row) => {
                let keys = Object.keys(row);
                let plainRow = keys.map((key) => {
                    return row[key];
                });
                return {
                    header: keys,
                    rows: data.rows.concat([plainRow])
                };
            }, settings);
        } else {
            this.table = { header: [], rows: [] };
        }
    }

    renderHeader() {
        if (this.props.header && this.table && this.table.header) {
            return (
                <thead>
                    <tr>
                        {this.table.header.map((header, index) => {
                            if (this.props.customHeader &&
                                this.props.customHeader.hasOwnProperty(index)) {
                                header = this.props.customHeader[index];
                            }
                            return <th key={index}>{header}</th>;
                        })}
                    </tr>
                </thead>
            );
        }
        return null;
    }

    getRowProps(rowIndex, deleteCol = true) {
        const { customize } = this.props;
        if (customize && customize.hasOwnProperty(rowIndex)) {
            let rowProps = Object.assign({}, customize[rowIndex]);
            if (rowProps.hasOwnProperty('col') && deleteCol) {
                delete rowProps['col'];
            }
            return rowProps;
        }
        return {};
    }

    getColData(rowIndex) {
        const row = this.getRowProps(rowIndex, false);
        if (row && row.hasOwnProperty('col')) {
            return Object.assign({}, row['col']);
        }
        return {};
    }

    getColDataProps(rowIndex, colIndex) {
        const col = this.getColData(rowIndex);
        if (col && col.hasOwnProperty(colIndex)) {
            return Object.assign({}, col[colIndex]);
        }
        return {};
    }

    renderSerialNumberColoumn(index) {
        if (this.props.showSerialNumber) {
            return <td>{index + this.props.firstResultIndex}</td>;
        }
        return null;
    }

    renderBody(options) {
        console.log('this.table',this.table)
        if (this.table && this.table.rows && this.table.rows.length) {
            return (
                <tbody>
                    {this.table.rows.map((row, index) => {
                        let rowProps = this.getRowProps(index);
                        return (
                            <tr key={index} {...rowProps}>
                                {this.renderSerialNumberColoumn(index)}
                                {row.map((column, colIndex) => {
                                    let colProps = this.getColDataProps(index,
                                        colIndex);
                                    return (
                                        <td key={`[${index},${colIndex + 1}]`} {...colProps}>
                                            {column}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            );
        }
        return (
            <tbody>
                <tr>
                    <td className='no-data' colSpan={this.table.header.length}>
                        {options.noDataText}
                    </td>
                </tr>
            </tbody>
        );
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
                        {this.renderHeader()}
                        {this.renderBody(options)}
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
        hover: PropTypes.bool,
        noDataText: PropTypes.string
    }),
    customize: PropTypes.object,
    firstResultIndex: PropTypes.number,
    showSerialNumber: PropTypes.bool,
    header: PropTypes.bool
};

TableWrapper.defaultProps = {
    data: [],
    options: {
        title: CONSTANTS.DEFAULT_OPTIONS.title,
        theme: CONSTANTS.DEFAULT_OPTIONS.theme,
        strip: CONSTANTS.DEFAULT_OPTIONS.strip,
        hover: CONSTANTS.DEFAULT_OPTIONS.hover,
        noDataText: CONSTANTS.DEFAULT_OPTIONS.noDataText
    },
    customize: {},
    firstResultIndex: 1,
    showSerialNumber: false,
    header: true
};

export default TableWrapper;