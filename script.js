document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cgpa-form");
    const resultDiv = document.getElementById("result");
    const cgpaSpan = document.getElementById("cgpa");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the number of courses
        const numberOfCourses = form.querySelectorAll(".form-group").length;

        // Initialize variables for total grade points and total credits
        let totalGradePoints = 0;
        let totalCredits = 0;

        // Loop through each course input and calculate grade points
        for (let i = 1; i <= numberOfCourses; i++) {
            const gradeInput = document.getElementById("grade" + i);
            const creditsInput = document.getElementById("credits" + i);

            const grade = parseFloat(gradeInput.value);
            const credits = parseInt(creditsInput.value);

            // Calculate grade points for the current course
            let gradePoint;
            if (grade >= 80) {
                gradePoint = 4.00;
            } else if (grade >= 75) {
                gradePoint = 3.75;
            } else if (grade >= 70) {
                gradePoint = 3.50;
            } else if (grade >= 65) {
                gradePoint = 3.25;
            } else if (grade >= 60) {
                gradePoint = 3.00;
            } else if (grade >= 55) {
                gradePoint = 2.75;
            } else if (grade >= 50) {
                gradePoint = 2.50;
            } else if (grade >= 45) {
                gradePoint = 2.25;
            } else if (grade >= 40) {
                gradePoint = 2.00;
            } else {
                gradePoint = 0.00;
            }

            // Add grade points and credits to totals
            totalGradePoints += gradePoint * credits;
            totalCredits += credits;
        }

        // Calculate CGPA
        const cgpa = totalGradePoints / totalCredits;

        // Display the result
        resultDiv.style.display = "block";
        cgpaSpan.textContent = cgpa.toFixed(2);
    });
});
