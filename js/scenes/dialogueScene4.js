import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene4 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene4"});
    }


    create() {
        
        if (!this.sound.get('music_default')) {

            let currentMusic = this.sound.get('music_battle'); //
            if (currentMusic) {
                currentMusic.stop(); // Stop the current music
            }

            this.music = this.sound.add('music_default');
            this.music.setLoop(true);
            this.music.play();
        }

        let dialogueData = [
            { speaker: "woman", side: "right",  text: "Saigō-sama, se spune că samuraii vor dispărea." },
            { speaker: "woman", side: "right",  text: "Este adevărat?" },
            { speaker: "samurai", side: "left",  text: "Guvernul a decis. Ei vor o Japonie nouă." },
            { speaker: "woman", side: "right",  text: "Dar onoarea?" },
            { speaker: "woman", side: "right",  text: "Ce se va întâmpla cu cei care ne-au apărat generații întregi?" },
            { speaker: "samurai", side: "left",  text: "Poate… vechile obiceiuri mor." },
        ];

        let actTitle = "";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'rain_bg', nextScene:'DialogueScene5', actTitle: actTitle });


    }
}

export default DialogueScene4;