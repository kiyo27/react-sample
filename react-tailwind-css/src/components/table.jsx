
function Table() {
    const items = [
        {
            song: "The Sliding Mr. Bones (Next Stop, Pottersville)",
            artist: "Malcolm Lockyer",
            year: "1961"
        },
        {

            song: "itchy Woman",
            artist: "The Eagles",
            year: "1972"
        },
        {
            song: "Shining Star",
            artist: "Earth, Wind, and Fire",
            year: "1976"
        }
    ];

    const listItems = items.map((item, index) =>
        <tr key={index}>
            <td className="border border-slate-700">{item.song}</td>
            <td className="border border-slate-700">{item.artist}</td>
            <td className="border border-slate-700">{item.year}</td>
        </tr>
    )

    return (
        <table className="border-collapse border border-slate-500">
            <thead>
                <tr>
                <th className="border border-slate-600 bg-sky-600">Song</th>
                <th className="border border-slate-600 bg-sky-600">Artist</th>
                <th className="border border-slate-600 bg-sky-600">Year</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    )
}

export default Table;