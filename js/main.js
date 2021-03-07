/** -----JQUERY----- **/

/** -----JAVASCRIPT----- **/

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = 'grid';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// When the user clicks a frequency in the selection, the matching Hz fill the div
$(document).ready(() => {

    $('select').on('click', event => {
        if (event.currentTarget.value == '1') {
            $('#pick').html('40Hz');
        } else if (event.currentTarget.value == '2') {
            $('#pick').html('174Hz');
        } else if (event.currentTarget.value == '3') {
            $('#pick').html('285Hz');
        } else if (event.currentTarget.value == '4') {
            $('#pick').html('396Hz');
        } else if (event.currentTarget.value == '5') {
            $('#pick').html('417Hz');
        } else if (event.currentTarget.value == '6') {
            $('#pick').html('432Hz');
        } else if (event.currentTarget.value == '7') {
            $('#pick').html('440Hz');
        } else if (event.currentTarget.value == '8') {
            $('#pick').html('528Hz');
        } else if (event.currentTarget.value == '9') {
            $('#pick').html('639Hz');
        } else if (event.currentTarget.value == '10') {
            $('#pick').html('852Hz');
        } else if (event.currentTarget.value == '11') {
            $('#pick').html('963Hz');
        } else {
            $('#pick').html('');
        }
    })
});