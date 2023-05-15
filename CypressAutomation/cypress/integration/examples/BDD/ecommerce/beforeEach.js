//load test data
beforeEach(() => {
    cy.fixture('TestData').then(function (data) {
        this.testData = data;
    });
});