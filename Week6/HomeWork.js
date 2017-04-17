(function(){
  var GitHubUrl = 'https://api.github.com';

  // This function performs an http request to a server
  // Return a promise https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
  function Ajax ( method, url ){

    // For promise take a first argument a function
    // and the first two parameters are two function
    // The first is resolve that can be call when the async operation goes well
    // and the second is reject that can be call when something goes wrong
    return new Promise(function(resolve, reject){
      var req = new XMLHttpRequest();
      req.addEventListener('load', function(){
        // Our request is loaded
        try{
          resolve( JSON.parse(this.responseText) )
        }catch(e){
          reject( new Error(e) )
        }
      });
      req.open(method, url);

      // This is needed to autheticate your requests
      // For don't get limits on api
      req.setRequestHeader(
        'Authorization',
        'token 9d232e8e02c4b19142be0d89a0480a8109fd257b'
      );

      req.send();
    })
  }

  // We declare a function that fetch the repositories of one organization
  // And returns the Promise the above function returns
  function fetchReposFromOrganization( organizationName ){
    return Ajax( 'GET', [GitHubUrl, 'orgs', organizationName, 'repos'].join('/'));
  }

  var fetchedRepos = [];

  // Here we create a list
  function renderListOfRepositories ( res ){
    var html = [];
    var promisesForContributors = []

    // Here we loop trough the repos and we create some html
      for(var k=0; k<res.length; k++){
        var repo = res[k];
        var repoName = repo.full_name;
        var description = repo.description;
        var link = repo.html_url;

        // Since this information is handy later on to get the container
        // Where to render the list of contributors we create a reference in another variable.
        fetchedRepos.push(repo.id);

        // This is just string concatenation with some html
        html.push([
          '<li id="repo-', repo.id, '" >',
          '<a href="', link, '" />',
          '<h3>', repoName, '</h3>',
          '<p>', description, '</p>',
          '</a>',
          '<div class="contributors" ></div>',
          '</li>'
        ].join(''));

        // We create here a new promise for fetching the contributors of the repo and we push
        // to an Array of only promises
        promisesForContributors.push(fetchContributors(repo.owner.login, repo.name))
      }
    // Once the loop is done we paste in the html the result of our template
    document.getElementById('app').innerHTML = html.join('')

    // And we ask to resolve the Array of promises trough Promise.all
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    return Promise.all(promisesForContributors);
  }

  // This get used above for fetch the Contributors (line 73)
  function fetchContributors( owner, repo ){
    return Ajax( 'GET', [GitHubUrl, 'repos', owner, repo, 'contributors'].join('/'));
  }

  // Alike the renderListOfRepositories this renders the list of Contributors
  function renderContributors( repoContributors ){
    // The first array is the repo posiotion (equivalent to the promise relsolved order)
    for(var i=0; i<repoContributors.length; i++){
      var contributors = repoContributors[i];

      // We can have more then one contributor for repository so we iterate on them to template them
      var htmlContributors = ['<ul>'];
      for(var k=0; k<contributors.length; k++){
        var contributor = contributors[k];
        htmlContributors.push(`<li><img src="${contributor.avatar_url}" /><b>${contributor.login}</b></li>`)
      }
      htmlContributors.push('</ul>');
      // We find the reference (#repo-${id}) for the DOM element and we paste the template of contributors
      document.querySelector(`#repo-${fetchedRepos[i]} .contributors`).innerHTML = htmlContributors.join('');
    }

  }

  // Perform an Ajax function and return the result to the next then()
  fetchReposFromOrganization('hackyourfuture')
  // This get the repos list
    .then(renderListOfRepositories)
  // Render the list of contributors
    .then(renderContributors);

  // PROFIT \o/

})();
