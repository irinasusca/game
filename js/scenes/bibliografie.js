

class Bibliografie extends Phaser.Scene {
    constructor() {
        super({key:'Bibliografie'});
    }

    preload() {
        this.load.image('bgBib', '../assets/meijiRain.jpg')
    }

    create() {

        this.scrollContainer = this.add.container(0, 0);
        
        let bg = this.add.image(0, 0, 'bgBib')
                .setDepth(100)
                .setOrigin(0, 0)
                .setDepth(-1000);
        
            let scale = Math.max(1200 / bg.width, 800 / bg.height); // Scale to fill 1200 width while keeping aspect ratio
            bg.setScale(scale);
       

        // Play Button
        const textBox = this.add.image(50, 50, 'textBoxy').setOrigin(0).setScale(1.5);
        this.scrollContainer.add(textBox);

        this.dialogueText = this.add.text(120, 120, 'Acest joc a fost aaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaa aaaaaa', { 
            fontFamily: "'IM Fell English SC', serif",
            fontSize: '30px',
            color: '#302d2a',
            wordWrap: { width: 1000 } 
        }).setOrigin(0).setDepth(101);
        this.scrollContainer.add(this.dialogueText);


        this.generateImageTable([
            { key: 'bgBib', title: 'Image 1', link: 'https://www.invaluable.com/blog/mystique-of-the-meiji-era-japanese-art-and-collectibles/' },
            { key: 'bgBib', title: 'Image 2', link: '' },
            { key: 'bgBib', title: 'Image 3', link: '' },
            { key: 'bgBib', title: 'Image 3', link: '' },
            { key: 'bgBib', title: 'Image 3', link: '' },
            
            
        ], this.scrollContainer);

        
        // Bibliografie Button
        
        
        // Fade in effect
        this.cameras.main.fadeIn(500);
    }

    generateImageTable(imageData, container, startY = 320) {
        const imageSize = 180;
        const padding = 20;
        const wrapWidth = 1000;
        let x = 100;
        let y = startY;
    
        imageData.forEach(data => {
            const img = this.add.image(0, 0, data.key).setInteractive({ useHandCursor: true });
    
            const scale = imageSize / Math.max(img.width, img.height);
            img.setScale(scale).setDisplaySize(imageSize, imageSize);
            img.setPosition(x + imageSize / 2, y + imageSize / 2);
            img.on('pointerdown', () => {
                if (data.link.startsWith('http')) 
                    window.open(data.link, '_blank');
            });
    
            const titleBg = this.add.rectangle(img.x, img.y + imageSize / 2 - 15, imageSize, 30, 0x000000, 0.6);
            const titleText = this.add.text(img.x, titleBg.y, data.title, {
                fontSize: '16px',
                color: '#ffffff',
                fontFamily: "'IM Fell English SC', serif",
            }).setOrigin(0.5);
    
            container.add([img, titleBg, titleText]);
    
            x += imageSize + padding;
            if (x + imageSize > 100 + wrapWidth) {
                x = 100;
                y += imageSize + padding;
            }
        });
    }

    transitionTo(sceneKey) {
        this.cameras.main.fadeOut(500, 0, 0, 0);
        this.time.delayedCall(500, () => {
            this.scene.start(sceneKey);
        });
    }
}

export default Bibliografie;
