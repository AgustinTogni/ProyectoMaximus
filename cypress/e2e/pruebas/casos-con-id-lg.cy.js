import PageIDLg from "../../pages/page-id-lg"

const home = new PageIDLg

describe ('casos con ID =  LG', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ID de caso: LG-001
    it('Login/Ingresar con datos validos', () => {
        cy.log('La prueba falla debido a que el email y contraseña son a modo de ejemplo')
        cy.get('#usuario').type('Admin123@gmail.com')
        cy.get('#clave').type('Admin')
        cy.get('.col-md-offset-4 > .input-group.center-block > .btn').click()
        cy.get('#home').should('exist')
    })

    // ID de caso: LG-002
    it('Login/Ingresar con datos invalidos', () => {
        cy.get('#usuario').type('EmailInvalido@gmail.com')
        cy.get('#clave').type('ContrañaInvalida')
        cy.get('.col-md-offset-4 > .input-group.center-block > .btn').click()
        cy.get('.alert').should('be.visible')
    })

    // ID de caso: LG-003
    it('Link del texto "Resistrarme"', () => {
        cy.get('#cajaRegistro > a').click()
        cy.get('.col-md-6').should('exist')
    })

    // ID de caso: LG-004
    it('Link del texto "Olvide mi Clave"', () => {
        cy.contains('Olvide mi clave').click()
        cy.get('#modalrecuperocontra > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible')
    })

    // ID de caso: LG-005
    it('Funcion "Recuperar Clave"', () => {
        cy.log('La prueba falla debido a que el email y contraseña son a modo de ejemplo')
        cy.contains('Olvide mi clave').click()
        cy.get('#usuariorecupero').type('Admin123@gmail.com')
        cy.contains('Email enviado').should('be.visible')
    })

    // ID de caso: LG-006
    it('Inicio de sesion con Facebook', () => {
        cy.get('.extra-login > span').click()
        cy.get('[data-testid="fb:login_button Facebook Social Plugin"]').should('be.visible')
    }) 

    // ID de caso: LG-007
    it('Link del texto "Politica de Privacidad"', () => {
        cy.get('#cajaRegistro2 > a').click()
        cy.get('.mt-4').should('be.visible')
    })
})