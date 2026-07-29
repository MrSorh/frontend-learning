// Намеренно плохой код для практики рефакторинга
const getField = (field) => (user) => user[field];

const employees = [
  { name: "Алексей", email: "alex@mail.ru", age: 32, role: "admin" },
  { name: "Мария", email: "maria@mail.ru", age: 28, role: "user" },
  { name: "Сергей", email: "sergei@mail.ru", age: 35, role: "user" },
  { name: "Елена", email: "elena@mail.ru", age: 29, role: "editor" },
];

const names = employees.map(getField("name"));
const emails = employees.map(getField("email"));
const ages = employees.map(getField("age"));
const roles = employees.map(getField("role"));

console.log(names, emails, ages, roles);
// Changes for GIT
