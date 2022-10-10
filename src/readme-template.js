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
   For questions please contact ${results.gitHub}.

   GitHub link: ${results.link}
   
   email: ${results.email}
    `
}

module.exports = generateReadme;

