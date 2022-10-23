# Team Profile Generator

## Description
  It is important for a manager/team leader to be able to contact team members easily. With the help of this application, the manager is able to have the team member's emails and GitHub profiles displayed on a webpage and hence have easy access to their basic information. 

  This application is used to create a webpage that displays summaries of employees detail from a software engineering team. The data is collected through user input on the command-line using Node.js. 


## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demonstration](#demonstration)
  - [License](#license)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Questions](#questions)
  - [Credits](#credits)


## Installation 
  Before attempting to use this application, you must have the follow programs installed to your computer: 

  - VS Code
  - GitBash
  - Node.js
  
  In the terminal of VS Code please install the following packages: 
  ```bash
  npm init -y
  npm i fs
  ```

 - [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting user input
 - [Jest](https://www.npmjs.com/package/jest) for running the unit tests 

## Usage
  The application will be invoked by using the following command:

  ```bash
  node index.js
  ```


## Demonstration
  The following animation demonstates a mock up for the use of this application generated HTML’s appearance and functionality:

  ![HTML webpage titled “My Team” features displays boxes with listing employee names, titles, and other key info.](https://user-images.githubusercontent.com/106384519/197366918-755f1293-4d15-4998-a1b1-d6b69c686626.mp4)
  <br/>
  https://user-images.githubusercontent.com/106384519/197366918-755f1293-4d15-4998-a1b1-d6b69c686626.mp4


## License 
  ![License](https://img.shields.io/github/license/lalalaviv/Team-Profile-Generator)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Questions
  Feel free to reach out if you have any enquiries
  <br/>
  GitHub: [@lalalaviv](https://github.com/lalalaviv)
  Email: lalala.viv@hotmail.com


## Credits
  Vivian Lee





