const generateReadme = results => {
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
   
   ## Licence
   ${results.licence}
   
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