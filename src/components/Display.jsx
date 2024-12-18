import Course from "./Course";

function Display({ elements }) {
  return (
    <div
      name="course-list"
      className="flex items-center flex-col w-screen absolute top-48"
    >
      {elements.map((c) => {
        return (
          <Course
            key={c.key}
            name={c.name}
            desc={c.desc}
            difficulty={c.difficulty}
            time={c.time}
            tags={c.tags}
          />
        );
      })}
    </div>
  );
}

export default Display;
