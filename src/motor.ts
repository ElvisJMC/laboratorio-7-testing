import { partida } from "./modelo";

// Genera una carta aleatoria de 1 a 7 y de 10 a 12
export const dameCarta = (): number => {
  const carta: number = Math.ceil(Math.random() * 10);
  if (carta > 7) {
    return carta + 2;
  } else {
    return carta;
  }
};

export const calcularValorDeCarta = (carta: number): number => {
  if (carta <= 7) {
    return carta;
  } else {
    return 0.5;
  }
};

export const generarUrlCarta = (carta: number): string => {
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
      throw new Error("Carta no válida");
  }
};

export const generarMensajePuntuacion = (): string => {
  if (partida.puntuacion <= 4.5) {
    return "Has sido muy conservador";
  } else if (partida.puntuacion === 5 || partida.puntuacion === 5.5) {
    return "Te ha entrado canguelo eh";
  } else if (
    partida.puntuacion === 6 ||
    partida.puntuacion === 6.5 ||
    partida.puntuacion === 7
  ) {
    return "Casi casi...";
  } else {
    throw new Error("Algo no ha salido bien. Prueba de nuevo");
  }
};

export const generarMensajeGameOver = (): string => {
  if (partida.puntuacion > 7.5) {
    return "¡Game Over! Has pasado los 7.5 puntos, intentalo de nuevo.";
  } else if (partida.puntuacion === 7.5) {
    return "¡Lo has clavado! ¡Enhorabuena!";
  } else {
    throw new Error("Algo no ha salido bien. Prueba de nuevo");
  }
};
