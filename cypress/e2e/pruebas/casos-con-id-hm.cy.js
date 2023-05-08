import PageIDHm from "../../pages/page-id-hm"

const home = new PageIDHm

describe('casos con ID =  HM', () => {

    beforeEach( () => {
        home.Inicio()
    })

    // ID de caso: HM-001
    it('Boton "seguir mi pedido UPS"', () => {
        cy.get('.links > .ups').invoke('removeAttr','target').click()
        cy.origin('https://www.ups.com', () => {
            cy.get('#ups-header_logo > img').should('exist')
        })
    })

    // ID de caso: HM-002
    it('Boton "seguir mi pedido OCA"', () => {
        cy.get('.oca').invoke('removeAttr','target').click()
        cy.origin('https://www.oca.com.ar', () => {
            cy.get('.logo-oca').should('exist')
        })
    })

    // ID de caso: HM-003
    it('Boton "subir comprobante"', () => {
        cy.get('#abircomprobantenologueado').click()
        cy.get('#modalcomprobantenologueado > .modal-dialog > .modal-content > .modal-header > .modal-title').should('exist')
    })

    // ID de caso: HM-004
    it('Boton "RMA - Garantia"', () => {
        cy.get('.rma > span').click()
        cy.get('.titulo-envio').should('exist')
    })

    // ID de caso: HM-005
    it('Boton "Ayuda"' , () => {
        cy.get('.ayuda > span').click()
        cy.get('h1').should('exist')
    })

    // ID de caso: HM-006
    it('Buscar un producto valido', () => {
        cy.get('#buscadorDesktop').type('Motherboard')
        cy.get('.form-web-header > button').click()
        cy.contains('Motherboard').should('exist')
    })

    // ID de caso: HM-007
    it('Buscar un producto invalido', () => {
        cy.get('#buscadorDesktop').type('Chocolate')
        cy.get('.form-web-header > button').click()
        cy.get('[style="margin-bottom: 5px;"]').should('exist')
    })

    // ID de caso: HM-008
    it('caracteres especiales en la barra de busqueda', () => {
        cy.get('#buscadorDesktop').type('@#$#$!#')
        cy.log('Cypress da como valido el siguiente paso ya que no reconoce los caracteres ingresados en el campo seleccionado')
        cy.get('#buscadorDesktop').should('not.have.text', '@#$#$!#')
        cy.contains('caracteres invalidos').should('exist')
    })

    // ID de caso: HM-009
    it('Boton "Ingresar"', () => {
        cy.get('#cuentanologueada > .textosDerecha').click()
        cy.get('.col-md-offset-4 > .tit-gral').should('exist')
    })

    // ID de caso: HM-010
    it('Boton "Mi carrito"', () => {
        cy.get('.carrito > .textosDerecha').click()
        cy.get('.su-pedido > h3').should('exist')
    })

    // ID de caso: HM-011
    it('Busqueda por categoria', () => {
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(1) > .apertura-cat-principal-static > a > span').click()
        cy.get('.title-description').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(2) > .apertura-cat-principal-static > a > span').click()
        cy.get('.title-description').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(4) > .apertura-cat-principal > a').click()
        cy.contains('Notebooks').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(5) > .apertura-cat-principal > a').click()
        cy.contains('Computadoras').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(6) > .apertura-cat-principal > a').click()
        cy.contains('Combo Actualización').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(7) > .apertura-cat-principal > a').click()
        cy.get('.flex-componentes-perifericos > .columna-izquierda-side-secundario').should('exist')
        cy.get('.flex-componentes-perifericos > .columna-derecha-side-secundario').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(8) > .apertura-cat-principal > a').click()
        cy.contains('Perifericos').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(9) > .apertura-cat-principal > a').click()
        cy.contains('Conectividad').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(10) > .apertura-cat-principal > a').click()
        cy.contains('Servicios').should('exist')
        home.Inicio()
        home.ClickBotonHamburguesa()
        cy.get(':nth-child(11) > .apertura-cat-principal > a').click()
        cy.contains('Outlet').should('exist')
    })

    // ID de caso: HM-012
    it('Boton "ARMA TU PC"', () => {
        cy.get('.nav-link > span').click()
        cy.get('.title-description').should('exist')
    })

    // ID de caso: HM-013
    it('Alternar modo claro/oscuro', () => {
        cy.get('.slider-theme').click()
        cy.get('.modo-oscuro').should('exist')
        cy.get('.slider-theme').click()
        cy.get('.modo-claro').should('exist')
    })

    // ID de caso: HM-014
    it('Carrucel de imagenes', () => {
        cy.get('#mainSlider > div > ul > li.flex-nav-next > a > img').click({force: true})
        cy.get('#mainSlider > div > ul > li.flex-nav-prev > a > img').click({force: true})
    })

    // ID de caso: HM-015
    it('Imagen con "LOS MEJORES PRECIOS"', () => { 
        cy.get('#spotTop > .flexslider > .flex-viewport > .slides > .flex-active-slide > a > picture > img').click()
        cy.contains('Gamer').should('exist')
    })

    // ID de caso: HM-016
    it('Apartado "PCs Recomendadas"', () => {
        cy.get(':nth-child(1) > .boxpchome > .product > .image > a > picture.img-responsive > .img-responsive').click()
        cy.get('.col-md-9 > .row').should('exist')
        home.Inicio()
        cy.get(':nth-child(2) > .boxpchome > .product > .image > a > picture.img-responsive > .img-responsive').click()
        cy.get('.col-md-9 > .row').should('exist')
        home.Inicio()
        cy.get(':nth-child(3) > .boxpchome > .product > .image > a > picture.img-responsive > .img-responsive').click()
        cy.get('.col-md-9 > .row').should('exist')
    })

    // ID de caso: HM-017
    it('Apartado "Productos Destacados"', () => {
        cy.get('.title-description > a').click()
        cy.get('.col-md-9 > .row').should('exist')
    })

    // ID de caso: HM-018
    it('Apartado "Marcas"', () => {
        cy.get('.gb-brand-list > :nth-child(1) > a').click()
        cy.get('strong').should('exist')
        home.Inicio()
        cy.get('.gb-brand-list > :nth-child(2) > a').click()
        cy.contains('Genesis').should('exist')
        home.Inicio()
        cy.get('.gb-brand-list > :nth-child(3) > a').click()
        cy.contains('Amd').should('exist')
        home.Inicio()
        cy.get('.asus').click()
        cy.contains('Asus').should('exist')
        home.Inicio()
        cy.get('.gb-brand-list > :nth-child(5) > a').click()
        cy.contains('Nvidia').should('exist')
        home.Inicio()
        cy.get('.gb-brand-list > :nth-child(6) > a').click()
        cy.contains('Logitech').should('exist')
        home.Inicio()
        cy.get('.gb-brand-list > :nth-child(7) > a').click()
        cy.contains('Gigabyte').should('exist')
        home.Inicio()
        cy.get('.redragon').click()
        cy.contains('Redragon').should('exist')
    })

    // ID de caso: HM-019
    it('Boton Icono "Messenger"', () => {
        cy.get('#messenger > img').should('be.visible')
        cy.get('#messenger > img').click()
    })

    // ID de caso: HM-020
    it('Boton Icono "Whatsapp"', () => {
        cy.get('#whatsapp > img').should('be.visible')
        cy.get('#messenger > img').click()
    })

    // ID de caso: HM-021
    it('Apartado "Seguinos en Redes"', () => {
        cy.get('.redes > :nth-child(1)').should('be.visible')
        cy.get('.redes > :nth-child(1)').click()
        cy.get('.redes > :nth-child(2)').should('be.visible')
        cy.get('.redes > :nth-child(2)').click()
        cy.get('.redes > :nth-child(3)').should('be.visible')
        cy.get('.redes > :nth-child(3)').click()
        cy.get('.redes > :nth-child(4)').should('be.visible')
        cy.get('.redes > :nth-child(4)').click()
    })
})

