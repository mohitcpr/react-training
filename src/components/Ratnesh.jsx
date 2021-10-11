import React from "react";

const Ratnesh = (props) => {
  const { type, ph, value, onChange } = props;
  return (
    <div className="input-container">
      <input type={type} placeholder={ph} value={value} onChange={onChange} />
    </div>
  );
};
export default Ratnesh;
