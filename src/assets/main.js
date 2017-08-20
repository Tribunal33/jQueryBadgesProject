$(function(){
$.ajax({
  url: 'https://www.codeschool.com/users/3871087.json',
  datatype: 'jsonp',
  success: function(response){
    console.log('response', response);
  }
  });
});
