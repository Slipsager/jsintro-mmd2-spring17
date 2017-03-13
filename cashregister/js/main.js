// Variable available 'globally' - think scope
var runningTotal = 0;

// Adds an item to the list - accepts the value of the input as a parameter
function addLineItem(value) {
  // Get the single item and the list of items from the DOM
  var list = document.getElementById('list');
  var item = document.createElement('li');

  // Add the single item to the DOM to two decimal points
  item.innerHTML =  value.toFixed(2)+ "€";
  // Then attach it to the bottom of the list
  list.appendChild(item);
};

// This updates our runningTotal - accepts the value of the input as a parameter
function updateTotal(value) {
  // Get the runningTotal from the DOM
  var totalLineItem = document.getElementById('total-line-item');

  // update the runningTotal value by adding our new value to it
  runningTotal += value;
  // Update the DOM with our new runningTotal to two decimal points
  totalLineItem.innerHTML = runningTotal.toFixed(2)+"€";

  // We're done now so clear the value from the input box
  clearForm();
};

// Check that the value is a number - think types - accepts the value of the input as a parameter.
function validate(value) {
  // If my number is not not a number (double negative is positive), execute the block
  if ( !isNaN(value) ) {
    // Call the two update functions with the value
    addLineItem(value);
    updateTotal(value);
  } else {
    // Or display an error to the user by updating the error HTML
    var error = document.getElementById('error');
    error.innerHTML = 'Please enter a number';
  }
};

// Clears the errors each time I submit the form
function clearErrors() {
  // Get the error HTML
  var error = document.getElementById('error');

  // And clear the text by setting to an empty string
  error.innerHTML = '';
};

// Clears the form value as per the errors by setting to an empty string
function clearForm() {
  var formValue = document.getElementById('new-item');

  formValue.value = '';
};

// When the page loads, execute the anonymous function automatically
window.onload = function() {
  // Get the form from the DOM
  var form = document.getElementById('entry');

  // When the form submits, execute another anonymous funtion
  form.onsubmit = function(event) {
    // This function automatically generates an event object - we need to tell the browser to not sumit the form to the server
    event.preventDefault();

    // Clear any errors we have from the previous submit
    clearErrors();

    // Get the value in the input box
    var newItemValue = document.getElementById('new-item').value;

    // Turn it from a string to a number
    newItemValue = parseFloat(newItemValue);

    // validate that we have a number with the value from the form
    validate(newItemValue);
  }
};
