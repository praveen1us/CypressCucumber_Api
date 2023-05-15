/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import React from 'react'


When("user sending the post request react", () => {
    let accessToken = "5c0ce8e61f3143851af4b59af8e3a088c5d270b22cc16a89446d0f196e665b9f"
    cy.fixture('testData').then((payload) => {

        fetch('https://gorest.co.in/public/v2/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': ' Bearer ' + accessToken
            },
            body: JSON.stringify(
                {
                    "name": payload.name,
                    "email": payload.email,
                    "gender": payload.gender,
                    "status": payload.status
                }
            )
        })
            .then(response => {
                expect(response.status).to.eq(422)
                cy.log(response.status)
            })
            .catch(err => {
                console.log(err);
            });
    })
})

When("user sending the post request", () => {
    cy.fixture('tourist').then((payload) => {
        let requestBody = payload;
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).eq(requestBody.tourist_name)
        })
    })
})

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
