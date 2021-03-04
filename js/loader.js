 $(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();  
    $('.parallax').parallax();
    $('.myreviews').carousel({
        numVisible:7,
        shift:55,
        padding:55
    })
    $(".slider").slider({full_width: true})
 })

 function toggleModal(){
     var instance = M.Modal.getInstance($('#modal3'))
     instance.open();
 }