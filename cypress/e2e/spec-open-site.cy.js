describe('Launches a website', () => {
    it('Launches the yandex.eda page', () => {
        cy.visit('https://eda.yandex.ru/moscow?shippingType=delivery')
        cy.get('[data-testid="address-button-root"] > .UiKitButton_root').click()
        cy.get('[data-testid="address-input"]').type('1-й Кирпичный переулок, 17')
        cy.get('[data-testid="address-input"]').type('{enter}')
        cy.get('[data-testid="desktop-location-modal-confirm-button"]').click()
        // cy.clock().then((clock) => {
        //     clock.tick(1000)
        // })
        cy.get('[data-testid="search-input"]').type('Макароны')
        cy.get('[data-testid="search-input"]').type('{enter}')
        cy.get('.ChangeLanguage_languageRoot').click()
        cy.get('.ChangeLanguage_dropdown > :nth-child(2)').click()
    });
})