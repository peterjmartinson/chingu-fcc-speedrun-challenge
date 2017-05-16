/**
 * wiki.js
 *
 * 1. Search Wikipedia entries in a search box and see the resulting
 *    Wikipedia entries.
 * 2. Click a button to see a random Wikipedia entry.
 * 3. Clicking on an article opens a new window with Wikipedia
*/

(function() {
console.log("in wiki.js");

  var dom = {};
  dom.instructions = document.getElementById("instructions");
  dom.results      = document.getElementById("results");
  dom.search       = document.getElementById("search-button");
  dom.random       = document.getElementById("random-button");

  // ===  DEFINE FUNCTIONS  =======================================
  function populateDOM() {
    dom.instructions.innerHTML  = 'instructions';
    dom.results.innerHTML       = 'results';
  }

  function getRandomArticle() {
    var random_url = 'https://en.wikipedia.org/wiki/Special:Random';
    window.open(random_url,'_blank');
  }

  /**
   * create an unordered list of search results
   * @param [object] the AJAX response object
  */
  function listResults(res) {
    var list = '<ul>';
    res.query.search.forEach(function(e) {
      var list_element = '';
      list_element += '<li>';
      list_element += '  <strong>' + e.title + '</strong><br>';
      list_element += '  <em>' + e.snippet + '</em>';
      list_element += '</li>';
      list += list_element;
    });
    list += '</ul>';
    return list;
  }

  function returnOne() {
    return 1;
  }

  // ===  RUN THE PROGRAM ========================================
  populateDOM();


  $("#random").on("click", getRandomArticle);
  // dom.random.onclick = getRandomArticle();
  dom.search.onclick = function() {
    var val = dom.button.form.searchy.value.replace(/\s+/g,'%20');
    var wiki_url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + val;
    dom.results.innerHTML = 'Searching...';

    $.get(wiki_url, function(response) {
      dom.results.innerHTML = listResults(response);
      console.log(response.query.search[0].title);
      console.log(response.query.search[0].snippet);
    });
    
    // var mock_results = [
    //   {
    //     title : 'First result',
    //     blurb : 'First blurb'
    //   },
    //   {
    //     title : 'Second result',
    //     blurb : 'Second blurb'
    //   },
    //   {
    //     title : 'Third result',
    //     blurb : 'Third blurb'
    //   },
    //   {
    //     title : 'Fourth result',
    //     blurb : 'Fourth blurb'
    //   }
    // ];

    // dom.results.innerHTML = listResults(mock_results);
  }

}());