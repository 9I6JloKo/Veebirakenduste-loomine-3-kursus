var massiveGames = [
    {
        filmName: 'Super Mario bros.',
        firma: 'Nintendo',
        releaseDate: '1985',
        country: 'Japan-1',
        plot: 'Super Mario Bros. is a platform game. In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser. Mario jumps, runs, and walks across each level. The worlds are full of enemies and platforms, and open holes.',
        cover: 'images/Super_Mario_Bros._box.png'
    },
    {
        filmName: 'Pac-Man',
        firma: 'Namco',
        releaseDate: '1980',
        country: 'Japan-2',
        plot: 'Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four colored ghosts — Blinky (red), Pinky (pink), Inky (cyan), and Clyde (orange) — that pursue Pac-Man.',
        cover: 'images/pac-man.png'
    },
    {
        filmName: 'Donkey Kong',
        firma: 'Nintendo',
        releaseDate: '1981',
        country: 'Japan-3',
        plot: 'Donkey Kong is a 1981 arcade platform video game developed and published by Nintendo. Its gameplay involves maneuvering Mario across platforms to ascend a construction site and rescue Pauline from the giant gorilla named Donkey Kong, all while avoiding or jumping over obstacles.',
        cover: 'images/donkeyKong.jpg'
    }
]

function pasteFilms(massiveGames){
    document.getElementById('startDiv').innerHTML = '<h1>Games List</h1>';
    for(let i = 0; i < massiveGames.length; i++){
        let text = '<div class="films"><h2>' + massiveGames[i].filmName  + '</h2><div class="styleToCover"><img src="' + massiveGames[i].cover + '">';
        text += '<p><b>Firma:</b> ' + massiveGames[i].firma  + '<br><br><b>Release Date:</b> ' + massiveGames[i].releaseDate + '<br><br><b>Country:</b> ' + massiveGames[i].country;
        text += '<br><br><b>Plot:</b> ' + massiveGames[i].plot + '</p></div>';
        document.getElementById('startDiv').innerHTML += text;
    }
}
pasteFilms(massiveGames);