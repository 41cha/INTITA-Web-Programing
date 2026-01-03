const students = [
    { name: "Іван", age: 20, grade: 95 },
    { name: "Оля", age: 19, grade: 88 },
    { name: "Максим", age: 21, grade: 76 }
];

for (let student of students) {
    console.log(`${student.name} (${student.age} років) - ${student.grade}`);
}

console.log();

let bestStudent = students[0];

for (let student of students) {

    if (student.grade > bestStudent.grade) {
        bestStudent = student;
    }
}

console.log(`Найвища оцінка: ${bestStudent.name} (${bestStudent.grade})`);

let total = 0;

for (let student of students) {
    total += student.grade;
}

const average = total / students.length;
console.log(`Середній бал: ${average.toFixed(1)}`);