$(function(){
$.ajax({
  url: 'https://www.codeschool.com/users/3871087.json',
  dataType: 'jsonp',
  success: function(response){
    console.log('response', response);
  }
  });
});
