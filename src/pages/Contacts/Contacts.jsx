import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import GoogleMap from "../../components/Contacts/GoogleMap/GoogleMap";

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Smart Gadget | Contacts</title>
      </Helmet>

      <div className="container mx-auto mt-14">
        <GoogleMap />
      </div>

      <div className="container mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="space-y-6 p-5 lg:p-10 bg-blue-50">
          <div className="flex items-center gap-4">
            <span className="border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <div>
              <p>+012 345 678 102</p>
              <p>+012 345 678 102</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </span>
            <div>
              <p>smartgadget@gmail.com</p>
              <p>+www.smartgadget.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <div>
              <p>Banglabazar, Daulatkhan Road, Bhola</p>
              <p>street, Crossroad 452.</p>
            </div>
          </div>

          <div>
            <h2>Follow Us</h2>
            <div>
              <Link></Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 p-5 lg:p-14 bg-blue-50">
          <form className="space-y-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name*"
                className="p-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-3 border rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="p-3 border w-full rounded-md"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              className="p-3 border w-full rounded-md"
              placeholder="Your Message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-blue-900 w-full text-center py-2 rounded-md text-white hover:bg-blue-950"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
