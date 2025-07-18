function desbloquear(num) {
  const actual = event.target;

  // Solo funciona si la materia está activa
  if (!actual.classList.contains("activa")) return;

  // Marca la materia actual como completada
  actual.classList.remove("activa");
  actual.classList.add("completada");

  // Desbloquea la siguiente
  const siguiente = document.getElementById("materia" + num);
  if (siguiente) siguiente.classList.add("activa");
}
