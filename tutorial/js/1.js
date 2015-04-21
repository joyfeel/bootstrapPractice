//Closure cmdCount
function commandCounter () {
	var count = 0;
	return {
		increment: function () {
			count++;
		},
		decrement: function () {
			count--;
		},
		use: function () {
			return count;
		},
		initialization: function () {
			count = 0;
		}
	}
}


$(function() {
	var cmdCount = commandCounter();
	var cmdType = [1, 2 ,3, 4, 5, 6];

    $( ".blog-nav a" ).on("click", function(){
    	$(this).parent().find(".active").removeClass("active");
    	$(this).addClass("active");
    });

	$( "li.cmdTypeA" ).on("click", function() {
		var selected = $(this).text();


		var inputDiv = $("<div></div>").attr("class", "form-group inputDiv");
		var inputDivContent = $("<label class= 'col-sm-1 control-label cmdIndex'>" + selected + "</label>"	
				+ "<div class = 'col-sm-4'>"
				+ "<input type='text' class='form-control textbox" + cmdCount.use() + "' placeholder = 'Hex'>"
				+ "</div>" 
				+ "<p class = 'cmdType' hidden>" + cmdType[0] + "</p>");

		inputDiv.html(inputDivContent);
		inputDiv.appendTo(".form-horizontal");

		cmdCount.increment();
	});


	$( "li.cmdTypeB" ).on("click", function() {
		var selected = $(this).text().replace(/\d+$/, "");

		var inputDiv = $("<div></div>").attr("class", "form-group inputDiv");
		var inputDivContent = $("<label class= 'control-label cmdIndex'>" + selected + "</label>"	
				+ "<p class = 'cmdType' hidden>" + cmdType[1] + "</p>");

		inputDiv.html(inputDivContent);
		inputDiv.appendTo(".form-horizontal");

		cmdCount.increment();
	});	


});