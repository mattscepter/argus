import React, { useEffect, useState } from "react";
import { getContact } from "../../helpers/contact";

const CompanyContact = ({ refresh = null }) => {
  const [contact, setContact] = useState({
    email: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    getContact().then((data) => {
      setContact({
        email: data?.email,
        phoneNumber: data?.phoneNumber,
        address: data?.address,
      });
    });
  }, [refresh]);

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
