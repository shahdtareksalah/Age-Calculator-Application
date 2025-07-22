function calculateAge() {
    const birthInput = document.getElementById("birthdate").value;
    const resultDiv = document.getElementById("result");

    if (!birthInput) {
        resultDiv.innerHTML = "<p style='color:red;'>Please enter your birthdate.</p>";
        return;
    }

    const dateParts = birthInput.split("-");
    if (dateParts.length !== 3 || dateParts[0].length !== 2 || dateParts[1].length !== 2 || dateParts[2].length !== 4) {
        resultDiv.innerHTML = "<p style='color:red;'>Please use DD-MM-YYYY format.</p>";
        return;
    }

    const birthDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    const now = new Date();

    if (isNaN(birthDate.getTime())) {
        resultDiv.innerHTML = "<p style='color:red;'>Invalid date.</p>";
        return;
    }

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const ageInMilliseconds = now - birthDate;
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInHours = ageInDays * 24;
    const ageInMinutes = ageInHours * 60;
    const ageInSeconds = ageInMinutes * 60;
    const ageInMonths = years * 12 + months;

    resultDiv.innerHTML = `
        <div class="age-result">
            <h3>Age:</h3>
            <p>${years} Years ${months} Months ${days} Days</p>
        </div>
        <div class="other-stats">
            <div class="stat-item">
                <span class="stat-label">Months Passed:</span>
                <span class="stat-value">${ageInMonths}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Weeks Passed:</span>
                <span class="stat-value">${ageInWeeks}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Days Passed:</span>
                <span class="stat-value">${ageInDays}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Hours Passed:</span>
                <span class="stat-value">${ageInHours}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Minutes Passed:</span>
                <span class="stat-value">${ageInMinutes}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Seconds Passed:</span>
                <span class="stat-value">${ageInSeconds}</span>
            </div>
        </div>
    `;
}