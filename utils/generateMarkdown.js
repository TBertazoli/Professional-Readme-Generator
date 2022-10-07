
const fs = require('fs')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'BSD-3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'BSD-2':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-green.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC'
      break;
    default:
      return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(license) { 

  console.log('test', license);
  renderLicenseBadge(license)
  // .then(renderLicenseLink)
  // .then(renderLicenseSection => {
  //   return `${results.title}`
  // }) 

}




module.exports = generateMarkdown;