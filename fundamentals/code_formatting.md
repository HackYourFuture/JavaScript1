# Code Formatting

When you write your JavaScript code you need to take into account two types of consumer:

1. Human readers (you yourself, your co-workers, classmates, you yourself in a year's time from now, etc.).
2. The JavaScript engine.

Starting with the latter, the JavaScript engine does not care about code formatting at all and is perfectly happy to work with one-letter variable names. 'Minification' is a process that is sometimes used to reduce the size of JavaScript files hosted on a web server so that they take less time to transfer over a network to a web browser. The code below show some 'minified' code.

```js
const o=[6,3,10,1].reduce((o,c)=>(o.push(c*c),o),[]);console.log(o);
```

Clearly, the above code is incomprehensible to humans. The original code is shown below, nicely formatted for the benefit of human readers. 

```js
const arr = [6, 3, 10, 1];
const squares = arr.reduce((acc, elem) => {
  acc.push(elem * elem);
  return acc;
}, []);
console.log(squares); // -> [36, 9, 100, 1]
```

In comparison with the minified code, the original code makes use of new lines and indentation to show structure and uses meaningful variable names, solely for the benefit of the human reader.

Over time, a standard way of formatting JavaScript code has emerged (actually this standard is fairly common across all languages that are derived from the C-language, including JavaScript but also C++, Java and C#).

In the next sections we will discuss the most important code formatting conventions for JavaScript. At the end of this document you will find some code that is formatted according to these rules.

## Blank lines

Use a single blank line to separate blocks of related code. This is similar to separating paragraphs with a blank line in written text.

## Curly braces

Curly braces are used to start and end code blocks, often as part of an `if`, `switch`, `while` or `for` statement. The opening curly brace should be placed at the end of a line. The closing curly brace should be aligned with the beginning of the line that started the code block.

```js
if (condition) {
  // ... 
} else {
  // ... 
}
```

## Indentation

Code blocks inside curly braces should be indented by 2 or 4 spaces (choose one or the other, and then stick to it). In case of nested code blocks, for each level of nesting the amount of indentation should be incremented by the standard amount (2 or 4):

```js
function myFunction() {
  if (condition) {
    // ... 
  } else {
    // ... 
  }
}
```

## Spacing

- Add a space after keywords, e.g. `if (`, `for (`
- Add a space after a `,` `;` (in a `for` loop) and `:` (e.g. object keys)
- Add a space before and after operators, e.g. `a + b`

## Use VSCode for well-formatted JavaScript

Rather than continuing and specifying every little detail on how to format JavaScript code in a standard format, we can call in the help of VSCode. 

VSCode comes with a built-in code formatter for JavaScript. To format the current document in a standard fashion, press the following key combination:

|           | Windows | Mac   | Linux |
| --------- | ------- | ----- | ----- |
| **Format Document** (make it pretty) | Shift‑Alt‑F | ⇧⌥F| Ctrl‑Shift‑I |

Just make it a habit to bring this three-finger salute just before saving your document or whenever it becomes messy and you're good to go!

> There are a number of user settings that you can apply in VSCode to enable auto-formatting as you type (or paste). See [VSCode Tips](../VSCodeTips/README.md#customise-vscode-settings) for further details.
> 

## ESLint

[ESLint](https://eslint.org/) is a tool that can check your JavaScript code for common errors and bad practices. See [VSCode Tips](../VSCodeTips/README.md#installation-instructions) on how to set it up.

ESLint is configured via user-definable rules that specify what to check. These rules must be defined in a file called `.eslintrc.json` placed in the root folder of your project repository. For the lectures and homework of the three HYF JavaScript modules it is recommended that you create an `.eslintrc.json` file and copy and paste the content shown below into that file. 

More information about ESLint Rules [here](https://eslint.org/docs/rules/).

Make sure that you correct any errors and warnings that ESLint produces before considering your JavaScript code done!

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "no-multiple-empty-lines": "warn",
    "eol-last": [
      "error",
      "always"
    ],
    "no-console": "off",
    "camelcase": "warn",
    "eqeqeq": [
      "error",
      "always",
      {
        "null": "ignore"
      }
    ],
    "semi": [
      "warn",
      "always"
    ]
  }
}
```


## Example of well-formatted code

(With the help of the VSCode formatter and ESLint.)

```js
'use strict';

const board = [
  ['T', 'T', '.', 'F'],
  ['T', '.', '.', '.'],
  ['.', '.', '.', '.'],
  ['R', '.', '.', 'W']
];

const robot = {
  x: 0,
  y: 0,
  dir: 'up',
};

let flagReached = false;
let moves = 0;

board.reverse();

const trailIndicators = {
  left: '←',
  right: '→',
  up: '↑',
  down: '↓'
};

function render() {
  console.log('\n ' + moves + ':');
  for (let row = board.length - 1; row >= 0; row--) {
    const cells = board[row];
    let line = '';
    for (let col = 0; col < cells.length; col++) {
      line += ' ' + cells[col] + ' ';
    }
    console.log(line);
  }
  if (flagReached) {
    console.log('\nHurray! Flag reached in ' + moves + ' steps!');
  }
}

function move() {
  let x = robot.x;
  let y = robot.y;

  switch (robot.dir) {
    case 'up':
      y = y < board.length - 1 ? y + 1 : y;
      break;
    case 'down':
      y = y > 0 ? y - 1 : y;
      break;
    case 'left':
      x = x > 0 ? x - 1 : x;
      break;
    case 'right':
      x = x < board[y].length - 1 ? x + 1 : x;
      break;
  }

  const cellContents = board[y][x];

  if (cellContents === '.' || cellContents === 'F') {
    board[robot.y][robot.x] = trailIndicators[robot.dir];
    robot.x = x;
    robot.y = y;
    board[y][x] = 'R';
    if (cellContents === 'F') {
      flagReached = true;
    }
  }

  moves += 1;
  render();
}

function turn(turnDirection) {
  if (turnDirection !== 'left' && turnDirection !== 'right') {
    console.log('ignoring invalid turn', turnDirection);
  }
  switch (robot.dir) {
    case 'up':
      robot.dir = turnDirection === 'left' ? 'left' : 'right';
      break;
    case 'down':
      robot.dir = turnDirection === 'left' ? 'right' : 'left';
      break;
    case 'left':
      robot.dir = turnDirection === 'left' ? 'down' : 'up';
      break;
    case 'right':
      robot.dir = turnDirection === 'left' ? 'up' : 'down';
      break;
  }
}

render();

// start of robot game instructions
move();
turn('right');
move();
move();
move();
turn('left');
move();
move();
// end of robot game instructions
```

