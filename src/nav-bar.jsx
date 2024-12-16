import coffeelogo from "./assets/1.PNG";

export default function NavBar() {
  return (
    <section className="w-[1500px] mx-auto flex flex-row border border-b-black border-x-transparent border-t-transparent">
      <div className="flex flex-row text-xl w-screen gap-9 p-5 justify-center items-center">
        <div className="flex mr-auto">
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/starbucks-coffee-logo.png"
            alt="logo"
            className="w-[100px]"
          />
          <h1 className="py-5 font-extrabold text-2xl">STARBUCKS</h1>
        </div>
        <h1 className="text-lg font-medium font-sans">Home</h1>
        <h1 className="text-lg font-medium font-sans">Shop</h1>
        <h1 className="text-lg font-medium font-sans">Vendor</h1>
        <h1 className="text-lg font-medium font-sans">Pages</h1>
        <h1 className="text-lg font-medium font-sans">Blog</h1>
        <input
          type="search"
          placeholder="   Search..."
          className="rounded-full py-1 ml-auto"
        />
      </div>
    </section>
  );
}
