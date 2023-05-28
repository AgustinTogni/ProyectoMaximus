import PageIDCrt from "../../pages/page-id-crt"

const home = new PageIDCrt

describe('Casos con ID = CRT', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ----- ID de caso: CRT-001 -----
    it('Agregar producto al carrito', () => {

        // Se hace click en el boton "VER MÁS".
        cy.contains('Ver más').click({force: true})

        // Se hace click en el boton "AGREGAR AL CARRITO".
        cy.get('.col-md-4 > .btn').click()

        // Se hace click en el boton "NO".
        cy.get('.input-group > .btn-light').click()

        // Se verifica que el producto se haya agregado al carrito.
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')
    })

    // ----- ID de caso: CRT-002 -----
    it('Sumar/sacar producto del carrito', () => {

        // Se hace click en el boton "VER MÁS".
        cy.contains('Ver más').click({force: true})

        // Se hace click en el boton "AGREGAR AL CARRITO".
        cy.get('.col-md-4 > .btn').click()

        // Se hace click en el boton "NO".
        cy.get('.input-group > .btn-light').click()

        // Se verifica que el producto se haya agregado al carrito.
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')

        // Se hace click en el boton "+".
        cy.get('.cantidad > :nth-child(3)').click()

        // Se verifica que se haya agregado una unidad del producto al carrito.
        cy.get('.cantidad > .cantidadCarrito').should(($input) => {
            const value = $input.val();
            expect(value).to.contain('2');
        });

        // Se hace click en el boton "-".
        cy.get('.cantidad > :nth-child(1)').click()

        // Se verifica que se haya eliminado una unidad del producto del carrito.
        cy.get('.cantidad > .cantidadCarrito').should(($input) => {
            const value = $input.val();
            expect(value).to.contain('1');
        });
    })

    // ----- ID de caso: CRT-003 -----
    it('Eliminar producto del carrito con tacho celeste', () => {

        // Se hace click en el boton "VER MÁS".
        cy.contains('Ver más').click({force: true})

        // Se hace click en el boton "AGREGAR AL CARRITO".
        cy.get('.col-md-4 > .btn').click()

        // Se hace click en el boton "NO".
        cy.get('.input-group > .btn-light').click()

        // Se verifica que el producto se haya agregado al carrito.
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')

        // Se hace click en el tacho celeste.
        cy.get('#eliminar > .tooltip_bottomCenter').click()

        // Se verifica que se haya eliminado correctamente el producto del carrito.
        cy.get('[style="font-size: 3em; margin-bottom: 10px; line-height: 1em; margin-top: 10px;"]').should('be.visible')
    })

    // ----- ID de caso: CRT-004 -----
    it('Eliminar producto del carrito con boton rojo', () => {

        // Se hace click en el boton "VER MÁS".
        cy.contains('Ver más').click({force: true})

        // Se hace click en el boton "AGREGAR AL CARRITO".
        cy.get('.col-md-4 > .btn').click()

        // Se hace click en el boton "NO".
        cy.get('.input-group > .btn-light').click()

        // Se verifica que el producto se haya agregado al carrito.
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')

        // Se hace click en el tacho con fondo rojo.
        cy.get('#cart-del-btn').click()

        // Se verifica que se haya eliminado correctamente el producto del carrito.
        cy.get('[style="font-size: 3em; margin-bottom: 10px; line-height: 1em; margin-top: 10px;"]').should('be.visible')
    })

    // ----- ID de caso: CRT-005 -----
    it('Continuar al pago', () => {

        // Se hace click en el boton "VER MÁS".
        cy.contains('Ver más').click({force: true})

        // Se hace click en el boton "AGREGAR AL CARRITO".
        cy.get('.col-md-4 > .btn').click()

        // Se hace click en el boton "NO".
        cy.get('.input-group > .btn-light').click()

        // Se verifica que el producto se haya agregado al carrito.
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')

        // Se hace click en el boton "CONTINUAR".
        cy.get('#cart-buy-btn').click()

        // Se verifica que se inicie el proceso de pago.
        cy.get('#loginBody').should('be.visible')
    })
})