import { partida } from "./modelo";

export const obtenerNumeroAleatorio = (): number => {
  return Math.ceil(Math.random() * 10);
};

// Genera una carta aleatoria de 1 a 7 y de 10 a 12
export const dameCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

export const calcularValorDeCarta = (carta: number): number => {
  if (carta <= 7) {
    return carta;
  }
  return 0.5;
};

export const sumarPuntuacion = (valorActual: number) => {
  return partida.puntuacion + valorActual;
};

export const actualizarPuntuacion = (puntosSumados: number): void => {
  partida.puntuacion = puntosSumados;
};

// Intercambia la imagen de la carta segun el valor de la carta que recibe
export const obtenerUrlCarta = (carta: number): string => {
  switch (carta) {
    case 1:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
    case 2:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
    case 3:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
    case 4:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
    case 5:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
    case 6:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
    case 7:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
    case 10:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
    case 11:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
    case 12:
      return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
    default:
      return "Carta no valida";
  }
};

export const obtenerMensajePuntuacion = (puntuacion: number): string => {
  if (puntuacion === 7.5) {
    return "¡Lo has clavado! ¡Enhorabuena!";
  } else if (puntuacion > 7.5) {
    return "¡Game Over! Has pasado los 7.5 puntos, intentalo de nuevo.";
  } else {
    throw new Error("Resultado no reconocido. Verifica la puntuación");
  }
};

export const obtenerMensajeMePlanto = (puntuacion: number): string => {
  if (puntuacion <= 4.5) {
    return "Has sido muy conservador";
  } else if (puntuacion === 5 || puntuacion === 5.5) {
    return "Te ha entrado cangelo eh?";
  } else if (puntuacion === 6 || puntuacion === 6.5 || puntuacion === 7) {
    return "Casi casi...";
  } else {
    return "Resultado no reconocido. Verifica la puntuación";
  }
};
