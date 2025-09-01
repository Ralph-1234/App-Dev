    function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value, 
    }
    emailjs.send("service_auvh43p", "template_8x8txiq",parms)
}