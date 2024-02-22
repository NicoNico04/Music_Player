const Aside = document.querySelector(".songs")
const main = document.querySelector(".main")

document.querySelector(".Library").addEventListener("click", () =>{
    Aside.classList.toggle("aside_toggle")
    main.classList.toggle("main_toggle")
})

/*Importar canciones y recorer la lista*/

import {songs} from "./songs.js"

let songs_info = " "

songs.forEach((song) =>{
    songs_info += `
    <article class="por_reproducir" id="${song.id}">
        <img src="${song.img_song}" alt="">
            <section class="SONG_DESCRIPTION">
                <h1>${song.title}</h1>
                <p>${song.artist}</p>
            </section>
    </article>`
})

Aside.innerHTML = songs_info


/*Canciones en el aside id*/
const por_reproducir = document.querySelectorAll(".por_reproducir")
const main_s = document.querySelector(".main_song")

por_reproducir.forEach((article) =>{

    article.addEventListener("click", () => {
        let ides = article.id 
        console.log(ides)
        const cs = songs.find((song) => song.id == ides)
        console.log(cs)

        /*Cancion en el main*/
        let song_main = `
            <img src="${cs.img_song}" alt="" class="img_song">
            <h1>${cs.title}</h1>
            <h4>${cs.artist}</h4>
            <audio src="${cs.song}"></audio>`
        main_s.innerHTML = song_main

        const audio = document.querySelector('audio')
        audio.play()
    })

})


/*
const controllers = () => {

} 
play = document.getElementById(".pausa");
play.addEventListener("click",()=>{
    Audio.play();
}
); */

