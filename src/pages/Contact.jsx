import { useState } from "react";
import { UserData } from "../data/UserData";

function Contact() {
  const { FooterLink } = UserData;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
    return (
    <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="pb-6 pt-12 text-center text-3xl tracking-wider text-gray-900 lg:text-5xl">
          Get In Touch
        </h2>
        <p className="font-poppins mx-auto px-2 pb-6 text-center text-sm tracking-wider text-gray-900 lg:w-[50%]">
          {UserData.contactText}
        </p>

        <button
          onClick={() => {
            window.open(FooterLink);
          }}
          className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:bg-opacity-40"
        >
          Connect by Whatsapp 🚀
        </button>
        <div className="flex flex-col items-center justify-center">
          <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} 
            className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:bg-opacity-40"
          />
          <input placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)}
            className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:bg-opacity-40"
          />
          <input placeholder="Your Name" value={message} onChange={e => setMessage(e.target.value)}
            className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:bg-opacity-40"
          />
          <button>Send Email!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
