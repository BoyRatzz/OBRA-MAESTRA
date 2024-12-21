import NavBar from "../nav-bar";
import ProductCard from "./productCard";
import ProductCard2 from "./productCard2";

export default function Shop() {
  return (
    <section className="flex bg-gradient-to-b from-green-200 to-green-500 pb-8">
      <div className="flex w-full max-w-[1280px] flex-col mx-auto">
        <div className="flex">
          <NavBar />
        </div>
        <div className="flex mx-auto text-4xl font-semibold py-4 pb-8">
          <h1>The Cheer is here</h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <ProductCard
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95588.jpg"
            descHeading="Let’s celebrate the season, together."
            description="Your festive faves, like the Peppermint Mocha, are back. Perfect for a little holiday magic that’s delicious hot, iced or blended."
          />
          <ProductCard
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95400.jpg"
            descHeading="New Cran-Merry Orange Refreshers"
            description="Festive flavors of sweet orange, tart cranberry and warm spice are shaken with real pieces of cranberry—enjoyed alone or with lemonade or coconutmilk."
          />
          <div className="flex gap-x-5 flex-wrap gap-y-5 justify-center items-center">
            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95980.jpg"
              descHeading="Elphaba’s Cold Brew"
              description="A thrillifying creation inspired by the film WICKED. Starbucks® signature Cold Brew sweetened with peppermint-flavored syrup, topped with nondairy matcha cold foam and a dusting of magical candy sprinkles."
            />
            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95981.jpg"
              descHeading="Glinda’s Pink Potion"
              description="A fantabulous Starbucks Refreshers® Beverage inspired by the film WICKED. Crafted with sweet mango and dragonfruit flavors, creamy coconutmilk and real dragonfruit. Topped with nondairy strawberry cold foam and sprinkles."
            />

            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95405.jpg"
              descHeading="Iced Sugar Cookie Almondmilk Latte"
              description="Starbucks® Blonde Espresso is combined with sugar cookie flavors and almondmilk on ice. Red and green sprinkles are added for a finishing touch."
            />
            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95406.jpg"
              descHeading="Chestnut Praline Latte"
              description="Espresso and steamed milk join caramelized chestnut flavors with a topping of whipped cream and spiced praline crumbs."
            />
            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95405.jpg"
              descHeading="Iced Sugar Cookie Almondmilk Latte"
              description="Starbucks® Blonde Espresso is combined with sugar cookie flavors and almondmilk on ice. Red and green sprinkles are added for a finishing touch."
            />
            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95406.jpg"
              descHeading="Chestnut Praline Latte"
              description="Espresso and steamed milk join caramelized chestnut flavors with a topping of whipped cream and spiced praline crumbs."
            />
            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95389.jpg"
              descHeading="New Turkey Sage Danish"
              description="A crisp and flaky pastry with turkey and stuffing spices, enrobed in a creamy béchamel sauce."
            />
            <ProductCard2
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-95390.jpg"
              descHeading="New Snowman Cake Pop"
              description="Vanilla cake mixed with buttercream, dipped in white-chocolaty icing with a snowman face and earmuffs."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
