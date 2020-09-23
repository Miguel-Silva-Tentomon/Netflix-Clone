$('.owl-carousel').owlCarousel({
    loop:true, /*Define se vai ser possível loopar a lista de imagens*/
    margin:10,
    nav:true, /*Se for definido como falso, as imagens so poderão ser passadas fixamente (sem poder puxar com o mouse para o lado)*/
    responsive:{
        0:{ /*Quando a tela for beeem pequena, só um item será mostrado*/
            items:1
        },
        600:{ /*Quando a tela for maior que 600px e menor que 1000px, apenas 3 items são mostrados*/
            items:3
        },
        1000:{ /*Quando a tela tiver 1000px de largura ou mais, serão mostrados 5 items (imagens)*/
            items:5
        }
    }
})