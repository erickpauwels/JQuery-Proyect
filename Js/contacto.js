//Validation with jquery

// date picker 
$("form input[name=date]").datepicker({
    dateFormat: 'dd/mm/yy'
});

// activate validator 
$.validate({
    lang:'es',
    scrollToTopOnError: true
});

