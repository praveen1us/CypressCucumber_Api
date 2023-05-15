/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("user sending the get request", () => {
    cy.request({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body.size)
        expect(response.body[0].id).to.eq(1)
        expect(response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    })
})

When("user sending the get request and calculate price", () => {
    let totalprice = 0;
    cy.request({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
        qs: { limit: 5 }
    }).then((response) => {
        expect(response.status).to.eq(200)
        response.body.forEach(element => {
            totalprice = totalprice + element.price;
        });
        expect(totalprice).to.equal(899.23)
    })
})