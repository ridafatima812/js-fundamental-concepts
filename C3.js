// ===============================
// c3.js — Student Grade System
// ===============================

// -------------------------------
// 1. getAverage(scores)
// -------------------------------
function getAverage(scores) {
    let sum = 0;
    let count = 0;

    for (const score of scores) {
        const num = Number(score);

        if (score === null || isNaN(num)) continue;

        sum += num;
        count++;
    }

    if (count === 0) return 0;

    return Math.round((sum / count) * 10) / 10;
}


// -------------------------------
// 2. getGrade(average)
// -------------------------------
function getGrade(average) {
    if (average >= 90) return 'A+';
    if (average >= 80) return 'A';
    if (average >= 70) return 'B';
    if (average >= 60) return 'C';
    if (average >= 50) return 'D';
    return 'F';
}


// -------------------------------
// 3. generateReport(students)
// -------------------------------
function generateReport(students) {
    const report = [];

    for (const student of students) {
        const average = getAverage(student.scores);
        const grade = getGrade(average);

        report.push({
            name: student.name,
            average,
            grade,
            status: student.present ? 'present' : 'absent',
            passed: average >= 60 && student.present
        });
    }

    return report;
}


// -------------------------------
// 4. getSummary(report)
// -------------------------------
function getSummary(report) {
    let total = report.length;
    let passed = 0;
    let failed = 0;

    let sum = 0;
    let topStudent = report[0];

    for (const student of report) {
        sum += student.average;

        if (student.passed) passed++;
        else failed++;

        if (student.average > topStudent.average) {
            topStudent = student;
        }
    }

    const classAverage = total ? Math.round((sum / total) * 10) / 10 : 0;

    return {
        total,
        passed,
        failed,
        topStudent: topStudent.name,
        classAverage
    };
}


// ===============================
// GIVEN DATA (DO NOT MODIFY)
// ===============================
const students = [
    { name: 'Asad',  scores: [85, 90, 78, 92], present: true },
    { name: 'Sara',  scores: [70, 65, '80', 75], present: true },
    { name: 'Ali',   scores: [55, 60, 50, null], present: false },
    { name: 'Fatima',scores: [95, 98, 100, 92], present: true },
    { name: 'Umar',  scores: [], present: true },
];


// ===============================
// TESTS
// ===============================

const report = generateReport(students);

console.log("=== STUDENT REPORT ===");
console.log(report);

console.log("=== SUMMARY ===");
console.log(getSummary(report));

console.log("=== ORIGINAL STUDENTS (UNCHANGED PROOF) ===");
console.log(students);