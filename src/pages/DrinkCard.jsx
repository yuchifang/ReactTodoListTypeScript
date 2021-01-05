import React, { useState } from "react";
import EditCard from "./EditCard";
import styled from "styled-components";

const StyledEidtDrinkCardButton = styled.button`
  list-style: none;
  outline: none;
  border: red solid 1px;
  background-color: transparent;
  color: red;
  margin: 0 10px 0 auto;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  &:focus {
    border: red solid 1px;
    outline: none;
  }
  &:hover {
    color: white;
    background-color: red;
  }
`;

const DrinkCard = ({ buyer, name, options, onDelete, onUpdate, id }) => {
  const [editStatus, SetEditStatus] = useState(false);

  const handleDelete = () => {
    onDelete && onDelete(id);
  };

  const handleEditStatus = () => {
    SetEditStatus(!editStatus);
  };

  return (
    <div className="card mb-1">
      <div className="position-relative card-body">
        <div className="d-flex align-items-center mb-3">
          <button
            onClick={handleDelete}
            className="btn btn-outline-danger mr-3"
          >
            X
          </button>
          <h5 className="card-title m-0 mr-1">{name}</h5>
          <div className="card-text m-0">{options}</div>
          <StyledEidtDrinkCardButton onClick={handleEditStatus}>
            編輯
          </StyledEidtDrinkCardButton>
        </div>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            <cite>{buyer}</cite>
          </footer>
        </blockquote>
        {editStatus && (
          <EditCard
            editStatus={editStatus}
            onEditStatus={handleEditStatus}
            onUpdate={onUpdate(id)}
            options={options}
            name={name}
            buyer={buyer}
          />
        )}
      </div>
    </div>
  );
};

export default DrinkCard;
