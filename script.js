function addSubject() {
    const subjectContainer = document.getElementById("subject-container");

    const subjectDiv = document.createElement("div");
    subjectDiv.classList.add("form-group");

    const subjectCount = subjectContainer.children.length + 1;

    subjectDiv.innerHTML = `
        <label for="grade${subjectCount}">Total Marks for Subject ${subjectCount}:</label>
        <input type="number" id="grade${subjectCount}" min="0" max="100" step="1" required>
        <label for="credits${subjectCount}">Course Credit for Subject ${subjectCount}:</label>
        <input type="number" id="credits${subjectCount}" min="1" step="1" required>
    `;

    subjectContainer.appendChild(subjectDiv);
}

document.addEventListener("DOMContentLoaded", function() {
    addSubject(); // Add initial subject input

    const form = document.getElementById("cgpa-form");
    const resultDiv = document.getElementById("result");
    const cgpaSpan = document.getElementById("cgpa");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let totalGradePoints = 0;
        let totalCredits = 0;

        const subjectInputs = form.querySelectorAll(".form-group");

        subjectInputs.forEach((subjectDiv, index) => {
            const gradeInput = subjectDiv.querySelector(`#grade${index + 1}`);
            const creditsInput = subjectDiv.querySelector(`#credits${index + 1}`);

            const grade = parseFloat(gradeInput.value);
            const credits = parseInt(creditsInput.value);

            totalGradePoints += (grade / 100) * 4.00 * credits;
            totalCredits += credits;
        });

        const cgpa = totalGradePoints / totalCredits;
        cgpaSpan.textContent = cgpa.toFixed(2);

        resultDiv.style.display = "block";
    });
});
