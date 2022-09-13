# demoguru99AutomationUsingCypress
"https://demo.guru99.com/insurance/v1/header.php" is automated using Cypress for login check, register, profile edit, creating and retrieving quotation and so on.

Step 1: Initializing the project on a certain folder which you want.
  - Type 'npm init' on  terminal window and package.json file will be installed.

Step 2: Install cypress from the terminal, check version and verify it.
  - Type 'npm install cypress' and cypress will be installed.
  - Type 'npm cypress -v' to check cypress version.
  - Type 'npm cypress verify' to verify cypress.  

Step 3: Start writing all your test file under : cypress -> e2e -> loginTest.cy.js.
  - 'loginTest.cy.js' will contain all our test cases.

Step 4: Type 'npm cypress open' and then we will configure all the necessary files and folders that we need for our project.  

Step 5: Begin writing our necesssary codes first.

  a. Start with 'describe', which will wrap all our test cases.
    -
       describe('Test',() =>{  

        })

  b. 'before' is used to open/visit the website of which we are going to test.
    - Since we open/visit our website only once at the beginning we used it.
    - 
          before(() => {

        cy.visit('https://demo.guru99.com/insurance/v1/index.php')

 })


  c. 'after' is used to logout of the website only once but at the end when we are all done with our test cases.

Step 6: Begin writing our test case. (But here documentation of output of test case is also done.)

     Test Case 1: Login Failure

       
    Output:

    'Before' is executed here and the first test case starts.
    
    Success: All the required values are posted with status code '200'
    
    Error: (uncaught exception)ReferenceError: validateLogin is not defined.

      It is handled using : cypress -> supports -> commands.js
        -Inside commands.js:

           Cypress.on('uncaught:exception', (err, runnable) => {
             // returning false here prevents Cypress from
             // failing the test
              return false
             })



     Test Case 2: Register New Member

     Output:

     Success: - All the required values are posted with status code '200' 
              - Used assetions returns true values.

     Error: (uncaught exception)ReferenceError: validateReg is not defined.  

       It is handled using : cypress -> supports -> commands.js
        -Inside commands.js:

           Cypress.on('uncaught:exception', (err, runnable) => {
             // returning false here prevents Cypress from
             // failing the test
              return false
             })
       

     Test Case 3: Login Success 

      Output:

        Success: All the required values are posted with status code '200' and user is redirected to new page.


     Test Case 4: Request Quotation

       Output: 

          Success : - All the required values are posted with status code '200' 
                    - Used assetions returns true values. 
                    - User gets back to the home page.


     Test Case 5: Retrieve Quotation

        Output:

           Success : - All the required values are posted with status code '200'
                     - Random number is paseted on 'Unique Identification Number Field' successfully.

           Error : Since we have used Random Number to retrieve quotation, we will get 'Wrong Quotation Id' in the browser and it will not halt the system and won't print error in the console. So basically it is not an error.


     Test Case 6: Profile

        Output:

           Success : Profile page just opens, since we have just performed click() operation on locators of Profile tab.


     Test Case 7: Edit profile

        Output:

           Success :  - All the required values are posted with status code '200' 
                      - Used assetions returns true values. 
                            
 
            'After' gets executed here when the last test case finishes.

            Now we will be back to where we started and we will know that our test cases are successfully tested.



Step 7: All of our testing work is done.