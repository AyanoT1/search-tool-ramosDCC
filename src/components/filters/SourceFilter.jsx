import { useContext } from "react";
import Mandatory from "../../assets/Mandatory.json";
import Optionals from "../../assets/Optionals.json";
import { SettingsContext } from "../Search";

const AllSources = { ...Mandatory, ...Optionals };

const sourceMapping = {
  Todos: AllSources,
  Obligatorios: Mandatory,
  Electivos: Optionals
};

function SourceFilter() {
  const { settings, setSettings } = useContext(SettingsContext);

  function handleSourceChange(e) {
    setSettings({ ...settings, source: sourceMapping[e.target.value] });
  }

  return (
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
  );
}

export default SourceFilter;
