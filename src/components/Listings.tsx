import {NavLink} from 'react-router';
import {memo} from 'react';

export type ListItem = {
    id: number,
    title: string,
    description: string,
}

export type ListData = ListItem[];

/**
 * List component which renders when listData is truthy
 * @param list
 * @constructor
 */
const Listings = memo(function List({list = []}: { list: ListData }) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    {Object.keys(list[0]).map((key, b) =>
                        <td key={b}>
                            <p>{key.toUpperCase()}</p>
                        </td>
                    )}
                    <th>
                        <p>
                            Action
                        </p>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, a) =>
                            <tr key={a}>
                                {Object.keys(item).map((key, b) =>
                                    <td key={b}>
                                        <p>{item[key]}</p>
                                    </td>
                                )}
                                <td>
                                    <NavLink to={`./?detail=${a}`}>
                                        <button>
                                            View Detail
                                        </button>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
});

export default Listings;