#!/usr/bin/env node

import inquirer from 'inquirer';
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`).filter((dir) => dir !== '.DS_Store');

const QUESTIONS = [
    {
        name: 'project-choice',
        type: 'list',
        message: 'What react vite project template would you like to create?',
        choices: CHOICES,
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name:',
        validate: function (input) {
            if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
            else return 'Project name may only include letters, numbers, underscores and hashes.';
        },
    },
];

inquirer.prompt(QUESTIONS).then((answers) => {
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
    fs.cpSync(templatePath, projectName, { recursive: true });
    fs.renameSync(`${projectName}/gitignore`, `${projectName}/.gitignore`);
    fs.renameSync(`${projectName}/eslintrc.js`, `${projectName}/.eslintrc.js`);
    fs.renameSync(`${projectName}/env.sample`, `${projectName}/.env.sample`);
});
