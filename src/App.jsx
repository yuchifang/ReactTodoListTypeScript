import React, { useState } from "react";
import DrinkCard from "./pages/DrinkCard";
import DrinkInputGroup from "./pages/DrinkInputGroup";
import "./styles.css";

/**
 * hint:
 * 更新狀態時記得使用 immutable 的方式
 * ex. setDrinks([...drinks, newDrink])
 */
// export interface DrinkArr {
//   id: string;
//   name: string;
//   option: string;
//   buyer: string;
// }

const App = () => {
  const drinks = [
    {
      name: "烏龍綠",
      options: "半糖去冰",
      buyer: "kk"
    },
    {
      name: "珍奶",
      options: "無糖少冰",
      buyer: "ken"
    }
  ];

  const drinkWithId = drinks.map((obj, index) => {
    obj["id"] = index + obj.buyer;
    return obj;
  });

  const [drinkArr, setDrinksArr] = useState(drinkWithId);

  const handleDelete = (id) => {
    setDrinksArr((prevState) => {
      const newState = prevState.filter((state) => state.id !== id);
      return newState;
    });
  };

  const handleCreate = async (drink) => {
    setDrinksArr((prevState) => [
      ...prevState,
      {
        id: prevState.length + drink.options,
        name: drink.name,
        options: drink.options,
        buyer: drink.buyer
      }
    ]);
  };
  return (
    <main className="py-5">
      <div className="container">
        <DrinkInputGroup onCreate={handleCreate} />
        {drinkArr.length === 0 && <h3>目前沒有訂購任何飲料</h3>}
        {drinkArr.length > 0 &&
          drinkArr.map((drink, index) => (
            <DrinkCard
              onDelete={handleDelete}
              onUpdate={setDrinksArr}
              id={drink.id}
              key={index + drink.buyer}
              buyer={drink.buyer}
              name={drink.name}
              options={drink.options}
            />
          ))}
      </div>
    </main>
  );
};

export default App;
