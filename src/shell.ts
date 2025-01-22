import "./style.css";
import {} from "./modelo";
import {} from "./motor";
import { muestraPuntuacion, reiniciaPartida, handleDameCarta } from "./ui";

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const botonNuevaPartida = document.getElementById("nuevaPartida");
botonNuevaPartida?.addEventListener("click", () => {
  reiniciaPartida();
  botonNuevaPartida.style.display = "none";
});

const botonDameCarta = document.getElementById("dameCarta");
botonDameCarta?.addEventListener("click", handleDameCarta);
