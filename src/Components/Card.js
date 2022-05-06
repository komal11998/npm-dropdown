import React, { useState } from "react";
import { Data, FilterArray } from "../UtilsData";

const Card = () => {
  const [foodData, setFoodData] = useState([Data]);

  return (
    <div className="row text-center mt-5">
      {foodData
        // .filter((foodItem) => {
        //   if (selectMultipleCategory.includes("All")) return true;
        //   else return selectMultipleCategory.includes(foodItem.category);
        // })
        .map((item) => {
          const { id, img, title, category, food_info, price, quantity } = item;
          return (
            <div className="col-10 col-md-6 mt-5" key={id}>
              <div className="d-flex">
                <img
                  src={img}
                  alt="dinner"
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "10px",
                    border: "4px solid #b28e5a",
                  }}
                />
                <div style={{ margin: "10px" }}>
                  <div
                    className="d-flex flex-wrap"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "5px",
                      borderBottom: "1px solid #b28e5a",
                    }}
                  >
                    <h5 className="mt-2">{title}</h5>
                    <span className="mt-2">{price}</span>
                  </div>
                  <div>
                    <span>{food_info}</span>
                    <div style={{ fontWeight: "700" }}>{category}</div>
                    <span>
                      <button
                        className="btn btn-outline-dark m-1 p-1"
                        style={{
                          borderRadius: "20px",
                          cursor: "pointer",
                        }}
                        // onClick={() => quantity >= 1 && handleAddItem(id)}
                      >
                        Add
                      </button>
                      <div>
                        <button
                          className="btn btn-outline-dark m-1"
                          style={{ borderRadius: "20px" }}
                          // onClick={() => {
                          //   quantity > 0 && handleFoodCount("dec", id);
                          // }}
                        >
                          -
                        </button>
                        {quantity}
                        <button
                          className="btn btn-outline-dark m-1"
                          style={{ borderRadius: "20px" }}
                          // onClick={() => {
                          //   handleFoodCount("inc", id);
                          // }}
                        >
                          +
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
