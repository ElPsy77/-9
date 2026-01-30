// 1. Заполните объект и выведите ниже указанные поля:
//     - Создайте объект, где есть свойства: `name` (имя), `age` (возраст), `subject` (предмет), `grade` (оценка). Вы должны заполнить эти данные через `prompt`.
//     - Увеличьте возраст пользователя на 5.
//     - Выведите результаты каждого шага в консоль.                                                               **[15 балла]**


let student = {
    name: prompt("Введите ваше имя:"),
    age: Number(prompt("Введите ваш возраст:")),
    subject: prompt("Введите ваш предмет:"),
    grade: prompt("Введите вашу оценку:")
};

console.log("Имя:", student);

student.age += 5;
console.log("Возраст после увеличения на 5:", student.age);

// 2. Скопируйте приведенный ниже массив movies в свой код и выполните следующие шаги:
    
//     ```jsx
//     const movies = [
//         { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
//         { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
//         { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
//         { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
//         { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
//     ];
//     ```
    
//     - Выведите в консоль режиссёра второго фильма.
//     - Выведите в консоль жанр четвёртого фильма.                                                                **[10 балла]**

const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log("Режиссёр второго фильма:", movies[1].director);
console.log("Жанр четвёртого фильма:", movies[3].genre);


// 3. Создайте массив строк, представляющий список покупок: `["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"]`. И выполните последующие задачи:
//     - Добавьте новый товар в начало массива.
//     - Удалите последний товар из массива.
//     - Замените третий элемент массива (индекс 2) на два новых товара с помощью `splice`.
        
//                                                                                                                                                                  **[25 балла]**


let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

shoppingList.unshift("апельсины");
console.log(`Добавление нового товара в начало массива - ${shoppingList}`);


shoppingList.pop();
console.log(`Удалите последний товар из массива - ${shoppingList}`);

shoppingList.splice(2,1, "йогурт", "орехи");
console.log(`Замените третий элемент массива (индекс 2) на два новых товара с помощью splice - ${shoppingList}`);


// const numbers = [52, 31, 9, 85, 31, 45];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(`Сумма чисел: ${sum}`); // 253


const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let counter = 0;

while (counter < numbers.length) {
  sum += numbers[counter];
  counter++;
}
console.log(`Сумма чисел: ${sum}`); // 253


// Скопируйте приведенный ниже массив books в свой код и напишите код 
// (желательно, используя цикл for), который выводит информацию о книгах, 
// включая их награды, каждая награда на отдельной строке:

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
  { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
  { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
  { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];

for (let i = 0; i < books.length; i++) {
  console.log(`Название: ${books[i].title}, Автор: ${books[i].author}, кол-во стр: ${books[i].numberOfPages}, жанр: ${books[i].genre}, 
  Награды:`);
  for (let j = 0; j < books[i].awards.length; j++) {
    console.log(` - ${books[i].awards[j]}\n`);
  }
  console.log("_ _ _ _ _ _ _ _ _");
}