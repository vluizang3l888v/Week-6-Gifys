//The event listener for all button elements
$(document).on("click", "button", function () {
  $(".item").remove();
  //this above will remove the previous results. 
  //.item removes eveything that came up. 

  var Nation = $(this).attr("data-nation");
  //keyboard example. 

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    Nation + "&api_key=sFupKidTmIwe4o3b2QqaCWwcy2D83hMS&limit=10";



  //going to AJAX
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    //going to AJAX
    //AJAX go find query URL above & then GET it.. <-- in English. 

    .then(function (response) {
      //after data comes back from the API. 

      var results = response.data;
      //storing array of results in console.log, in the results variable. 
      console.log(results);
      //looping over every result item. 
      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // if results not eqaul to R and not equal to pg-13 then go on to the next steps. 
          console.log("in if");
          var gifDiv = $("<div class='item'>");
          // saving a memory spot to append later ..
          console.log("div created");
          var rating = results[i].rating;
          // find result and get rating then put it in var rating. 

          var p = $("<p>").text("Rating: " + rating);
          //making a paragraph to add the rating intel. 
          console.log("rating set");
          var personImage = $("<img>");

          // give person image a class. To have way of picking images. 
          personImage.addClass("personImageClass");

 

          //animation ATTR
          personImage.attr("src", results[i].images.fixed_height.url);

          //for the animated URL.        
          personImage.attr("data-Animate", results[i].images.fixed_height.url);


          //pause intel ATTR
          personImage.attr("data-Still", results[i].images.fixed_height_still.url)
          //pause intel. 

          //ADD THE STATE FOR THE HUMANS. to be able to see what is going on. 
          personImage.attr("data-state", "animate");




          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);
          console.log("everything apended");


          $("#gifs-appear-here").prepend(gifDiv);


        }

      }

    });
});
//code for the SEARCH BOX did not work!!!!!
$("#banana").on("click", function (asLongAsTheNamesMatch) {
  asLongAsTheNamesMatch.preventDefault();
  var memory = $("#2ndNationSearch").val();
  var storage = $("<button>"); //CAN'T SEE THIS, IT'S MEMORY
  storage.attr("data-nation", memory);
  storage.text(memory);
  $("#newStuff").append(storage);
});
//code for the SEARCH BOX did not work!!!!!


// pause & unpause WORKS
$("#gifs-appear-here").on("click", ".personImageClass", function () {
  var STATE = $(this).attr("data-state")
  if (STATE === "STILL") {
    $(this).attr("src", $(this).attr("data-Animate"))
    $(this).attr("data-state", "animate");  //humans to see if still or not ONLY. 
  } else {
    $(this).attr("src", $(this).attr("data-Still"))
    $(this).attr("data-state", "STILL");

  }

})
// pause & unpause WORKS




//END.































//var TopicAsianNations = ["China" , "Japan", "Vietnam","Indonesia", "South Korea", "North Korea", "Mongolia" ]

//function ButtonSelector(){

    //for(var crazyLoop = 0; crazyLoop < TopicAsianNations.length; crazyLoop++){
    //var NewPress = $("<button>"); //CAN'T SEE THIS, IT'S MEMORY
    //NewPress.text(TopicAsianNations[crazyLoop]);
    //NewPress.attr("id","TopicOfGif");
   // $("#button-holder").append(NewPress); //THIS MAKES ITS VISIBLE.



  //  }


//}


//ButtonSelector();

//when button are clicke of ID TopicOfGif.
//$("#btn-holder").on("click", "#gif-topics", function(){
 //   $.ajax({
  //    url: queryURL,
   //   method: 'GET',
    //  rating: "g"
      // title: text of button clicked
    //}).then(function(response) {
      //  console.log(response);
     // //grab 10 gifs and ratings
      //create 10 new html gif image tags
      //create corresponding ratings tags
      //
 //   });
// })

