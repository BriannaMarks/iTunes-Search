function searchForSong() {
    var songSearch = $("#songInput").val();
    var searchUrl =  "http://itunes.apple.com/search?term=" + songSearch;

        $.ajax({
            type: 'GET',
            url: searchUrl,
            contentType: "jsonp",
            dataType: "jsonp",
            async: false,
            complete: function(data) {
                displaySongInfo(data.results);
            }
        });
}
function displaySongInfo(data) {
    var results = data;
    var resultsDisplay = $("#displayTable");

    $.each(results, function(key, data){
        var albumArt = $("#albumCover") + results[key];
        var songName = $("#song") + results[key].trackName;
        var artistName = $("#artist") + results[key].artistName;
    });
}

