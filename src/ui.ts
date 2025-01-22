import { partida } from "./modelo";
import {
  calcularValorDeCarta,
  dameCarta,
  generarUrlCarta,
  generarMensajePuntuacion,
  generarMensajeGameOver,
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

export const actualizarImagenCarta = (url: string): void => {
  const imagenCarta = document.getElementById("imagenCarta");
  if (
    imagenCarta !== null &&
    imagenCarta !== undefined &&
    imagenCarta instanceof HTMLImageElement
  ) {
    imagenCarta.src = url;
  }
};

export const mostrarCarta = (carta: number): void => {
  const urlCarta = generarUrlCarta(carta);
  actualizarImagenCarta(urlCarta);
};

const muestraMensajeGameOver = (mensajeGameOver: string): void => {
  const elementoGameOver = document.getElementById("gameOver");
  if (elementoGameOver !== null && elementoGameOver !== undefined) {
    elementoGameOver.innerHTML = mensajeGameOver;
  }
};

// Desactiva este botón si finaliza la partida
const desactivaBotonDameCarta = () => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = true;
  } else {
    console.error("El elemento no es un botón o no existe");
  }
};

const gestionarGameOver = (): void => {
  const mensajeGameOver = generarMensajeGameOver();
  muestraMensajeGameOver(mensajeGameOver);
  desactivaBotonDameCarta();
  finalizarPartida();
};

export const mostrarMensajePuntuacion = (mensaje: string): void => {
  const elementoMeplanto = document.getElementById("mePlanto");
  if (elementoMeplanto !== null && elementoMeplanto !== undefined) {
    elementoMeplanto.innerHTML = mensaje;
  }
};

export const gestionarMePlanto = (): void => {
  const mensaje = generarMensajePuntuacion();
  mostrarMensajePuntuacion(mensaje);
};

export const botonMePlanto = document.getElementById("botonMePlanto");
if (
  botonMePlanto !== null &&
  botonMePlanto !== undefined &&
  botonMePlanto instanceof HTMLButtonElement
) {
  botonMePlanto.addEventListener("click", () => {
    gestionarMePlanto();
    const botonDameCarta = document.getElementById("dameCarta");
    if (
      botonDameCarta !== null &&
      botonDameCarta !== undefined &&
      botonDameCarta instanceof HTMLButtonElement
    ) {
      botonDameCarta.disabled = true;
    }
    finalizarPartida();
  });
}

export const handleDameCarta = () => {
  const carta: number = dameCarta();
  mostrarCarta(carta);
  const valorActual = calcularValorDeCarta(carta);
  partida.puntuacion += valorActual;
  muestraPuntuacion();
  gestionarGameOver();
};

// Muestra el botón nueva partida al finalizar partida
export const finalizarPartida = () => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = true;
  }
  const botonNuevaPartida = document.getElementById("nuevaPartida");
  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.style.display = "block";
  }
};

// Reinicia todos los elementos de la partida
export const reiniciaPartida = () => {
  partida.puntuacion = 0;

  let elementoMeplanto = document.getElementById("mePlanto");
  if (elementoMeplanto) {
    elementoMeplanto.innerHTML = "";
  }
  const elementoGameOver = document.getElementById("gameOver");
  if (elementoGameOver) {
    elementoGameOver.innerHTML = "";
  }
  const botonDameCarta = document.getElementById("dameCarta");
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = false;
  }
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Llevas ${partida.puntuacion} puntos`;
  }
  const imagenCarta = document.getElementById("imagenCarta");
  if (
    imagenCarta !== null &&
    imagenCarta !== undefined &&
    imagenCarta instanceof HTMLImageElement
  ) {
    imagenCarta.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};
