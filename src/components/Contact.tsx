import { useRef } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully');
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <label className="text-sm text-white-400 uppercase tracking-wide" htmlFor="user_name">
                      Your name
                    </label>
                    <input
                      className="bg-slate-950 border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                      id="user_name"
                      name="user_name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <label className="text-sm text-white-400 uppercase tracking-wide" htmlFor="User_Number">
                      Phone Number
                    </label>
                    <input
                      className="bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="number"
                      id="User_Number"
                      name="User_Number"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm text-white-400 uppercase tracking-wide" htmlFor="user_email">
                    Email
                  </label>
                  <input
                    className="bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="Email@gmail.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm text-white-400 uppercase tracking-wide" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm text-white-400 uppercase tracking-wide" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="message"
                    name="message"
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-white-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
