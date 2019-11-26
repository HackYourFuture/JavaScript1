//Exercise 1: Hello World!
console.log('Hello World!'); //English
console.log('Hallo Wereld!'); //Nederlands
console.log('مرحبا بالعالم!'); //Arabic
console.log('Selam Dünya!'); //Turk
console.log('こんにちは世界!'); //Japans
console.log('你好，世界!'); //Chinees
console.log('salve mundi!'); //Latin
console.log('Γειά σου Κόσμε!'); //Grieks
console.log('नमस्ते दुनिया!'); //Hindi
console.log('Helló Világ!'); //Hongary

//the better way:
let allWorld = [
  'Hello World!',
  'Hallo Wereld!',
  'مرحبا بالعالم!',
  'Selam Dünya!',
  'こんにちは世界!',
  '你好，世界!',
  'salve mundi!',
  'Γειά σου Κόσμε!',
  'नमस्ते दुनिया!',
  'Helló Világ!',
];
for (let i = 0; i < allWorld.length; i++) {
  console.log(allWorld[i]);
}
