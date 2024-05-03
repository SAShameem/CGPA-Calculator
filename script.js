document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-subject-btn");
    const subjectContainer = document.getElementById("subject-container");
    const resultDiv = document.getElementById("result");
    const cgpaSpan = document.getElementById("cgpa");

    addButton.addEventListener("click", function() {
        const subjectCount = subjectContainer.children.length + 1;

        const subjectDiv = document.createElement("div");
        subjectDiv.classList.add("form-group");

        subjectDiv.innerHTML = `
            <label for="grade${subjectCount}">Total Marks for Subject ${subjectCount}:</label>
            <input type="number" id="grade${subjectCount}" min="0" max="100" step="0.01" required>
            <label for="credits${subjectCount}">Course Credit for Subject ${subjectCount}:</label>
            <input type="number" id="credits${subjectCount}" min="0.5" step="0.5" required>
        `;

        subjectContainer.appendChild(subjectDiv);
    });

    const form = document.getElementById("cgpa-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let totalGradePoints = 0;
        let totalCredits = 0;

        const subjectInputs = subjectContainer.querySelectorAll(".form-group");

        subjectInputs.forEach((subjectDiv, index) => {
            const gradeInput = subjectDiv.querySelector(`#grade${index + 1}`);
            const creditsInput = subjectDiv.querySelector(`#credits${index + 1}`);

            const grade = parseFloat(gradeInput.value);
            const credits = parseFloat(creditsInput.value);

            totalGradePoints += (grade / 100) * 4.00 * credits;
            totalCredits += credits;
        });

        const cgpa = totalGradePoints / totalCredits;
        cgpaSpan.textContent = cgpa.toFixed(2);

        resultDiv.style.display = "block";
    });
});
