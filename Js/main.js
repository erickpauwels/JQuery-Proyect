$(document).ready(function() {
   
    /* // slider 
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        respomsive: true
      });     */

      //Posts
    //   Colección de objetos JSON 
      let posts = [
          {
              title: "prueba de titulo 1",
              date: `Publicado el dia ${moment().format("MMM do YY")}`,
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,aining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,e recently with desktop publishing software like Aldus eMaker including versions of Lorem Ipsum."
          },
          {
            title: "prueba de titulo 2",
            date: `Publicado el dia ${moment().format("MMM do YY")}`,
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,aining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,e recently with desktop publishing software like Aldus eMaker including versions of Lorem Ipsum."
        },
        {
            title: "prueba de titulo 3",
            date: `Publicado el dia ${moment().format("MMM do YY")}`,
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,aining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,e recently with desktop publishing software like Aldus eMaker including versions of Lorem Ipsum."
        },
        {
            title: "prueba de titulo 4",
            date: `Publicado el dia ${moment().format("MMM do YY")}`,
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,aining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,e recently with desktop publishing software like Aldus eMaker including versions of Lorem Ipsum."
        },
        {
            title: "prueba de titulo 5",
            date: `Publicado el dia ${moment().format("MMM do YY")}`,
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,aining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,e recently with desktop publishing software like Aldus eMaker including versions of Lorem Ipsum."
        }
      ]
      console.log(posts);
      //Print posts
      posts.forEach((element, i) =>{
        let post = `
                <div id="article">
                        <div id="articles_head">
                            <div id="articles_title">
                                <h2>${element.title}</h2>
                                <span id="date">${element.date}</span></h3>
                            </div>
                            <p id="comments" class="comments">92 comentarios</p>
                        </div>
                        <p class="article_text">
                        ${element.content}
                        </p>
                        <button id="btn_more">Leer más</button>
                    </div>
                `;
        // console.log(post);
        $("article").append(post);
      });

     /*  //Themes change on click // css style sheet toogle on udemy

      $("#red").click(function() {
        $('body').removeClass('green');
        $('body').removeClass('blue');
          $('body').addClass('red');
          
      })
      $("#blue").click(function() {
        $('body').removeClass('green');
        $('body').removeClass('red');
        $('body').addClass('blue');
        
    })
    $("#green").click(function() {
        $('body').removeClass('blue');
        $('body').removeClass('red');
        $('body').addClass('green');
        
    }) */

    // Scroll up to top
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 500);
        return false;
    })

    //Fake Login
    $('#form form').submit(function() {
        //set value in local storage
        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        localStorage.setItem("form_name", name);
        localStorage.setItem("form_email", email);
        localStorage.setItem("form_password", password);

    });

     let setName = localStorage.getItem("form_name");
    
        // Print User details
     if (setName != null && setName != "undefined") {
         
        $('#description p').html(`<strong>Bienvenido ${setName}</strong>`);
        $('#description p').append("<br><a href='#' id='logout'>Cerrar sesión</a>");
        $('#form').hide();

        //Logout & reload page
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        })
        
     }
     

});