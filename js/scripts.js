// BUSINESS LOGIC
function results(inp1, inp2, inp3) {
  // STUFF
  alert(`Function has received the inputs ${inp1}, ${inp2}, and ${inp3}.`)
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
    const answer1 = $("input#quest1").text()
    const answer2 = $("input#quest2").text()
    const answer3 = $("input#quest3").text()
    alert(`Variables assigned`)

    // Pass form inputs (as variables) to a business-logic
    // function as parameters:
    results(answer1, answer2, answer3)
  })
})