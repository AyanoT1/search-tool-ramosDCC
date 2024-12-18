import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Mandatory from "./assets/Mandatory.json";
import Optionals from "./assets/Optionals.json";
import Course from "./Course";

export default function Searchbar() {
  const [currentList, setCourses] = useState(
    Object.keys({ ...Mandatory, ...Optionals }).filter((x) => {
      return { ...Mandatory, ...Optionals }[x].desc != "";
    })
  );
  const [currentSource, setSource] = useState({ ...Mandatory, ...Optionals });
  const [sortBy, setSortBy] = useState("code");
  const [isReversed, setReversed] = useState(false);
  const [selectedArea, setArea] = useState("");

  const sourceMapping = {
    Todos: { ...Mandatory, ...Optionals },
    Obligatorios: Mandatory,
    Electivos: Optionals,
  };

  function getQuery() {
    return document.getElementById("searchbar-input").value.toLowerCase();
  }

  function getSortFunction(option, source) {
    const convertNaN = (x) => (isNaN(x) ? 999 : parseInt(x));

    switch (option) {
      case "name":
        return (a, b) =>
          source[a].name
            .slice(8)
            .localeCompare(source[b].name.slice(8), undefined, {
              sensitivity: "base",
            });
      case "code":
        return (a, b) =>
          source[a].name.localeCompare(source[b].name, undefined, {
            sensitivity: "base",
          });
      case "difficulty":
        return (a, b) =>
          convertNaN(source[a].difficulty) - convertNaN(source[b].difficulty);
      case "time":
        return (a, b) =>
          convertNaN(source[a].time) - convertNaN(source[b].time);
    }
  }

  function genericSearch({
    pattern,
    source = currentSource,
    sorting = sortBy,
    reversion = isReversed,
    tag = selectedArea,
  } = {}) {
    var results = Object.keys(source).filter((key) => {
      return (
        (source[key].name.toLowerCase().includes(pattern.toLowerCase()) ||
          source[key].desc.toLowerCase().includes(pattern.toLowerCase())) &&
        source[key].desc != ""
      );
    });

    if (!tag == "") {
      results = results.filter((key) => {
        return source[key].tags.includes(tag);
      });
      console.log(results);
    }

    results.sort(getSortFunction(sorting, source));
    return reversion ? results.reverse() : results;
  }

  function handleInputSearch(e) {
    setCourses(genericSearch({ pattern: e.target.value }));
  }

  function handleSourceChange(e) {
    let newSource = sourceMapping[e.target.value];
    setSource(newSource);
    setCourses(genericSearch({ pattern: getQuery(), source: newSource }));
  }

  function handleSortByChange(e) {
    setSortBy(e.target.value);
    setCourses(genericSearch({ pattern: getQuery(), sorting: e.target.value }));
  }

  function handleReverseOrder(e) {
    setReversed(e.target.checked);
    setCourses(
      genericSearch({ pattern: getQuery(), reversion: e.target.checked })
    );
  }

  function handleAreaChange(e) {
    setArea(e.target.value);
    setCourses(genericSearch({ pattern: getQuery(), tag: e.target.value }));
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
            onChange={handleInputSearch}
            id="searchbar-input"
            type="text"
            className="border w-full rounded-full p-2 pl-4 border-gray-400 shadow-md"
            placeholder="Busca tema específico aquí"
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
        className="border border-gray-400 rounded-lg shadow-md p-5 pl-7 pr-7 m-10 fixed top-1/4 z-10"
      >
        <h2 className="text-2xl">Filtros</h2>
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
          <select
            name="sorting"
            id="sort-filter"
            onChange={handleSortByChange}
            className="mt-2 h-7 rounded-md pl-2"
          >
            <option value="code">Código</option>
            <option value="name">Nombre</option>
            <option value="difficulty">Dificultad</option>
            <option value="time">Tiempo dedicado </option>
          </select>{" "}
          <br />
          <input type="checkbox" onChange={handleReverseOrder} /> Invertir orden
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="font-semibold mt-2">Área:</h3>
          <hr className="border-gray-400" />
          <select
            name="sorting"
            id="sort-filter"
            onChange={handleAreaChange}
            className="mt-2 h-7 rounded-md pl-2"
          >
            <option value="">Cualquiera</option>
            <option value="Programación">Programación</option>
            <option value="Software">Software</option>
            <option value="Datos">Datos</option>
            <option value="Teoría">Teoría</option>
            <option value="HCI">HCI</option>
            <option value="Apps web (opcional)">Apps web (opcional)</option>
            <option value="Apps web">Apps web</option>
            <option value="Gráfica">Gráfica</option>
            <option value="Sistemas">Sistemas</option>
            <option value="Arquitectura">Arquitectura</option>
            <option value="Seguridad">Seguridad</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Industria">Industria</option>
            <option value="Investigación">Investigación</option>
            <option value="Redes">Redes</option>
            <option value="Lenguajes">Lenguajes</option>
          </select>
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
              tags={currentSource[key].tags}
            />
          );
        })}
      </div>
    </>
  );
}
