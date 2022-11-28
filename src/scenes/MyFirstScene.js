import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from "@babylonjs/core";
import 'babylonjs-loaders'


// import * as GUI from 'babylonjs-gui';

const createScene = async (canvas, fpsCallback) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    // cielo
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("src/assets/img/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    
    // camara
    const camera = new FreeCamera("camera", new Vector3(0, 2, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    // new HemisphericLight("light", Vector3.Up(), scene);

    // const map = MeshBuilder.CreatePlane('terreno', {size: 100});
    const materialSuelo = new StandardMaterial('suelo',scene);
    materialSuelo.diffuseColor = Color3.FromHexString('#000000');
    // materialSuelo.diffuseColor = Color3.FromHexString('#282828');
    // map.rotation.x = 1.56;


    // luz
    var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);

    
    // import obj
    const map = BABYLON.SceneLoader.ImportMesh(null, "src/assets/objs/map/", "map.obj", scene, function (container) { 
        // do something with the scene
        var materials = container.materials;

    });

    map.materials = materialSuelo;
     
     
     const boxPurple = MeshBuilder.CreateBox("box-green", { size: .25 }, scene);
     const materialPurple = new StandardMaterial("box-grey-material", scene);
     materialPurple.diffuseColor = Color3.FromHexString('#a72ab5');
     boxPurple.material = materialPurple;
     // boxPurple.position.x = 2;
     boxPurple.position.y = 2.5;
     
     const boxGreen = MeshBuilder.CreateBox("box-green", { size: .25 }, scene);
     const materialGreen = new StandardMaterial("box-green-material", scene);
     materialGreen.diffuseColor = Color3.FromHexString('#4caf50');
     boxGreen.material = materialGreen;
     // boxGreen.position.x = 2;
     boxGreen.position.y = 2.5;

    // animations

    engine.runRenderLoop(() => {
        scene.render();

        boxGreen.rotation.y += 0.02;
        boxGreen.rotation.x += 0.02;

        boxPurple.rotation.y += -0.02;
        boxPurple.rotation.x += -0.02;
        
        if (fpsCallback) {
            fpsCallback(engine.getFps().toFixed());
        }
    });


    // const startFrame = 0;
    // const endFrame = 13;
    // const frameRate = 13;
    
    // const ySlide = new BABYLON.Animation("ySlide", "position.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    
    // const keyFrames = []; 
    
    // keyFrames.push({
    //         frame: startFrame,
    //         value: 2
    //     });
        
    // keyFrames.push({
    //         frame: endFrame,
    //         value: -2
    //     });
            
            
    // ySlide.setKeys(keyFrames);
    
    // boxGreen.animations.push(ySlide);

    // //backwards animation
    // scene.beginAnimation(boxGreen, endFrame, startFrame, false);
    
};

export { createScene };
