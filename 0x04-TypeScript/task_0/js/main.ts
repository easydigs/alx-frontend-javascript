interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  function renderStudentTable(students: Student[]): void {
    const table = document.createElement('table');
    const tableHeader = `<thead><tr><th>First Name</th><th>Location</th></tr></thead>`;
    table.innerHTML = tableHeader;
  
    const tableBody = document.createElement('tbody');
  
    students.forEach(student => {
      const row = document.createElement('tr');
  
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderStudentTable(studentsList);
  });
