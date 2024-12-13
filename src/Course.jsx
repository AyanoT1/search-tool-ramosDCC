export default function Course({
    name = "CCXXXX - Course Name",
    desc = "A small description of the course",
    difficulty = 7,
    time = 10
}) {
    function styler(x) {
        let base = "rounded-full w-8 h-8 flex items-center justify-center font-extrabold ";
        switch (true) {
            case x > 7:
                return base + "bg-red-500";
            case x > 5:
                return base + "bg-yellow-400";
            case x > 2:
                return base + "bg-green-500";
            default:
                return base + "bg-blue-200";
        }
    }

    return (
        <div className="border border-gray-500 rounded-2xl p-4 pt-0 w-1/2 shadow-lg">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl">{name}</h2>
                <div className="flex flex-col items-end relative top-6">
                    <div className="flex justify-center items-center">
                        <p className="m-2">Tiempo dedicado:</p>
                        <div className={styler(time)}>{time}</div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="m-2">Dificultad:</p>
                        <div className={styler(difficulty)}>{difficulty}</div>
                    </div>
                </div>
            </div>
            <p className="mt-7">{desc}</p>
        </div>
    );
}
