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
})