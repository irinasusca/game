import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene3 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene3"});
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
            { speaker: "diplomat", side: "right",  text: "Saigō, trebuie să modernizăm țara." },
            { speaker: "diplomat", side: "right",  text: "Clasa samurailor este o relicvă." },
            { speaker: "diplomat", side: "right",  text: "Avem nevoie de o armată recrutată, un guvern în stil occidental." },
            { speaker: "diplomat", side: "right",  text: "Japonia trebuie să evolueze." },
            { speaker: "samurai", side: "left",  text: "Vorbim de progres, dar cu ce preț?" },
            { speaker: "samurai", side: "left",  text: "Samuraii au apărat onoarea Japoniei timp de secole." },
            { speaker: "samurai", side: "left",  text: "Vrei să-i faci să dispară?" },
            { speaker: "diplomat", side: "right",  text: "Ne așteptăm să se adapteze." },
            { speaker: "diplomat", side: "right",  text: "Viitorul aparține poporului, nu războinicilor trecutului." },
            { speaker: "samurai", side: "left",  text: "Asta este Japonia pentru care am luptat?" },
            { speaker: "samurai", side: "left",  text: " O țară care își aruncă războinicii?" },
            { speaker: "samurai", side: "left",  text: "Sabia mea… pare mai grea… ca și cum nu mai aparține acestei lumi noi." },
        ];

        let actTitle = "Guvernul Meiji (1871) - Prețul Modernizării";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'councilroom', nextScene:'DialogueScene4', actTitle: actTitle });


    }
}

export default DialogueScene3;