import { Link } from "react-router-dom";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";
import TopElement from "./Components/TopElement";
import ContactForm from "../../Components/Contact";
import { useSelector } from "react-redux";

export default function Contact() {
  const contact = useSelector((state) => state.contact);
  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full md:w-10/12 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-8/12 bg-gray-1 ">
          <TopElement />
          <div className="text-center w-full">
            <h1 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8 mx-auto">
              Contact Us
            </h1>
            <div className="flex flex-col md:flex-row px-2 md:px-8">
              <div className="w-full md:w-6/12 text-left bg-white shadow-xl p-8 mx-3 text-gray-2">
                <a href={`tel:${contact.phoneNumber}`} class="px-2">
                  {/* <img src={phone_logo} alt="Phone Logo" /> */}
                  <p>{contact.phoneNumber}</p>
                </a>
                <a href={`mailto:${contact.email}`} class="px-2">
                  {/* <img src={phone_logo} alt="Phone Logo" /> */}
                  <p>{contact.email}</p>
                </a>
                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                <p>{contact.address}</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 bg-white">
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
