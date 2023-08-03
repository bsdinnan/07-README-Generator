// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const LicenseImg = {
    MIT: 'MIT',
    Apache: 'Apache_2.0',
    AGPL: 'AGPL',
  };
  if(license === "MIT") {
    return LicenseImg.MIT
  } else if (license === "Apache-2.0") {
    return LicenseImg.Apache
  } else if (license=== "AGPL") {
    return LicenseImg.AGPL
  } else {
    return ''
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const License = {
    MIT: 'https://opensource.org/license/mit/',
    Apache: 'https://opensource.org/license/apache-2-0/' ,
    AGPL: 'https://www.gnu.org/licenses/agpl-3.0',
  };
  if(license === "MIT") {
    return License.MIT
  } else if (license === "Apache-2.0") {
    return License.Apache
  } else if (license=== "AGPL") {
    return License.AGPL
  } else {
    return ''
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const LicenseTxt = {
    MIT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    Apache: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    AGPL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };
if(license === "MIT") {
  return LicenseTxt.MIT
} else if (license === "Apache-2.0") {
  return LicenseTxt.Apache
} else if (license=== "AGPL") {
  return LicenseTxt.AGPL
} else {
  return ''
};
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how_to_contribute)
  - [Tests](#tests)
  - [Contact](#contact)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  [${data.license} License](img src="https://img.shields.io/badge/license-${renderLicenseBadge(data.license)}-blue.svg")
  [${data.license} License](${renderLicenseLink(data.license)})
  ${renderLicenseSection(data.license)}
  ## How to Contribute
  ${data.contribution}
  ## Tests
  ${data.testing}
  ## Contact
  Github:
  [${data.username}](github.com/${data.username})
  Email:
  ${data.email}
  You can contact me on Github, or by email.
`;
};

module.exports = generateMarkdown;
