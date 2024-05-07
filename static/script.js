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
function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var motivo = document.getElementById("motivo").value;
  var preferencia = document.querySelector('input[name="preferencia"]:checked');
  var mensaje = document.getElementById("mensaje").value;
  var terminos = document.getElementById("terminos").checked;

  if (nombre == "" || email == "" || telefono == "" || motivo == "" || !preferencia || mensaje == "" || !terminos) {
      alert("Por favor, completa todos los campos obligatorios.");
      return false;
  }

  return true;
}
