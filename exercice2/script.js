const tbody = document.getElementById('tbody');
const students = [];

const createLine = (tbody, student) => {
  const newRow   = tbody.insertRow();
  let counter = 0
  for (const key in student) {
    const newCell  = newRow.insertCell(counter);
    const newText  = document.createTextNode(student[key]);
    newCell.appendChild(newText);
    counter++
  }
}

const sendForm = (firstName, lastName, grade, numberClass) => {
  const student = {id: '', firstName, lastName, grade, numberClass};
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://reqres.in/api/users');

xhr.addEventListener('readystatechange', () => {
      if(xhr.readyState === 4) {
         if (xhr.status === 201) {
          const data = JSON.parse(xhr.response);
          student.id = data.id;
          students.push(student);
          createLine(tbody, student);
        } else {
          alert('Erreur')
        }
      }
  });
  
xhr.send(student);
}