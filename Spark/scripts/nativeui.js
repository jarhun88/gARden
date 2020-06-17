const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

Promise.all ([

    /**
     * Button0 = plant
     * Button1 = water droplet
     * Button2 = pesticide
     * Button3 = sun
     */

    Textures.findFirst('plant'), 
    Textures.findFirst('water droplet'), 
    Textures.findFirst('pesticide'),
    Textures.findFirst('sun'),

    /** 
     * Object0 = watering can
     * Object1 = Island
     * Object2 = Sun
     */
     
    Scene.root.findFirst('watering can'),
    Scene.root.findFirst('1220 Island'),
    Scene.root.findFirst('sunlight'),

]).then(function(results){

    const button0 = results[0];
    const button1 = results[1];
    const button2 = results[2];
    const button3 = results[3];

    const obj0 = results[4];
    const obj1 = results[5];
    const obj2 = results[6];

    var configuration = {

        selectedIndex: 1,

        items: [
            {image_texture: button0},
            // {image_texture: button2},

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

                //
                var configuration = {

                    selectedIndex: 1,
            
                    items: [
                        {image_texture: button1},
                        {image_texture: button2},
            
                    ]
                };

                picker.configure(configuration);
                picker.visible = true;
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

