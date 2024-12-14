import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Mandatory from "./assets/Mandatory.json";
import Optionals from "./assets/Optionals.json"
import Course from "./Course";

export default function Searchbar() {
  const [currentList, setCourses] = useState([]);
  const [currentSource, setSource] = useState({...Mandatory, ...Optionals})


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


  return (
    <>
      <div name="search-bar"  className="flex items-center flex-col w-screen absolute top-32">
        <div className="w-1/2 flex items-center">
          <input
            onChange={defaultSearcher}
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

      <div name="course-list"  className="flex items-center flex-col w-screen absolute top-48">
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
