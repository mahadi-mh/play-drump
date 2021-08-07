

let audio;
function getId(buttonId) {
    let id = buttonId;

    switch (id) {
        case 'a':
            audio = new Audio("../music/avengers-infinity-war-ringtone.mp3");
            break;
        
        case 'b':
            audio = new Audio("../music/wonder-woman-ringtone.mp3");
            break;
        
        case 'c':
            audio = new Audio("../music/narcos-ringtone.mp3");
            break;
        
        case 'd':
            audio = new Audio("../music/peaky-blinders-ringtone.mp3");
            break;
        
        case 'e':
            audio = new Audio("../music/stranger-things-theme-song.mp3");
            break;
        
        case 'f':
            audio = new Audio("../music/thor-ragnarok-ringtone.mp3");
            break;
        
    }
    audio.play();
}