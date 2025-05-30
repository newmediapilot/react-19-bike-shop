import {NavLink} from 'react-router';

export type ListData = {
    id: number,
    title: string,
    description: string,
}[];

/**
 * List component which renders when listData is truthy
 * @param list
 * @constructor
 */
const Listings = function List({list = []}: { list: ListData }) {
    return (
        list.length && <div className="overflow-hidden flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border p-5">
            <table className="w-full text-left table-auto min-w-max text-slate-800">
                <thead>
                <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                    {Object.keys(list[0]).map((key, b) =>
                        <td key={b} className="p-4">
                            <p className="text-sm">{key.toUpperCase()}</p>
                        </td>
                    )}
                    <th className="p-4">
                        <p className="text-sm leading-none font-normal">
                            Action
                        </p>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, a) =>
                            <tr key={a} className="hover:bg-slate-50">
                                {Object.keys(item).map((key, b) =>
                                    <td key={b} className="p-4">
                                        <p className="text-sm">{item[key]}</p>
                                    </td>
                                )}
                                <td className="p-4">
                                    <p className="text-sm underline">
                                        <NavLink to={`./?v=${a}`}>View Detail</NavLink>
                                    </p>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Listings;