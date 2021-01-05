import React, { useState } from "react";
import styled from "styled-components";

const StyledEidtCard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  border: none;
`;

const StyleCardValueInput = styled.input`
  padding: 0px 5px;
  width: 120px;
  &:focus {
    border: solid 1px black;
  }
`;

const StyleCardValueLabel = styled.label`
  margin-bottom: 0px;
  margin-right: 10px;
  margin-left: 20px;
`;
const StyleEidtButton = styled.button`
  list-style: none;
  outline: none;
  border: solid 1px ${(props) => props.color && props.color};
  background-color: transparent;
  color: ${(props) => props.color && props.color};
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0px 5px;
  &:focus {
    border: solid 1px ${(props) => props.color && props.color};
    outline: none;
  }
  &:hover {
    color: white;
    background-color: ${(props) => props.color && props.color};
  }
`;

const StyleButtonBlock = styled.div`
  display: flex;
  margin-top: 10px;
`;


const EditCard = ({ onEditStatus, options, name, buyer, onUpdate }) => {
  const [drink, setDrink] = useState({ name, options, buyer })

  const handleConfirm = () => {
    onUpdate && onUpdate(drink)
    onEditStatus && onEditStatus()
  };

  const handleCancel = () => {
    onEditStatus && onEditStatus()
  };

  const handleName = (e) => {
    setDrink({ ...drink, name: e.target.value })
  }

  const handleOptions = (e) => {
    setDrink({ ...drink, options: e.target.value })
  }

  const handleBuyer = (e) => {
    setDrink({ ...drink, buyer: e.target.value })
  }

  return (
    <StyledEidtCard className="position-absolute card mb-1">
      <div className="card-body">
        <div className="d-flex justify-content-around flex-wrap align-items-center h-100 ">
          <div>
            <StyleCardValueLabel htmlFor="name">飲品名稱:</StyleCardValueLabel>
            <StyleCardValueInput
              id="name"
              placeholder={name}
              onChange={handleName}
              className="card-title m-0 mr-1"
            />
            <StyleCardValueLabel htmlFor="options">
              糖度冰塊:
            </StyleCardValueLabel>
            <StyleCardValueInput
              id="options"
              placeholder={options}
              onChange={handleOptions}
              className="card-text m-0"
            />
            <StyleCardValueLabel htmlFor="buyer">訂購人:</StyleCardValueLabel>
            <StyleCardValueInput
              id="buyer"
              placeholder={buyer}
              onChange={handleBuyer}
              className="card-text m-0"
            />
          </div>
          <StyleButtonBlock>
            <StyleEidtButton color="blue" onClick={handleConfirm}>
              確認
            </StyleEidtButton>
            <StyleEidtButton color="red" onClick={handleCancel}>
              取消
            </StyleEidtButton>
          </StyleButtonBlock>
        </div>
      </div>
    </StyledEidtCard>
  );
};
export default EditCard;
