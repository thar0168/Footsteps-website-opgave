window.addEventListener("DOMContentLoaded", function () {
    var errorCount;

    var myForm = document.forms["contactForm"];

    var firstname = myForm["firstname"];
    var lastname = myForm["lastname"];
    var subject = myForm["subject"]
    var email = myForm["email"];
    

    var lblFirstname = firstname.nextElementSibling;
    var lblLastname = lastname.nextElementSibling;
    var lblSubject = subject.nextElementSibling;
    var lblEmail = email.nextElementSibling;
    

    var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z ]{2,6}(?:\.[a-z]{2})?)$/;

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errorCount = 0;
        lblFirstname.innerHTML = "";
        lblLastname.innerHTML = "";
        lblSubject.innerHTML = "";
        lblEmail.innerHTML = "";


        if (firstname.value.length == 0) {
            lblFirstname.innerHTML = "Udfyld dit fornavn";
            errorCount++;
        }
            if (lastname.value.length == 0) {
                lblLastname.innerHTML = "Udfyld dit Efternavn";
                errorCount++;
        }

        if (subject.value.length == 0) {
            lblSubject.innerHTML = "Skriv din besked";
            errorCount++;
        }

        if (!regexEmail.test(email.value)) {
            lblEmail.innerHTML = "Email er ikke korrekt format";
            errorCount++;
        }

        if (errorCount == 0) {
            myForm.submit();
        }
        console.log(errorCount);
    })
})