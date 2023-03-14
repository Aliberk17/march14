Make a todo app.

All the html tags should go inside the <div class="container"> element.

Add an input field for the todo content.


When user saves a note, create an object `{text: *the text inside the input*, timestamp: *current timestamp, looks like this: 1671402915492*}`.

Display the notes in the html page, inside the div with id "notes".

Save the object in an array, and save that array to localstorage.

When user loads the page, load notes from localstorage.





TRY TO
Tips: You can use createElement and createTextNode.

Add button "Sort By Text" to sort the notes by text, and a button "Sort By Time" to sort the notes by the timestamp when they were created.

The Sort By Text button sorts the notes array by text. Use a.text.localeCompare(b.text);
The Sort By Time button sorts the notes array by the timestamp in each note. Use a.timestamp - b.timestamp.

Make the sort order(ascending or descending) by text and time buttons invert the sorting order every time you press the button.



Make an API call using a Promise and Async/Await


fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

const fetchData = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it

  const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()

  console.log(country); // Columbia's data will be logged to the dev console
};

fetchData();


const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


