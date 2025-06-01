import {NavLink} from 'react-router';
// @ts-ignore
import {default as React, memo} from 'react';
// @ts-ignore
import {Table} from "@radix-ui/themes";

export type ListItem = {
    id: number,
    title: string,
    description: string,
}

export type ListData = Array<ListItem>;

/**
 * List component which renders when listData is truthy
 * @param list
 * @constructor
 */
const Listings = memo(function List({list = []}: { list:any [] }) {
    return (!list || !list.length) ?
        <p>No matches found</p> :
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {list.map((item, a) =>
                    <Table.Row key={a}>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.title}</Table.Cell>
                        <Table.Cell>{item.description}</Table.Cell>
                        <Table.Cell style={{verticalAlign: 'middle'}}>
                            <NavLink to={`./?detail=${a}`}>Open Detail</NavLink>
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table.Root>
});

export default Listings;