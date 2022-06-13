//Action Creator


export const selectSong=song=>{
    return {
        type:'SONG_SELECTED',
        payload:song
    }
}

//Need not give this
//export default selectSong;