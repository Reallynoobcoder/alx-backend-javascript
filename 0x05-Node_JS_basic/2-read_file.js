const fs = require('fs');

function countStudents(fileName) {
  try {
    const data = fs.readFileSync(fileName, 'utf8');

    const arr = data.split('\n').filter((line) => line.trim() !== '');

    if (arr.length <= 1) {
      return;
    }

    const totalStudents = arr.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    const header = arr[0].split(',');
    const fieldIndex = header.indexOf('field');

    let countCS = 0;
    let countSWE = 0;
    const csNames = [];
    const sweNames = [];

    for (let i = 1; i < arr.length; i += 1) {
      const columns = arr[i].split(',');

      const field = columns[fieldIndex].trim();
      const firstName = columns[0].trim();

      if (field === 'CS') {
        csNames.push(firstName);
        countCS += 1;
      } else if (field === 'SWE') {
        sweNames.push(firstName);
        countSWE += 1;
      }
    }

    console.log(`Number of students in CS: ${countCS}. List: ${csNames.join(', ')}`);
    console.log(`Number of students in SWE: ${countSWE}. List: ${sweNames.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
