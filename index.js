const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
   
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for this Project?'
    },
    {
        type: 'input',
        name: 'User Story',
        message: 'Describe the usage of this application'
    },
    {
        type: 'input',
        name: 'criteria',
        message: 'How would you describe this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What type of technology was used to install this application?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who all contributed to this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0'
        ]
    },
    {
        type: 'input',
        name: 'links',
        message: 'What is the URL to your live application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }

]);
};

const generateReadme = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Title ${data.title}</h1>

    <h2 class="display-4">User Story ${data.usage}</h2>
    <h2 class="display-4">Acceptance Criteria ${data.criteria}</h2>
    <h2 class="display-4">Installation ${data.technology}</h2>
    <h2 class="display-4"Contributors ${data.contributors}</h2>
    <h2>Example heading <span class="badge badge-secondary">Links</span></h2>
    <ul class="list-group">
      <li class="list-group-item">GitHub URL: ${data.gitrepo}</li>
      <li class="list-group-item">App URL: ${data.appurl}</li>  
    </ul>
    <h2>Example heading <span class="badge badge-secondary">Contact Info</span></h2>
    <ul class="list-group">
      <li class="list-group-item">GitHub username: ${data.github}</li>
      <li class="list-group-item">LinkedIn: ${data.linkedin}</li>
      <li class="list-group-item">Email: ${data.email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('readme.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
};

init();