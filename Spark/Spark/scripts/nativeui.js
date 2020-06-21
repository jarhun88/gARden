const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');

var plantGrowth = Patches.getPulseValue('plantGrowth');

Promise.all ([

    Textures.findFirst('blank'),
    Textures.findFirst('water droplet'),
    Textures.findFirst('pesticide'),
    Textures.findFirst('sun'),

    Scene.root.findFirst('watering can'),
    Scene.root.findFirst('spray bottle'),
]).then(function(results){

    const button0 = results[0];
    const button1 = results[1];
    const button2 = results[2];
    const button3 = results[3];

    const obj0 = results[4];
    const obj1 = results[5];

    const configuration = {
        selectedIndex: 0,
        items: [
            {image_texture: button0},
            {image_texture: button1},
        ]
    };

    obj0.hidden = true;
    obj1.hidden = true;

    const picker = NativeUI.picker;
    picker.configure(configuration);
    picker.visible = true;

    picker.selectedIndex.monitor().subscribe(function(val) {
        switch(val.newValue) {
	    case 0: {
            	break;
	    }
            case 1: {
                obj0.hidden = false;
                obj1.hidden = true;
                break;
            }
            case 2: {
                obj0.hidden = true;
                obj1.hidden = false;
                break;
            }
            case 3: {
                obj0.hidden = true;
                obj1.hidden = true; 
                break;
            }
        }
    });
    
    // Making pesticide appear on plant growth
    plantGrowth.subscribe(function (e) {
        const configuration = {
        selectedIndex: 1,
            items: [
                {image_texture: button0},
                {image_texture: button1},
		{image_texture: button2},
            ]
        };        
        picker.configure(configuration);
    });

});

