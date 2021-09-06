const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');

// // create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return inquirer.prompt([
  
//Questions to build Readme.md
const  questions =[
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

];

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

		writeToFile("sample-README.md", readme);
		console.log(`
        Success! A README.md file was created.`);
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

// function call to initialize program
init();