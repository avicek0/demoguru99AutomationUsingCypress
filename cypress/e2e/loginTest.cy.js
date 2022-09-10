///<reference types = "cypress" />

describe('Test',() =>{

    before(() => {

        cy.visit('https://demo.guru99.com/insurance/v1/index.php')

 })

 after (()=> {

   const abc = cy.get('.button_to > .btn')
   abc.click()

 })

    it('Login Failure', () => {

        cy.get('#email').type('avicek.neupane98@gmail.com')

        cy.get('#password').type('Guru@999907')

        cy.get(':nth-child(3) > .btn').click()

        cy.get('span > b').should('have.text', 'Enter your Email address and password correct').log('Login Failed');

    })

    it('Register New Member', () => {

        cy.get('a.btn').click()

        cy.get('#user_title').select('Mr')
        cy.get('#user_firstname').type('Avice')
        cy.get('#user_surname').type('Nepali')
        cy.get('#user_phone').type('9867543609')
        cy.get('#user_dateofbirth_1i').select('1995').should('have.value','1995')
        cy.get('#user_dateofbirth_2i').select('March').should('have.value','3')
        cy.get('#user_dateofbirth_3i').select('23').should('have.value','23')
        cy.get('#licencetype_f').click()
        cy.get('#user_licenceperiod').select('1')
        cy.get('#user_occupation_id').select('Academic')
        cy.get('#user_address_attributes_street').type('Sifal')
        cy.get('#user_address_attributes_city').type('Ktm City')
        cy.get('#user_address_attributes_county').type('Province')
        cy.get('#user_address_attributes_postcode').type('1234')
        cy.get('#user_user_detail_attributes_email').type('avicek.neupane@gmail.com')
        cy.get('#user_user_detail_attributes_password').type('Guru@9908')
        cy.get('#user_user_detail_attributes_password_confirmation').type('Guru@9908')
        cy.get('[name="submit"]').click()

})


it('Login Succeed', () => {

    cy.get('#email').type('avicek.neupane@gmail.com')

    cy.get('#password').type('Guru@9908')

    cy.get(':nth-child(3) > .btn').click()

})


it('Request Quotation', () => {

    cy.get('#ui-id-2').click()
    
    cy.get('#quotation_breakdowncover').select('Roadside').should('have.value','2')
    
    cy.get('#quotation_windscreenrepair_t').click()
    
    cy.get('#quotation_incidents').type('Accidents')
    
    cy.get('#quotation_vehicle_attributes_registration').type('123')
    
    cy.get('#quotation_vehicle_attributes_mileage').type('3000')
    
    cy.get('#quotation_vehicle_attributes_value').type('2000')
    
    cy.get('#quotation_vehicle_attributes_parkinglocation').select('Private Property').should('have.value','Private property')
    
    cy.get('#quotation_vehicle_attributes_policystart_1i').select('2014').should('have.value','2014')
    
    cy.get('#quotation_vehicle_attributes_policystart_2i').select('February').should('have.value','2')
    
    cy.get('#quotation_vehicle_attributes_policystart_3i').select('24').should('have.value','24')
    
    cy.get('.btn-default').click()
    
    cy.get('#new_quotation > .actions > .btn-success').click()

    cy.go('back')
    
    })

    it('Retrieve Quotation', () => {

        cy.get('#ui-id-3').click()

        var randomNumber = Math.floor(Math.random()* 90000) + 10000;
    
        cy.get('form > [type="text"]').invoke('val', randomNumber)
        
        cy.get('#getquote').click()

        cy.go('back')
    
    
    })

    it('My Profile', () => {

        cy.get('#ui-id-4').click()
    
    })

    it('Edit My Profile', () => {

        cy.get('#ui-id-5').click()

        cy.get('#user_title').select('Mr')
        cy.get('#user_surname').type('Avice')
        cy.get('#user_firstname').type('Nepali')
        cy.get('#user_phone').type('9867543909')
        cy.get('#user_dateofbirth_1i').select('1995').should('have.value','1995')
        cy.get('#user_dateofbirth_2i').select('March').should('have.value','3')
        cy.get('#user_dateofbirth_3i').select('23').should('have.value','23')
        cy.get('#user_licencetype_f').click()
        cy.get('#user_licenceperiod').select('1')
        cy.get('#user_occupation_id').select('Academic')
        cy.get('#user_address_attributes_street').type('Sifal')
        cy.get('#user_address_attributes_city').type('Ktm City')
        cy.get('#user_address_attributes_county').type('Province')
        cy.get('#user_address_attributes_postcode').type('1234')
        cy.get('#edit_user_ > .actions > .btn')

})


})

