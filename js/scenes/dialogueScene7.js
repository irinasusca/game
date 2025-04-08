import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene7 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene7"});
    }

    create() {

        this.scene.stop('game-ui');

        let cutsceneImage = this.add.image(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            'cutscene1'
        ).setOrigin(0.5, 0.5).setDepth(100);

        let dialogueData = [
            { speaker: "evil_samurai", side: "right_hidden",  text: "Încă mai lupți, Saigō?" },
            { speaker: "evil_samurai", side: "right_hidden",  text: "Ce ai câștigat din această rebeliune?" },
            { speaker: "evil_samurai", side: "right_hidden",  text: "Ești singur, fără viitor!" },
            { speaker: "samurai", side: "left_hidden",  text: "Samuraii nu luptă pentru victorie." },
            { speaker: "samurai", side: "left_hidden",  text: "Luptăm pentru onoare!" },
            { speaker: "evil_samurai", side: "right_hidden",  text: "E gata. Predă-te și poate vei trăi." },
            { speaker: "samurai", side: "left_hidden",  text: "Nu… Un samurai nu se predă niciodată." },
            
        ];

        let actTitle = "Ultima Bătălie la Shiroyama (1877) – Ultimul Samurai";

                this.scene.start('DialogueScene', { 
                    dialogue: dialogueData, 
                    background: 'cutscene1', 
                    nextScene: 'DialogueScene8', 
                    actTitle: actTitle 
                    });
            

    }
}

export default DialogueScene7;