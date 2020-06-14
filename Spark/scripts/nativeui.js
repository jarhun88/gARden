const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

Promise.all ([

    Textures.findFirst('water droplet'),
    Textures.findFirst('pesticide'),
    Textures.findFirst('sun'),

    Scene.root.findFirst('nullObject0'),
    Scene.root.findFirst('nullObject1'),

]).then(function(results){

    const texture0 = results[0];
    const texture1 = results[1];
    const texture2 = results[2];

    const Obj1 = results[2];
    const Obj2 = results[3];

    const configuration = {

        selectedIndex: 0,

        items: [
            {image_texture: texture0},
            {image_texture: texture1},
            {image_texture: texture2},
        ]
    };

    const picker = NativeUI.picker;
    picker.configure(configuration);
    picker.visible = true;

});

