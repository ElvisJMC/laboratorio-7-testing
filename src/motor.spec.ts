import { vi } from "vitest";
import { partida } from "./modelo";
import {
  obtenerMensajePuntuacion,
  obtenerMensajeMePlanto,
  actualizarPuntuacion,
  calcularValorDeCarta,
  dameCarta,
  obtenerNumeroAleatorio,
} from "./motor";

describe("obtenerNumeroAleatorio", () => {
  it("Forzamos a mathrandom a que devuelva 0.01 y debería de devolver 1", () => {
    // Arrange
    const resultadoEsperado: number = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0.01);

    //Act
    const resultado: number = obtenerNumeroAleatorio();

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Forzamos a mathrandom a que devuelva 0.99 y debería de devolver 10", () => {
    // Arrange
    const resultadoEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.99);

    //Act
    const resultado: number = obtenerNumeroAleatorio();

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Forzamos a mathrandom a que devuelva 0.39 y debería de devolver 4", () => {
    // Arrange
    const resultadoEsperado: number = 4;
    vi.spyOn(global.Math, "random").mockReturnValue(0.39);

    //Act
    const resultado: number = obtenerNumeroAleatorio();

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("dameCarta", () => {
  it("Debería de devolver el valor del número aleatorio + 2 si dicho número es mayor que 7", () => {
    //Arrange
    const numeroAleatorio: number = 8;
    const resultadoEsperado: number = numeroAleatorio + 2;

    //Act
    const resultado: number = dameCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver el valor del número aleatorio si dicho número es igual o menor que 7", () => {
    //Arrange
    const numeroAleatorio: number = 6;
    const resultadoEsperado: number = numeroAleatorio;

    //Act
    const resultado: number = dameCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("calcularValorDeCarta", () => {
  it("Debería de devolver el valor de la carta si es igual o menor que 7", () => {
    //Arrange
    const carta: number = 7;
    const resultadoEsperado: number = 7;

    //Act
    const resultado = calcularValorDeCarta(carta);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver 0.5 si el valor de la carta es mayor que 7", () => {
    //Arrange
    const carta: number = 10;
    const resultadoEsperado: number = 0.5;

    //Act
    const resultado = calcularValorDeCarta(carta);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("sumarPuntuacion", () => {
  it("Debería de devolver la suma de puntuacionInicial y valorActual", () => {
    //Arrange
    const valorActual: number = 5;
    const puntuacionInicial: number = 5;
    const resultadoEsperado = puntuacionInicial + valorActual;

    //Act
    const resultado: number = puntuacionInicial + valorActual;

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("actualizarPuntuacion", () => {
  it("Debería actualizar la puntuación de partida.puntuacion correctamente", () => {
    //Arrange
    const resultadoEsperado: number = 5;
    const puntosSumados: number = 5;

    //Act
    actualizarPuntuacion(puntosSumados);

    //Assert
    expect(partida.puntuacion).toBe(resultadoEsperado);
  });
});

describe("obtenerMensajePuntuacion", () => {
  it("Debería de devolver ¡Lo has clavado! ¡Enhorabuena!, si puntuación es igual a 7.5", () => {
    //Arrange
    const resultadoEsperado: string = "¡Lo has clavado! ¡Enhorabuena!";
    const puntuacion: number = 7.5;
    //Act
    const resultado: string = obtenerMensajePuntuacion(puntuacion);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver Game Over! Has pasado los 7.5 puntos, intentalo de nuevo, si puntuación es mayor que 7.5 ", () => {
    //Arrange
    const resultadoEsperado: string =
      "¡Game Over! Has pasado los 7.5 puntos, intentalo de nuevo.";
    const puntuacion: number = 8;

    //Act
    const resultado: string = obtenerMensajePuntuacion(puntuacion);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deber'ia de devolver Resultado no reconocido. Verifica la puntuación si puntuación no es un número", () => {
    //Arrange
    const resultadoEsperado: string =
      "Resultado no reconocido. Verifica la puntuación";
    const puntuacion: number = NaN;

    //Act
    const resultado: string = obtenerMensajeMePlanto(puntuacion);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerMensajeMePlanto", () => {
  it("Debería de devolver Has sido muy conservador si puntuación es menor o igual a 4.5", () => {
    //Arrange
    const resultadoEsperado: string = "Has sido muy conservador";
    const puntuacion: number = 3;

    //Act
    const resultado: string = obtenerMensajeMePlanto(puntuacion);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver Te ha entrado cangelo eh? si puntuación es igual a 5 o 5.5", () => {
    //Arrange
    const resultadoEsperado: string = "Te ha entrado cangelo eh?";
    const puntuacion: number = 5;

    //Act
    const resultado: string = obtenerMensajeMePlanto(puntuacion);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver Casi casi... si puntuación es igual a 6, 6.5 o 7", () => {
    //Arrange
    const resultadoEsperado: string = "Casi casi...";
    const puntuacion: number = 7;

    //Act
    const resultado: string = obtenerMensajeMePlanto(puntuacion);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería de devolver Resultado no reconocido. Verifica la puntuación si puntuación no es un número", () => {
    //Arrange
    const resultadoEsperado: string =
      "Resultado no reconocido. Verifica la puntuación";
    const puntuacion: number = NaN;

    //Act
    const resultado: string = obtenerMensajeMePlanto(puntuacion);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
