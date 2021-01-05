import React, { useState } from "react";
// import { drinkArr } from "./App";
import DrinkInput from "./DrinkInput";
const defaultDrink = {
  name: "",
  options: "",
  buyer: ""
};
const DrinkInputGroup = ({ onCreate }) => {
  const [drink, setDrink] = useState(defaultDrink);
  const handleCreate = (e) => {
    e.preventDefault();
    let alertArr = [];
    console.log("sss", e);
    if (!drink.name) {
      alertArr.push("請填寫飲品名稱");
    }

    if (!drink.options) {
      alertArr.push("請填寫糖度冰塊");
    }

    if (!drink.buyer) {
      alertArr.push("請填寫訂購人");
    }

    if (alertArr.length === 0 && !!onCreate) {
      onCreate(drink)
        .then(() => {
          setDrink(defaultDrink);
        })
        .catch(() => {
          alert("error");
        });
    } else {
      alert(alertArr);
    }
  };

  const handleBuyer = (e) => {
    setDrink({ ...drink, buyer: e.target.value });
  };

  const handleName = (e) => {
    setDrink({ ...drink, name: e.target.value });
  };

  const handleOption = (e) => {
    setDrink({ ...drink, options: e.target.value });
  };

  return (
    <div className="input-group mb-3">
      <DrinkInput
        placeholderText="飲品名稱"
        InputValue={drink.buyer}
        setValue={handleBuyer}
        setClassName="form-control"
      />
      <DrinkInput
        placeholderText="飲品名稱"
        InputValue={drink.name}
        setValue={handleName}
        setClassName="form-control"
      />
      <DrinkInput
        placeholderText="糖度冰塊"
        InputValue={drink.options}
        setValue={handleOption}
        setClassName="form-control mr-1"
      />
      <button
        onKeyPress={handleCreate}
        onClick={handleCreate}
        className="btn btn-primary"
      >
        新增
      </button>
    </div>
  );
};

export default DrinkInputGroup;
