import React from "react";

const TableComponent = ({ columns = [], data = [] }) => {
  if (!Array.isArray(columns) || !Array.isArray(data)) {
    console.error("Invalid props: columns or data is not an array", { columns, data });
    return <p className="text-red-500 text-center">Error: Table data is not in the correct format</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.field] || "N/A"}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
