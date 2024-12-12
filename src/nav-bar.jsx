import coffeelogo from "./assets/1.PNG"

export default function NavBar() {
  return (
    <section className="w-[1500px] mx-auto bg-orange-200 flex flex-row border border-b-black">
      <div className="flex flex-row text-xl w-screen gap-9 p-5 justify-center items-center">
        <img
          src={coffeelogo}
          alt="logo"
          className="mr-auto"
        />
        <h1>Home</h1>
        <h1>Shop</h1>
        <h1>Vendor</h1>
        <h1>Pages</h1>
        <h1>Blog</h1>
        <input type="search" placeholder=" Search..." className="rounded-full py-1 ml-auto"/>
      </div>
    </section>
  );
}
