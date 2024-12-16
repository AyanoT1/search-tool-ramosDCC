export default function Course({
    name = "CCXXXX - Course Name",
    desc = "A small description of the course",
    difficulty = 7,
    time = 10,
    tags = []
}) {
    function numberStyler(x) {
        let base = "rounded-full w-8 h-8 flex items-center justify-center font-extrabold ";
        switch (true) {
            case x > 7:
                return base + "bg-red-500 text-[#242424]";
            case x > 5:
                return base + "bg-amber-400 text-[#242424]";
            case x > 2:
                return base + "bg-green-500 text-[#242424]";
            case x==="?":
                return base + "bg-stone-700 text-white";
            default:
                return base + "bg-blue-200 text-[#242424]";
        }
    }

    function getTagStyle(tag) {
        const base = "p-1 text-[13px] font-bold text-[#242424] rounded mr-2 ";
        switch (true) {
            case tag === "Programación":
                return base + "bg-blue-500 ";
            case tag === "Software":
                return base + "bg-green-500 ";
            case tag === "Datos":
                return base + "bg-purple-500 ";
            case tag === "Teoría":
                return base + "bg-red-500 ";
            case tag === "HCI":
                return base + "bg-amber-400 ";
            case tag === "Apps web (opcional)":
                return base + "bg-yellow-500 ";
            case tag === "Apps web":
                return base + "bg-yellow-400 ";
            case tag === "Gráfica":
                return base + "bg-pink-500 ";
            case tag === "Sistemas":
                return base + "bg-cyan-500 ";
            case tag === "Arquitectura":
                return base + "bg-lime-500 ";
            case tag === "Seguridad":
                return base + "bg-gray-400 ";
            case tag === "Machine Learning":
                return base + "bg-indigo-500 ";
            case tag === "Industria":
                return base + "bg-teal-500 ";
            case tag === "Investigación":
                return base + "bg-orange-500 ";
            case tag === "Redes":
                return base + "bg-rose-500 ";
            case tag === "Lenguajes":
                return base + "bg-violet-500 ";
            default:
                return base + "bg-gray-200 ";
        }
    }
    

    return (
        <div name="card"  className="border border-gray-500 rounded-2xl p-4 pt-0 w-1/2 shadow-lg m-3">
            <div name="title and difficulty" className="flex items-center justify-between">
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
                {tags.map(t =>{ return(<span className={getTagStyle(t)} key={t}>{t}</span>)})}
            </div>
            <p className="mt-7">{desc}</p>
        </div>
    );
}
