$(document).ready(function(){
  setHeadersImage("en-US", 2);
  getNews();
});
    
//Get news
function getNews() {
  var flickerAPI = "http://api.mediastack.com/v1/news?";

  $.getJSON( flickerAPI, {
    access_key: "d9390a30205e386c28e016a20d975580",
    countries: "us",
    date: "2022-01-01",
    format: "json"
  })
    .done(function( data ) {
        var items = data.data;

        $.each(items, function(i, item){
          if(item.image != null){  
            $('section').append(`
              <div>
                <p class="author">${item.author}</p>
                <a href="${item.url}" target="_blank">
                  <img class="image" src="${item.image}">
                </a>
                <h1>${item.title}</h1>
            </div>`);
          }
    });
  });
};

// set headers image   format=js&idx=0&n=1
function setHeadersImage(country, numberOfImages){
  var bingAPI = 'http://www.bing.com/HPImageArchive.aspx?'

  $.getJSON( bingAPI, {
    format: "js",
    idx: 0,
    mkt: country,
    n: numberOfImages
  }).done(function(data){
    var image = "http://bing.com" + data.images[1].url;
    $('header').css("background-image", "url(" + image + ")");

  });
};