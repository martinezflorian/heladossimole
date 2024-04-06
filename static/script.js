function validar() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checked = false;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checked = true;
    }
  });

  if (!checked) {
    alert("Debe seleccionar al menos una opción.");
    return false;
  }

  // Aquí puedes agregar más validaciones o enviar el formulario si todo está bien
  document.getElementById("miFormulario").submit();
}
