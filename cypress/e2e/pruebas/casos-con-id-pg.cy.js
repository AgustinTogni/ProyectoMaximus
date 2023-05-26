import PageIDPg from "../../pages/page-id-pg"

const home = new PageIDPg

describe('Casos con ID = PG', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ID de caso: PG-001
    it('Completar pago con datos validos', () => {
        cy.log('La prueba fallara debido a que los datos ingresados son a modo de ejemplo')

        // Se inicia sesion.
        cy.get('#usuario').type('emaildeprueba@gmail.com')
        cy.get('#clave').type('admin123')
        cy.get('.col-md-offset-4 > .input-group.center-block > .btn').click()

        // Se agrega producto al carrito.
        cy.contains('Ver más').click({force: true})
        cy.get('.col-md-4 > .btn').click()
        cy.get('.input-group > .btn-light').click()
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')

        // Se procede al pago - Datos personales.
        cy.get('#cart-buy-btn').click()
        cy.get('#provincia1').select(1)
        cy.get(':nth-child(1) > .row > :nth-child(2) > .form-control').type('3341')
        cy.wait(4000)
        cy.get('#delivery-ups').click()
        cy.get('[style="display: block; margin-top: 20px;"] > :nth-child(1) > .col-md-12 > .form-control').type('Juan Manual Gonzales')
        cy.get('[style="display: block; margin-top: 20px;"] > :nth-child(2) > :nth-child(1) > .form-control').type('emaildeprueba@gmail.com')
        cy.get('#MazPhoneNumberInput-2_phone_number').type('45670112')
        cy.get('#formEnvioPack > :nth-child(1) > :nth-child(2) > .form-control').type('Juan Manual Belgrano')
        cy.get('#formEnvioPack > :nth-child(1) > :nth-child(3) > .form-control').type('1890')
        cy.get(':nth-child(2) > .col-md-12 > .form-control').type('Monte Grande')
        cy.get('.gb-checkout-delivery-options > .btn').click()

        // Datos de pago (simulado).
        cy.contains('Numero de tarjeta').type('2233232399990000')
        cy.contains('Titular de tarjeta').type('Juan Manual Gonzales')
        cy.contains('Codigo de seguridad').type('XXX')
        cy.contains('Cuotas').select(1)
        cy.contains('Pagar').click()
    })
})