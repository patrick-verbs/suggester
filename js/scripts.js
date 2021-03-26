// BUSINESS LOGIC
function results(inp1, inp2, inp3, inp4, inp5, inp6) {
  alert(`Here's what to say to ${inp1}: "${inp2} My name is ${inp3} My pronouns are ${inp4}. ${inp5} ${inp6}"`)

  // Extrapolate some data from inputs:
  // Group inputs into pairs, add their string lengths together, and assign value "0" for evens and "1" for odds
  const count1 = (inp1.length + inp2.length) % 2
  const count2 = (inp3.length + inp4.length) % 2
  const count3 = (inp5.length + inp6.length) % 2
  // Tally the results, which must range from "0" (all evens) to "3" (all odds)
  let totalCount = count1 + count2 + count3
  // Catch errors in the above input handling and variable assignment:
  totalCount = totalCount.toString()
  alert(`totalCount: ${totalCount}`)
  if ( totalCount.isNaN() === true || totalCount < 0 || totalCount > 3 || totalCount != parseInt(totalCount) ) {
    alert(`Something went wrong passing user input data to the totalCount variable. It currently has the value of "${totalCount}".`)
  } else {
    alert(`So far, so good!`)
  }

  // Use branching to return at least 3 different results
  if (totalCount === 0) {
    alert(`result 1`)
  } else if (totalCount === 1) {
    alert(`result 2`)
  } else if (totalCount === 2) {
    alert(`result 3`)
  } else if (totalCount === 3) {
    alert(`result 4`)
  } else {
    alert(`Branch logic exception. This logic uses the totalCount variable.`)
  }
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  // Receive the form data:
  $("#form1").submit(function() {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    // Set variables to the form's inputs for readability:
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