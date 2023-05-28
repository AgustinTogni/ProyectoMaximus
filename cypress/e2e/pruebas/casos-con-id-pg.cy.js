import PageIDPg from "../../pages/page-id-pg"

const home = new PageIDPg

describe('Casos con ID = PG', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ----- ID de caso: PG-001 -----
    it('Completar pago con datos validos', () => {

        // Advertencia.
        cy.log('La prueba fallara debido a que los datos ingresados son a modo de ejemplo')

        // -- Se inicia sesion -- 
        // Se completa el campo de email con datos validos.
        cy.get('#usuario').type('emaildeprueba@gmail.com')
        // Se completa el campo contraña con datos validos.
        cy.get('#clave').type('admin123')
        // Se hace click en el boton "LOGIN".
        cy.get('.col-md-offset-4 > .input-group.center-block > .btn').click()

        // -- Se agrega producto al carrito --
        // Se hace click en el boton "VER MAS".
        cy.contains('Ver más').click({force: true})
        // Se hace click en el boton "AGREGAR AL CARRITO".
        cy.get('.col-md-4 > .btn').click()
        // Se hace click en el boton "NO".
        cy.get('.input-group > .btn-light').click()
        // Se verifica que el producto se haya agregado al carrito.
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')

        // -- Se procede al pago --
        // Se hace click en el boton "CONTINUAR".
        cy.get('#cart-buy-btn').click()
        // Se selecciona la primera opcion de "provincia".
        cy.get('#provincia1').select(1)
        // Se completa el campo codigo postal con datos validos.
        cy.get(':nth-child(1) > .row > :nth-child(2) > .form-control').type('3341')
        // Se hace una espera de 4 segundos.
        cy.wait(4000)
        // Se selecciona un medio de envio.
        cy.get('#delivery-ups').click()
        // Se completa el campo "Apellido y Nombre" con datos validos.
        cy.get('[style="display: block; margin-top: 20px;"] > :nth-child(1) > .col-md-12 > .form-control').type('Juan Manual Gonzales')
        // Se completa el campo "Correo electronico" con datos validos.
        cy.get('[style="display: block; margin-top: 20px;"] > :nth-child(2) > :nth-child(1) > .form-control').type('emaildeprueba@gmail.com')
        // Se completa el campo "Numero Telefonico" con datos validos.
        cy.get('#MazPhoneNumberInput-2_phone_number').type('45670112')
        // Se completa el campo "Calle" con datos validos.
        cy.get('#formEnvioPack > :nth-child(1) > :nth-child(2) > .form-control').type('Juan Manual Belgrano')
        // Se completa el campo "Numero" con datos validos.
        cy.get('#formEnvioPack > :nth-child(1) > :nth-child(3) > .form-control').type('1890')
        // Se completa el campo "Localidad" con datos validos.
        cy.get(':nth-child(2) > .col-md-12 > .form-control').type('Monte Grande')
        // Se hace click en el boton "CONTINUAR".
        cy.get('.gb-checkout-delivery-options > .btn').click()

        // -- Datos de pago (simulado) --
        // Se completa el campo "Numero de tarjeta" con datos validos.
        cy.contains('Numero de tarjeta').type('2233232399990000')
        // Se completa el campo "Tutular de tarjeta" con datos validos.
        cy.contains('Titular de tarjeta').type('Juan Manual Gonzales')
        // Se completa el campo "Codigo de seguridad" con datos validos.
        cy.contains('Codigo de seguridad').type('XXX')
        // Se selecciona la primera opcion de "cuotas".
        cy.contains('Cuotas').select(1)
        // Se hace click en el boton "PAGAR".
        cy.contains('Pagar').click()
    })

    // ----- ID de caso: PG-002 -----
    it('Completar pago con datos invalidos', () => {

        // -- Se inicia sesion -- 
        // Se completa el campo de email con datos validos.
        cy.get('#usuario').type('emaildeprueba@gmail.com')
        // Se completa el campo contraña con datos validos.
        cy.get('#clave').type('admin123')
        // Se hace click en el boton "LOGIN".
        cy.get('.col-md-offset-4 > .input-group.center-block > .btn').click()

        // -- Se agrega producto al carrito --
        // Se hace click en el boton "VER MAS".
        cy.contains('Ver más').click({force: true})
        // Se hace click en el boton "AGREGAR AL CARRITO".
        cy.get('.col-md-4 > .btn').click()
        // Se hace click en el boton "NO".
        cy.get('.input-group > .btn-light').click()
        // Se verifica que el producto se haya agregado al carrito.
        cy.get('.checkout-envio > .justify-content-around > .columna-1 > .col-xs-12 > #acordion > .row').should('be.visible')

        // -- Se procede al pago --
        // Se hace click en el boton "CONTINUAR".
        cy.get('#cart-buy-btn').click()
        // Se selecciona la primera opcion de "provincia".
        cy.get('#provincia1').select(1)
        // Se completa el campo codigo postal con datos invalidos.
        cy.get(':nth-child(1) > .row > :nth-child(2) > .form-control').type('#@$@')
        // Se hace una espera de 4 segundos.
        cy.wait(4000)
        // Se selecciona un medio de envio.
        cy.get('#delivery-ups').click()
        // Se completa el campo "Apellido y Nombre" con datos invalidos.
        cy.get('[style="display: block; margin-top: 20px;"] > :nth-child(1) > .col-md-12 > .form-control').type('@#!#!#!#!#$')
        // Se completa el campo "Correo electronico" con datos invalidos.
        cy.get('[style="display: block; margin-top: 20px;"] > :nth-child(2) > :nth-child(1) > .form-control').type('emailinvalido@gmail.com')
        // Se completa el campo "Numero Telefonico" con datos invalidos.
        cy.get('#MazPhoneNumberInput-2_phone_number').type('@#!#@!#@!#')
        // Se completa el campo "Calle" con datos invalidos.
        cy.get('#formEnvioPack > :nth-child(1) > :nth-child(2) > .form-control').type('@!#!@#!@#!')
        // Se completa el campo "Numero" con datos invalidos.
        cy.get('#formEnvioPack > :nth-child(1) > :nth-child(3) > .form-control').type('@!#!#!@')
        // Se completa el campo "Localidad" con datos invalidos.
        cy.get(':nth-child(2) > .col-md-12 > .form-control').type('$%#%#%#$')
        // Se hace click en el boton "CONTINUAR".
        cy.get('.gb-checkout-delivery-options > .btn').click()

        // -- Datos de pago (simulado) --
        // Se completa el campo "Numero de tarjeta" con datos invalidos.
        cy.contains('Numero de tarjeta').type('#@@#!#!@#!#!@#!#!#')
        // Se completa el campo "Tutular de tarjeta" con datos invalidos.
        cy.contains('Titular de tarjeta').type('$#@$@$@#$#@$#@$')
        // Se completa el campo "Codigo de seguridad" con datos invalidos.
        cy.contains('Codigo de seguridad').type('###')
        // Se selecciona la primera opcion de "cuotas".
        cy.contains('Cuotas').select(1)
        // Se hace click en el boton "PAGAR".
        cy.contains('Pagar').click()
    })
})