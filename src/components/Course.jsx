import { getTagStyle, numberStyler } from "../utils/utils";

export default function Course({
  name = "CCXXXX - Course Name",
  desc = "A small description of the course",
  difficulty = 7,
  time = 10,
  tags = [],
}) {
  return (
    <div
      name="card"
      className="border border-gray-500 rounded-2xl p-4 pt-0 w-1/2 shadow-lg m-3"
    >
      <div
        name="title and difficulty"
        className="flex items-center justify-between"
      >
        <h2 className="font-bold text-2xl max-w-[65%]">{name}</h2>
        <div className="flex flex-col items-end relative top-6">
          <div className="flex justify-center items-center">
            <p className="m-2">Tiempo dedicado:</p>
            <div className={numberStyler(time)}>{time}</div>
          </div>
          <div className="flex justify-center items-center">
            <p className="m-2">Dificultad:</p>
            <div className={numberStyler(difficulty)}>{difficulty}</div>
          </div>
        </div>
      </div>
      <div name="tags">
        {tags.map((t) => {
          return (
            <span className={getTagStyle(t)} key={t}>
              {t}
            </span>
          );
        })}
      </div>
      <p className="mt-7">{desc}</p>
    </div>
  );
}
