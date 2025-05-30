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
        <div className="flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border p-5">
            <table className="w-full text-left table-auto min-w-max text-slate-800">
                <thead>
                <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                    <th className="p-4">
                        <p className="text-sm leading-none font-normal">
                            ID
                        </p>
                    </th>
                    <th className="p-4">
                        <p className="text-sm leading-none font-normal">
                            Title
                        </p>
                    </th>
                    <th className="p-4">
                        <p className="text-sm leading-none font-normal">
                            Description
                        </p>
                    </th>
                    <th className="p-4">
                        <p className="text-sm leading-none font-normal">
                            Action
                        </p>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="hover:bg-slate-50">
                    <td className="p-4">
                        <p className="text-sm font-bold">
                            0
                        </p>
                    </td>
                    <td className="p-4">
                        <p className="text-sm">
                            Test
                        </p>
                    </td>
                    <td className="p-4">
                        <p className="text-sm">
                            Test
                        </p>
                    </td>
                    <td className="p-4">
                        <p className="text-sm">
                            Details
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Listings;