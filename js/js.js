$(document).ready(function(){

//variables for input markup
	var $text = $('#textbox');

//add button click to append shopping list
		$('#addbutton').on('click', function(){
			$("#shoppinglist").append('<li class = "items">' + '<input type = "checkbox" class = "box">' + $text.val() + '<button class = "delete"> X </button>' + '</li>');
			$('#textbox').val('');

			});

//Delete item outside of append function
		$('#shoppinglist').on('click', '.delete', function(event){
			$(event.target).closest("li").remove();
			
			});

//Item strike outside of append function	
		$('#shoppinglist').on('click', '.box', function(event){
			$(event.target).closest('li').toggleClass('itemsStrike');

			});

//Enter button to append ul		
		$('.input').on('keypress', function(event){
			if (event.which === 13) {
				$("#shoppinglist").append('<li class = "items">' + '<input type = "checkbox" class = "box">' + $text.val() + '<button class = "delete"> X </button>' + '</li>');
				$('#textbox').val('');
				}
			});

});