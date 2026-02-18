import React from "react";
import Heading from "../Heading/heading.jsx";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import SeafoodCat from "../../assets/meat-and-seafood.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import Button from "../Button/Button.jsx";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      <div key={card.id} className="flex-1 basis-[300px] flex">
        <div className="flex flex-col w-full">
          <div className="w-full min-h-[30vh] relative -mb-15 flex items-end justify-center">
            <img src={card.image} alt={card.title} />
          </div>

          <div className="bg-zinc-100 pt-17 p-8 rounded-xl flex flex-col flex-1">
            <h3 className="text-zinc-900 text-3xl font-bold">{card.title}</h3>

            <p className="text-zinc-700 mt-3 min-h-[3em]">{card.description}</p>

            <div className="mt-auto">
              <Button content="See All" />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop " heading="by Category" />

        {/* Category cards */}
        <div className="flex flex-wrap gap-10 md:mt-15 mt-10">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    description: "Fresh and organic frutis and vegetables.",
    image: FruitsCat,
  },

  {
    id: 2,
    title: "Dairy & Eggs",
    description: " Wholesome dairy products and farm-fresh eggs.",
    image: DairyCat,
  },

  {
    id: 3,
    title: "Meat & Fishes",
    description: "Fresh meat and seafoods.",
    image: SeafoodCat,
  },
];
