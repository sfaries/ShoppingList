$(document).ready(function(){

//variables for input markup
	var $text = $('#textbox');

//add button click to append shopping list
		$('#addbutton').on('click', function(){
			$("#shoppinglist").append('<li class = "items">' + '<input type = "checkbox" class = "box">' + $text.val() + '<button class = "delete"> X </button>' + '</li>');
			$('#textbox').val('');

//X button click to delete item

		$('.delete').on('click', function(event){
			$(event.target).closest("li").remove();
			
			});

//checkbox click to strike shopinglist items using toggle

		$('.box').on('click', function(event){
			$(event.target).closest('li').toggleClass("itemsStrike");
		
			});
	});

//HARDCODED delete and strike
/*
		$('.box').on('click', function(event){
			$(event.target).closest('li').toggleClass("itemsStrike");
		
			});

		$('.delete').on('click', function(event){
			$(event.target).closest("li").remove();
			
			});
*/

});

//Alternate strike code
/*
$('li').on('click', function(){
			$(this).toggleClass('itemsStrike');
		});
*/