function make_album(artistName,albumTitle,track){
    this.artistName = artistName;
    this.albumTitle = albumTitle;
    if(track){
        this.track = track;
    }
}
console.log(new make_album("Atif Aslam","Genius - Jhankar"))
console.log(new make_album("Mithoon","Half Girlfriend"))
console.log(new make_album("Arijit Singh","MARJAAVAAN",20))