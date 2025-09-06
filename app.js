// Clase con 4 métodos
class inicioPAM {
  reglamentoPOO() {
    return [
      "Participación activa en clase",
      "Trabajos en Classroom",
      "Entregas completas",
      "Respetar tiempos de entrega",
      "Presentar trabajos de calidad universitaria"
    ];
  }

  lineamientosClassroom() {
    return [
      "Todos los trabajos deben llevar LOGO de la UPQ, incluir tema, datos del alumno y la materia",
      "Todos los trabajos deben llevar conclusiones del aprendezaje",
      "No usar chat en practicas y examen"
    ];
  }

  fechasParciales() {
    return [
      "Examen Parcial 1: 20/09/25",
      "Examen Parcial 2: 3/10/25",
      "Examen Parcial 3: 1/12/25"
    ];
  }

  porcentajesParcial() {
    return [
      "Parcial 1: 40%, 20%, 30%, 10%",
      "Parcial 2: 40%, 20%, 20%, 20%",
      "Parcial 3: 20%, 10%, 40%, 30%"
    ];
  }
}

const inicio = new inicioPAM(); //creo mi objeto, mi variable es inicio.

function mostrar(opcion) {
  let lista = [];
  if (opcion === "reglamento") lista = inicio.reglamentoPOO();
  if (opcion === "lineamientos") lista = inicio.lineamientosClassroom();
  if (opcion === "fechas") lista = inicio.fechasParciales();
  if (opcion === "porcentajes") lista = inicio.porcentajesParcial();

  document.getElementById("resultado").innerHTML = `
    <ul>${lista.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
}
