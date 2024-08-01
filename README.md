------------Leya Book Website QA Automation------------

This is a small project I created to test a book website called Leya, for this project I chose to use Cypress.
In order to run this project you need to setup a few dependencies (mainly Node.js and Cypress):

1. Install Node.js

   - Go to [Node.js official website](https://nodejs.org/) and download the LTS version.
   - Follow the installation instructions provided.
   - 'npm' is automatically installed with Node.js

2. Clone the Repository OR Download from github
   a) If you wish to download it from github:

   - Click on the green button named 'Code'
   - Click on Download ZIP and export to desktop or chosen folder

   b) If you wish to clone it with git:

   - Run the following command on Git Bash / Terminal / CMD, 'git clone https://github.com/JoaoCBOliveiraa/LeyaBook-CypressQA.git' (REPLACE)

3. Open your IDE and open the project folder (I used VSCode for the project), open a new terminal from the IDE or open CMD and use 'cd' command on terminal to search for the project's folder (if on desktop, use: 'cd Desktop/<project name>')

4. Install Project Dependencies:

   - Once the project's directory is selected, run the command on terminal: 'npm install' to read the package.json file and install the packages specified and add to 'node_modules'

5. Add Cypress to the project and execute it:

   - Once the project's directory is selected, run the command: 'npm install cypress --save-dev'
   - Launch the Cypress Test Runner by running the command: npx cypress open (or 'npx cypress run --browser chrome' if you want to execute it on chrome)
   - Once you are on the Cypress UI Welcome windows, 1.Click on E2E Testing, 2.Select the browser to run the tests, 3.Press 'Start E2E Testing in Chrome', 4.The tests will now run

   !!! NOTE: I have setup a test retry option in case the tests fail due to loading of the page. If 1 or 2 tests fail, please wait for the 2nd retry and they should work accordingly. !!!


-- >List of tests:

// Scenario 1:
-Search for George.
-Verify that the book "O Triunfo dos Porcos" is displayed on the list.
-Confirm that the book description contains the words "Quinta Manor."

// Scenario 2:
-Search for the book "1984."
-Validate that the author is "George Orwell."
-Confirm that the ISBN is "9789722071550."
-Check that the number of pages is "344."
-Ensure that the dimensions of the book are "235 x 157 x 23 mm."

// Scenario 3:
-Search for the book "1984."
-Verify that the book "A Quinta dos Animais" is authored by the same author.

// Scenario 4:
-Search for the book "1984."
-Add the book to the basket.
-Confirm that the number of items in the basket is "1."

// Scenario 5:
-Change the background to dark mode.
-Check if the dark mode has been successfully applied to the website.

// Scenario 6:
- Click on the login button
- Insert test account details (test email: testuseremail@gmail.com, password: 123123123)
- Click login and confirm it was successfull

// Scenario 7:
- Add an highlights book to cart
- Go to cart and remove the book
- Go to FAQ page and click on 'Registo'
- Click on logo at the top left of the page
