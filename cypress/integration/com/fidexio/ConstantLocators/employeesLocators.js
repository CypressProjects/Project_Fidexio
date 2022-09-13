/// <reference types='Cypress' />

export class employeesLocators{

    EMPLOYEES = {
        CREATE : ".o_cp_buttons > div > .btn-primary",
        EMPLOYEE: {
            IMG: ".img",
            NAME: "#o_field_input_1407",
            WORKEMAIL: "#o_field_input_1412",
            WORKMOBIL: "#o_field_input_1413",
            WOKRPHONE: "#o_field_input_1414"
        },
        SAVE: ".o_form_buttons_edit > .btn-primary",
        DISCARD: ".o_form_buttons_edit > .btn-default",
        IMPORT: "o_button_import"
    }
}