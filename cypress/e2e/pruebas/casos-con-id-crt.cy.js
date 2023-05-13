import PageIDCrt from "../../pages/page-id-crt"

const home = new PageIDCrt

describe('Casos con ID = CRT', () => {

    // ID de caso: CRT-001
    it('Funcionamiento del boton "SEGUIR COMPRANDO"', () => {
        cy.visit('https://compragamer.com/?tipo_pago=3&listado_prod=&seccion=11')
        cy.get('.mat-button-wrapper > span').click()
        cy.get(':nth-child(1) > .centerMobile > .center > a > .pointer > .ng-lazyloaded').should('exist')
    })

    // ID de caso: CRT-002
    it('Agregar productos al carrito', () => {
        home.Inicio()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
    })

    // ID de caso: CRT-003
    it('Completar codigo postal', () => {
        cy.log('Debido a los datos de entrada solicitados se tuvo que utilizar otra URL para hacer la prueba')
        home.Inicio()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
        cy.get('.shopping-cart > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-input-2').type('1824')
        cy.log('No se puede hacer un "should" al campo de codigo postal debido a que cypress no reconoce el contenido')
        // cy.get('#mat-input-2').should('have.text', '1824')
    })

    // ID de caso: CRT-004
    it('Eliminar un producto del carrito', () => {
        cy.log('Debido a los datos de entrada solicitados se tuvo que utilizar otra URL para hacer la prueba')
        home.Inicio()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
        cy.get('.shopping-cart > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('#commandTopTight').click()
        cy.get('.marcoDetalleCompra > .ng-tns-c244-77 > .mat-card').should('not.exist')
    })

    // ID de caso: CRT-005
    it('Utilizacion de codigo invalido', () => {
        cy.log('Debido a los datos de entrada solicitados se tuvo que utilizar otra URL para hacer la prueba')
        home.Inicio()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
        cy.get('.shopping-cart > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-input-1').type('Admin123')
        cy.get('#commands > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.content > .error').should('exist')
    })

    // ID de caso: CRT-006
    it('Letras en codigo postal', () => {
        cy.log('Debido a los datos de entrada solicitados se tuvo que utilizar otra URL para hacer la prueba')
        home.Inicio()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
        cy.get('.shopping-cart > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-input-2').type('LLSK')
        cy.log('Cypress da como valido el siguiente paso ya que no reconoce el contenido del campo')
        cy.get('#mat-input-2').should('not.have.text', 'LLSK')
        cy.contains('Los caracteres ingresados no son validos.').should('exist')
    })

    // ID de caso: CRT-007
    it('Caracteres especiales en codigo postal', () => {
        cy.log('Debido a los datos de entrada solicitados se tuvo que utilizar otra URL para hacer la prueba')
        home.Inicio()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
        cy.get('.shopping-cart > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-input-2').type('%$@$@#$@%')
        cy.log('Cypress da como valido el siguiente paso ya que no reconoce el contenido del campo')
        cy.get('#mat-input-2').should('not.have.text', '%$@$@#$@%')
        cy.contains('Los caracteres ingresados no son validos.').should('exist')
    })

    // ID de caso: CRT-008
    it('Agregar infinitos productos', () => {
        cy.log('Debido a los datos de entrada solicitados se tuvo que utilizar otra URL para hacer la prueba')
        home.Inicio()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
        cy.get('.shopping-cart > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.sright > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.warning').should('exist')
    })
})