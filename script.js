$(document).ready(function() {

var search;
searchPage('aww')

function searchPage(t) {
search = t;
if (search != '') {
$('.wrap').html('')

$.get('https://www.reddit.com/r/' + search + '/.json').done(function(responseBody) {

var x = responseBody.data.children;
console.log(x);
$('body').append('<div class="wrap"><h2>/r/'+ x[0].data.subreddit + '</h2>' +
'<div class="row">' +
'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
'<div class="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>' +
'<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">' +
'<div class="row insert"></div></div>' +
'<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2">' +
'</div></div></div>');
for (var i = 0; i < x.length; i++){
  var thumb = null;
  if(x[i].data.thumbnail_height === null){
    thumb = x[i].data.thumbnail;
  } else{
    thumb = x[i].data.preview.images["0"].source.url;
  }

  $('.insert').append('<div class="col-lg-5 col-md-5 col-sm-11 col-xs-11  clearFix">' +
  '<div class="row">' +
  '<a href="https://www.reddit.com'+ x[i].data.permalink + '">' +
  '<div class="col-lg-6 col-md-6 col-sm-3 col-xs-3">' +
  '<img src="' + thumb + '" class="img-thumbnail"></div>' +
  '<div class="col-lg-6 col-md-6 col-sm-9 col-xs-9">' +
  '<p class="title">Title: ' + x[i].data.title + '</p>' +
  '<p>Author: '+ x[i].data.author +'</p>' +
  '<p>Domain used: '+ x[i].data.domain +'</p></div></a></div>')
}
console.log(responseBody);

});

};
};
$('button').on('click', function(){
  search = $('input').val();
  searchPage(search);
})
});
