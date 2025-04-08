import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene5 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene5"});
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
            { speaker: "samurai", side: "left",  text: "Japonia trebuie să acționeze." },
            { speaker: "samurai", side: "left",  text: "Coreea îl insultă pe împărat." },
            { speaker: "samurai", side: "left",  text: "Dacă nu facem nimic, arătăm slăbiciune." },
            { speaker: "diplomat", side: "right",  text: "Propui un război fără motiv!" },
            { speaker: "diplomat", side: "right",  text: "Trebuie să ne concentrăm pe dezvoltarea Japoniei..." },           
            { speaker: "diplomat", side: "right",  text: "Nu pe cuceriri inutile!" },           
            { speaker: "samurai", side: "left",  text: "Lași! Ați uitat Bushidō? " },
            { speaker: "samurai", side: "left",  text: " Un războinic nu întoarce spatele unei insulte!" },
            { speaker: "diplomat", side: "right",  text: "Un războinic care se agață de trecut este orb la viitor." },
            { speaker: "samurai", side: "left",  text: "Ei refuză să acționeze. Au abandonat valorile noastre.." },
            { speaker: "samurai", side: "left",  text: "Dacă guvernul nu mai servește Japonia, atunci nici eu nu-l mai servesc." },
        ];

        let actTitle = "Misiunea Respinsă în Coreea (1873) – Punctul de Rupere";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'councilroom', nextScene:'DialogueScene6', actTitle: actTitle });


    }
}

export default DialogueScene5;