// BUSINESS LOGIC
/////////////////
function results(inp1, inp2, inp3, inp4, inp5, inp6) {
  alert(`Here's what to say to ${inp1}: "${inp2} My name is ${inp3} My pronouns are ${inp4}. ${inp5} ${inp6}"`)

  // Extrapolate some data from inputs:
  // Group inputs into pairs, add their string-lengths together, and assign value "0" for evens and "1" for odds
  const count1 = (inp1.length + inp2.length) % 2// Always returns "0" or "1"
  const count2 = (inp3.length + inp4.length) % 2
  const count3 = (inp5.length + inp6.length) % 2
  // Tuck constants into an array for simplified error prevention and legible future scaling:
  const counts = [count1, count2, count3]
  // Tally the character-counts using the array to prevent unpredictable results:
  // CHANGE THE BELOW TO A LOOP IF ENOUGH TIME LEFT, MORE ROBUST & LEGIBLE AT SCALE
  const totalCount = counts[0] + counts[1] + counts[2]
  // Catch errors in the above input handling and variable assignment:
  if ( totalCount < 0 || totalCount > counts.length || totalCount != parseInt(totalCount) ) {
    alert(`Something went wrong passing user input data to the 'totalCount' variable.`
    + `\r\nIt currently has the value of "${totalCount}".`)
  } else {
    alert(`So far, so good!`)
  }

  // Use branching to return at least 3 different results
  if (totalCount === 0) {
    alert(`Result 1:`
    + `\r\nTotalCount = ${totalCount}`)
  } else if (totalCount === 1) {
    alert(`Result 2: totalCount = ${totalCount}`)
  } else if (totalCount === 2) {
    alert(`Result 3: totalCount = ${totalCount}`)
  } else if (totalCount === 3) {
    alert(`Result 4: totalCount = ${totalCount}`)
  } else {
    alert(`Branch logic exception.`
    + `\r\nThis branching uses the totalCount variable, which should have a value from 0 to ${counts.length}.`
    + `\r\nIt currently has a value of ${totalCount}.`)
  }
}

// USER INTERFACE LOGIC
///////////////////////
$(document).ready(function() {
  // Receive the form data:
  $("#form1").submit(function() {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    // Set variables to the form's inputs for readability:
    const addressee = $("input#addressee").val()
    const greeting = $("input#greeting").val()
    const username = $("input#username").val()
    const pronouns = $("input#pronouns").val()
    const connection = $("input#connection").val()
    const manage = $("input#manage").val()
    alert(`Variables assigned`)

    // Pass form inputs (as variables) to a business-logic
    // function as parameters:
    results(addressee, greeting, username, pronouns, connection, manage)
  })
})