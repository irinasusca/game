
import TutorialScene from "./tutorialScene.js";


class DialogueScene extends Phaser.Scene {
    constructor()
    {
        super({key:"DialogueScene"});
        this.dialogueData = [];
    }

    init(data)
    {
        this.dialogueData = data.dialogue || [];
        ///fundalul vor fi picturi in ordine cronologica din era edo -> meiji
        this.backgroundKey = data.background || null;
        this.sceneKey = data.nextScene || null;
        this.actTitle = data.actTitle || "";
    }

    preload()
    {
        this.load.image('city_bg', '../assets/city_bg.png');
        this.load.image('rain_bg', '../assets/rain.png');
        this.load.image('councilroom', '../assets/council.png');
        this.load.image('rebellion', '../assets/revolta.png');
        this.load.image('samurai', '../assets/samurai_determined.png');
        this.load.image('evil_samurai','../assets/evilsamurai.png' );
        this.load.image('woman','../assets/woman.png' );
        this.load.image('diplomat','../assets/diplomat.png' );
        this.load.image('dialogueBox', '../assets/dialogue.png');
        this.load.image('cutscene1', '../assets/cutscene1.jpg');
        this.load.image('cutscene2', '../assets/cutscene2.PNG');
        this.load.image('statue', '../assets/statue.png');

        this.add.text(0, 0, "", { fontFamily: "'IM Fell English SC', serif" }).setVisible(false);
    }

    create()
    {

        

        this.cursors = this.input.keyboard.createCursorKeys();
        this.pointer = this.input.activePointer;

        if (this.backgroundKey) {
            let bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, this.backgroundKey)
                .setOrigin(0.5, 0.5)
                .setDepth(0);
        
            let scale = Math.max(1200 / bg.width, 800 / bg.height); // Scale to fill 1200 width while keeping aspect ratio
            bg.setScale(scale);
        }

        this.actBackground = this.add.rectangle(600, 400, 1200, 800, 0x000000)
            .setDepth(200);

        this.actText = this.add.text(600, 400, this.actTitle, {
            fontFamily: "'IM Fell English SC', serif",
            fontSize: '48px',
            fontStyle: 'bold',
            color: '#ffffff'
        }).setOrigin(0.5).setDepth(201);

        this.dialogueBox = this.add.image(600, 700, 'dialogueBox').setOrigin(0.5,0.5).setDepth(100).setScale(1.1);
        this.dialogueText = this.add.text(600, 720, '', { 
            fontFamily: "'IM Fell English SC', serif",
            fontSize: '34px',
            color: '#302d2a',
            wordWrap: { width: 580 } 
        }).setOrigin(0.5).setDepth(101);

        this.speakerText = this.add.text(600, 660, '', { 
            fontFamily: "'IM Fell English SC', serif",
            fontSize: '36px',
            fontStyle: 'bold',
            color: '#302d2a',
            padding: { left: 10, right: 10, top: 5, bottom: 5 }
        }).setOrigin(0.5).setDepth(102);

        this.leftCharacter = this.add.image(200, 600, '').setOrigin(0.5).setScale(1).setVisible(false);
        this.rightCharacter = this.add.image(1000, 600, '').setOrigin(0.5).setScale(1).setVisible(false);

        this.dialogueIndex = 0;

        this.time.delayedCall(2500, () => {  // Wait 2.5 seconds before fade out
            this.tweens.add({
                targets: [this.actText, this.actBackground],
                alpha: 0,
                duration: 1000, // 1 second fade-out
                onComplete: () => {
                    this.actText.destroy();
                    this.actBackground.destroy();
                    
                }
            });
        });
    
        this.showNextDialogue();

        this.input.on('pointerdown', () => this.showNextDialogue());
        this.input.keyboard.on('keydown-SPACE', () => this.showNextDialogue());
        this.backspaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

        this.backspaceKey.on('down', () => {
            if (this.dialogueIndex >= 2) {
                    this.dialogueIndex -= 2;
                    this.showNextDialogue();
            }
        });

    }



    

    showNextDialogue()
    {
        
        
        if (this.dialogueIndex >= this.dialogueData.length) {
           // this.scene.start('OverworldScene'); // Change to next scene ! aici modific
           this.transitionTo();
           return;
        }

        if(this.dialogueIndex > 0)
            this.sound.play('dialogueClick');

        let { speaker, side, text } = this.dialogueData[this.dialogueIndex];


        ///daca nu vrem sa apara in stanga din prima eliminam
        if(!(this.sceneKey === 'DialogueScene8' || this.sceneKey === 'DialogueScene9' || this.sceneKey === 'MainMenu'))
            this.leftCharacter.setTexture('samurai').setVisible(true);

        this.speakerText.setText(speaker.replace(/_/g, ' '));
        this.speakerText.setColor('#000000');
        this.dialogueText.setText(text);

        if (side === 'left' || side === 'left_hidden') {
            if (speaker === 'samurai')
                this.speakerText.setColor('#8B0000'); // Dark red
            this.speakerText.setX(300); // Left side
            this.speakerText.setOrigin(0, 0.5);

            this.dialogueText.setX(300);
            this.dialogueText.setOrigin(0, 0.5);
            this.dialogueText.setAlign('left');
        } else if(side === 'right' || side === 'right_hidden') {
             // Default black
            this.speakerText.setX(900); // Right side (assuming 1200 width)
            this.speakerText.setOrigin(1, 0.5);

            this.dialogueText.setX(900);
            this.dialogueText.setOrigin(1, 0.5);
            this.dialogueText.setAlign('right');
        }
        else {
            this.dialogueText.setY(710);
        }

        
        ///pt emotii, kiana_happy, kiana_sad etc .pmg
        if (side === 'left') {
            this.leftCharacter.setTexture(speaker).setVisible(true);
            //this.rightCharacter.setVisible(false);
        } else if (side === 'right') {
            this.rightCharacter.setTexture(speaker).setVisible(true);
            //this.leftCharacter.setVisible(false);
        }

        this.dialogueIndex++;
    }

    transitionTo() {
        this.cameras.main.fadeOut(500, 0, 0, 0);
        this.time.delayedCall(500, () => {
            this.scene.start(this.sceneKey);
        });
    }

    

}

export default DialogueScene;