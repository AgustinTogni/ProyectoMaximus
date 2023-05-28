import PageIDHm from "../../pages/page-id-hm"

const home = new PageIDHm

describe('casos con ID =  HM', () => {

    beforeEach( () => {
        home.Inicio()
    })

    // ----- ID de caso: HM-001 -----
    it('Boton "seguir mi pedido UPS"', () => {

        // Se hace click en el texto "Seguir mi pedido UPS".
        cy.get('.links > .ups').invoke('removeAttr','target').click()

        // Se verifica que se redireccione a la pagina de UPS.
        cy.origin('https://www.ups.com', () => {
            cy.get('#ups-header_logo > img').should('be.visible')
        })
    })

    // ----- ID de caso: HM-002 -----
    it('Boton "seguir mi pedido OCA"', () => {

        // Se hace click en el texto "Seguir mi pedido OCA".
        cy.get('.oca').invoke('removeAttr','target').click()

        // Se verifica que se redireccione a la pagina de OCA.
        cy.origin('https://www.oca.com.ar', () => {
            cy.get('.logo-oca').should('be.visible')
        })
    })

    // ----- ID de caso: HM-003 -----
    it('Boton "subir comprobante"', () => {

        // Se hace click en el texto "subir comprobante".
        cy.get('#abircomprobantenologueado').click()

        // Se verifica que se redireccione al apartado de comprobantes.
        cy.get('#modalcomprobantenologueado > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible')
    })

    // ----- ID de caso: HM-004 -----
    it('Boton "RMA - Garantia"', () => {

        // Se hace click en el testo "RMA - Garantia".
        cy.get('.rma > span').click()

        // Se verifica que se redireccione al apartado RMA - Garantia.
        cy.get('.titulo-envio').should('be.visible')
    })

    // ----- ID de caso: HM-005 -----
    it('Boton "Ayuda"' , () => {

        // Se hace click en el texto "Ayuda".
        cy.get('.ayuda > span').click()

        // Se verifica que se redireccione al apartado de ayuda.
        cy.get('h1').should('be.visible')
    })

    // ----- ID de caso: HM-006 -----
    it('Buscar un producto valido', () => {

        // Se completa la barra de busqueda con datos validos.
        cy.get('#buscadorDesktop').type('Motherboard')

        // Se hace click en el icono con forma de lupa y fondo verde.
        cy.get('.form-web-header > button').click()

        // Se verifica que se hayan buscado los productos con dichos datos validos.
        cy.contains('Motherboard').should('exist')
    })

    // ----- ID de caso: HM-007 -----
    it('Buscar un producto invalido', () => {

        // Se completa la barra de busqueda con datos invalidos.
        cy.get('#buscadorDesktop').type('Chocolate')

        // Se hace click en el icono con forma de lupa y fondo verde.
        cy.get('.form-web-header > button').click()

        // Se verifica que se indique que dicho producto no se encuentra/no existe.
        cy.get('[style="margin-bottom: 5px;"]').should('be.visible')
    })

    // ----- ID de caso: HM-008 -----
    it('caracteres especiales en la barra de busqueda', () => {

        // Se completa la barra de busqueda con datos invalidos.
        cy.get('#buscadorDesktop').type('@#$#$!#')

        // Advertencia.
        cy.log('Cypress da como valido el siguiente paso ya que no reconoce los caracteres ingresados en el campo seleccionado')

        // Se verifica que el campo de la barra de busqueda no este completo.
        cy.get('#buscadorDesktop').should('not.have.text', '@#$#$!#')

        // Se verifica que aparezca una alerta indicando el error.
        cy.contains('caracteres invalidos').should('be.visible')
    })

    // ----- ID de caso: HM-009 -----
    it('Boton "Ingresar"', () => {

        // Se hace click en el texto "Ingresar".
        cy.get('#cuentanologueada > .textosDerecha').click()

        // Se verifica que se redireccione al apartado de iniciar sesion.
        cy.get('.col-md-offset-4 > .tit-gral').should('be.visible')
    })

    // ----- ID de caso: HM-010 -----
    it('Boton "Mi carrito"', () => {

        // Se hace click en el texto "Mi carrito".
        cy.get('.carrito > .textosDerecha').click()

        // Se verifica que se redireccione al carrito.
        cy.get('.su-pedido > h3').should('be.visible')
    })

    // ----- ID de caso: HM-011 -----
    it('Busqueda por categoria', () => {

        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la primera categoria.
        cy.get(':nth-child(1) > .apertura-cat-principal-static > a > span').click()
        //Se verifica que se redireccione al apartado de la primera categoria.
        cy.get('.title-description').should('be.visible')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la segunda categoria.
        cy.get(':nth-child(2) > .apertura-cat-principal-static > a > span').click()
        //Se verifica que se redireccione al apartado de la segunda categoria.
        cy.get('.title-description').should('be.visible')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la tercera categoria.
        cy.get(':nth-child(4) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la tercera categoria.
        cy.contains('Notebooks').should('exist')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la cuerta categoria.
        cy.get(':nth-child(5) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la cuerta categoria.
        cy.contains('Computadoras').should('exist')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la quinta categoria.
        cy.get(':nth-child(6) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la quinta categoria.
        cy.contains('Combo Actualización').should('exist')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la sexta categoria.
        cy.get(':nth-child(7) > .apertura-cat-principal > a').click()
        //Se verifica que se abran las opciones de la sexta categoria.
        cy.get('.flex-componentes-perifericos > .columna-izquierda-side-secundario').should('be.visible')
        cy.get('.flex-componentes-perifericos > .columna-derecha-side-secundario').should('be.visible')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la septima categoria.
        cy.get(':nth-child(8) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la septima categoria.
        cy.contains('Perifericos').should('exist')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la octova categoria.
        cy.get(':nth-child(9) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la octova categoria.
        cy.contains('Conectividad').should('exist')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la novena categoria.
        cy.get(':nth-child(10) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la novena categoria.
        cy.contains('Servicios').should('exist')
        
        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la decima categoria.
        cy.get(':nth-child(11) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la decima categoria.
        cy.contains('Outlet').should('exist')

        // Se vuelve al incio de la pagina.
        home.Inicio()
        // Se hace click en el boton "hamburguesa".
        home.ClickBotonHamburguesa()
        // Se hace click en la onceava categoria.
        cy.get(':nth-child(12) > .apertura-cat-principal > a').click()
        //Se verifica que se redireccione al apartado de la decima categoria.
        cy.get('strong').should('be.visible')
    })

    // ----- ID de caso: HM-012 -----
    it('Boton "ARMA TU PC"', () => {

        // Se hace click en el boton "ARMA TU PC".
        cy.get('.nav-link > span').click()

        // Se verifica que se redireccione al apartado de "ARMA TU PC".
        cy.get('.title-description').should('be.visible')
    })

    // ----- ID de caso: HM-013 -----
    it('Alternar modo claro/oscuro', () => {

        // Se hace click en el boton para cambiar entre modo claro/oscuro.
        cy.get('.slider-theme').click()

        // Se verifica que el modo oscuro este activo.
        cy.get('.modo-oscuro').should('be.visible')

        // Se hace click en el boton para cambiar entre modo claro/oscuro.
        cy.get('.slider-theme').click()

        // Se verifica que el modo claro este activo.
        cy.get('.modo-claro').should('be.visible')
    })

    // ----- ID de caso: HM-014 -----
    it('Carrusel de imagenes', () => {

        // Se hace click en la flecha que mueve las imagenes del carrusel para la derecha.
        cy.get('#mainSlider > div > ul > li.flex-nav-next > a > img').click({force: true})

        // Se hace click en la flecha que mueve las imagenes del carrusel para la izquierda.
        cy.get('#mainSlider > div > ul > li.flex-nav-prev > a > img').click({force: true})
    })

    // ----- ID de caso: HM-015 -----
    it('Imagen con "LOS MEJORES PRECIOS"', () => { 

        // Se hace click en la imagen que contiene el texto "LOS MEJORES PRECIOS".
        cy.get('#spotTop > .flexslider > .flex-viewport > .slides > .flex-active-slide > a > picture > img').click()

        // Se verifica que se redireccione al apartado de los productos con los mejores precios.
        cy.contains('Gamer').should('exist')
    })

    // ----- ID de caso: HM-016 -----
    it('Apartado "PCs Recomendadas"', () => {

        // Se hace click en la primera imagen del apartado "PCs recomendadas".
        cy.get(':nth-child(1) > .boxpchome > .product > .image > a > picture.img-responsive > .img-responsive').click()
        // Se verifica que se redireccione al apartado de la primera imagen de "PCs recomendadas".
        cy.get('.col-md-9 > .row').should('be.visible')

        // Se vuelve al inicio de la pagina.
        home.Inicio()
        // Se hace click en la segunda imagen del apartado "PCs recomendadas".
        cy.get(':nth-child(2) > .boxpchome > .product > .image > a > picture.img-responsive > .img-responsive').click()
        // Se verifica que se redireccione al apartado de la segunda imagen de "PCs recomendadas".
        cy.get('.col-md-9 > .row').should('be.visible')

        // Se vuelve al inicio de la pagina.
        home.Inicio()
        // Se hace click en la tercera imagen del apartado "PCs recomendadas".
        cy.get(':nth-child(3) > .boxpchome > .product > .image > a > picture.img-responsive > .img-responsive').click()
        // Se verifica que se redireccione al apartado de la tercera imagen de "PCs recomendadas".
        cy.get('.col-md-9 > .row').should('be.visible')
    })

    // ------ ID de caso: HM-017 -----
    it('Apartado "Productos Destacados"', () => {

        // Se hace click en el texto "Ver Todo" de la seccion "Productos Destacados".
        cy.get('.title-description > a').click()

        // Se verifica que se redireccione al apartado "Productos Destacados".
        cy.get('.col-md-9 > .row').should('be.visible')
    })

    // ----- ID de caso: HM-018 -----
    it('Apartado "Marcas"', () => {

        // Se hace click en la primera marca.
        cy.get('.gb-brand-list > :nth-child(1) > a').click()
        // Se verifica que se redireccione al apartado con los productos de la primera marca.
        cy.get('strong').should('be.visible')

        // Se vuelve al inicio.
        home.Inicio()
        // Se hace click en la segunda marca.
        cy.get('.gb-brand-list > :nth-child(2) > a').click()
        // Se verifica que se redireccione al apartado con los productos de la segunda marca.
        cy.contains('Genesis').should('exist')

        // Se vuelve al inicio.
        home.Inicio()
        // Se hace click en la tercera marca.
        cy.get('.gb-brand-list > :nth-child(3) > a').click()
        // Se verifica que se redireccione al apartado con los productos de la tercera marca.
        cy.contains('Amd').should('exist')

        // Se vuelve al inicio.
        home.Inicio()
        // Se hace click en la cuarta marca.
        cy.get('.asus').click()
        // Se verifica que se redireccione al apartado con los productos de la cuarta marca.
        cy.contains('Asus').should('exist')

        // Se vuelve al inicio.
        home.Inicio()
        // Se hace click en la quinta marca.
        cy.get('.gb-brand-list > :nth-child(5) > a').click()
        // Se verifica que se redireccione al apartado con los productos de la quinta marca.
        cy.contains('Nvidia').should('exist')

        // Se vuelve al inicio.
        home.Inicio()
        // Se hace click en la sexta marca.
        cy.get('.gb-brand-list > :nth-child(6) > a').click()
        // Se verifica que se redireccione al apartado con los productos de la sexta marca.
        cy.contains('Logitech').should('exist')

        // Se vuelve al inicio.
        home.Inicio()
        // Se hace click en la septima marca.
        cy.get('.gb-brand-list > :nth-child(7) > a').click()
        // Se verifica que se redireccione al apartado con los productos de la septima marca.
        cy.contains('Gigabyte').should('exist')

        // Se vuelve al inicio.
        home.Inicio()
        // Se hace click en la octava marca.
        cy.get('.redragon').click()
        // Se verifica que se redireccione al apartado con los productos de la octava marca.
        cy.contains('Redragon').should('exist')
    })

    // ----- ID de caso: HM-019 -----
    it('Boton Icono "Messenger"', () => {

        // Se verifica que el icono de "Messenger" este visible.
        cy.get('#messenger > img').should('be.visible')

        // Se hace click en el icono de "Messenger".
        cy.get('#messenger > img').click()
    })

    // ----- ID de caso: HM-020 -----
    it('Boton Icono "WhatsApp"', () => {

        // Se verifica que el icono de "WhatsApp" este visible.
        cy.get('#whatsapp > img').should('be.visible')

        // Se hace click en el icono de "WhatsApp".
        cy.get('#messenger > img').click()
    })

    // ----- ID de caso: HM-021 -----
    it('Apartado "Seguinos en Redes"', () => {

        // Se verifica que el icono de "Instagram" este visible.
        cy.get('.redes > :nth-child(1)').should('be.visible')

        // Se hace click en el icono de "Instagram".
        cy.get('.redes > :nth-child(1)').click()

        // Se verifica que el icono de "Facebook" este visible.
        cy.get('.redes > :nth-child(2)').should('be.visible')

        // Se hace click en el icono de "Facebook".
        cy.get('.redes > :nth-child(2)').click()

        // Se verifica que el icono de "Youtube" este visible.
        cy.get('.redes > :nth-child(3)').should('be.visible')

        // Se hace click en el icono de "Youtube".
        cy.get('.redes > :nth-child(3)').click()

        // Se verifica que el icono de "TikTok" este visible.
        cy.get('.redes > :nth-child(4)').should('be.visible')

        // Se hace click en el icono de "TikTok".
        cy.get('.redes > :nth-child(4)').click()
    })
})

