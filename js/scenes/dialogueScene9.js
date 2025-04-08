import DialogueScene from "./dialogueScene.js";
import TutorialScene from "./tutorialScene.js";

class DialogueScene9 extends Phaser.Scene {
    constructor() {
        super({key:"DialogueScene9"});
    }


    create() {

        this.sound.stopAll();

        this.music = this.sound.add('music_default');
        this.music.setLoop(true);
        this.music.play();
        
        let dialogueData = [
            { speaker: "", side: "",  text: "Astăzi, în inima Tokyo-ului, în Parcul Ueno, o statuie privește spre orizont." },
            { speaker: "", side: "",  text: "Nu înfățișează un războinic în armură, nici un lider cu sabia ridicată..." },
            { speaker: "", side: "",  text: "Este Saigō Takamori—numit cândva trădător, acum erou al Japoniei." },
            { speaker: "", side: "",  text: "Ultimul samurai, prins între trecut și viitor." },
            { speaker: "", side: "",  text: "Lumea pe care a visat-o este aici. " },            
            { speaker: "", side: "",  text: "Japonia s-a ridicat ca o națiune modernă... " },      
            { speaker: "", side: "",  text: "Saigō Takamori (1828 – 1877)" },      
            { speaker: "", side: "",  text: "Ultimul Samurai. Onoarea lui trăiește în istorie." },   

        ];

        let actTitle = "Moștenirea lui Saigō Takamori";

        this.scene.start('DialogueScene', { dialogue: dialogueData, background: 'statue', nextScene:'MainMenu', actTitle: actTitle });


    }
}

export default DialogueScene9;