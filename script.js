function addRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll('.remove-subject');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.parentElement.remove();
        });
    });
}

function updatePlaceholder() {
    const subjectInputs = document.querySelectorAll('.subject');
    subjectInputs.forEach(input => {
        const inputFields = input.querySelectorAll('input');
        inputFields[0].setAttribute('placeholder', 'Subject');
        inputFields[1].setAttribute('placeholder', 'Marks');
        inputFields[2].setAttribute('placeholder', 'Credit');
    });
}

document.getElementById('addSubject').addEventListener('click', function() {
    const subjectsDiv = document.getElementById('subjects');
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');
    subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject" class="subject-name">
        <input type="number" placeholder="Marks" class="subject-marks">
        <input type="number" placeholder="Credit" class="subject-credits">
        <button type="button" class="remove-subject">X</button>
    `;
    subjectsDiv.appendChild(subjectDiv);
    
    updatePlaceholder();
    
    addRemoveButtonListeners();
});

addRemoveButtonListeners();
updatePlaceholder();

document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const subjects = document.querySelectorAll('.subject');
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        const marks = parseFloat(subject.querySelector('.subject-marks').value);
        const credits = parseFloat(subject.querySelector('.subject-credits').value);
        const gradePoint = getGradePoint(marks);
        totalPoints += gradePoint * credits;
        totalCredits += credits;
    });

    const cgpa = (totalCredits > 0) ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
});

function getGradePoint(marks) {
    if (marks >= 80) return 4.0;
    if (marks >= 75) return 3.75;
    if (marks >= 70) return 3.50;
    if (marks >= 65) return 3.25;
    if (marks >= 60) return 3.0;
    if (marks >= 55) return 2.75;
    if (marks >= 50) return 2.50;
    if (marks >= 45) return 2.25;
    if (marks >= 40) return 2.0;
    return 0.0;
}
