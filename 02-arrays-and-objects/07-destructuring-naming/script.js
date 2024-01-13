
const firstName = 'Linh';
const lastName = 'Nguyen';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);



const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'Linh',
  },
};

const {
  id: todoId, 
  title,
  user: { name }, 
} = todo;

console.log(todoId);


const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
