class homePages{
    element ={
        welcomeHeader: () => cy.get('.title > h2'),
        loginBtn: () => cy.get(".primary [href='/login']"),
        usernameField: () => cy.get("#username"),
        passwordField: () => cy.get("#password"),
        loginBtn2: () => cy.get('#login_button'),
        searchField: () => cy.get("[placeholder='Search for a movie, tv show, person......']"),
        searchBtn: ()=> cy.get("[value='Search']"),
        headerMovie1: ()=> cy.get(".title h2"),
        favoriteBtn: ()=> cy.get("#favourite"),
        orderBtn: () => cy.get('.group_dropdown > .selected > span'),
        removeBtn1: () => cy.get(".action_bar li:nth-of-type(4) > .remove_list_item").eq(0),
        removeBtn2: () => cy.get(".action_bar li:nth-of-type(4) > .remove_list_item").eq(1)
    }
    welcomeHeaderValidation(){
        cy.get('.title > h2').should('be.visible');
    }
    loginMethod(username,Password){
        this.element.loginBtn().click();
        this.element.usernameField().type(username);
        this.element.passwordField().type(Password);
        this.element.loginBtn2().click();
    }
    firstFavoriteMovieMethod(movie1){
        this.element.searchField().type(movie1);
        this.element.searchBtn().click();
        this.element.headerMovie1().click();
        this.element.favoriteBtn().click();
    }
    secondFavoriteMovieMethod(movie2){
        this.element.searchField().type(movie2);
        this.element.searchBtn().click();
        this.element.headerMovie1().click();
        this.element.favoriteBtn().click();
    }
    orderFavoriteMovieListMethod(){
        this.element.orderBtn().click();
    }
    removeFavoriteMovieList(){
        this.element.removeBtn1().click();
        this.element.removeBtn2().click();
    }
    
}
export default new homePages();