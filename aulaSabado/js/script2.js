function calculateTotal() {
  var quantity1 = parseFloat(document.getElementById("quantity1").value);
  var value1 = parseFloat(document.getElementById("value1").value);
  var quantity2 = parseFloat(document.getElementById("quantity2").value);
  var value2 = parseFloat(document.getElementById("value2").value);
  var quantity3 = parseFloat(document.getElementById("quantity3").value);
  var value3 = parseFloat(document.getElementById("value3").value);

  var subtotal1 = quantity1 * value1;
  var subtotal2 = quantity2 * value2;
  var subtotal3 = quantity3 * value3;

  var total = subtotal1 + subtotal2 + subtotal3;

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <p>Subtotal 1: R$ ${subtotal1.toFixed(2)}</p>
      <p>Subtotal 2: R$ ${subtotal2.toFixed(2)}</p>
      <p>Subtotal 3: R$ ${subtotal3.toFixed(2)}</p>
      <h2>Total: R$ ${total.toFixed(2)}</h2>
    `;
}
