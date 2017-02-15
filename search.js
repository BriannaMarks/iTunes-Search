function searchForSong() {
    var songSearch = $("#songInput").val();
    var searchUrl =  "http://itunes.apple.com/search?term=" + songSearch;
    var table = $("#displayTable");

        $.ajax({
            url: searchUrl,
            method: "GET",
            dataType: "jsonp",
            success: function(data) {

                console.log("Ya did it", data);

                $.each(data.results, function(index) {
                    var songName = data.results[index].trackName;
                    var songArtist = data.results[index].artistName;
                    var songGenre = data.results[index].primaryGenreName;
                    //var songPreview = "<audio src='" + data.results[index].previewUrl + "' >";
                    var songAlbumArt = "<img src='"  + data.results[index].artworkUrl100 + "'>";

                    table.append("<tr><td>" + songAlbumArt + "</td><td>" + songName + "</td><td>" + songArtist + "</td><td>" + songGenre + "</td></tr>");
                });



            }
        });
}
function displaySongInfo(data) {
    //"</td><td>" + songPreview +
}

