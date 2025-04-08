import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene8 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene8"});
    }


    create() {

        
        
        let dialogueData = [
            { speaker: "samurai", side: "left_hidden",  text: "Aceasta a fost sabia care m-a servit în nenumărate războaie…" },
            { speaker: "samurai", side: "left_hidden",  text: "Aceasta este sabia care mi-a definit viața." },
            { speaker: "samurai", side: "left_hidden",  text: "Dar ce mai este un samurai… fără o țară pentru care să lupte?" },
            { speaker: "samurai", side: "left_hidden",  text: "Meiji a câștigat. Dar Japonia… Japonia mă va uita?" },
            { speaker: "samurai", side: "left_hidden",  text: "Onoarea… va trăi… cât timp există cei care își amintesc." },            
        ];

        let actTitle = "";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'cutscene2', nextScene:'DialogueScene9', actTitle: actTitle });


    }
}

export default DialogueScene8;