$(document).ready(function(){
  
  function getWine(){
    return $.getJSON("http://daretodiscover.net/wine", function(){});
  }

  // $(".wineSearch").on("click", function(e){
  //   e.preventDefault();

    $.when(getWine()).done(function(result){
      console.log(result);

      var compliedTemplate = HandlebarsTemplates['wine']({result: result});

      $(".wineData").append(compliedTemplate);
      
    });

  // });

});

// $.ajax({
// 	url:"http://daretodiscover.net/wine", 
// 	type: "GET"
// 	dataType: "json",
// 	success: function (data) {
// 		console.log("wine data", data);
// 		}
// 	});
// });


// $.get("http://daretodiscover.net/wine").done(function(data) {
// 	console.log("wine data", data);
// });
