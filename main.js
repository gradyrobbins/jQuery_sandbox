console.log("hello world main.js");

//jQuery Selecting Elements:
// Select a DOM component
const displayContainer = $("#display-container")
// Get its contents
console.log(displayContainer.text())

//jQuery adding to the DOM
    // $("#song-list").html(`
    //     <li>
    //         Good Song AND...
    //     </li>
    // `)


//jQuery create Event Handlers
const load_songs_button = $("#load-songs")

// Attach a click handler to the load-songs-button with jQuery.
load_songs_button.click(function (evt) {
    // console.log(evt.target.id)
    //all of the below is pg 481 of JavaScript/JQuery the missing manual by D. MacFarland
    $.getJSON('songs.json',  processContacts);
        function processContacts(data){
            // var infoHTML= '';
            console.log(data.songs[0].title)
            console.log(data.songs[1].title)
            console.log(data.songs[2].title)
            console.log(data.songs[3].title)

            // $.each(data, function(data) {
            //     console.log(`song :` + `${data}`)
            // } )

            // $.each(data, function(data){
            //     console.log(`${data.songs.title}`)
            //     // infoHTML += `<li class="song" id="next-song">${data.songs.title}</li>`
            // })
            // .appendTo("#song-list");

    }
    //  when the button is clicked; add hard coded info onto the DOM
        // $(`

        //             <li class="song" id="next-song">
        //                 <h1 class="song__title">{Title of song}</h1>
        //                 <section class="song__description">
        //                     Performed by {artist} on the album {album}
        //                 </section>
        //             </li>
        // `)
        // .appendTo("#song-list")

    //AJAX: Asynchronous JS and XML
    //use $.ajax() to load `songs.json` from the file system
    // $("#song-list")
    // .load("songs.json #target li")


})

$(document).ready(function(){
    // $('#btn1').click(function (){
    //     alert('button 1 clicked')
    // })
    $('#btn1').on('click', function(){
        $('.para1').toggle()
    })
    $('#btn2').on('click', function(){
        alert('button 2 clicked')
    })
    $(document).on('mousemove', function(e){
        $('#coords').html('coords : ' + 'Y : ' + e.clientY + ' X : ' + e.clientX)
    })
    $('input').focus(function(){
        $(this).css('background-color', 'yellow')
    })
    $('input').blur(function(){
        $(this).css('background-color', 'white')
    })
    $('input').keyup(function(e){
        console.log(e.target.value)
    })
    $('select').change(function(e){
        console.log(e.target.value)
    })
    $('form').submit(function(e){
        e.preventDefault();
        var name = $('input#name').val();
        console.log("name :"  + name)
    })

    $('#paragraph5').css({background: "gray", color: "red"})

    $('#btn5').click(function(){
        $('#paragraph6').toggleClass("custom")
    })

    $('#empty').click(function(){
        $('#song-list').empty()
    })

})