import DialogueScene from "./dialogueScene.js";

class DialogueScene2 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene2"});
    }


    create() {
        
        

            let currentMusic = this.sound.get('music_battle'); //
            if (currentMusic) {
                currentMusic.stop(); // Stop the current music
            }

            this.music = this.sound.add('music_default');
            this.music.setLoop(true);
            this.music.play();
        

        let dialogueData = [
            { speaker: "samurai", side: "left",  text: "Am câștigat… Puterea împăratului este restabilită. " },
            { speaker: "samurai", side: "left",  text: " Dar ce va face cu ea? " },
            { speaker: "samurai", side: "left",  text: "Sabia mea a adus victoria, dar inima mea este neliniștită." },
        ];

        let actTitle = "";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'rain_bg', nextScene:'DialogueScene3', actTitle: actTitle });


    }
}

export default DialogueScene2;