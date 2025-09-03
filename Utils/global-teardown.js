const { execSync } = require('child_process');

module.exports = async () => {
  console.log('\nGenerating Allure Report...');
  execSync('npx allure generate my-allure-test-results --clean -o allure-report', { stdio: 'inherit' });
  console.log('\nAllure report generated at "allure-report".');
  console.log('To open last Allure report run:\n');
  console.log('\x1b[34m  npx allure open allure-report\x1b[0m\n'); // Blue colored command
};