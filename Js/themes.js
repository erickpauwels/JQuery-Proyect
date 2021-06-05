 //Themes change on click // css style sheet toogle on udemy

 //-------Red theme----//

 $("#red").click(function() {
    
    $('body').addClass('red');
    $('body').removeClass('green');
    $('body').removeClass('blue');
  
    if (document.body.classList.contains('red')) {
        localStorage.setItem('mode', 'red'); 
      } /* else {
        localStorage.setItem('dark-mode', 'disable');
      } */
  })

 //-------Blue theme----//

  $("#blue").click(function() {
    $('body').removeClass('green');
    $('body').removeClass('red');
    $('body').addClass('blue');

    if (document.body.classList.contains('blue')) {
        localStorage.setItem('mode', 'blue'); 
      } /* else {
        localStorage.setItem('dark-mode', 'disable');
      } */
    
})

 //-------Green theme----//

$("#green").click(function() {
    $('body').removeClass('blue');
    $('body').removeClass('red');
    $('body').addClass('green');

    if (document.body.classList.contains('green')) {
        localStorage.setItem('mode', 'green'); 
      } /* else {
        localStorage.setItem('dark-mode', 'disable');
      } */
    
})

// ------------------- Get Themes ----------------//

if (localStorage.getItem('mode') === 'red') {
    document.body.classList.add('red');
  } 

else if (localStorage.getItem('mode') === 'blue') {
    document.body.classList.add('blue');
} 
else if (localStorage.getItem('mode') === 'green') {
    document.body.classList.add('green');
}