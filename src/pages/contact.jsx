import { useRef, useState } from "react";
import NavBar from "../nav-bar";
import Feedback from "./feedback";

export default function Contact() {
  const [feedback, setFeedback] = useState([
    {
      fullName: "Alej Pogi",
      company: "SLU",
      message: "ice cream good",
    },
    {
      fullName: "Jose Cutie",
      company: "USHS",
      message: "ice cream yummy",
    },
  ]);

  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    const newFeedBack = {
      fullName: nameRef.current.value,
      company: companyRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    if (
      nameRef.current.value === "" ||
      nameRef.current.value === null ||
      companyRef.current.value === "" ||
      companyRef.current.value === null ||
      emailRef.current.value === "" ||
      emailRef.current.value === null ||
      messageRef.current.value === "" ||
      messageRef.current.value === null
    ) {
      alert("Fill-up the form accordingly");
      return false;
    } else if (!emailRef.current.value.includes("@" && ".com")) {
      alert("Please put a proper email-address");
      return false;
    } else {
      alert("Form was submitted successfully");
    }

    setFeedback((prev) => {
      return [...prev, newFeedBack];
    });

    nameRef.current.value = "";
    companyRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    nameRef.current.focus();
  };

  return (
    <main className="flex flex-col bg-gradient-to-b from-green-200 to-green-500 items-center h-screen">
      <NavBar />
      <div className="flex flex-col max-w-[1280px] w-full">
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col drop-shadow-2xl gap-y-10">
            <div className="flex flex-col flex-1 p-5">
              <h1 className="text-5xl font-bold pb-5">Contact Us</h1>
              <p className="text-base font-sans pb-2 w-[400px]">
                Email, call, or complete the form to learn how we can be of
                service to you.
              </p>
              <p className="text-base font-sans pb-2">MrPogi@gmail.com</p>
              <p className="text-base font-sans pb-2">456-9999</p>
              <p className="text-base font-sans underline">Customer Support</p>
            </div>
            <div className="flex flex-1 gap-10 mx-auto text-justify border-t border-black">
              <div className="p-5 w-[250px]">
                <h1 className="font-semibold pb-1">Customer Support</h1>
                <p className="font-sans">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
              <div className="p-5 w-[250px]">
                <h1 className="font-semibold pb-1">Feedback and Suggestions</h1>
                <p className="font-sans">
                  We value your feedback and are continuously working to improve
                  Starbucks. Your input is crucial in shaping the future of our
                  company.
                </p>
              </div>
              <div className="p-5 w-[250px]">
                <h1 className="font-semibold pb-1">Media Inquiries</h1>
                <p className="font-sans">
                  For media-related questions or press inquiries, please contact
                  us at media@starbucks.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-2 drop-shadow-xl">
            <div className="flex flex-col h-[450px] w-[450px] rounded-2xl drop-shadow-lg bg-gradient-to-t from-green-200 to-green-500">
              <div className="flex p-5 pb-2 mx-auto gap-8">
                <input
                  id="inputName"
                  type="text"
                  placeholder="   Full Name"
                  className="rounded-full h-10 border-2 border-gray-200"
                  ref={nameRef}
                />
                <input
                  type="text"
                  placeholder="   Company/Institution"
                  className="rounded-full h-10 border-2 border-gray-200"
                  ref={companyRef}
                />
              </div>
              <div className="flex mx-auto w-full px-7">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-full h-10 w-full text-center border-2 border-gray-200"
                  ref={emailRef}
                />
              </div>
              <div className="items-center justify-center flex p-7 pt-2 pb-1 border-gray-200">
                <textarea
                  type="text"
                  placeholder="Leave your comment / suggestion here"
                  className="w-full h-[300px] rounded-2xl text-center border-2 border-gray-200"
                  ref={messageRef}
                />
              </div>
              <div className="w-full flex justify-end pr-7">
                <button
                  className="bg-white rounded-lg px-7 flex text-sm border-2 border-gray-200"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-t border-black translate-y-4 drop-shadow-2xl">
          <Feedback data={feedback} newFeed={setFeedback} />
        </div>
      </div>
    </main>
  );
}
