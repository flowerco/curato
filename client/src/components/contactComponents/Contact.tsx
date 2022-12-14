import { ReactElement } from "react";
import { UserType } from '../../customTypes';

function Contact({ contact, text, callback}: { contact: UserType, text: string, callback: () => void }): ReactElement {

  return (
    <div 
      className={`bg-white h-20 ${text==='Follow' ? 'w-full' : 'w-10/12'} py-2 px-2 rounded-md flex items-center justify-between z-0 first:mt-0 mt-4`}
    >
      <div className="h-full flex justify-start items-center">
        <img className="rounded-full h-full aspect-square object-cover" src={contact.userImg} alt="User profile pic" />
        <h3 className="font-semibold text-2xl pl-4">{contact.userName}</h3>
      </div>
      <div className="w-1/4 mr-2 flex justify-end items-center">
          <button onClick={callback} className="rounded-md bg-blue-600 text-white px-4 py-2 font-semibold">
            {text}
          </button>
      </div>
    </div>
  );
}

export default Contact;