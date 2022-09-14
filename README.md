# Demoguru99AutomationUsingCypress

[![demoguru99AutomationUsingCypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/uuh4sa&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/uuh4sa/runs) [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

***

## Introduction

***
"https://demo.guru99.com/insurance/v1/header.php" is automated using Cypress for login check, register, profile edit, creating and retrieving quotation and updating and viewing profile and finally logout operation.

***

## Tools & Programming Languages Used in Development

***
+ Visual Studio Code
+ JavaScript Language
+ Mocha Framework For Testing
+ Cypress Test Runner
+ Testing Browser : Any one of these (Google Chrome, Microsoft Edge, Electron,etc.)

***
## Help + Setting Up Test Environment
***

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for Node + Gitbash.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Fork this repo

If you want to experiment with running this project, you'll need to [fork](https://github.com/avicek0/demoguru99AutomationUsingCypress.git) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/avicek0/demoguru99AutomationUsingCypress.git

## cd into the cloned repo
cd demoguru99AutomationUsingCypress

## install the node_modules(It will install all the required dependencies.)
npm install

## start the cypress test runner
npx cypress open
```

The `npx cypress open` script will spawn a cypress test runner where we actually do the tests.

You should see the Cypress test runner app up and running. We are now ready to run Cypress tests.

***
## Documentation of Output of Test Cases
***

### Test Case 1: Login Failure
---

  'Before' is executed here and the first test case starts.
    
  Success: 
+ All the required values are posted with status code '200'
    
Error: 

+ (uncaught exception)ReferenceError: validateLogin is not defined.


This error is handled inside commands.js file : cypress -> supports -> commands.js


``` js
           Cypress.on('uncaught:exception', (err, runnable) => {
             // returning false here prevents Cypress from
             // failing the test
              return false
             })

```

---
### Test Case 2: Register New Member
---


Success: 

+ All the required values are posted with status code '200' 
+ Used assetions returns true values.

Error:

+ (uncaught exception)ReferenceError: validateReg is not defined.  
     



This error is handled inside commands.js file : cypress -> supports -> commands.js
        
``` js

           Cypress.on('uncaught:exception', (err, runnable) => {
             // returning false here prevents Cypress from
             // failing the test
              return false
             })
          
```
       
---
### Test Case 3: Login Success 
---
Success:
+ All the required values are posted with status code '200' and user is redirected to new page.

Error:
+ Not any.
       

---
### Test Case 4: Request Quotation
---
  

Success :

- All the required values are posted with status code '200' 
- Used assetions returns true values. 
- User gets back to the home page.


Error:

+ Not any.

---
### Test Case 5: Retrieve Quotation
---


Success : 

+ All the required values are posted with status code '200'
+ Random number is paseted on 'Unique Identification Number Field' successfully.

Error : 
+ Not Any.

+ Since we have used Random Number to retrieve quotation, we will get 'Wrong Quotation Id' in the browser and it will not halt the system and won't print error in the console. So basically it is not an error.

---
### Test Case 6: Opening Profile
---
Success :

+ Profile page just opens, since we have just performed click() operation on locators of Profile tab.

Error : 
+ Not Any.

---
### Test Case 7: Edit profile
---
Success :  

- All the required values are posted with status code '200' 
- Used assetions returns true values. 

Error: 
+ Not Any.
                            
'After' gets executed here when the last test case finishes.

Now we will be logged out to where we started and we will know that our test cases are successfully tested.


## Happy Testing
If you find problems with Cypress,
+ Consult the documentation
+ find an existing [issue](https://github.com/avicek0/demoguru99AutomationUsingCypress/issues) or open a new one