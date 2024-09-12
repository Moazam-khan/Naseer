import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  // Initialize the ref with the correct type
  const form = useRef<HTMLFormElement | null>(null);

  // Properly type the event parameter
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure form.current is not undefined before calling emailjs
    if (form.current) {
      emailjs
        .sendForm('service_qb3bctu', 'template_2kvjc56', form.current, 'cdXf5TuNm5uEQwTBZ')  // Public key as a string
        .then(
          () => {
            alert('Message sent successfully');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700 flex justify-center items-center">
      <div className="w-full max-w-[800px] flex flex-col ">
        <h2 className="text-3xl font-bold mb-8 text-center">CONTACT WITH US</h2>
        <div className="w-full h-auto bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-8 rounded-lg shadow-shadowOne">
          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-6">
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
                required
              ></textarea>
            </div>
            <div className="w-full">
              <button
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-white-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
