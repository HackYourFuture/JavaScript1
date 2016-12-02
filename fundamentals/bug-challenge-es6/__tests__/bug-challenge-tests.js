import BugChallenge from '../bug-challenge';
import '../jest-helpers';

describe('Bug challenge ES6', () => {

  let challenge;
  beforeEach(() => {
    console.clear();
    challenge = new BugChallenge();
  });

  describe('bug1', () => {

    it("should list the names and ages of people", () => {
      challenge.bug1();

      expect(console.logs).toEqual([
        "Alice is 25",
        "Bob is 27",
        "Charlie is 40"
      ]);
    });

  });

  describe('bug2', () => {

    it("should list all items in the array in reverse order", () => {
      challenge.bug2();

      expect(console.logs).toEqual([
        '4',
        '3',
        '2',
        '1'
      ]);
    });

  });

  describe('bug3', () => {

    it("should output the total of the indices (0 + 1 + 2 = 3)", () => {
      challenge.bug3();

      expect(console.logs).toEqual([
        '3'
      ]);
    });

  });

  describe('bug4', () => {

    it("should list all movies and actors, except the top 3", () => {
      challenge.bug4();

      expect(console.logs).toEqual([
        'movie: Pulp Fiction',
        'movie: Fight club',
        'movie: Forrest Gump',
        'movie: Inception',
        'movie: Goodfellas',
        'movie: The Matrix',
        'movie: Interstellar',
        'actor: Al Pacino',
        'actor: Daniel Day-Lewis',
        'actor: Duston Hoffman',
        'actor: Tom Hanks',
        'actor: Anthony Hopkins',
        'actor: Paul Newman',
        'actor: Denzel Washington'
      ]);
    });

  });

  describe('bug5', () => {

    it("should fetch with caching disabled", () => {
      challenge.bug5();

      expect(console.logs).toEqual([
        'fetch: GET http://www.example.com (useCaching=false)'
      ]);
    });

  });

  describe('bug6', () => {

    it("should run main.js", () => {
      challenge.bug6();

      expect(console.logs).toEqual([
        'run: script=main.js'
      ]);
    });

  });

  describe('bug7', () => {

    it("should first run with stopOnError=all and then with stopOnError=null", () => {
      challenge.bug7();

      expect(console.logs).toEqual([
        'run: stopOnError=all',
        'run: stopOnError=null'
      ]);
    });

  });


  describe('bug8', () => {

    it("should lists numbers 1 through 6", () => {
      challenge.bug8();
      jest.runAllTimers();

      expect(console.logs).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5'
      ]);
    });

  });

  describe('bug9', () => {

    it("should list only BMWs", () => {
      challenge.bug9();

      expect(console.logs).toEqual([
        'BMW i8',
        'BMW M3'
      ]);
    });

  });

  describe('bug10', () => {

    it("should print 'Help'", () => {
      challenge.bug10();

      expect(console.logs).toEqual([
        'Help'
      ]);
    });

  });

  describe('bug11', () => {

    it("should correctly add players Alice & Bob", () => {
      challenge.bug11();

      expect(console.logs).toEqual([
        'Player Alice has 0 points',
        'Player Bob has 0 points'
      ]);
    });

  });

  describe('bug12', () => {

    it("should not change the value of the outer y", () => {
      challenge.bug12();

      expect(console.logs).toEqual([
        'Printing vector at (6, 7)',
        'y=5'
      ]);
    });

  });
  describe('bug13', () => {
    it("should return that AI, Godfather and Inception are in the top10 movie list", () => {
      challenge.bug13();
      jest.runAllTimers();

      expect(console.logs).toEqual([
        "Independence Day is not in the top 10!",
        "AI is in the top 10!",
        "Godfather is in the top 10!",
        "Inception is in the top 10!"
      ]);
    });

  });
  describe('bug14', () => {
    it("should return that AI is best movie ever", () => {
      challenge.bug14();
      jest.runAllTimers();

      expect(console.logs).toEqual([
        "AI is best movie ever",
        "Godfather is not best movie ever",
      ]);
    });
  });
  describe('bug15', () => {
    it("should return Al Pacino as first actor after sorting alphabetically", () => {
      challenge.bug15();
      jest.runAllTimers();

      expect(console.logs).toEqual([
        'The first actor when sorted alphabetically is Al Pacino'
      ]);
    });
  });
  describe('bug16', () => {
    it("should return that Al Pacino is ranked 4th among all actors", () => {
      challenge.bug16();
      jest.runAllTimers();

      expect(console.logs).toEqual([
        'Al Pacino is ranked 4'
      ]);
    });
  });
});
