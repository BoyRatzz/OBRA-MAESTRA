export default function HeroSection() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex h-[400px]">
        <div className="flex-1 flex-col flex">
          <div className="pt-[50px] pl-[20px]">
            <h1 className="text-6xl font-bold">
              Midnight <br /> Frappuccino
            </h1>
            <p className="mt-8 w-[300px]">
              The Midnight Mint Mocha Frappuccino features extra dark cocoa
              blended with Frapuccino Roast Coffee
            </p>
            <h2 className="text-3xl font-bold mt-8">$ 8.60</h2>
            <button className="w-[100px] mt-8 border border-black rounded-2xl px-2 py-1 hover: to-black">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-start">
          <div className="bg-amber-600 rounded-full aspect-square flex" style={{backgroundImage: `url("")`}}>
            <img
              src="https://static.tiktokemoji.com/202409/12/h0Da5zcv.webp"
              alt="coffee logo"
              className="h-[350px] mt-8 translate-x-6 drop-shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1 flex-col flex">
          <div className="pt-[75px] pl-[100px]">
            <div className="flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7015/7015957.png"
                alt="logo"
                className="h-[50px] flex mt-4 bg-white rounded-full"
              ></img>
              <div className="flex flex-col ml-5">
                <h2 className="text-lg font-semibold mb-1">Sippy Cups</h2>
                <p className="w-[150px]">Are the New Norm for Iced Coffee</p>
              </div>
            </div>
            <div className="flex mt-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6953/6953926.png"
                alt="logo"
                className="h-[50px] flex mt-4 bg-white rounded-full"
              ></img>
              <div className="flex flex-col ml-5">
                <h2 className="text-lg font-semibold mb-1">Donut</h2>
                <p className="w-[150px]">Pair the frappuccino with a donut</p>
              </div>
            </div>
            <div className="flex mt-8">
              <img
                src="https://clipart-library.com/2023/cookie-png-transparent-images-png-only-39.png"
                alt="logo"
                className="h-[50px] flex mt-4 bg-white rounded-full"
              ></img>
              <div className="flex flex-col ml-5">
                <h2 className="text-lg font-semibold mb-1">Sippy Cups</h2>
                <p className="w-[150px]">Are the New Norm for Iced Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
