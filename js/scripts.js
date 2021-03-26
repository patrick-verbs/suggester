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
    + `\r\nLanguage = Python`
  } else if (totalCount === 1) {
    alert(`Result 2: totalCount = ${totalCount}`)
    + `\r\nLanguage = Ruby`
  } else if (totalCount === 2) {
    alert(`Result 3: totalCount = ${totalCount}`)
    + `\r\nLanguage = JavaScript`
  } else if (totalCount === 3) {
    alert(`Result 4: totalCount = ${totalCount}`)
    + `\r\nLanguage = C#`
  } else {
    alert(`Branch logic exception.`
    + `\r\nThis branching uses the totalCount variable, which should have a value from 0 to ${counts.length}.`
    + `\r\nIt currently has a value of ${totalCount}.`)
  }

  alert(`please do the thing...`)
  return pleaseWork = ["INIGO MONTOYA", "they/them/theirs"]
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
    let anArray = ["Patrick", "he/they"]
    anArray = results(addressee, greeting, username, pronouns, connection, manage)

    // Apply a text string to every <span> class in the results
    let str1 = "Count Rugen"
    let str2 = "treacherous"
    let str3 = "Inigo Montoya"
    let str4 = "they"
    let str5 = "them"
    let str6 = "theirs"
    let str7 = "theirself"
    let str8 = "the art of ambidextrous swordplay"
    let str9 = "monument to classist oppression"
    let str10 = "hello"
    let str11 = "you killed my father"
    let str12 = "prepare to die"

    //SPEECH = [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12]

    $("span.username").text(anArray[0])

    // Reveal the results and had the form
    $("section#survey-form").removeClass()
    $("section#survey-form").addClass("hide-me")
    $("section#survey-results").addClass("show-me")
    $("section#survey-results").addClass("hide-me")
  })
})