console.log('Hello, just a moment...');

function message() {
  setTimeout(() => {
    console.log('Thanks for waiting!');
  }, 2000);
}

message();
