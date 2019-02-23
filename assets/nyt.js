$("button").on("click", function() {

    var terms = $("#search").val();
    var recNum = $("#number").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=earthquake&api_key=YqFdKpDRkyGefTGpGe2WAH1PEpPAibed";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        
      });
  });