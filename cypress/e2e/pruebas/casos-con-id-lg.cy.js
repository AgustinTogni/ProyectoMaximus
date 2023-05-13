import PageIdLG from "../../pages/page-id-lg"

const home = new PageIdLG

describe('Casos con ID = LG', () => {

    beforeEach(() => {
        home.Inicio()
    })

    // ID de caso: LG-001
    it('Login/ingresar con datos validos', () => {
        cy.log('La prueba fallara debido a que los datos ingresados son a modo de ejemplo')
        home.BotonIniciarSesion().click()
        cy.get('#mat-input-1').type('Admin123@gmail.com')
        cy.get('.continue').click()
        cy.get('[style=""] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Admin')
        cy.get('.continue > .mat-button-wrapper').click()
    })

    // ID de caso: LG-002
    it('Registrarse/crear cuenta con datos validos', () => {
        home.BotonIniciarSesion().click()
        home.BotonCrearCuenta().click()
        cy.get(':nth-child(1) > .noPaddingLeft > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Juan')
        cy.get(':nth-child(1) > .noPaddingRight > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Rodriguez')
    })

    // ID de caso: LG-003
    it('Registrarse/crear cuenta con datos validos', () => {
        home.BotonIniciarSesion().click()
        home.BotonCrearCuenta().click()
        cy.get('.col-8 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(33452122)
    })

    // ID de caso: LG-004
    it('Correcto redireccionamiento de "Ya tienes cuenta"', () => {
        home.BotonIniciarSesion().click()
        home.BotonCrearCuenta().click()
        cy.get('p.center > .pointer').click()
    })

    // ID de caso: LG-005
    it('Registrar/crear cuenta con numeros en el campo Nombre', () => {
        cy.log('La prueba falla debido a que permite ingresar los caracteres que no corresponden al campo y porque no se encuentra el mensaje indicando el error al momento de completar este mismo')
        home.BotonIniciarSesion().click()
        home.BotonCrearCuenta().click()
        cy.get(':nth-child(1) > .noPaddingLeft > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('8732314')
        cy.log('Cypress da como valido el siguiente paso ya que no reconoce el contenido del campo')
        cy.get(':nth-child(1) > .noPaddingLeft > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('not.have.text', '8732314')
        cy.contains('Los caracteres ingresados no son validos.').should('exist')
    })

    // ID de caso: LG-006
    it('Registrarse/crear cuenta con caracteres especiales en campo Apellido', () => {
        cy.log('La prueba falla debido a que permite ingresar los caracteres que no corresponden al campo y porque no se encuentra el mensaje indicando el error al momento de completar este mismo')
        home.BotonIniciarSesion().click()
        home.BotonCrearCuenta().click()
        cy.get(':nth-child(1) > .noPaddingRight > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('%$@$@#$@%')
        cy.log('Cypress da como valido el siguiente paso ya que no reconoce el contenido del campo')
        cy.get(':nth-child(1) > .noPaddingRight > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('not.have.text', '%$@$@#$@%')
        cy.contains('Los caracteres ingresados no son validos.').should('exist')
    })

    // ID de caso: LG-007
    it('Registrarse/crear cuenta sin ingresar datos', () => {
        home.BotonIniciarSesion().click()
        home.BotonCrearCuenta().click()
        cy.log('La prueba esta correcta si el click se puede hacer pero este no hace nada')
        cy.get('.center.ng-untouched > .mat-raised-button > .mat-button-wrapper').click()
    })

    // ID de caso: LG-008
    it('Registrarse/crear cuenta con letras en el campo Telefono', () => {
        home.BotonIniciarSesion().click()
        home.BotonCrearCuenta().click()
        cy.get('.col-8 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('sdjahjfahsdad')
        cy.log('Se agrega un click para cambiar de campo para asi hacer aparecer la alerta')
        cy.get(':nth-child(4) > .noPaddingLeft > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.contains('Sólo números').should('exist')
    })
})