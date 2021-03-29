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

  // Capitalize elements that need it:
  for (i = 0; i < theArray.length; i++) {
    // Store the current string value that the user input...
    let grammar = theArray[i][1]
    switch (theArray[i][0]) {
      // ...and in each of these cases...
      case "greeting":
      case "connection":
      case "manage":
        // ...ensure that string is capitalized, since it begins a sentence
        grammar = grammar.charAt(0).toUpperCase(0) + grammar.slice(1)
        // Now update the value stored in the array to our new string
        theArray[i][1] = grammar
        break
      default:
        break
    }
  }

  // Extrapolate some data from the inputs:
  // Group some inputs into pairs, add their string-lengths together,
  // and assign value "0" for evens and "1" for odds
  const count1 = (theArray[0][1].length + theArray[1][1].length) % 2// Always returns "0" or "1"
  const count2 = (theArray[2][1].length + theArray[3][1].length) % 2
  const count3 = (theArray[4][1].length + theArray[5][1].length) % 2
  // Tuck constants into an array for simplified error prevention and legible future scaling:
  const counts = [count1, count2, count3]
  // Tally the character-counts using the array to prevent unpredictable results:
  const totalCount = counts[0] + counts[1] + counts[2]
  // Catch errors in the above input handling and variable assignment:
  if ( totalCount < 0 || totalCount > counts.length || totalCount != parseInt(totalCount) || totalCount != ((totalCount + totalCount) / 2) ) {
    console.log(`Something went wrong passing user input data to the 'totalCount' variable.`
    + `\r\nIt currently has the value of "${totalCount}".`
    + `\r\nThe value should be an interger between 0 and ${counts.length}.`)
  } else {
    // Nothing; continue
  }
  // Use branching to return at least 3 different results
  switch (theArray[4][1]) {
    case "Inigo Montoya":
      // "code-skill" is a class name for one of our <span> outputs
      theArray.push( ["code-skill", "the art of ambidextrous swordplay"] )
      // ("Inigo Montoya" is a special case)
      break
    default:
      if (totalCount === 0) {
        // Any other name gets a programming language for this result:
        theArray.push( ["code-skill", "Python"] )
      } else if (totalCount === 1) {
        theArray.push( ["code-skill", "Ruby"] )
      } else if (totalCount === 2) {
        theArray.push( ["code-skill", "JavaScript"] )
      } else if (totalCount === 3) {
        theArray.push( ["code-skill", "C Sharp"] )
      } else {
        console.log(`Branch logic exception.`
        + `\r\nThis branching uses the totalCount variable, which should have a value from 0 to ${counts.length}.`
        + `\r\nIt currently has a value of ${totalCount}.`)
      }
      break
  }
  // Add the additional "-self" pronoun
  theArray.push( ["themself", `${theArray[6][1]}self`] )
  // Like "code-skill", "themself" is also a class name for a <span> output
  // Return to sender!
  return theArray
}

// USER INTERFACE LOGIC
///////////////////////
$(document).ready(function() {
  // Initialize an array to hold form's input-field values:
  let surveyInputs = []

  // Loop through every <input> and add both its ID and VALUE to the above array
  // (as a nested array: surveyInputs[ [id1, value1], [id2, value2], etc.] )
  $("#form1 input").each(function(i) {
    // For later: See if this same loop can define objects --
    // e.g., surveyArray = { this.id: $(this).val } where "this.id" names the properties
    surveyInputs[i] = [this.id, $(this).val]
  })
  
  // Set the default form values as an example for users
  // ^ (REMOVED - see HTML input values for these defaults)

  // Receive the form data:
  $("#form1").submit(function() {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    // For each [id, value] element in the array surveyInputs...
    for (let i = 0; i < surveyInputs.length; i++) {
      // ...set its [value] sub-element to the current <input> field's value
      surveyInputs[i][1] = $(`input#${surveyInputs[i][0]}`).val()
      //                                    ^ This id ^ was stored earlier:
      //                                                  v  v
      //                             surveyInputs[i] = [this.id, $(this).val]
    }

    // Pass form inputs (as an array) to a business-logic function:
    const surveyOutputs = results(surveyInputs)

    // Insert function results into displayed survey results:
    for (i = 0; i < surveyOutputs.length; i ++) {
      // The output <span> classes match the <input> IDs, so we find our outputs
      // with the same string v  v and add its paired value  v  into that <span>
      $(`span.${surveyOutputs[i][0]}`).text(surveyOutputs[i][1])
    }

    // Reveal the results and hide the survey form
    $("section#survey-form").removeClass()
    $("section#survey-form").addClass("hide-me")
    $("section#survey-results").addClass("show-me")
    $("section#survey-results").addClass("hide-me")
  })
})