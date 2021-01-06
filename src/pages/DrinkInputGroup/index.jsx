import React, { useRef } from "react";
import DrinkInput from "./DrinkInput";


const DrinkInputGroup = ({ onCreate }) => {

  const nameRef = useRef(null);
  const optionsRef = useRef(null);
  const buyerRef = useRef(null);

  const handleCreate = () => {
    let alertArr = [];

    let nameValue = nameRef?.current?.value;
    let optionsValue = optionsRef?.current?.value;
    let buyerValue = buyerRef?.current?.value;

    if (alertArr.length === 0 && !!onCreate) {
      onCreate({ name: nameValue, options: optionsValue, buyer: buyerValue })
        .then(() => {
          nameRef.current.value = "";
          optionsRef.current.value = "";
          buyerRef.current.value = "";
        })
        .catch(() => {
          alert("error");
        });
    } else {
      alert(alertArr);
    }
  };

  return (
    <div className="input-group mb-3">
      <DrinkInput
        ref={buyerRef}
        placeholderText="訂購人"

        setClassName="form-control"
      />
      <DrinkInput
        placeholderText="飲品名稱"
        ref={nameRef}
        setClassName="form-control"
      />
      <DrinkInput
        placeholderText="糖度冰塊"
        ref={optionsRef}
        setClassName="form-control mr-1"
      />
      <button
        onClick={handleCreate}
        className="btn btn-primary"
      >
        新增
      </button>
    </div>
  );
};

export default DrinkInputGroup;
