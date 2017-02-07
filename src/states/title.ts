import * as Assets from '../assets';

export default class Title extends Phaser.State {
    private backgroundTemplateSprite: Phaser.Sprite = null;
    private welcomeText: Phaser.Text = null;
    private bitmapTextFNT: Phaser.BitmapText = null;
    private bitmapTextXML: Phaser.BitmapText = null;
    private sfxAudiosprite: Phaser.AudioSprite = null;

    public preload(): void {
        this.backgroundTemplateSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Assets.Images.ImagesBackgroundTemplate.getName());
        this.backgroundTemplateSprite.anchor.setTo(0.5);

        this.welcomeText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, 'welcome to my template!', {
            font: '50px Barrio'
        });
        this.welcomeText.anchor.setTo(0.5);

        this.bitmapTextFNT = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 25, Assets.BitmapFonts.FontsFontFnt.getName(), 'Bitmap Fonts with FNT!', 50);
        this.bitmapTextFNT.anchor.setTo(0.5);

        this.bitmapTextXML = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 75, Assets.BitmapFonts.FontsFontXml.getName(), 'Bitmap Fonts with XML!', 50);
        this.bitmapTextXML.anchor.setTo(0.5);

        this.sfxAudiosprite = this.game.add.audioSprite(Assets.Audiosprites.AudiospritesSfx.getName());
    }

    public create(): void {
        this.game.camera.flash(0x000000, 1000);

        this.game.sound.play(Assets.Audio.AudioMusic.getName(), 0.2, true);

        this.backgroundTemplateSprite.inputEnabled = true;
        this.backgroundTemplateSprite.events.onInputDown.add(() => {
            this.sfxAudiosprite.play('laser' + (Math.floor(Math.random() * 9) + 1));
        });
    }
}
