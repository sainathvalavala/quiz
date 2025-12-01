import React from "react";

const ResultTable = () => {
  const data = [
    { id: 1, obtained: 18, total: 20, date: "2025-11-29", time: "10:30 AM" },
    { id: 2, obtained: 15, total: 20, date: "2025-11-29", time: "11:15 AM" },
    { id: 3, obtained: 20, total: 20, date: "2025-11-29", time: "12:00 PM" },
  ];

  return (
    <div className="p-4 w-full">
      {/* Responsive wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          
          {/* Table Head */}
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3 border text-left text-sm md:text-base">S.No</th>
              <th className="px-4 py-3 border text-left text-sm md:text-base">Marks Obtained</th>
              <th className="px-4 py-3 border text-left text-sm md:text-base">Total Marks</th>
              <th className="px-4 py-3 border text-left text-sm md:text-base">Date</th>
              <th className="px-4 py-3 border text-left text-sm md:text-base">Time</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm md:text-base">{index + 1}</td>
                <td className="px-4 py-2 border text-sm md:text-base">{row.obtained}</td>
                <td className="px-4 py-2 border text-sm md:text-base">{row.total}</td>
                <td className="px-4 py-2 border text-sm md:text-base">{row.date}</td>
                <td className="px-4 py-2 border text-sm md:text-base">{row.time}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ResultTable;
