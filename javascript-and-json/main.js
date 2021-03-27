var books = [
  {
    isbn: '0060935464',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },
  {
    isbn: '9780316769174',
    title: 'The Catcher In The Rye',
    author: 'J.D. Salinger'
  },
  {
    isbn: '9780743273565',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  }
];

console.log('books: ', books);
console.log('books type of: ', typeof books);

var stringifyBooks = JSON.stringify(books);

console.log('stringifyBooks: ', stringifyBooks);
console.log('stringifyBooks typeof ', typeof stringifyBooks);

var student = `{
  "id": "0214",
  "name": "John Doe"
}`;

console.log('student ', student);
console.log('student typeof', typeof student);

var studentObj = JSON.parse(student);

console.log('studentObj ', studentObj);
console.log('studentObj typeof: ', typeof studentObj);
