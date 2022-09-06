/// <reference types='Cypress' />

// const BASIC_SETUP = "";
class constantLocators{
    HOMEPAGE = {
        DEMOS : "div#menu li:nth-child(2) > a",
        DEMOS_SIDE_MENU : {
            BASIC_SETUP : "div.span2.left > ul > li:nth-child(1) > a",
            GALLERY_VIEW : "div.span2.left > ul > li:nth-child(2) > a",
            MANUAL_TRIGGER : "div.span2.left > ul > li:nth-child(3) > a",
            VALIDATION : "div.span2.left > ul > li:nth-child(4) > a",
            UPLOAD_AMAZON : "div.span2.left > ul > li:nth-child(5) > a"
        }
    }

}
export default constantLocators;