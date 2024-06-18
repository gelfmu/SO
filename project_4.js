
function submitForm() {
    var form = document.getElementById("contact-form");
    var formData = new FormData(form);


    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }


    form.reset();
}
