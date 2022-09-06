/**
 * Cypress Environment Variable value will be passed from the command line (explained in the later steps).
 * Here we need to return the URL based on the value of the environment variable.
 */

export class Utility{
    getEnv(){
        let envi = Cypress.env('ENV')
        console.log(envi)
        if(envi == 'env1')
            return Cypress.env().ENV1
        else if(envi == 'env2')
            return Cypress.env().ENV2
        else if(envi == 'env3')
            return Cypress.env().ENV3
        else
            return 'https://google.com'
    }
}