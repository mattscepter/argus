import React from "react";
import { useSelector } from "react-redux";

const CompanyContact = () => {
  const contact = useSelector((state) => state.contact);

  return (
    <div>
      <p href="tel:6472891070" className=" py-1">
        {/* <img src={phone_logo} alt="Phone Logo" /> */}
        <p>{contact?.phoneNumber}</p>
      </p>
      <p href="mailto:info@argussecurityservices.ca" className=" py-1">
        {/* <img src={phone_logo} alt="Phone Logo" /> */}
        <p>{contact?.email}</p>
      </p>
      {/* <img src={phone_logo} alt="Phone Logo" /> */}
      <p>{contact?.address}</p>
    </div>
  );
};

export default CompanyContact;
