import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Mandatory from "./assets/Mandatory.json";
import Course from "./Course";

export default function Searchbar() {
  const [currentList, setCourses] = useState([]);

  function defaultSearcher(e) {
    let value = e.target.value.toLowerCase();

    if (value === "") {
      setCourses([]);
      return;
    }

    const newList = Object.keys(Mandatory).filter((key) => {
      let c = Mandatory[key];
      return (
        c.name.toLowerCase().includes(value) ||
        c.desc.toLowerCase().includes(value)
      );
    });
    setCourses(newList);
  }


  return (
    <>
      <div className="flex items-center flex-col w-screen absolute top-32">
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

      <div className="flex items-center flex-col w-screen absolute top-48">
        {currentList.map((key) => {
          return (
            <Course
              key={key}
              name={Mandatory[key].name}
              desc={Mandatory[key].desc}
              difficulty={Mandatory[key].difficulty}
              time={Mandatory[key].time}
            />
          );
        })}
      </div>
    </>
  );
}
