import React from "react";

const Registrations = ({ registrations }) => (
  <div>
    {registrations.map(registration => (
      <div>{registration.name}</div>
    ))}
    ;
  </div>
);

export default Registrations;
