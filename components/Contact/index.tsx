import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-secondary min-h-60 w-full px-5 py-10 border-t-4"
    >
      <div className="max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto">
        <h2 className="text-primary text-center text-xl font-bold uppercase mb-8 tracking-widest">
          CONTACT
        </h2>
        <div className="grid grid-cols-1 gap-4 text-primary">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
            className="w-full rounded overflow-hidden shadow-lg bg-white my-2 px-6 py-4 flex flex-col items-stretch"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="font-secondary">
              <label htmlFor="yourname" className="font-secondary">
                Name:
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="yourname"
                placeholder="Name..."
                required
                className="border-2 border-gray-200 rounded font-secondary p-2 w-full"
              />
            </p>
            <p>
              <label htmlFor="youremail" className="font-secondary">
                Email:
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id="youremail"
                placeholder="Email..."
                required
                className="border-2 border-gray-200 rounded font-secondary p-2 w-full"
              />
            </p>
            <p>
              <label htmlFor="yourmessage" className="font-secondary">
                Message:
              </label>{" "}
              <br />
              <textarea
                name="message"
                id="yourmessage"
                placeholder="Message..."
                required
                className="border-2 border-gray-200 rounded font-secondary p-2 w-full"
              ></textarea>
            </p>
            <p>
              <button
                type="submit"
                className="hover:text-black uppercase font-bold text-base tracking-wide hover:bg-white border-2 border-primary transition-all duration-200 ease-in hover:border-gray-200 bg-primary text-white rounded font-secondary p-2  w-full"
              >
                SEND
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
