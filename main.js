console.log("hello world main.js");

//jQuery Selecting Elements:
// Select a DOM component
const displayContainer = $("#display-container")
// Get its contents
console.log(displayContainer.text())

//jQuery adding to the DOM
$("#song-list").html(`
    <li>
        Good Song AND...
    </li>
`)

//jQuery create Event Handlers
const load_songs_button = $("#load-songs")

// Attach a click handler to the button with jQuery. When
load_songs_button.click(function (evt) {
    // console.log(evt.target.id)

    //  when the button is clicked; add hard coded info onto the DOM
    $(`

                <li class="song" id="next-song">
                    <h1 class="song__title">{Title of song}</h1>
                    <section class="song__description">
                        Performed by {artist} on the album {album}
                    </section>
                </li>
    `)
    .appendTo("#song-list")

    //AJAX: Asynchronous JS and XML
    //use $.ajax() to load `songs.json` from the file system
    // $("#song-list")
    // .load("songs.json #target li")


})