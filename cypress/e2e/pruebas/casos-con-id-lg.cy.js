import PageIDLg from "../../pages/page-id-lg"

const home = new PageIDLg

describe ('casos con ID =  LG', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ----- ID de caso: LG-001 -----
    it('Login/Ingresar con datos validos', () => {

        // Advertencia.
        cy.log('La prueba falla debido a que el email y contraseña son a modo de ejemplo')

        // Se completa el campo de correo con datos validos.
        cy.get('#usuario').type('Admin123@gmail.com')

        // Se completa el campo de contraseña con datos validos.
        cy.get('#clave').type('Admin')

        // Se hace click en el boton "LOGIN".
        cy.get('.col-md-offset-4 > .input-group.center-block > .btn').click()

        // Se verifica que se haya iniciado sesion correctamente.
        cy.get('#home').should('be.visible')
    })

    // ----- ID de caso: LG-002 -----
    it('Login/Ingresar con datos invalidos', () => {

        // Se completa el campo de correo con datos invalidos.
        cy.get('#usuario').type('EmailInvalido@gmail.com')

        // Se completa el campo de contraseña con datos invalidos.
        cy.get('#clave').type('ContrañaInvalida')

        // Se hace click en el boton "LOGIN".
        cy.get('.col-md-offset-4 > .input-group.center-block > .btn').click()

        // Se verifica que se indique el error.
        cy.get('.alert').should('be.visible')
    })

    // ----- ID de caso: LG-003 -----
    it('Link del texto "Registrarme"', () => {

        // Se hace click en el texto "Registrarme".
        cy.get('#cajaRegistro > a').click()

        // Se verifica que se redireccione al apartado de registro.
        cy.get('.col-md-6').should('be.visible')
    })

    // ----- ID de caso: LG-004 -----
    it('Link del texto "Olvide mi Clave"', () => {

        // Se hace click en el texto "Olvide mi clave".
        cy.contains('Olvide mi clave').click()

        // Se verifica que aparezca la ventana emergente que permita recurperar la clave.
        cy.get('#modalrecuperocontra > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible')
    })

    // ----- ID de caso: LG-005 -----
    it('Funcion "Recuperar Clave"', () => {

        // Advertencia.
        cy.log('La prueba falla debido a que el email y contraseña son a modo de ejemplo')

        // Se hace click en el texto "Olvide mi clave".
        cy.contains('Olvide mi clave').click()

        // Se completa el campo de correo con datos validos.
        cy.get('#usuariorecupero').type('Admin123@gmail.com')

        // Se hace click en el boton "Recuperar Clave".
        cy.get('.col-md-12 > .input-group.center-block > .btn').click()

        // Se verifica que el email haya sido enviado.
        cy.contains('Email enviado').should('be.visible')
    })

    // ----- ID de caso: LG-006 -----
    it('Inicio de sesion con Facebook', () => {

        // Se hace click en el boton "Continue as (usuario)" de Facebook.
        cy.get('.extra-login > span').click()

        // Se verifica que se redireccione al apartado de iniciar sesion con Facebook.
        cy.get('[data-testid="fb:login_button Facebook Social Plugin"]').should('be.visible')
    }) 

    // ----- ID de caso: LG-007 -----
    it('Link del texto "Politica de Privacidad"', () => {

        // Se hace click en el texto "Politica de Privacidad".
        cy.get('#cajaRegistro2 > a').click()

        // Se verifica que se redireccione al apartado de las politicas de privacidad.
        cy.get('.mt-4').should('be.visible')
    })
})