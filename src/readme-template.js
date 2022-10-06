const generateReadme = results => {
    return `    
   # ${results.projectName}
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
   ${results.credits}
   ## Contribution
    `
}

module.exports = generateReadme;