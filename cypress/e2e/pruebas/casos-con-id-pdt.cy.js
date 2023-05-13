import PageIdPDT from "../../pages/page-id-pdt"

const home = new PageIdPDT

describe('Casos con ID = PDT', () => {

    beforeEach( () => {
        home.seccion3()
    })

    // ID de caso: PDT-001
    it('Alternar Modo lista/Modo cuadricula', () => {
        cy.log('Se cambia la resolucion default ya que esta era demasiado chica y sacaba de la interfaz el boton en cuestion')
        cy.viewport(1032, 924)
        cy.get('.boton-inactivo').click()
    })

    // ID de caso: PDT-002
    it('Utilizar de forma correcta el filtro "Destacado"', () => {
        cy.get('.mat-select-arrow').click()
        cy.get('#mat-option-1 > .mat-option-text').click()
    })

    // ID de caso: PDT-003
    it('Utilizar de forma correcta el filtro "Mayor Precio"', () => {
        cy.get('.mat-select-arrow').click()
        cy.get('#mat-option-2 > .mat-option-text').click()
    })

    // ID de caso: PDT-004
    it('Sumar al carrito', () => {
        cy.get('.user_btn > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.log('La prueba fallara debido a que los datos ingresados son a modo de ejemplo')
        cy.get('#mat-input-1').type('Admin123@gmail.com')
        cy.get('.continue > .mat-button-wrapper').click()
        cy.get('#mat-input-2').type('Admin')
        cy.get('.continue > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.ng-star-inserted > cgw-icon-cart > #carrito-angular > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').should('exist')
    })

    //ID de caso: PDT-005
    it('Agregar productos infinitos al carrito', () => {
        cy.log('La prueba se considera valida ya que si bien la pagina no genera ningun mensaje ni alerta en un punto esta no permite agregar mas cosas al carrito')
        cy.get('.user_btn > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.log('La prueba fallara debido a que los datos ingresados son a modo de ejemplo')
        cy.get('#mat-input-1').type('Admin123@gmail.com')
        cy.get('.continue > .mat-button-wrapper').click()
        cy.get('#mat-input-2').type('Admin')
        cy.get('.continue > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get(':nth-child(2) > .centerMobile > .contenidoPrincipal > .dotted > .mat-focus-indicator > .mat-button-wrapper').click()
    })

    // ID de caso: PDT-006
    it('Colocar letras en el filtro de precio minimo', () => {
        cy.get('#mat-expansion-panel-header-21 > .mat-content > .mat-expansion-panel-header-title').click()
        cy.get('#cdk-accordion-child-21 > .mat-expansion-panel-body > :nth-child(2) > .ng-star-inserted').click()
        cy.get('#mat-input-1').type('asjdhasjdashjkd')
        cy.get('#mat-input-1').should('not.have.text', 'asjdhasjdashjkd')
    })

    // ID de caso: PDT-007
    it('Colocar letras en el filtro de precio maximo', () => {
        cy.get('#mat-expansion-panel-header-21 > .mat-content > .mat-expansion-panel-header-title').click()
        cy.get('#cdk-accordion-child-21 > .mat-expansion-panel-body > :nth-child(2) > .ng-star-inserted').click()
        cy.get('#mat-input-2').type('asjdhasjdashjkd')
        cy.get('#mat-input-2').should('not.have.text', 'asjdhasjdashjkd')
    })

    // ID de caso: PDT-008
    it('Colocar caracteres especiales en los filtros de precio', () => {
        cy.get('#mat-expansion-panel-header-21 > .mat-content > .mat-expansion-panel-header-title').click()
        cy.get('#cdk-accordion-child-21 > .mat-expansion-panel-body > :nth-child(2) > .ng-star-inserted').click()
        cy.get('#mat-input-1').type('%$@$@#$@%')
        cy.get('#mat-input-2').type('%$@$@#$@%')
        cy.get('#mat-input-1').should('not.have.text', '%$@$@#$@%')
        cy.get('#mat-input-2').should('not.have.text', '%$@$@#$@%')
    })
})