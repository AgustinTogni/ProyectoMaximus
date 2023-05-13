class PageIdLG {

    Inicio(){
        cy.visit('https://compragamer.com/')
    }

    BotonIniciarSesion(){
        return cy.get('.user_btn > .mat-focus-indicator > .mat-button-wrapper')
    }

    BotonCrearCuenta(){
        return cy.get('.mat-stroked-button > .mat-button-wrapper')
    }

}

export default PageIdLG