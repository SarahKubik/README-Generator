
function generateMarkdown(data) {

     const {
      title,
      story,
      criteria,
      installation,
      contributors,
      license,
      links,
      github,
      linkedin,
      email,
      
     } = data;
    
}
    return `

    # ${title}
  
    ## Table of Contents

    *[User Story](#story)
    *[Acceptance Criteria](#criteria)
    *[Installation](#installation)
    *[Contributors](#contributors)
    *[License](#license)
    *[links](#links)
    *[Contact](#github)(#linkedin)(#email)

    ## User Story
    ${story}

    ## Acceptance Criteria
    ${criteria}

    ## Installation
    ${installation}

    ## Contributors
    ${contributors}

    ##License
    ${license}
    
    ##Links
    ${links}

    ##Contact
    ${github}
    ${linkedin}
    ${email}
    
    `;

module.exports = generateMarkdown;