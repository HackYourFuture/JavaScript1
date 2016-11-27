export default class BugChallenge {

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
      const top10Movies = [
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
      const top10Actors = [
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

      // We list all movies, except the top 3.
      var index = 3;
      for (index; index < top10Movies.length; index++) {
        console.log(`movie: ${top10Movies[index]}`);
      }

      // We also list all actors, except the top 3.
      for (index; index < top10Actors.length; index++) {
        console.log(`actor: ${top10Actors[index]}`);
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

}
