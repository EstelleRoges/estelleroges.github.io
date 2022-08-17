const sendMail = (event) => {
  event.preventDefault();
  var personName = document.getElementById("personName").value;
  var personMail = document.getElementById("personMail").value;
  var mailTopic = document.getElementById("topic").value;
  var personMessage = document.getElementById("personMessage").value;
  emailjs
    .send("gmailService_teru", "teru_basic_template", {
      from_name: personName,
      to_name: "Teru",
      subject: mailTopic,
      message: personMessage,
      reply_to: personMail,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
           alert("Votre message a bien été envoyé!");
      },
      function (error) {
        console.log("FAILED...", error);
           alert("Désolée, il y a eu un souci au niveau de l'envoi...")
      }
    );
 
};
