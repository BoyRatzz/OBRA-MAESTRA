export default function ProductCard(props) {
  return (
    <section className="flex bg-green-400 w-[1280px] drop-shadow-lg">
      <div className="flex flex-1">
        <img src={props.image} alt="img" />
      </div>
      <div className="flex flex-1 flex-col p-5 justify-center items-center gap-3">
        <h1 className="text-3xl py-2 flex">{props.descHeading}</h1>
        <p className="text-lg py-5 flex w-[550px] font-light text-justify">{props.description}</p>
        <button className="border border-black px-2 py-1 rounded-2xl w-[100px]">
          Order now
        </button>
      </div>
    </section>
  );
}
