// ---------------------------
// Validate form
// ---------------------------
// How much would it cost for your name to be converted to a sign
// Each letter and special characters cost 5 dollars, you should be
// taxed on the product and not shipping, shipping comes in 3 flavors,
// and you get a small choice of different fonts ( no extra charge ).
//
// Take everything you have learned form the past examples to execute the app.


// Cache all DOM Input elements

//_---------Jquery Code/DOM Elements_____

var nameInput = $('[name="name"]');
var fontInput = $('[name="font-select"]');
var specialCharsInput = $('[name="specialchars"]');
var shippingInput = $('[name="shipping"]');
var calculateCostsButton = $('button#calculate');


//--------------DOM elemnts end Here

// Cache all DOM Display Elements
// var nameDisplay = document.querySelector('#name');
// Add the 6 other Display elements here.
//-----jquery dom Display elements----------
var nameDisplay = $('#name');
var lettersCostDisplay = $('#lettersCostDisplay');
var specialCharsCostDisplay = $('#specialCharsCostDisplay');
var subTotalDisplay = $('#subTotalDisplay');
var taxCostDisplay = $('#taxCostDisplay');
var shippingCostDisplay = $('#shippingCostDisplay');
var grandTotalDisplay = $('#grandTotalDisplay');

//----jquery dom elements display end here----------




// nameInput.addEventListener('input', function(e) {
//   // if the user has entered a value in the nameInput, then display it
//   // if not, then display 'Your Name Here'
//   if (nameInput.value != '') {
//     nameDisplay.innerHTML = nameInput.value;
//   } else {
//     nameDisplay.innerHTML = 'Your Name Here';
//   }
// });
// jquery --- name imput function------
nameInput.on('input', function (event) {
  if (nameInput.val() !== '') {
    nameDisplay.html(nameInput.val());
  } else {
    nameDisplay.html('your name here');
  }
});

// jquery ------name input function end--------


// Listening to the fontInput drop down for a change.
// when it changes, change the font family style of the name display
// fontInput.addEventListener('change', function(e) {
//   nameDisplay.style.fontFamily = fontInput.value;
// });

// jquery-----------dropdown _______

fontInput.on('change', function (event) {
  nameDisplay.css('fontFamily', fontInput.val());
})

// jquery---------dropdown code ends here--------


// // Business logic constants
// var costPerLetter = 5;
// var taxRate = .06;
//---jquery  logic  ____
var costPerLetter = 5;
var taxRate = 0.6;

//jquery Logic Busisness 

// function calculateCosts(e) {
//   // Put all inputs into variables. Remember to convert
//   // from HTML strings to JavaScript numbers where needed.

//   // Calculate subtotal.

//   // Calculate tax.

//   // Calculate grand total.

//   // Display results on page.

// }

// ===== jquery  calculate costs function------
function calculateCosts(e, specialChars, costPerLetter, taxRate) {
  var name = nameInput.val();
  var shipping = parseFloat(shippingInput.val());
  var lettersCost = name.length * costPerLetter;
  var specialCharsCost = specialChars * costPerLetter;
  var subtotal = lettersCost + specialCharsCost;
  var tax = subtotal * taxRate;
  var grandTotal = subtotal + tax + shipping;

  $('#lettersCostDisplay').text('$' + lettersCost.toFixed(2));
  $('#specialCharsCostDisplay').text('$' + specialCharsCost.toFixed(2));
  $('#shippingCostDisplay').text('$' + shipping.toFixed(2));
  $('#subTotalDisplay').text('$' + subtotal.toFixed(2));
  $('#taxCostDisplay').text('$' + tax.toFixed(2));
  $('#grandTotalDisplay').text('$' + grandTotal.toFixed(2));
}

// }
// function calculateCosts(e, specialChars, costPerLetter, taxRate) {
//   var name = $('#nameInput').val()
//   var shippingCost = parseFloat($('#shippingInput').val())
//   var letterCost = name.length * costPerLetter;
//   var specialCharsCost = specialChars * costPerLetter;
//   var subtotal = letterCost + specialCharsCost;
//   var tax = subtotal * taxRate;
//   var grandTotal = subtotal + tax + shippingCost;

//   $('#letterCostDisplay').html(letterCost.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }));
//   $('#specialCharsDisplay').html(specialCharsCost.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }));
//   $('#shippingCostDisplay').html(shippingCost.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }));
//   $('#subTotalDisplay').html(subtotal.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }));
//   $('#taxCostDisplay').html(tax.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }));
//   $('#grandTotalDisplay').html(grandTotal.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }));

// }



//----jquery calculate Costs function ends here------

// Add event listener for the calculate button here.

//-----jquery add event listener here------


// ----------Jquery event listener ends here

// $('#calculate').on('click', calculateCosts);
$('#calculate').on('click', function(e) {
  var specialChars = 2; //  specialChars here
  var costPerLetter = 5; //  costPerLetter here
  var taxRate = 0.6; //  taxRate here
  calculateCosts(e, specialChars, costPerLetter, taxRate);
});