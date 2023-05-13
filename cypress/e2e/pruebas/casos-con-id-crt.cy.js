import PageIDCrt from "../../pages/page-id-crt"

const home = new PageIDCrt

describe('Casos con ID = CRT', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ID de caso: CRT-001
    it('Agregar producto al carrito', () => {
        cy.contains('Ver más').click({force: true})
        cy.get('.col-md-4 > .btn').click()
        cy.get('.input-group > .btn-light').click()
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')
    })

    // ID de caso: CRT-002
    it('Sumar/sacar producto del carrito', () => {
        cy.contains('Ver más').click({force: true})
        cy.get('.col-md-4 > .btn').click()
        cy.get('.input-group > .btn-light').click()
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')
        cy.get('.cantidad > :nth-child(3)').click()
        cy.get('.cantidad > .cantidadCarrito').should(($input) => {
            const value = $input.val();
            expect(value).to.contain('2');
        });
    })

    // ID de caso: CRT-003
    it('Eliminar producto del carrito con tacho celeste', () => {
        cy.contains('Ver más').click({force: true})
        cy.get('.col-md-4 > .btn').click()
        cy.get('.input-group > .btn-light').click()
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')
        cy.get('#eliminar > .tooltip_bottomCenter').click()
        cy.get('[style="font-size: 3em; margin-bottom: 10px; line-height: 1em; margin-top: 10px;"]').should('be.visible')
    })

    // ID de caso: CRT-004
    it('Eliminar producto del carrito con boton rojo', () => {
        cy.contains('Ver más').click({force: true})
        cy.get('.col-md-4 > .btn').click()
        cy.get('.input-group > .btn-light').click()
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')
        cy.get('#cart-del-btn').click()
        cy.get('[style="font-size: 3em; margin-bottom: 10px; line-height: 1em; margin-top: 10px;"]').should('be.visible')
    })

    // ID de caso: CRT-005
    it('Continuar al pago', () => {
        cy.contains('Ver más').click({force: true})
        cy.get('.col-md-4 > .btn').click()
        cy.get('.input-group > .btn-light').click()
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')
        cy.get('#cart-buy-btn').click()
        cy.get('#loginBody').should('be.visible')
    })
})