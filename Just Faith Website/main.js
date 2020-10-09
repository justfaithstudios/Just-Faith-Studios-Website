// JQuery Smooth Scroll


// on click function for nav bar


$('.navbar a').on('click', function(e) {
    console.log(this.hash);

if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;  // storing has value of navbar class to this
    
    $('html, body').animate(
        {

        scrollTop: $(hash).offset().top
    }, 800);
}

});



//  option 2 smooth scroll script

// let scroll = new SmoothScroll('.navbar a[href*="#"]', {

//     speed: 900,
//     clip: true
    
// });

