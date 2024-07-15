import {useRef} from "react";
import emailjs from '@emailjs/browser';
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";


const Contact = () => {
  
  const form = useRef();
  
  
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm('service_rlt5m88', 'template_waymxeb', form.current, {
        publicKey: 'bSWp2M94VlIOAzWyo',
      })
      .then(
        () => {
         alert ('Message send Sucessfully')
        
    
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
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
              <form  ref ={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
            
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-white-400 uppercase tracking-wide ">
                      Your name
                    </p>
                    <input  className= " bg-slate-950  border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                     
                     type="text" placeholder='Full Name' name='user_name'
                     required

                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className=" text-sm text-white-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input 
                          className=" bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="number" placeholder='Mobile Number' name='User_Number'
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-white-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                  className=" bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                  type="Email" placeholder='Email@gmail.com' name='user_email'
                  required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-white-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    className=" bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   type="text" placeholder='Subject' name='subject'
                   required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-white-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                  className="  bg-slate-950 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="message"
                  
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="w-full">
                  <button 
                   

                   
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-white-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Send Messagea 
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
