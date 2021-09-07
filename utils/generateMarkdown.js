function generateMarkdown(data) {

    return `# ${data.title}

## **Table of Contents**

* [User Story](#story)
* [Acceptance Criteria](#criteria)
* [Installation](#installation)
* [Contributors](#contributors)
* [License](#license)
* [Links](#links)
* [Contact](#Github)

## **User Story**

> ${data.usage}

## **Acceptance Criteria**

> ${data.criteria}

## **Installation**

> ${data.installation}

## **Contributors**

> ${data.contributors}

## **License**

> * ${data.license}

## **Links**

> * ${data.linkrepo}
> * ${data.linkurl}

## **Contact**

> * Github: ${data.github}
> * Linkedin: ${data.linkedin}
> * Email: ${data.email}
`;

}
module.exports = generateMarkdown;