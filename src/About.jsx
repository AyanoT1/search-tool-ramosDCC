import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div
      name="about"
      className="border border-gray-400 rounded-lg shadow-md p-5 pl-7 pr-7 m-10 absolute top-1/4 right-4 w-48 z-10"
    >
      <h2 className="text-md border-b">
        <FontAwesomeIcon icon={faCircleInfo} /> Sobre la app
      </h2>
      <p className="text-sm">
        Buscador basado en{" "}
        <a className="z-40" href="https://ramos.cadcc.cl/">
          RamosCC
        </a>{" "}
        de la página del CaDCC. <br />
        <br />
        La barra busca por nombre y descripción del curso. <br /> <br />

        El tiempo dedicado amarillo es aprox su valor en créditos.
      </p>
    </div>
  );
}
