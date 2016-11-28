export default class BugChallenge {
  //Do NOT change the top10Movies and top10Actors variables to fix your tests
  //believe me: the problem is in bug() functions, not in these arrays ;)
  top10Movies = [
    'AI',
    'Shawshank Redemption',
    'Godfather',
    'Pulp Fiction',
    'Fight club',
    'Forrest Gump',
    'Inception',
    'Goodfellas',
    'The Matrix',
    'Interstellar'
  ]
  top10Actors = [
    'Marlon Brando',
    'Jack Nickolson',
    'Robert De Niro',
    'Al Pacino',
    'Daniel Day-Lewis',
    'Duston Hoffman',
    'Tom Hanks',
    'Anthony Hopkins',
    'Paul Newman',
    'Denzel Washington'

  ]
  //------
  // Bugs

    bug1() {
      const people = [{
        name: 'Alice',
        age: 25
      }, {
        name: 'Bob',
        age: 27
      }, {
        name: 'Charlie',
        age: 40
      }];

      for (let person in people) {
        console.log(`${person.name} is ${person.age}`);
      }
    }

    bug2() {
      const array = [1, 2, 3, 4];

      for (let i = 0; i < array.length; i++) {
        console.log(array.pop());
      }
    }

    bug3() {
      const array = {};
      array[0] = 'a';
      array[1] = 'b';
      array[2] = 'c';

      let total = 0;
      for (let key in obj) {
        total += key;
      }

      console.log(total);
    }

    bug4() {
      // We list all movies, except the top 3.
      var index = 3;
      for (index; index < this.top10Movies.length; index++) {
        console.log(`movie: ${this.top10Movies[index]}`);
      }

      // We also list all actors, except the top 3.
      for (index; index < top10Actors.length; index++) {
        console.log(`actor: ${this.top10Actors[index]}`);
      }
    }

    bug5() {
      const defaultMethod = 'GET';
      const defaultUseCaching = true;

      function fetch(options) {
        const url = options.url;
        const method = options.method || defaultMethod;
        const useCaching = options.useCaching || defaultUseCaching;

        console.log(`fetch: ${method} ${url} (useCaching=${useCaching})`);
      }

      fetch({
        url: 'http://www.example.com',
        useCaching: false
      });
    }

    bug6() {
      function run(options) {
        if (options.script == undefined) {
          options.script = 'main.js';
        }

        console.log(`run: script=${options.script}`);
      }

      run();
    }

    bug7() {
      function run(options = {}) {
        if (options.stopOnError == undefined) {
          options.stopOnError = 'all';
        }

        console.log(`run: stopOnError=${options.stopOnError}`);
      }

      run();
      run({stopOnError: null});
    }

    bug8() {
      for (var i = 0; i < 5; i++) {
        setTimeout(function () {
          console.log(i+1);
        }, 100*i);
      }
    }

    bug9() {
      const cars = [{
        make: 'Volvo',
        type: 'S90'
      }, {
        make: 'BMW',
        type: 'i8'
      }, {
        make: 'BMW',
        type: 'M3'
      }, {
        make: 'Audi',
        type: 'A6'
      }];

      function findCars(make) {
        return cars.filter(car => car.make = make);
      }

      for (let bmw of findCars('BMW')) {
        console.log(`${bmw.make} ${bmw.type}`);
      }
    }

    bug10() {
      const command = 'printHelp';

      switch (command) {
        case 'printMath':
          console.log(`√9=${Math.sqrt(9)}`);
        case 'printHelp':
          console.log('Help');
        case 'quit':
          console.log('Quitting');
      }
    }

    bug11() {
      class Game {
        constructor() {
          this.players = [];
        }

        addPlayers(names) {
          names.forEach(function (name) {
            this.players.push({name, points: 0});
          });
        }
      }

      const game = new Game();
      game.addPlayers(['Alice', 'Bob']);

      for (let player of game.players) {
        console.log(`Player ${player.name} has ${player.points} points`);
      }
    }

    bug12() {
      let y = 5;

      function printVector() {
        let x = 6;
            y = 7;

        console.log(`Printing vector at (${x}, ${y})`);
      }

      printVector();
      console.log(`y=${y}`);
    }

    bug13() {
      var notInTop10 = (movieName) => {
        return !this.top10Movies.indexOf(movieName)
      }
      console.log('Independence Day is ' + (notInTop10('Independence Day')?'not ':'') + 'in the top 10!');
      console.log('AI is ' + (notInTop10('AI')?'not ':'') + 'in the top 10!');
      console.log('Godfather is ' + (notInTop10('Godfather')?'not ':'') + 'in the top 10!');
      console.log('Inception is ' + (notInTop10('Inception')?'not ':'') + 'in the top 10!');
    }
    bug14() {

      console.log('AI is ' + (isInFirstPlace('AI')?'':'not ') + 'best movie ever')
      console.log('Godfather is ' + (isInFirstPlace('Godfather')?'':'not ') + 'best movie ever')
      var isInFirstPlace = (movieName) => {
        return this.top10Movies[0] === movieName
      }
    }
    bug15() {
      var getAlphabeticalFirst = function() {
        return this.top10Actors.sort()[0]
      }

      console.log(`The first actor when sorted alphabetically is ${getAlphabeticalFirst()}`)
    }
    bug16() {
      const ranking = this.top10Actors.indexOf('Al Pacino');
      // var thirdRankedActor = this.top10Actors['2'];
      console.log(`Al Pacino is ranked ${ranking + '1'}`)
    }

}
