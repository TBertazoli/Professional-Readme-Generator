// const renderLicenseSection = require('./utils/generateMarkdown');


const generateReadme = results => {
    console.log(results);
    return `     
      
   # ${results.projectTitle}   

   ## Description
   ${results.description}
    
   ## Table of contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   - [Contribution](#Contribution)

   ## Instalation
   ${results.installation}
   
   ## Usage
   ${results.usage}
   
   ## Credits
   ${results.credits}
   
   ## License
   ${results.badge}
   
   ${results.licenseLink}
   
   ## Contribution
   ${results.contribution}
   
   ## Test
   ${results.test}

   ## Questions
   For questions please contact ${results.github}.

   GitHub link: ${results.link}
   
   email: ${results.email}
    `
}

module.exports = generateReadme;

//    ${renderLicenseSection()}