
let completadas = 0;
const total = 72;

function desbloquear(num) {
  const actual = event.target;
  if (!actual.classList.contains("activa")) return;

  actual.classList.remove("activa");
  actual.classList.add("completada");

  completadas++;
  document.getElementById("cont-completadas").textContent = completadas;
  document.getElementById("barra-progreso").style.width = ((completadas / total) * 100) + "%";

  const siguiente = document.getElementById("materia" + num);
  if (siguiente) siguiente.classList.add("activa");
}
