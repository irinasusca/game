import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene1 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene1"});
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
            
            { speaker: "evil_samurai", side: "right",  text: "Saigō! Îți trădezi propriul neam?" },
            { speaker: "evil_samurai", side: "right",  text: "Te-ai vândut împăratului?" },
            { speaker: "evil_samurai", side: "right",  text: "Samuraii ar trebui să conducă... " },
            { speaker: "evil_samurai", side: "right",  text: "Nu să se închine unui copil pe tron!" },
            { speaker: "samurai", side: "left",  text: "Împăratul nu este un copil—" },
            { speaker: "samurai", side: "left",  text: "—el este viitorul Japoniei!" },
            { speaker: "samurai", side: "left",  text: "Shogunatul este slab." },
            { speaker: "samurai", side: "left",  text: "Avem nevoie de unitate, nu de războaie nesfârșite." },
        ];

        let actTitle = "Boshin War (1868-1869)";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'rain_bg', nextScene:'TutorialScene', actTitle: actTitle });


    }
}

export default DialogueScene1;