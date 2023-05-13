import PageIDRg from "../../pages/page-id-rg"

const home =  new PageIDRg

describe ('casos con ID = RG', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ID de caso: RG-001
    it('Registrarse con datos validos', () => {
        cy.log('La prueba fallara debido a que los datos ingresados son a modo de ejemplo')
        cy.get('#usuario').type('emailprueba22@gmail.com')
        cy.get('#clave').type('adminprueba123')
        cy.get('#clave2').type('adminprueba123')
        cy.get('#apellido').type('Rodriguez')
        cy.get('#nombre').type('Martin')
        cy.get('#provincia').select(1)
        cy.get('#condicion_fiscal').select(1)
        cy.get('#dni').type('36233987')
        cy.get('#ciudad').type('Palermo')
        cy.get('#codigo_postal').type('90100')
        cy.get('#direccion').type('San Martin 1532')
        cy.get('#telefono').type('01145832321')
        cy.get('#btnLogin').click()
        cy.contains('Registro Exitoso').should('be.visible')
    })

    // ID de caso: RG-002
    it('Registrarse con datos invalidos/caracteres especiales', () => {
        cy.get('#usuario').type('emailinvalido11@mmre.com')
        cy.get('#clave').type('admininvalida111')
        cy.get('#clave2').type('admininvalida111')
        cy.get('#apellido').type('#@#!@#@!#!@')
        cy.get('#nombre').type('#$@#@$@$')
        cy.get('#provincia').select(1)
        cy.get('#condicion_fiscal').select(1)
        cy.get('#dni').type('#$#@$@$')
        cy.get('#ciudad').type('$##@$@$@')
        cy.get('#codigo_postal').type('LLLLLL')
        cy.get('#direccion').type('#!@#!#@!#!#')
        cy.get('#telefono').type('IIJKDJSD@#!@#')
        cy.get(':nth-child(10) > .col-md-12 > [data-bv-validator="regexp"]').should('be.visible')
        cy.get(':nth-child(12) > .col-md-12 > [data-bv-validator="regexp"]').should('be.visible')
        cy.get(':nth-child(14) > .col-md-12 > [data-bv-validator="regexp"]').should('be.visible')
    })

})