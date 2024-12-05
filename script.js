function calculateSGPA() {
    const subjects = {
        gp: 1,
        uhv: 2,
        aptitude: 2,
        internship: 2,
        agile: 2,
        math: 3,
        dbms: 4,
        os: 4,
        ds: 4,
        stats: 4,
    };

    const gradeMapping = {
        "A+": 10, "A": 9, "B+": 8, "B": 7, 
        "C+": 6, "C": 5, "D+": 4, "D": 3, "E": 2
    };

    let totalWeightedGrade = 0;
    let totalGradePoints = 0;

    for (let subject in subjects) {
        const gradeInput = document.getElementById(subject).value.trim();
        if (gradeMapping[gradeInput]) {
            totalWeightedGrade += gradeMapping[gradeInput] * subjects[subject];
            totalGradePoints += subjects[subject];
        } else {
            document.getElementById("result").textContent =
                "Invalid grade entered for one or more subjects. Please use valid grades like A+, A, B+, etc.";
            return;
        }
    }

    const sgpa = totalWeightedGrade / totalGradePoints;
    document.getElementById("result").textContent = `Your SGPA is: ${sgpa.toFixed(2)}`;
}
