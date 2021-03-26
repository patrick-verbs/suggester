// BUSINESS LOGIC
function results(inp1, inp2, inp3, inp4, inp5, inp6) {
  // STUFF
  alert(`Here's what to say to ${inp1}: "${inp2} My name is ${inp3} My pronouns are ${inp4}. ${inp5} ${inp6}"`)
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  console.log("Document ready for user input.")
  // Get form data:
  $("#form1").submit(function() {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    // Set variables to form inputs for readability:
    const addressee = $("input#addressee").val()
    const greeting = $("input#greeting").val()
    const codename = $("input#codename").val()
    const pronouns = $("input#pronouns").val()
    const connection = $("input#connection").val()
    const manage = $("input#manage").val()
    alert(`Variables assigned`)

    // Pass form inputs (as variables) to a business-logic
    // function as parameters:
    results(addressee, greeting, codename, pronouns, connection, manage)
  })
})