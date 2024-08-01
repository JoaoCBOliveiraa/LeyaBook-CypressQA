------------Leya Book Website QA Automation------------

This is a small project I created to test a book website called Leya, for this project I chose to use Cypress.
In order to run this project you need to setup a few dependencies (mainly Node.js and Cypress):

1. Install Node.js

   - Go to [Node.js official website](https://nodejs.org/) and download the LTS version.
   - Follow the installation instructions provided.

2. Clone the Repository OR Download from github
   a) If you wish to download it from github:

   -
   -

   b) If you wish to clone it with git:

   - Run the following command on Git Bash or CMD, 'git clone https://github.com/your-username/your-repository.git' (REPLACE)

3. Open your IDE and open the project folder (I used VSCode for the project), open a new terminal from the IDE or open CMD and use 'cd' command to search for the project's folder (if on desktop, use: 'cd Desktop/<project name>')

4. Install Project Dependencies:

   - Once the project's directory is selected, run the command: 'npm install' to read the package.json file and install the packages specified and add to 'node_modules'

5. Add Cypress to the project and execute it:

   - Once the project's directory is selected, run the command: 'npm install cypress --save-dev'
   - Launch the Cypress Test Runner by running the command: npx cypress open (or 'npx cypress run --browser chrome' if you want to execute it on chrome)
   - Once you are on the Cypress UI Welcome windows, 1.Click on E2E Testing, 2.Select the browser to run the tests, 3.Press 'Start E2E Testing in Chrome', 4.The tests will now run

   !!! NOTE: I have setup a test retry option in case the tests fail due to loading of the page. If 1 or 2 tests fail, please wait for the 2nd retry and they should work accordingly. !!!
