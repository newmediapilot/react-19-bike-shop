import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { NavLink } from 'react-router';

/**
 * List component which renders when listData is truthy
 * @param list
 * @param fields
 * @param classItems
 * @constructor
 */
const CTable = function ({
  list,
  fields = [],
  classItems = [],
}: {
  list: Array<any>;
  fields: Array<string>;
  classItems: Array<string>;
}) {
  return (
    list && (
      <div className="h-[85vh] overflow-y-scroll relative">
        <table className="table min-w-[320px]">
          <thead className="sticky top-0 z-10 bg-gray-600">
            <tr>
              {fields.map((field, key) => (
                <th className={classItems[key]} key={key}>
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index} {...pf.events(`@list/${item.id}`)}>
                <td></td>
                <td>
                  <span key={index} className="table-w">
                    {item.title}
                  </span>
                </td>
                <td>
                  <span key={index} className="table-w">
                    {item.description}
                  </span>
                </td>
                <td>
                  <NavLink
                    className="btn btn-sm bg-none text-white border border-gray-600"
                    to={`./?detail=${item.id}`}
                  >
                    Open Detail
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default CTable;
