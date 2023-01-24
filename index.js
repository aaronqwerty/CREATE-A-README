// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'README Title?',
        name: 'myTitle',
      },
      {
          type: 'input',
          message: 'README Description?',
          name: 'myDescription',
        },
      {
          type: 'input',
          message: 'README Installation Instructions?',
          name: 'myInstallation',
        },
        {
          type: 'input',
          message: 'README Usage Information?',
          name: 'myUsage',
        },
        {
          type: 'input',
          message: 'README Contribution Guidelines?',
          name: 'myContributing',
        },
        {
            type: 'input',
            message: 'README Test Instructions?',
            name: 'myTests',
        },
        {
            type: 'list',
            message: 'README Licence Type?',
            choices: ['MIT','Unlicense','WTFPL'],
            name: 'myLicence',
        },
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'myGitHub',
        },
        {
            type: 'input',
            message: 'What is your Email Address?',
            name: 'myEmail',
        },
];


myLicence = "MIT"

inquirer.prompt(questions).then((response)=> {
    const {myTitle, myDescription, myInstallation, myUsage, myContributing, myTests, myLicence, myGitHub, myEmail} = response;
    let myLicenceBadge = "";
    let myLicenceLink = "";
    let myLicenceName = "";
if (myLicence === 'MIT') {
  myLicenceBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  myLicenceLink = `https://opensource.org/licenses/MIT`
  myLicenceName = `The MIT License`
} else if (myLicence === 'Unlicense') {
  myLicenceBadge = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  myLicenceLink = `http://unlicense.org/`
  myLicenceName = `The Unlicense`
} else if (myLicence === 'WTFPL') {
  myLicenceBadge = `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`
  myLicenceLink = `http://www.wtfpl.net/about/`
  myLicenceName = `The Do What the Fuck You Want to Public License`
} else {
  myLicenceBadge = "N/A"
  myLicenceLink = "N/A"
  myLicenceName = "N/A"
}
    const myReadme =
`# ${myTitle.toUpperCase()}
${myLicenceBadge}<br />
<br />    
## Description
${myDescription}<br />
<br />
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
<br />
<br />
## Installation
${myInstallation}<br />
<br />
## Usage
${myUsage}<br />
<br />
## Licence    
${myLicenceBadge}<br />
Name: ${myLicenceName}<br />
Further information about this licence can be found here; ${myLicenceLink}<br />
<br />
## Contributing
${myContributing}<br />
<br />
## Tests
${myTests}<br />
<br />
## Questions
If you have any questions or comments about this README, please contact me via email; [${myEmail}](mailto:${myEmail})<br />
You can also see my other GitHub projects here; [https://github.com/${myGitHub}](https://github.com/${myGitHub})<br />`;

writeToFile(myReadme);
 
});
  

  // TODO: Create a function to write README file
function writeToFile(myReadme) {
    //myLicence = "Badge";
    fs.writeFile(`README.md`, myReadme,(err)=>{
      console.log(err)
    });
  }
  

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();