const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");

  
//Questions to build Readme.md
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for this Project?',
        type: 'string'
    },
    {
        type: 'input',
        name: 'story',
        message: 'Describe the usage of this application',
        type: 'string'
    },
    {
        type: 'input',
        name: 'criteria',
        message: 'How would you describe this project?',
        type: 'string'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What type of technology was used to install this application?',
        type: 'string'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who all contributed to this project?',
        type: 'string'
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
        message: 'What is the URL to your live application?',
        type: 'string'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        type: 'string'
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
        type: 'string'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        type: 'string'

      },
])

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err, data) => {
		return err ? err : data;
	});
}
// function to initialize program
async function init() {
	console.log(
        `Create your own professional Readme.md by answering questions when prompted.`
    );

    
try {
		const answers = await inquirer.prompt(questions);
		const readme = generateMarkdown(answers);

		writeToFile("GenerateReadme.md", readme);
		console.log(`A README.md file was generated.`);
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

init();
