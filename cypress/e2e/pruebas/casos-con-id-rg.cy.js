import PageIDRg from "../../pages/page-id-rg"

const home =  new PageIDRg

describe ('casos con ID = RG', () => {

    beforeEach( () => {
        home.inicio()
    })

    // ----- ID de caso: RG-001 -----
    it('Registrarse con datos validos', () => {

        // Advertencia.
        cy.log('La prueba fallara debido a que los datos ingresados son a modo de ejemplo')

        // Se completa el campo de correo con datos validos.
        cy.get('#usuario').type('emailprueba22@gmail.com')

        // Se completa el campo de contraña con datos validos.
        cy.get('#clave').type('adminprueba123')

        // Se completa el campo de confirma tu contraseña con datos validos.
        cy.get('#clave2').type('adminprueba123')

        // Se completa el campo de apellido con datos validos.
        cy.get('#apellido').type('Rodriguez')

        // Se completa el campo de nombre con datos validos.
        cy.get('#nombre').type('Martin')

        // Se selecciona la primer opcion.
        cy.get('#provincia').select(1)

        // Se selecciona la primer opcion.
        cy.get('#condicion_fiscal').select(1)

        // Se completa el campo DNI con datos validos.
        cy.get('#dni').type('36233987')

        // Se completa el campo de ciudad con datos validos.
        cy.get('#ciudad').type('Palermo')

        // Se completa el campo de codigo postal con datos validos.
        cy.get('#codigo_postal').type('90100')

        // Se completa el campo de direccion con datos validos.
        cy.get('#direccion').type('San Martin 1532')

        // Se completa el campo de telefono con datos validos.
        cy.get('#telefono').type('01145832321')

        // Se hace click en el boton "Registrarse".
        cy.get('#btnLogin').click()

        // Se verifica que el registro se haya hecho correctamente.
        cy.contains('Registro Exitoso').should('be.visible')
    })

    // ID de caso: RG-002
    it('Registrarse con datos invalidos/caracteres especiales', () => {

        // Se completa el campo de correo con datos invalidos.
        cy.get('#usuario').type('emailinvalido11@mmre.com')

        // Se completa el campo de contraña con datos invalidos.
        cy.get('#clave').type('admininvalida111')

        // Se completa el campo de confirma tu contraseña con datos invalidos.
        cy.get('#clave2').type('admininvalida111')

        // Se completa el campo de apellido con datos invalidos.
        cy.get('#apellido').type('#@#!@#@!#!@')

        // Se completa el campo de nombre con datos invalidos.
        cy.get('#nombre').type('#$@#@$@$')

        // Se selecciona la primer opcion.
        cy.get('#provincia').select(1)

        // Se selecciona la primer opcion.
        cy.get('#condicion_fiscal').select(1)

        // Se completa el campo DNI con datos invalidos.
        cy.get('#dni').type('#$#@$@$')

        // Se completa el campo de ciudad con datos invalidos.
        cy.get('#ciudad').type('$##@$@$@')

        // Se completa el campo de codigo postal con datos invalidos.
        cy.get('#codigo_postal').type('LLLLLL')

        // Se completa el campo de direccion con datos invalidos.
        cy.get('#direccion').type('#!@#!#@!#!#')

        // Se completa el campo de telefono con datos invalidos.
        cy.get('#telefono').type('IIJKDJSD@#!@#')

        // Se verifica que se indiquen los errores.
        cy.get(':nth-child(10) > .col-md-12 > [data-bv-validator="regexp"]').should('be.visible')
        cy.get(':nth-child(12) > .col-md-12 > [data-bv-validator="regexp"]').should('be.visible')
        cy.get(':nth-child(14) > .col-md-12 > [data-bv-validator="regexp"]').should('be.visible')
    })

})