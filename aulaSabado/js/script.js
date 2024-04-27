function calcularArea() {
  const a1 = parseFloat(document.getElementById("a1").value);
  const b1 = parseFloat(document.getElementById("b1").value);
  const a2 = parseFloat(document.getElementById("a2").value);
  const b2 = parseFloat(document.getElementById("b2").value);

  const areaTotal = a1 * b1 + a2 * b2;
  const areaA = a1 * b1;
  const areaAz = a2 * b2;

  const resultados = <h2>Resultado</h2>;
  <p>Área Total: ${areaTotal}</p>;
  <p>Área A (Rêtangulo 1): ${areaA}</p>;
  <p>Área Az (Rêtangulo 2): ${areaAz}</p>;

  document.getElementById("resultados").innerHTML = resultados;
}
