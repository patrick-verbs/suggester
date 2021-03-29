// BUSINESS LOGIC
/////////////////
function updateHeader() {
  // Duplicate what the user is typing (into the focused field) on a stylized banner
  let $focused = $(":focus").val()
  $("span#current-field").text($focused)
}

function results(theArray) {
  // Clear the banner that displays what the user was typing into the form
  $("span#current-field").text("")

  // Extrapolate some data from the inputs:
  // Group inputs into pairs, add their string-lengths together, and assign value "0" for evens and "1" for odds
  const count1 = (theArray[0].length + theArray[1].length) % 2// Always returns "0" or "1"
  const count2 = (theArray[2].length + theArray[3].length) % 2
  const count3 = (theArray[4].length + theArray[5].length) % 2
  // Tuck constants into an array for simplified error prevention and legible future scaling:
  const counts = [count1, count2, count3]
  // Tally the character-counts using the array to prevent unpredictable results:
  const totalCount = counts[0] + counts[1] + counts[2]
  // Catch errors in the above input handling and variable assignment:
  if ( totalCount < 0 || totalCount > counts.length || totalCount != parseInt(totalCount) || totalCount != ((totalCount + totalCount) / 2) ) {
    alert(`Something went wrong passing user input data to the 'totalCount' variable.`
    + `\r\nIt currently has the value of "${totalCount}".`
    + `\r\nThe value should be an interger between 0 and ${counts.length}.`)
  } else {
  }

  // Use branching to return at least 3 different results
  switch (theArray[2]) {
    case "Inigo Montoya":
      theArray[7] === "the art of ambidextrous swordplay"
      break
    default:
      if (totalCount === 0) {
        theArray[7] = "Python"
      } else if (totalCount === 1) {
        theArray[7] = "Ruby"
      } else if (totalCount === 2) {
        theArray[7] = "JavaScript"
      } else if (totalCount === 3) {
        theArray[7] = "C#"
      } else {
        console.log(`Branch logic exception.`
        + `\r\nThis branching uses the totalCount variable, which should have a value from 0 to ${counts.length}.`
        + `\r\nIt currently has a value of ${totalCount}.`)
      }
      break
  }
  // Return to sender!
  return theArray
}

// USER INTERFACE LOGIC
///////////////////////
$(document).ready(function() {
  // Build an array to hold each of the form's fields
  // Provide a default text string for every <span> class in the results
  let surveyArray = [
    "Count Rugen",
    "treacherous",
    "monument to classist oppression",
    "hello",
    "Inigo Montoya",
    "they",
    "them",
    "their",
    "you killed my father",
    "prepare to die",
    "",
    "",
  ]

  // Set the default form values as an example for users:
  for (i = 1; i <= 10; i++) {
    $(".input" + i).val(surveyArray[i - 1])
  }

  // Receive the form data:
  $("#form1").submit(function() {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    // Set variables to the form's inputs for readability:
    for (let i = 1; i <= 10; i++) {
      surveyArray[i - 1] = $(".input" + i).val()
    }

    // Pass form inputs (as variables) to a business-logic function as parameters:
    surveyArray = results(surveyArray)

    // Insert function results into displayed survey results:
    $("span.addressee").text(surveyArray[0])
    $("span.addressee-adj").text(surveyArray[1])
    $("span.username").text(surveyArray[2])
    $("span.they").text(surveyArray[3])
    $("span.them").text(surveyArray[4])
    $("span.their").text(surveyArray[5])
    $("span.themself").text(surveyArray[6])
    $("span.code-skill").text(surveyArray[7])
    $("span.addressee-cat").text(surveyArray[8])
    $("span.greeting").text(surveyArray[9])
    $("span.connection").text(surveyArray[10])
    $("span.manage").text(surveyArray[11])

    // Reveal the results and had the form
    $("section#survey-form").removeClass()
    $("section#survey-form").addClass("hide-me")
    $("section#survey-results").addClass("show-me")
    $("section#survey-results").addClass("hide-me")
  })
})