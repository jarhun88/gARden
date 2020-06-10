// The following example uses ReactiveModule.rotation(w,x,y,z) to construct a rotation
// from a quaternion-based representation of it. The constructed rotation is used with
// AnimationModule.samplers.polyline to create a rotation animation that is expressed as a RotationSignal.

const SceneModule = require('Scene');
const Animation = require('Animation');

const time_driver = Animation.timeDriver({
    durationMilliseconds: 2000,
    loopCount: Infinity,
    mirror: false
});

// Create a rotation sampler using Rotation objects generated
// by the previously-defined axisRotation() method.
const rotation_sampler = Animation.samplers.linear(0, 1 * Math.PI);

SceneModule.root.find("Seed").transform.rotationY = Animation.animate(time_driver, rotation_sampler);

// Start the animation
time_driver.start();