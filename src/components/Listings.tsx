import {NavLink} from 'react-router';
import {default as React, memo} from 'react';
import {Table} from "@radix-ui/themes";

export type ListItem = {
    id: number,
    title: string,
    description: string,
}
export type ListData = ListItem[];
export const ListDataKey = "id";
export const ListDataFields = ["title", "description"];

/**
 * List component which renders when listData is truthy
 * @param list
 * @constructor
 */
const Listings = memo(({list}: { list: Array<any> }) => {
    return (!list) ? <span>No results</span> :
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
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