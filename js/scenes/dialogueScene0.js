import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene0 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene0"});
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

            { speaker: "samurai", side: "left",  text: "Aici s-a sfârșit drumul meu..." },
            { speaker: "samurai", side: "left",  text: "Împăratul, guvernul, țara mea—au fost toate în zadar? " },
            { speaker: "samurai", side: "left",  text: "Poate, înainte de a cădea..." },
            { speaker: "samurai", side: "left",  text: "Trebuie să-mi amintesc cum am ajuns aici." },
        ];

        let actTitle = "Ultimul Samurai - Saigō Takamori";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'rain_bg', nextScene:'DialogueScene1', actTitle: actTitle  });


    }
}

export default DialogueScene0;