// Handling hiding sidebar on document load 
$(document).ready(function () {
    const shiftedWidth = $('.menu').innerWidth();
    $('.sidebar').css({ left: -shiftedWidth });
    $('.singer:not(:first-child) .description').slideUp(); 
});

// Handling hiding sidebar button
$('#btn-close').click(function () {
    const shiftedWidth = $('.menu').innerWidth();
    $('.sidebar').animate({ left: -shiftedWidth });
    $('.home .content').animate({ paddingLeft: 0 });
});

// Handling showing sidebar button
$('#btn-open').click(function () {
    const shiftedWidth = $('.menu').innerWidth();
    $('.sidebar').animate({ left: 0 });
    $('.home .content').animate({ paddingLeft: shiftedWidth });
});

// Handling toggling among singers
$('.singer .name').click(function (e) {
    $('.description').slideUp();
   
    if ($(e.target).next().is(':visible')) {
        $(e.target).next().slideUp();
    }
    else {
        $(e.target).next().slideDown();
    }
});

// Handling Counting Down
let date = new Date(2024,4,8,12,0,0);
const counterID = setInterval(function(){
    let now = new Date();
    let distance = date - now;
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    let seconds = Math.floor((distance % (1000*60))/(1000));
    
    $('#days').html(`${days} Days`);
    $('#hours').html(`${hours} Hours`);
    $('#minutes').html(`${minutes} Minutes`);
    $('#seconds').html(`${seconds} Seconds`);

    if (!distance) clearInterval(counterID);

}, 1000);

// Handling counting message characters
$('.form #msg').keyup(function (e) { 
    const message = e.target.value;
    const remain = 100 - message.length;

    if (remain >= 0) {
        $('#chars-remain').html(`
        <span class="text-danger" id="chars">${remain}</span>
        <span class="ms-2">Characters Remained</span>
        `);
    }
    else {
        $('#chars-remain').html('<div class="text-danger">Character limit excceeded</div >');
    }

});