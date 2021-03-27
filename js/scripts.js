// BUSINESS LOGIC
/////////////////
function updateHeader() {
  let $focused = $(":focus").val()
  $("span#current-field").text($focused)
}

function results(theArray) {
  $("span#current-field").text("")
  // Extrapolate some data from inputs:
  // Group inputs into pairs, add their string-lengths together, and assign value "0" for evens and "1" for odds
  const count1 = (theArray[0].length + theArray[1].length) % 2// Always returns "0" or "1"
  const count2 = (theArray[2].length + theArray[3].length) % 2
  const count3 = (theArray[4].length + theArray[5].length) % 2
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
        alert(`Branch logic exception.`
        + `\r\nThis branching uses the totalCount variable, which should have a value from 0 to ${counts.length}.`
        + `\r\nIt currently has a value of ${totalCount}.`)
      }
      break
  }
  return theArray
}

// USER INTERFACE LOGIC
///////////////////////
$(document).ready(function() {
  // Define a text string for every <span> class in the results
  let str1 = "Count Rugen"
  let str2 = "treacherous"
  let str3 = "Inigo Montoya"
  let str4 = "they"
  let str5 = "them"
  let str6 = "their"
  let str7 = "themself"
  let str8 = "the art of ambidextrous swordplay"
  let str9 = "monument to classist oppression"
  let str10 = "hello"
  let str11 = "you killed my father"
  let str12 = "prepare to die"

  // Set the default form values as an example for users:
  $("input#addressee").val(str1)
  $("input#addressee-adj").val(str2)
  $("input#addressee-cat").val(str9)
  $("input#greeting").val(str10)
  $("input#username").val(str3)
  $("input#they").val(str4)
  $("input#them").val(str5)
  $("input#their").val(str6)
  $("input#connection").val(str11)
  $("input#manage").val(str12)

  // Receive the form data:
  $("#form1").submit(function() {
    // Prevent the form data from being pushed to a server,
    // since all data is being handled here in JS/CSS/HTML:
    event.preventDefault()

    // Set variables to the form's inputs for readability:
    str1 = $("input#addressee").val()
    str2 = $("input#addressee-adj").val()
    str3 = $("input#username").val()
    str4 = $("input#they").val()
    str5 = $("input#them").val()
    str6 = $("input#their").val()
    str7 = str5 + "self"
    // str8 to be determined by branching after passing these values to a function
    str9 = $("input#addressee-cat").val()
    str10 = $("input#greeting").val()
    str11 = $("input#connection").val()
    str12 = $("input#manage").val()

    // Pass form inputs (as variables) to a business-logic function as parameters:
    let anArray = [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12]
    anArray = results(anArray)

    // Insert function results into displayed survey results:
    $("span.addressee").text(anArray[0])
    $("span.addressee-adj").text(anArray[1])
    $("span.username").text(anArray[2])
    $("span.they").text(anArray[3])
    $("span.them").text(anArray[4])
    $("span.their").text(anArray[5])
    $("span.themself").text(anArray[6])
    $("span.code-skill").text(anArray[7])
    $("span.addressee-cat").text(anArray[8])
    $("span.greeting").text(anArray[9])
    $("span.connection").text(anArray[10])
    $("span.manage").text(anArray[11])

    // Reveal the results and had the form
    $("section#survey-form").removeClass()
    $("section#survey-form").addClass("hide-me")
    $("section#survey-results").addClass("show-me")
    $("section#survey-results").addClass("hide-me")
  })
})