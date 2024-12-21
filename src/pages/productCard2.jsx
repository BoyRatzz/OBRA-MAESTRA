export default function ProductCard2(props) {
  return (
    <main className="flex flex-col w-[625px] bg-green-900 text-white h-[800px]">
      <img src={props.image} alt="" />
      <div className="flex justify-center items-center flex-col pb-8 pt-2">
        <h1 className="text-3xl py-2 flex">{props.descHeading}</h1>
        <p className="text-lg py-5 flex w-[500px] font-light text-justify">
          {props.description}
        </p>
        <button className="border border-white px-2 py-1 rounded-2xl w-[100px]">
          Order now
        </button>
      </div>
    </main>
  );
}
