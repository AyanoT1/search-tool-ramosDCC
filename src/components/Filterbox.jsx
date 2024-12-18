import SourceFilter from "./filters/SourceFilter";

function Filterbox() {
  return (
    <div
      name="filter-box"
      className="border border-gray-400 rounded-lg shadow-md p-5 pl-7 pr-7 m-10 fixed top-1/4 z-10"
    >
      <h2 className="text-2xl">Filtros</h2>
      <hr className="border-gray-400 border" />

      <SourceFilter />
    </div>
  );
}

export default Filterbox;
