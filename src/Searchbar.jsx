import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Mandatory from "./assets/Mandatory.json";
import Optionals from "./assets/Optionals.json";
import Course from "./Course";

export default function Searchbar() {
  const [currentList, setCourses] = useState([]);
  const [currentSource, setSource] = useState({ ...Mandatory, ...Optionals });
  const [sortBy, setSortBy] = useState("name");
  
  const sourceMapping = {
    Todos: { ...Mandatory, ...Optionals },
    Obligatorios: Mandatory,
    Electivos: Optionals,
  };

  function sortMapping(option, source) {

    const parseNan = (x) => (isNaN(x)) ? 999 : parseInt(x) 

    switch(option) {
      case "name":
        return (a,b) => source[a].name.localeCompare(source[b].name, undefined, { sensitivity: 'base' })
      case "difficulty":
        return (a,b) => parseNan(source[a].difficulty) - parseNan(source[b].difficulty)
      case "time":
        return (a,b) => parseNan(source[a].time) - parseNan(source[b].time)
      }
  }

  function genericSearch(pattern, source=currentSource, sorting=sortBy) {
    if (pattern == "") {
      return [];
    }
    const results = Object.keys(source).filter((key) => {
      return (
        (source[key].name.toLowerCase().includes(pattern.toLowerCase()) ||
          source[key].desc.toLowerCase().includes(pattern.toLowerCase())) &&
        source[key].desc != ""
      );
    });
    return results.sort(sortMapping(sorting, source));
  }

  function defaultSearcher(e) {
    setCourses(genericSearch(e.target.value));
  }

  function handleSourceChange(e) {
    let newSource = sourceMapping[e.target.value];
    setSource(newSource);
    let query = document.getElementById("searchbar-input").value.toLowerCase();
    setCourses(genericSearch(query, newSource));
  }

  function handleSortByChange(e) {
    setSortBy(e.target.value)
    let query = document.getElementById("searchbar-input").value.toLowerCase();
    setCourses(genericSearch(query, currentSource, e.target.value))
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
            className="border w-full rounded-full p-2 pl-4 border-gray-400 shadow-md"
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
        className="border border-gray-400 rounded-lg shadow-md p-5 pl-7 pr-7 m-10 fixed top-52 z-10"
      >
        <h2 className="text-2xl">Filters</h2>
        <hr className="border-gray-400 border" />
        {/* Source filter */}
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
        {/* Sort by filter */}
        <div>
          <h3 className="font-semibold mt-2">Ordenar por:</h3>
          <hr className="border-gray-400" />
          <select name="sorting" id="sort-filter" onChange={handleSortByChange} className="mt-2 h-7 rounded-md pl-2">
            <option value="name">Nombre</option>
            <option value="difficulty">Dificultad</option>
            <option value="time">Tiempo dedicado </option>
          </select> <br/>
          <input type="checkbox" /> Invertir orden
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
