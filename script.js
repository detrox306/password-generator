document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const firstName = document.getElementById('firstName').value;
  const secondName = document.getElementById('secondName').value;
  const petName = document.getElementById('petName').value;
  const birthDate = document.getElementById('birthDate').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

  // Dividir la fecha de nacimiento en partes (DD/MM/AA)
  const dateParts = birthDate.split('/');

  // Crear un array para almacenar las combinaciones
  const combinations = [];

  // Combinaciones básicas
  combinations.push(firstName + secondName);
  combinations.push(firstName + petName);
  combinations.push(firstName + gender);
  combinations.push(secondName + petName);
  combinations.push(secondName + gender);
  
  // Combinaciones con fecha
  combinations.push(firstName + dateParts.join(''));
  combinations.push(secondName + dateParts.join(''));
  combinations.push(petName + dateParts.join(''));
  
  // Combinaciones con teléfono (últimos 4 dígitos)
  const phoneLastDigits = phone.slice(-4);
  combinations.push(firstName + phoneLastDigits);
  combinations.push(secondName + phoneLastDigits);
  combinations.push(petName + phoneLastDigits);

  // Combinaciones con correos electrónicos
  combinations.push(email.replace('@', '').replace('.', ''));
  combinations.push(firstName + email);
  combinations.push(secondName + email);
  
  // Agregar combinaciones adicionales de género
  combinations.push(firstName + gender);
  combinations.push(secondName + gender);

  // Mostrar las combinaciones generadas
  const combinationsList = document.getElementById('combinationsList');
  combinationsList.innerHTML = ''; // Limpiar resultados anteriores

  combinations.forEach(combination => {
    const li = document.createElement('li');
    li.textContent = combination;
    combinationsList.appendChild(li);
  });
});
