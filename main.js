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
    $.getJSON('songs.json', function(data){
        $.each(data, function(i, song){
            $('ol#song-list').append('<li>' + song.artist +'</li>')
        })
    })



    //all of the below is pg 481 of JavaScript/JQuery the missing manual by D. MacFarland
    // $.getJSON('songs.json',  processContacts);

    //     function processContacts(data){
    //         // var infoHTML= '';
    //         console.log("data: " + data.songs)
    //         console.log(data.songs[0].title, data.songs[0].artist)
    //         console.log(data.songs[1].title, data.songs[1].artist)
    //         console.log(data.songs[2].title, data.songs[2].artist)
    //         console.log(data.songs[3].title, data.songs[3].artist)


            // $.each(data, function(data) {
            //     console.log(`song :` + `${data}`)
            // } )

            // $.each(data, function(data){
            //     console.log(`${data.songs.title}`)
            //     // infoHTML += `<li class="song" id="next-song">${data.songs.title}</li>`
            // })
            // .appendTo("#song-list");

    //}
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
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(2000, function(){
            $('#btnFadeOut').text('its gone')
        })
    })
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn()
    })
    $('#btnSlideUp').click(function(){
        $('#box').slideUp()
    })
    $('#btnSlideDown').click(function(){
        $('#box').slideDown()
    })
    $('#btnSlideTog').click(function(){
        $('#box').slideToggle()
    })

    $('#btnMoveRight').click(function(){
        $('#box2').animate({left: 500,
                            height: '400px',
                            width: '400px',
                            opacity: 0.9})
    })
    $('#btnMoveLeft').click(function(){
        $('#box2').animate({left: 0,
                            height: '200px',
                            width: '200px',
                            opacity: '0.5'})
    })
    $('#btnMoveAround').click(function(){
        let box = $('#box2')
        box.animate({left: 300,
        })
        box.animate({top: 300,
        })
        box.animate({left: 0, top: 300
        })
        box.animate({left: 0, top: 0
        })
    })
    // $('#result').load('test.html', function(responseTxt, statusTxt, xhr){
    //     if(statusTxt == "success"){alert(
    //         "yes"
    //     )}else if(statusTxt =="error"){alert("error : " + xhr.responseTxt)}
    // });
    // $.get('test.html', function(data){
    //     $('$result').html(data)
    // })
    // $.getJSON('songs.json', function(data){
    //     $.each(data, function(i, song){
    //         $('ol#song-list').append('<li>' + song.artist +'</li>')
    //     })
    // })

})