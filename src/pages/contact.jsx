import NavBar from "../nav-bar";

export default function () {
  return (
    <main className="flex flex-col h-screen w-screen bg-slate-200 items-center">
      <NavBar />
      <div className="flex flex-col max-w-[1280px] w-full h-[720px]">
        <div className="flex flex-1 bg-indigo-300">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-col bg-blue-800 flex-1">
              <h1>Contact Us</h1>
              <p>
                Email, call, or complete the form to learn how we can be of
                service to you.
              </p>
              <p>MrPogi@gmail.com</p>
              <p>456-9999</p>
              <p>Customer Support</p>
            </div>
            <div className="bg-blue-300 flex flex-1 gap-20">
              <div>
                <h1>Customer Support</h1>
                <p>asdasdasdasdas</p>
              </div>
              <div>
                <h1>Feedback and Suggestions</h1>
                <p>asdasdasdasda</p>
              </div>
              <div>
                <h1>Media Inquiries</h1>
                <p>asdasdasda</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 bg-purple-500 justify-center items-center">
            <div className="flex flex-col border border-black h-[450px] w-[450px] rounded-2xl ">
              <div className="flex p-5 pb-2 mx-auto gap-8">
                <input
                  type="text"
                  placeholder="   Full Name"
                  className="rounded-full h-10"
                />
                <input
                  type="text"
                  placeholder="   Company/Institution"
                  className="rounded-full h-10"
                />
              </div>
              <div className="flex mx-auto w-full px-7">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-full h-10 w-full text-center"
                />
              </div>
              <div className="items-center justify-center flex p-7 pt-2 pb-1">
                <textarea
                  type="text"
                  placeholder="Leave your comment / suggestion here"
                  className="w-full h-[300px] rounded-2xl text-center"
                />
              </div>
              <div className="w-full flex justify-end pr-7">
                <button className="bg-white rounded-lg px-7 flex">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[200px] bg-yellow-300"></div>
      </div>
    </main>
  );
}
