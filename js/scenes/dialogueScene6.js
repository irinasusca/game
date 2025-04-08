import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene6 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene6"});
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
            { speaker: "samurai", side: "left",  text: "Guvernul Meiji ne-a trădat!" },
            { speaker: "samurai", side: "left",  text: "Dacă vor să ne șteargă existența, le vom arăta de ce suntem samurai!" },
            { speaker: "evil_samurai", side: "right",  text: "Ești un nebun, Saigō!" },
            { speaker: "evil_samurai", side: "right",  text: "Japonia merge înainte, iar tu lupți pentru umbrele trecutului!" },
            { speaker: "samurai", side: "left",  text: "Dacă trecutul merită să mori pentru el, atunci voi muri cu el!" },
        ];

        let actTitle = "Rebeliunea Satsuma (1877) – O Luptă pentru Onoare";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'rebellion', nextScene:'FinalBattleScene', actTitle: actTitle });


    }
}

export default DialogueScene6;