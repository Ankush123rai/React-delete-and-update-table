import React from "react";

const SectionTwo = ({name,age,email,phone}) => {
  return (
    <div>
    <h5>Name:{name}</h5>
    <h5>Age:{age}</h5>
    <h5>Email:{email}</h5>
    <h5>Phone:{phone}</h5>
    </div>
  );
};
export default SectionTwo;
