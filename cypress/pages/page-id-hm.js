class PageIDHm {

    Inicio(){
        cy.visit('https://www.maximus.com.ar/')
    }

    ClickBotonHamburguesa(){
        cy.get('.hamburger-menu-web').click()
    }
}

export default PageIDHm