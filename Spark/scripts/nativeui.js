const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

Promise.all ([

    Textures.findFirst('water droplet'),
    Textures.findFirst('pesticide'),
    Textures.findFirst('sun'),

    Scene.root.findFirst('watering can'),
    Scene.root.findFirst('1220 Island'),
    Scene.root.findFirst('sunlight'),

]).then(function(results){

    const button0 = results[0];
    const button1 = results[1];
    const button2 = results[2];

    const obj0 = results[3];
    const obj1 = results[4];
    const obj2 = results[5];

    const configuration = {

        selectedIndex: 0,

        items: [
            {image_texture: button0},
            {image_texture: button1},
            {image_texture: button2},
        ]
    };

    obj0.hidden = true;
    obj1.hidden = true;
    obj2.hidden = true;

    const picker = NativeUI.picker;
    picker.configure(configuration);
    picker.visible = true;

    picker.selectedIndex.monitor().subscribe(function(val) {
        switch(val.newValue) {
            case 0: {
                obj0.hidden = false;
                obj1.hidden = true;
                obj2.hidden = true;
                break;
            }
            case 1: {
                obj0.hidden = true;
                obj1.hidden = false;
                obj2.hidden = true;
                break;
            }
            case 2: {
                obj0.hidden = true;
                obj1.hidden = true;
                obj2.hidden = false;
                break;
            }
        }
    });

});

