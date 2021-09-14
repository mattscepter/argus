import React, { useEffect, useState } from "react";
import { getContact } from "../../helpers/contact";
import phone_logo from "./../../argus website/SVG/3. Contact icon phone.svg"
import email_logo from "./../../argus website/SVG/1. Contact icon email.svg"
import location_logo from "./../../argus website/SVG/2. Contact icon location.svg"

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
    <div className="text-sm">
      <a href="tel:6472891070" className="flex flex-row items-center py-2">
         <img src={phone_logo} alt="Phone Logo" className="w-5"/>
          <p className="pl-5">{contact?.phoneNumber}</p>
      </a>
      <a href="mailto:info@argussecurityservices.ca" className="flex flex-row items-center py-2">
        <img src={email_logo} alt="Phone Logo" className="w-5"/>
        <p className="pl-5">{contact?.email}</p>
      </a>
      <div className="flex flex-row items-start py-2">
        <img src={location_logo} alt="Phone Logo" className="w-5"/>
        <p className="pl-5 md:pr-2 lg:pr-4 xl:pr-8 2xl:pr-24">{contact?.address}</p>
      </div>
    </div>
  );
};

export default CompanyContact;
