function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var mobile = document.getElementById("mobile").value;
    var aadhar = document.getElementById("aadhar").value;
    var panCard = document.getElementById("panCard").value;
    var dob = document.getElementById("dob").value;
    var subject1 = parseInt(document.getElementById("subject1").value);
    var subject2 = parseInt(document.getElementById("subject2").value);
    var subject3 = parseInt(document.getElementById("subject3").value);
    var subject4 = parseInt(document.getElementById("subject4").value);
    var subject5 = parseInt(document.getElementById("subject5").value);
    var subject6 = parseInt(document.getElementById("subject6").value);

    var nameRegex = /^[a-zA-Z\s]+$/;
    var mobileRegex = /^[1-9][0-9]{9}$/;
    var aadharRegex = /^[0-9]{12}$/;
    var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    // Full Name Validation
    if (!nameRegex.test(fullName)) {
        alert("Please enter a valid full name.");
        return false;
    }

    // Mobile Number Validation
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number that does not start with 0.");
        return false;
    }

    // Aadhar Number Validation
    if (!aadharRegex.test(aadhar)) {
        alert("Please enter a valid 12-digit Aadhar number.");
        return false;
    }

    // PAN Card Validation
    if (!panRegex.test(panCard)) {
        alert("Please enter a valid PAN card number (e.g., ABCDE1234F).");
        return false;
    }

    // Date of Birth Validation (check if DOB is not in the future)
    var enteredDob = new Date(dob);
    var currentDate = new Date();
    
    // Reset time portion of the current date for accurate comparison
    currentDate.setHours(0, 0, 0, 0);

    if (enteredDob > currentDate) {
        alert("Please enter a valid date of birth. It cannot be in the future.");
        return false;
    }

    // Subject Marks Validation (must be between 0 and 100)
    if (subject1 < 0 || subject1 > 100 || isNaN(subject1)) {
        alert("Please enter valid marks for Subject 1 (between 0 and 100).");
        return false;
    }

    if (subject2 < 0 || subject2 > 100 || isNaN(subject2)) {
        alert("Please enter valid marks for Subject 2 (between 0 and 100).");
        return false;
    }

    if (subject3 < 0 || subject3 > 100 || isNaN(subject3)) {
        alert("Please enter valid marks for Subject 3 (between 0 and 100).");
        return false;
    }

    if (subject4 < 0 || subject4 > 100 || isNaN(subject4)) {
        alert("Please enter valid marks for Subject 4 (between 0 and 100).");
        return false;
    }

    if (subject5 < 0 || subject5 > 100 || isNaN(subject5)) {
        alert("Please enter valid marks for Subject 5 (between 0 and 100).");
        return false;
    }

    if (subject6 < 0 || subject6 > 100 || isNaN(subject6)) {
        alert("Please enter valid marks for Subject 6 (between 0 and 100).");
        return false;
    }

    // Calculate best of five subjects
    var marksArray = [subject1, subject2, subject3, subject4, subject5, subject6];
    
    // Sort the marks in descending order to pick the top 5 marks
    marksArray.sort(function(a, b) { return b - a; });

    // Select the top 5 marks
    var bestFiveMarks = marksArray.slice(0, 5);

    // Calculate total marks of best 5 subjects
    var totalBestFiveMarks = bestFiveMarks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);

    // Calculate percentage
    var percentage = (totalBestFiveMarks / 500) * 100; // Max marks in best of five = 500

    // Concatenate all details into a string to show in the alert
    var resultMessage = "Personal Information:\n" +
        "Full Name: " + fullName + "\n" +
        "Mobile Number: " + mobile + "\n" +
        "Aadhar Number: " + aadhar + "\n" +
        "PAN Card: " + panCard + "\n" +
        "Date of Birth: " + dob + "\n\n" +
        "Subject Marks:\n" +
        "Subject 1 Marks: " + subject1 + "\n" +
        "Subject 2 Marks: " + subject2 + "\n" +
        "Subject 3 Marks: " + subject3 + "\n" +
        "Subject 4 Marks: " + subject4 + "\n" +
        "Subject 5 Marks: " + subject5 + "\n" +
        "Subject 6 Marks: " + subject6 + "\n\n" +
        "Best 5 Marks: " + bestFiveMarks.join(", ") + "\n" +
        "Total Marks (Best of Five): " + totalBestFiveMarks + "\n" +
        "Percentage (Best of Five): " + percentage.toFixed(2) + "%";

    // Show the result message in an alert box
    alert(resultMessage);

    // If all validations pass
    return true;
}
