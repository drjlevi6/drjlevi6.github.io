// Set up the button with an event listener
let addButton = $('#button');
let ol = $('ol');

addButton.on('click', function startNewListItem(){
	let userInput = $('#input').val();

	// validate text before finishing new item
	if (userInput) {	
		let newToDoItem = finishNewItem(userInput);
		$('#list').append(newToDoItem);
		$('#list').sortable();
		
		/* Clear input box when item is created. 
		(NOT just ornamental: without this, attempts
		to sort items fail as they just snap back to
		their original position.) */
		$('#input').val('');
	} else {
		alert("You didn’t enter anything!");
	}
	return;	// Also need this for dragging to persist

});

// Add listener for double-clicks; append crossout button
function finishNewItem(userInput) {
	let newItem = $('<li></li>');
	newItem.append(userInput)
	.on("dblclick", function(){
		newItem.toggleClass('strike');
	});
	appendCrossOutButton(newItem);
	return(newItem);
}

function	appendCrossOutButton(newItem) {
	let crossOutButton = $('<span>X</span>');
	crossOutButton.on('click', (e) => {
		console.log(e);
		$(e.target).parent().addClass('delete');
	})
	newItem.append(crossOutButton);
}
