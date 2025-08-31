import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="px-6 max-w-[1000px] mx-auto grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <div className="max-w-[600px] -skew-y-6 font-bold text-gray-300 mb-16 lg:mb-0 ">
        <div className="flex flex-row">
          <p className="mt-6 text-4xl">We can connect on</p>
          <a href="#" className="ml-4 text-7xl text-gray-300">
            <AiFillLinkedin />
          </a>
        </div>

        <p className="mt-8 text-4xl">
          or you can send me an email via this form!
        </p>
      </div>

      <form
        action="https://getform.io/f/bkkpnqwb"
        method="POST"
        className="max-w-6xl p-5 md:p-12"
        id="form"
      >
        <input
          type="text"
          id="name"
          placeholder="Your Name ..."
          name="name"
          className="placeholder:text-white mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email ..."
          name="email"
          className="placeholder:text-white mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="4"
          placeholder="Your Message ..."
          className="placeholder:text-white mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md text-gray-200 font-semibold text-xl
            bg-gradient-to-r from-[#a56cc1] via-[#7e4ca0] to-[#5a2e7e]
"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
