import React, { useEffect, useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Card from "./Card";

const Dropdown = () => {
  const [data, setData] = useState([]);
  const [option, setOptions] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/comments");
    setData(await data.json());
  };
  const handleSelect = (val) => {
    setOptions(val);
  };

  const options = data.map((val) => {
    return { label: val.name, value: val.name };
  });

  return (
    <div className="app">
      <div className="preview-values">
        <h1>dropdown using npm </h1>
        <div className="container">
          <h4>VALUES</h4>
          {option}
        </div>

        <div className="select">
          <MultiSelect
            onchange={handleSelect}
            options={options}
            placeholder={"select"}
            showCheckbox={true}
          />
        </div>
      </div>

      <Card />
    </div>
  );
};

export default Dropdown;
