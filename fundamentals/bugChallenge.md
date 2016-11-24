For each of the snippets below, explain the bugs in your own words.

# Bug 1

### code
```
for(var i = 0; i < 5; i++){
	setTimeout(function(){
		console.log(i+1);
	}, 100*i);
}
```

### actual output:
```
6
6
6
6
6
```
### expected output:
```
1
2
3
4
5
```

# Bug 2

### code
```
var top10Movies = [
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
var top10Actors = [
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

//just want to get all movies except top 3
var index = 3;
for (index; index < top10Movies.length; index++) {
  console.log('movie: ', top10Movies[index])
}
//also want to get all actors except top 3
for (index; index < top10Actors; index++) {
  console.log('actor: ' + top10Actors[index])
}


```

### actual output:
```
movie:  Pulp Fiction
movie:  Fight club
movie:  Forrest Gump
movie:  Inception
movie:  Goodfellas
movie:  The Matrix
movie:  Interstellar

```
### expected output:
```
movie:  Pulp Fiction
movie:  Fight club
movie:  Forrest Gump
movie:  Inception
movie:  Goodfellas
movie:  The Matrix
movie:  Interstellar
actor: Al Pacino
actor: Daniel Day-Lewis
actor: Duston Hoffman
actor: Tom Hanks
actor: Anthony Hopkins
actor: Paul Newman
actor: Denzel Washington
```
