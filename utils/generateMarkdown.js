// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}2.0-blue.svg)\n`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
        This project is licensed under the ${license} license.

        Copyright (c) 2011-2020 Fatih Ay

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
        to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
        and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
        LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    }
    return '';
}

// TODO: Create a function to generate markdown for README

// var link = `https://opensourse.org/licenses/${data.license}`

function generateMarkdown(data) {
    // ! [GitHub License](https://img.shields.io/badge/license-${data.license}2.0-blue.svg )


    return `
<h1> #${data.title} </h1>

${renderLicenseBadge(data.license)}

<h1>  Table of Contents </h1>

* [Description](#description)\n
* [Installation](#installation)\n  
* [Usage](#usage)\n
${renderLicenseLink(data.license)}\n 
* [Constributing](#constributing)\n
* [Test](#test)\n
* [Questions](#Questions)\n

   

## Description
${data.description}
## Installation:
${data.installation}             
## Usage:
${data.usage}            
## Constributing:
${data.contributed} 
## Test:
 ${data.Instruction}\n

${renderLicenseSection(data.license)}
            
            
## Questions:

For questions about the Generator you can go to my 
GitHub page at the following Link:

-[GitHub Profile](https://github.com/${data.GitHubUsername})    

For additional questions please reach out to my eamil at: ${data.GitHubEmail}

`;
}

module.exports = generateMarkdown;
