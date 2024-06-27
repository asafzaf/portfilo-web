import { useState } from "react";
import { UserData } from "../data/UserData";
import { invokes } from "../data/Invokes";
import axios from 'axios';


function Contact() {
  const { FooterLink } = UserData;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.post(invokes.sendMail, {
        name: name,
        email: email,
        message: message,
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

    return (
      <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="pb-6 pt-12 text-center text-3xl tracking-wider text-gray-900 lg:text-5xl">
          Get In Touch
        </h2>
        <p className="font-poppins mx-auto px-2 pb-6 text-center text-sm tracking-wider text-gray-900 lg:w-[50%]">
          {UserData.contactText}
        </p>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-center p-4 border-2 border-transparent rounded-md w-[300px] lg:w-[400px]">
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[50px] w-full mb-2 border-2 border-black bg-transparent text-black placeholder-black hover:bg-gray-900 hover:bg-opacity-40"
            />
            <input
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] w-full mb-2 border-2 border-black bg-transparent text-black placeholder-black hover:bg-gray-900 hover:bg-opacity-40"
            />
            <input
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-[50px] w-full mb-2 border-2 border-black bg-transparent text-black placeholder-black hover:bg-gray-900 hover:bg-opacity-40"
            />
            <button
              onClick={handleClick}
              className="h-[50px] w-full mt-4 border-2 border-black bg-transparent text-black hover:bg-gray-900 hover:bg-opacity-40"
            >
              Send Email!
            </button>
          </div>
          <button
            onClick={() => {
              window.open(FooterLink);
            }}
            className="ml-4 h-[50px] w-[200px] border-2 border-black bg-transparent text-black hover:bg-gray-900 hover:bg-opacity-40"
          >
            Connect by Whatsapp 🚀
          </button>
        </div>
      </div>
    </div>  
  );
}

export default Contact;
