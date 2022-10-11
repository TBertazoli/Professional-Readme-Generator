const generateReadme = results => {
    console.log(results);
    return `     
      
   # ${results.projectTitle}  

   ${results.badge} 

   ## Description
   ${results.description}
    
   ## Table of contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   - [Contribution](#contribution)
   - [Test](#test)
   - [Questions](#questions)

   ## Installation
   ${results.installation || 'N/A'}
   
   ## Usage
   ${results.usage || 'N/A'}
   
   ## Credits
   ${results.credits || 'N/A'}
  
   ## License
   ${ results.license !== "None" ? "This application is covered under " + results.license + " license." : "N/A"}
   

   ${results.licenseLink}

   ## Contribution
   ${results.contribution || 'N/A'}   
 
   
   ## Test
   ${results.test || 'N/A'}

   ## Questions
   For questions please contact https://github.com/${results.gitHub}

   GitHub repository link: ${results.link}
   
   ${ results.linkDeployed !== '' ? "GitHub deployed application link: " + results.linkDeployed : ''}
   
   email: ${results.email}
    `
}

module.exports = generateReadme;

