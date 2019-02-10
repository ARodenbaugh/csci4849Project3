$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show(); // show the element with ID "element"
	$("#ContactList").hide(); // hide the element with ID "otherElement"
  	$("#AddContact").hide(); // hide the element with ID "otherElement"
});

$("#DialerBtn").click(function() { // when "button_id" is clicked
	$("#Dialer").show(); // show element
	$("#AddContact").hide();	// hide other element
	$("#Help").hide();
  	$("#ContactList").hide();	// hide other element
});

$("#AddContactBtn").click(function() { // when "button_id" is clicked
	$("#Dialer").hide(); // show element
	$("#AddContact").show();	// hide other element
	$("#Help").hide();
  	$("#ContactList").hide();	// hide other element
});

$("#ContactListBtn").click(function() { // when "button_id" is clicked
	$("#Dialer").hide(); // show element
	$("#AddContact").hide();	// hide other element
	$("#Help").hide();
  	$("#ContactList").show();	// hide other element
});
$("#HelpBtn").click(function() { // when "button_id" is clicked
	$("#Dialer").hide(); // show element
	$("#AddContact").hide();	// hide other element
	$("#ContactList").hide();	// hide other element
  	$("#Help").show();	// hide other element
});

function dialButton(button) {
    var x = button.value;
    document.getElementById("displayDial").innerHTML += x;
}
function clearDial(button) {
    var x = " ";
    document.getElementById("displayDial").innerHTML = x;
}

function dialNumber(button) {
    var x = "   ... DIALING ...";
    document.getElementById("displayDial").innerHTML += x;
}
/* function for inserting numbers in input*/
$("#dialer_pad button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
})
// function for clearing values
$("#button_dialer_clear").click(function() {
	$("#number_input").val("");
})
