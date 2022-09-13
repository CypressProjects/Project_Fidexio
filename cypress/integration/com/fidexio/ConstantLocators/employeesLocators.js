/// <reference types='Cypress' />

export class employeesLocators{

    EMPLOYEES = {
        CREATE : ".o_cp_buttons > div > .btn-primary",
        EMPLOYEE: {
            IMG: ".img",
            NAME: "input[name='name']",
            WORKEMAIL: "input[name='work_email']",
            WORKMOBIL: "input[name='mobile_phone']"
        },
        SAVE: ".o_form_buttons_edit > .btn-primary",
        DISCARD: ".o_form_buttons_edit > .btn-default",
        IMPORT: "o_button_import",
        EDIT: ".o_form_buttons_view > .btn-primary",
        
    }
}