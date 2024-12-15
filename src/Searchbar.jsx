import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Mandatory from "./assets/Mandatory.json";
import Optionals from "./assets/Optionals.json";
import Course from "./Course";

export default function Searchbar() {
  const [currentList, setCourses] = useState([]);
  const [currentSource, setSource] = useState({ ...Mandatory, ...Optionals });
  const sourceMapping = {
    Todos: { ...Mandatory, ...Optionals },
    Obligatorios: Mandatory,
    Electivos: Optionals,
  };

  function defaultSearcher(e) {
    let value = e.target.value.toLowerCase();

    if (value === "") {
      setCourses([]);
      return;
    }

    const newList = Object.keys(currentSource).filter((key) => {
      return (
        currentSource[key].name.toLowerCase().includes(value) ||
        currentSource[key].desc.toLowerCase().includes(value)
      );
    });
    setCourses(newList);
  }

  function handleSourceChange(e) {
    let newSource = sourceMapping[e.target.value];
    setSource(newSource);
    let query = document.getElementById("searchbar-input").value.toLowerCase();

    if (query === "") {
      setCourses([]);
      return;
    }

    const newList = Object.keys(newSource).filter((key) => {
      return (
        newSource[key].name.toLowerCase().includes(query) ||
        newSource[key].desc.toLowerCase().includes(query)
      );
    });
    setCourses(newList);
  }

  return (
    <>
      {/* Searchbar */}
      <div
        name="search-bar"
        className="flex items-center flex-col w-screen absolute top-32"
      >
        <div className="w-1/2 flex items-center">
          <input
            onChange={defaultSearcher}
            id="searchbar-input"
            type="text"
            className="border w-full rounded-full p-2 pl-4 bg-gray-100 border-gray-400 shadow-md"
            placeholder="Busca info de tu ramo aquí"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="relative right-9"
          />
        </div>
      </div>

      {/* Filter */}
      <div
        name="filter-box"
        className="border border-gray-400 rounded-lg shadow-md p-6 m-10 fixed top-52 z-10"
      >
        <h2 className="text-2xl">Filters</h2>
        <hr className="border-gray-400 border" />
        <div>
          <h3 className="font-semibold mt-2">Ramos:</h3>
          <hr className="border-gray-400" />
          {["Todos", "Obligatorios", "Electivos"].map((s, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name="sourceSelector"
                  id={"source" + index}
                  value={s}
                  defaultChecked={index == 0}
                  onChange={handleSourceChange}
                  className="m-1 "
                />
                <label htmlFor={index} className="p-1">
                  {s}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Displayer */}
      <div
        name="course-list"
        className="flex items-center flex-col w-screen absolute top-48"
      >
        {currentList.map((key) => {
          return (
            <Course
              key={key}
              name={currentSource[key].name}
              desc={currentSource[key].desc}
              difficulty={currentSource[key].difficulty}
              time={currentSource[key].time}
            />
          );
        })}
      </div>
    </>
  );
}
