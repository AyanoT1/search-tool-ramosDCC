import { useContext } from "react";
import { SettingsContext } from "../Search";

function SortByFilter() {
  const { settings, setSettings } = useContext(SettingsContext);

  function handleSortByChange(e) {
    setSettings({...settings, sortBy: e.target.value})
  }

  function handleReverseOrder(e) {
    setSettings({...settings, isReversed: e.target.checked})
  }

  return (
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
  );
}

export default SortByFilter;
