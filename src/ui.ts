import { partida } from "./modelo";
import {
  actualizarPuntuacion,
  calcularValorDeCarta,
  dameCarta,
  obtenerMensajeMePlanto,
  obtenerMensajePuntuacion,
  obtenerNumeroAleatorio,
  sumarPuntuacion,
  obtenerUrlCarta,
} from "./motor";

// Muestra puntación por pantalla
export const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Llevas ${partida.puntuacion} puntos`;
  } else {
    console.error(
      "muestraPuntuacion: No se ha encontrado el elemento con id puntuacionActual"
    );
  }
};

const gestionarNuevaCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = dameCarta(numeroAleatorio);
  pintarCarta(carta);
  const valorActual = calcularValorDeCarta(carta);
  const puntosSumados = sumarPuntuacion(valorActual);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
  console.log(`Puntuación tras pedir carta: ${partida.puntuacion}`);
  gestionarFinalDePartida();
};

const actualizarUrlCarta = (UrlCarta: string): void => {
  const imagenCarta = document.getElementById("imagenCarta");
  if (imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = UrlCarta;
  }
};

const pintarCarta = (carta: number): void => {
  const UrlCarta = obtenerUrlCarta(carta);
  actualizarUrlCarta(UrlCarta);
};

const pintarMensajePuntuacion = (resultadoPuntuacion: string): void => {
  const mensajePuntuacionFinal = document.getElementById(
    "mensajePuntuacionFinal"
  );
  if (mensajePuntuacionFinal) {
    mensajePuntuacionFinal.innerHTML = resultadoPuntuacion;
  }
};

const gestionarFinalDePartida = (): void => {
  const resultadoPuntuacion = obtenerMensajePuntuacion(partida.puntuacion);
  pintarMensajePuntuacion(resultadoPuntuacion);
  botonesFinalDePartida();
};

const pintarMensajeMePlanto = (resultadopMensajeMePlanto: string) => {
  const elementoMeplanto = document.getElementById("mePlanto");
  if (elementoMeplanto) {
    elementoMeplanto.innerHTML = resultadopMensajeMePlanto;
  }
};

const gestionarMePlanto = (): void => {
  const resultadopMensajeMePlanto = obtenerMensajeMePlanto(partida.puntuacion);
  pintarMensajeMePlanto(resultadopMensajeMePlanto);
};

const botonMePlanto = document.getElementById("botonMePlanto");
if (botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", () => {
    gestionarMePlanto();
    botonesFinalDePartida();
  });
}

const botonesFinalDePartida = () => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = true;
  }
  const botonMePlanto = document.getElementById("botonMePlanto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = true;
  }
  const botonNuevaPartida = document.getElementById("nuevaPartida");
  if (botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.style.display = "block";
  }
};

export const botonesInicioDePartida = (): void => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", gestionarNuevaCarta);
  }
  const botonNuevaPartida = document.getElementById("nuevaPartida");
  if (botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", () => {
      reiniciaPartida();
      botonNuevaPartida.style.display = "none";
    });
  }
};

// Reinicia todos los elementos de la partida
const reiniciaPartida = (): void => {
  partida.puntuacion = 0;
  const elementoMeplanto = document.getElementById("mePlanto");
  if (elementoMeplanto) {
    elementoMeplanto.innerHTML = "";
  }
  const mensajePuntuacionFinal = document.getElementById(
    "mensajePuntuacionFinal"
  );
  if (mensajePuntuacionFinal) {
    mensajePuntuacionFinal.innerHTML = "";
  }
  const botonDameCarta = document.getElementById("dameCarta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = false;
  }
  const botonMePlanto = document.getElementById("botonMePlanto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = false;
  }
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Llevas ${partida.puntuacion} puntos`;
  }
  const imagenCarta = document.getElementById("imagenCarta");
  if (imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};
