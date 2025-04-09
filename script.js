document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const firstName = document.getElementById('firstName').value;
  const secondName = document.getElementById('secondName').value;
  const petName = document.getElementById('petName').value;
  const birthDate = document.getElementById('birthDate').value;
  const phone1 = document.getElementById('phone1').value;
  const phone2 = document.getElementById('phone2').value;
  const phone3 = document.getElementById('phone3').value;
  const phone4 = document.getElementById('phone4').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

  // Dividir la fecha de nacimiento en partes (DD/MM/AA)
  const dateParts = birthDate.split('/');
  const day = dateParts[0]; // DD
  const month = dateParts[1]; // MM
  const year = dateParts[2]; // AA o YYYY

  // Crear un array para almacenar las combinaciones
  const combinations = [];

  // Combinación de nombre con fecha de nacimiento
  combinations.push(firstName + day + month + year); // Ejemplo: Luna08051990

  // Combinación de segundo nombre, nombre de mascota y fecha
  combinations.push(secondName + petName + day + month); // Ejemplo: AnyaPerro0805

  // Combinaciones con cada número de teléfono completo
  if (phone1) combinations.push(firstName + phone1); // Ejemplo: Luna123456789
  if (phone2) combinations.push(secondName + phone2); // Ejemplo: Anya987654321
  if (phone3) combinations.push(petName + phone3); // Ejemplo: Perro111223344
  if (phone4) combinations.push(gender + phone4); // Ejemplo: M555555555

  // Combinaciones con correo electrónico
  const emailNoAt = email.replace('@', '').replace('.', '');
  combinations.push(firstName + emailNoAt); // Ejemplo: LunaLuna1234gmailcom

  // Combinación con caracteres especiales
  combinations.push(firstName + '@' + month + day); // Ejemplo: Luna@0805

  // Generar variaciones con números aleatorios
  const randomNum = Math.floor(Math.random() * 10000); // Número aleatorio de 4 dígitos
  combinations.push(firstName + randomNum); // Ejemplo: Luna1234

  // Combinación con género (aunque menos común, algunas personas lo hacen)
  combinations.push(firstName + gender + randomNum); // Ejemplo: LunaM1234

  // Agregar una variación con "123" al final (como hacen muchas personas)
  combinations.push(firstName + '123'); // Ejemplo: Luna123

  // Combinación con petName y fecha
  combinations.push(petName + day + month + year); // Ejemplo: Perro08051990

  // Agregar combinaciones más al estilo "123", "abc", etc.
  combinations.push(firstName + 'abc' + phone1); // Ejemplo: Lunaabc123456789

  // Mostrar las combinaciones generadas
  const combinationsList = document.getElementById('combinationsList');
  combinationsList.innerHTML = ''; // Limpiar resultados anteriores

  combinations.forEach(combination => {
    const li = document.createElement('li');
    li.textContent = combination;
    combinationsList.appendChild(li);
  });
});
