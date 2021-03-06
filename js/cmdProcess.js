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

//Closure fileCount
function fileCounter () {
	var count = 0;
	return {
		set: function(number) {
			count = number;
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
	var fileCount = fileCounter();
	var cmdType = [1, 2 ,3, 4, 5, 6];

	var files = new Array();
	var cmdListArray = new Array();
	var JSONObject = new Object;
	var hasArgument = true;	
	var sequenceFiles = new Array();
	var cmdLabelToTabel = new Array();

	var pollSequenceFileCount = 0;
	var timer;
	var statusDir = "../emmc/statusFiles/";
	var pollTestCaseCount = 0;

	function cssTextDiv(count) {
		$(".cmdIndex").addClass("labelSetting");
		$(".textbox" + count).addClass("textTextBoxSetting");
		$(".filebox" + count).addClass("fileTextBoxSetting");
	}

	$( "li.cmdTypeA" ).on("click", function() {
		var selected = $(this).text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[0] + "</p>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case A - TestCase
	$( "li.cmdTypeB" ).on("click", function() {
		var selected = $(this).text().replace(/\d+$/, "");
		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var normalTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[1] + "</p>" +
		  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
		  "<label class = 'cmdIndex'>" + selected + "</label>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case B - RWCase
	$( "li.cmdTypeC" ).on("click", function() {
		var selected = $(this).text().replace(/\d+$/, "");

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[2] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" +
			  "<input type='file' name='textbox" + cmdCount.use() + 
			  "' class='filebox" + cmdCount.use() + "' value='' >");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case C - EraseCase
	$( "li.cmdTypeD" ).on("click", function() {
		var selected = $(this).text().replace(/\d+$/, "");

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[3] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case D - GppCase
	$( "li.cmdTypeE" ).on("click", function() {
		//var selected = $(this).text().replace(/\d+$/, "");
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[4] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case D - UDACase
	$( "li.cmdTypeF" ).on("click", function() {
		var selected = $(this).text().replace(/\d+$/, "");

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[5] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	$( ".TextBoxesGroup" ).on("click", ".cmdIndex", function() {
		cmdCount.decrement();
		$(this).parent().remove();
	});	

	$( ".buttonReset" ).click(function() {
		$( ".buttonSend" ).show();
		cmdCount.initialization();
		fileCount.initialization();
		resetGlobalVariable();
		$( ".TextBoxesGroup" ).children().remove();
		$('.responseTable').remove();
	});

	function resetGlobalVariable() {
		hasArgument = true;
	    cmdListArray = new Array();
	    JSONObject = new Object;
		pollSequenceFileCount = 0;
		sequenceFiles = new Array();
		pollTestCaseCount = 0;
		cmdLabelToTabel = new Array();
	}

///////////////////////////////////////////////////////////////////////
// Variable to store your files
// Add events
	$("form").on('submit', function(event) {
		if (cmdCount.use() != 0) {
			processSendJSON();
			if (hasArgument == false) {
				resetGlobalVariable();
				alert ("One of the arguments is empty!");
				return false;			
			}
			
			uploadFiles(event, $(this));
			createTable();
			doPollSequenceFile();
				
		} else {
			alert ("You must select at least one command!");
			return false;
		}
	});

	// Catch the form submit and upload the files
	function uploadFiles(event, linkObj) {
		event.stopPropagation(); 	// Stop stuff happening
		event.preventDefault();  	// Totally stop stuff happening

		$( linkObj ).find("input:submit").hide();
		processFileSubmit(event);
	}

	function fileExist(file) {
		var http = new XMLHttpRequest();
		http.open('HEAD', statusDir + file, false);
		http.send();

		return http.status!=404;
	}

	function appendFileStatus (file) {
		$.ajax({
    		url: statusDir + file,
    		success: function (data) { processResponseJSON(data); },
    		dataType: 'text'
		});
	}
//<table border='1' class="responseTable" hidden></table>
	function createTable () {
		var table = $( "<table style='width:100%' border='1' class='responseTable'></table>" );
		table.appendTo(".ResponseGroup");

		var tr = $( "<tr></tr>" );
		$("<th style='width:25%' align='left'>" + "CMD" 		+ "</td>" + 
		"<th style='width:10%' align='left'>" 	+ "Argument[0]" 	+ "</td>" + 
		"<th style='width:10%' align='left'>" 	+ "Argument[1]" 	+ "</td>" + 
		"<th style='width:25%' align='left'>" 	+ "Argument[2]" 	+ "</td>" + 
		"<th style='width:10%' align='left'>" 	+ "Resp       "		+ "</td>" + 
		"<th style='width:20%' align='left'>" 	+ "ReadFileName " 	+ "</td>").appendTo(tr);
		
		tr.appendTo(".responseTable");
	}

//{ "Argument" : [ 10 ], "CMDINDEX" : 2, "ReadFileName" : "201503030858070.json", "Response" : 1111111 }
	function processResponseJSON (data) {
		console.log(data);
		var obj = $.parseJSON(data);
		var tr = $( "<tr></tr>" );
		var count = 0;

		$("<td align='left'>" + cmdLabelToTabel[pollTestCaseCount++].text() + "</td>").appendTo(tr);

		if (obj.Argument != null) {
			$.each(obj.Argument, function(index, value) {
				$("<td align='center'>" + value.toString(16) + "</td>").appendTo(tr);
				count = index;
			});
		} else {
			count = -1;
		}

		for (var i = 0; i < (3 - count - 1); i++) {
			$("<td>" + "" + "</td>").appendTo(tr);
		}
		$("<td align='center'>" + obj.Response + "</td>").appendTo(tr);
		$("<td align='center'>" + obj.ReadFileName + "</td>").appendTo(tr);

		tr.appendTo(".responseTable");
	}

	function doPollSequenceFile() {
		var currSequenceFile = sequenceFiles[pollSequenceFileCount];
		//Check whether the file exists or not.
		if (fileExist(currSequenceFile)) {
			appendFileStatus(currSequenceFile);		//Append the file content to the front page		
			pollSequenceFileCount++;
		} 

		//After finishing polling all of the sequence files, stop the setTimeout
		if (sequenceFiles.length == pollSequenceFileCount) {															
			clearTimeout(timer);
			return false;
		} else {
			timer = setTimeout(doPollSequenceFile, 800);
		}
	}

/*
	function setCmdRW (cmdIndex) {
		if (cmdIndex.text() == "READ") {
			console.log("READ");
			return 0
		} else if (cmdIndex.text() == "WRITE") {
			console.log("WRITE");
			return 1;
		}
	}
*/

	function setCmdIndex (cmdObject, cmdIndex, testcase) {
		cmdLabelToTabel.push(cmdIndex);
		switch (cmdObject.CMDType) {
			case 1:
				return parseInt(cmdIndex.text().replace(/^Command/, "")); 
			default:
				return parseInt(testcase.text());
		}
	}

	function processSendJSON () {
		var timeStamp = new Date().toISOString().replace(/\D/g,"").substr(0,14);
		var CMDType, CMDINDEX, Argument, testcase;
		var tempSequenceFile;
		var localFileCount = 0;

		$(".divTextBox").each(function(index) {
			CMDType  = $( this ).children(".cmdType");			// Type		
			CMDINDEX = $( this ).children(".cmdIndex");			// Command
			testcase = $( this ).children(".testcaseNumber");	//
			Argument = $( this ).children("input");				// Argument
			
			var cmdObject = new Object();						// {Type + Command + Argument}

			cmdObject.CMDType  = parseInt(CMDType.text());
			cmdObject.CMDINDEX = setCmdIndex (cmdObject, CMDINDEX, testcase);

			cmdObject.Argument = new Array();
			$(Argument).each(function(index, value) {
				if ( $(this).val().length != 0 ) {
					if (this.type === "text") {
						cmdObject.Argument.push (parseInt( $(this).val(), 16 ));	
					} else if (this.type === "file"){
						cmdObject.Argument.push ( $(this).val().replace(/^.*\\/,"") );	
						fileCount.set(++localFileCount);	
					}
				} else {
					hasArgument = false;
				}
			});

			tempSequenceFile = timeStamp + index + ".json";
			sequenceFiles.push( tempSequenceFile );
			cmdObject.ReadFileName = tempSequenceFile;
			cmdListArray.push(cmdObject);
		});
		JSONObject.CMD = cmdListArray;

		console.log(JSON.stringify(JSONObject));
	}

	function processFileSubmit (event) {
		for (var i = 0; i < fileCount.use(); i++) {
			var temp = $('input[type=file]')[i].files;
			files = $.merge(files, temp);
		}
		// START A LOADING SPINNER HERE
		// Create a formdata object and add the files
		var data = new FormData();
		$.each(files, function(key, value) {
			data.append(key, value);
		});
		
		$.ajax({
		    url: 'statusFiles/submit.php?files',
		    type: 'POST',
		    data: data,
		    cache: false,
		    dataType: 'json',
		    processData: false, // Don't process the files
		    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		    success: function(data, textStatus, jqXHR) {
		    	if(typeof data.error === 'undefined') {
		    		// Success so call function to process the form

		    		submitForm(event, data);
		    	} else {
		    		// Handle errors here
		    		console.log('ERRORS: ' + data.error);
		    	}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    	console.log('ERRORS: ' + textStatus);
		    	// STOP LOADING SPINNER
		    }
		});
	}

	function submitForm(event, data)
	{
		// Create a jQuery object from the form
		$form = $(event.target);

		// Serialize the form data
		var formData = $form.serialize();

		// You should sterilise the file names
		$.each(data.files, function(key, value) {
			formData = formData + '&filenames[]=' + value;
		});

		$.ajax({
		    url: 'statusFiles/submit.php',
		    type: 'POST',
		    data: {
				postFormData : formData,
				postCmdFIFO : JSON.stringify(JSONObject)
			},
		    cache: false,
		    dataType: 'json',
		    success: function(data, textStatus, jqXHR) {
		    	if(typeof data.error === 'undefined') {
		    		// Success so call function to process the form
		    		console.log('SUCCESS: ' + data.success);
		    	} else {
		    		// Handle errors here
		    		console.log('ERRORS: ' + data.error);
		    	}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    	// Handle errors here
		    	console.log('ERRORS: ' + textStatus);
		    }, 
			complete: function() {
		    	// STOP LOADING SPINNER
		    }
		});
    }

});
