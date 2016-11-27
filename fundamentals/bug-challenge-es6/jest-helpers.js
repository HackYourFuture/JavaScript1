jest.useFakeTimers();

console.logs = [];

console.clear = function() {
  console.logs = [];
}
console.log = function(message) {
  console.logs.push(message.toString());
}
