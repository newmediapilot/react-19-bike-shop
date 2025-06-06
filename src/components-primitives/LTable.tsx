import { pf } from '@local/loaders/core/pf';
import { default as React } from 'react';
import { NavLink } from 'react-router';

/**
 * List component which renders when listData is truthy
 * @param list
 * @param fields
 * @constructor
 */
const LTable = function ({ list, fields = [] }: { list: Array<any>; fields: Array<string> }) {
  return (
    list && (
      <table className="table">
        <thead>
          <tr>
            {fields.map((field, key) => (
              <th key={key}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} {...pf.events(`@list/${item.id}`)}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <NavLink className="btn btn-sm preset-filled" to={`./?detail=${item.id}`}>
                  Open Detail
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default LTable;
