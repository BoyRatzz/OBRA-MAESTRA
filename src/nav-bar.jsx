import { Link } from "react-router-dom";
import coffeelogo from "./assets/1.PNG";

export default function NavBar() {
  return (
    <section className="w-[1280px] flex flex-row border border-b-black border-x-transparent border-t-transparent mx-auto">
      <div className="flex flex-row text-xl gap-9 p-5 justify-center items-center w-[1280px]">
        <div className="flex flex-1">
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/starbucks-coffee-logo.png"
            alt="logo"
            className="w-[100px]"
          />
          <h1 className="py-5 font-extrabold text-2xl">STARBUCKS</h1>
        </div>
        <div className="flex flex-1 gap-7">
          <h1 className="text-lg font-medium font-sans">
            <Link to={"/"}>Home</Link>
          </h1>
          <h1 className="text-lg font-medium font-sans">
            <Link to={"/Shop"}>Shop</Link>
          </h1>
          <h1 className="text-lg font-medium font-sans">Vendor</h1>
          <h1 className="text-lg font-medium font-sans">Pages</h1>
          <h1 className="text-lg font-medium font-sans">
            <Link to={"/Contact"}>Contact</Link>
          </h1>
        </div>
        <div className="flex flex-1">
          <input
            type="search"
            placeholder="   Search..."
            className="rounded-full py-1 mx-auto border border-gray-300 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
