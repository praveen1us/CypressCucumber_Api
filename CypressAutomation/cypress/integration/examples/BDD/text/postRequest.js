/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("user sending the post request for SOC", () => {
    cy.fixture('SOC').then((payload) => {
        let requestBody = payload;
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})

When("user sending the post request for SOC-NL", () => {
    cy.fixture('Class amend SOC-NL').then((payload) => {
        let requestBody = payload;
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})

When("user sending the post request for SOR-NL", () => {
    cy.fixture('Class amend SOR-NL').then((payload) => {
        let requestBody = payload;
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})