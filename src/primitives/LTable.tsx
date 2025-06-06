import { NavLink } from 'react-router';
// @ts-ignore
import { default as React, memo } from 'react';
// @ts-ignore
import { Table } from '@radix-ui/themes';
import { pf } from '@local/loaders/core/pf';

/**
 * List component which renders when listData is truthy
 * @param list
 * @constructor
 */
const LTable = memo(({ list, fields = [] }: { list: Array<any>; fields: Array<string> }) => {
  return (
    list && (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {fields.map((field, key) => (
              <Table.ColumnHeaderCell key={key}>{field}</Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {list.map((item, index) => (
            <Table.Row {...pf.events(`@list/${item.id}`)} key={index}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>
                <NavLink to={`./?detail=${item.id}`}>Open Detail</NavLink>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  );
});

export default LTable;
