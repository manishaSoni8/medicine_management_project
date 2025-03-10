import React from "react";

const Filter = ({ searchTerm, onSearch, placeholder}) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder={placeholder}
      value={searchTerm}
      onChange={onSearch}
     
    />
  );
};

export default Filter;
