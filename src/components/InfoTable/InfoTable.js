import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './InfoTable.css';

export default class InfoTable extends Component {

  render() {

    let rows = this.props.data.length > 0 ? this.props.data.map((data, key) =>
      <tr key={key} className={data.rowClass}>
        <th>
          {data.icon
            ?
              <div className="icon-holder"><FontAwesome name={data.icon} /></div>
            :
              null
          }
          <span>{data.label}</span>
        </th>
        <td>{data.value}</td>
      </tr>
    ) : undefined

    return(
      <div className={this.props.className ? "info-table " + this.props.className : "info-table"}>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
