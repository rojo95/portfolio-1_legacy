import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from "@babylonjs/core";
// para importar objetos
import 'babylonjs-loaders'
import {CharacterController} from "babylonjs-charactercontroller";


// import * as GUI from 'babylonjs-gui';

const createScene = async (canvas, fpsCallback) => {
    const engine = new BABYLON.Engine(canvas);
    const scene = new Scene(engine);


    // definir gravedad
    scene.gravity = new BABYLON.Vector3(0, -0.15, 0);
    const assumedFramesPerSecond = 60;
    const earthGravity = -9.81;
    scene.gravity = new BABYLON.Vector3(0, earthGravity / assumedFramesPerSecond, 0);

    


    // cielo
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("src/scenes/textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
    

    
    // luz
    var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
    
    



    // camara
    const camera = new BABYLON.FlyCamera("camera", new BABYLON.Vector3(0, 2, -10), scene);
    camera.rollCorrect = 10;
    camera.bankedTurn = true;
    camera.bankedTurnLimit = Math.PI / 2;
    camera.bankedTurnMultiplier = 1;

    // aplicar gravedad
    camera.applyGravity = true;

    // definir colicion de camara
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

    // habilitar colosiones
    scene.collisionsEnabled = true;
    camera.checkCollisions = true;

    
    camera.upperBetaLimit = 157;
    camera.attachControl(canvas, true);



    
    // target camera
    // camera.lockedTarget = player;
    
    
    
    // activar controles
    // let characterController = new CharacterController(camera, camera, scene);
    // characterController.start();
    
    
    
    
    
    
    // const map = MeshBuilder.CreatePlane('terreno', {size: 100});
    // const materialSuelo = new StandardMaterial('suelo',scene);
    // materialSuelo.diffuseColor = Color3.FromHexString('#000000');
    // materialSuelo.diffuseColor = Color3.FromHexString('#282828');
    // map.rotation.x = 1.56;
    
    
    
    
    // import obj
    const terreno = BABYLON.SceneLoader.ImportMesh(null, "src/assets/objs/map/", "map.obj", scene, function (container) { 
        // do something with the scene
        var materials = container.materials;
    });
    
    terreno.checkCollisions = true;
    
    // terreno.materials = materialSuelo;
     
     
     const boxPurple = MeshBuilder.CreateBox("box-green", { size: .1 }, scene);
     const materialPurple = new StandardMaterial("box-grey-material", scene);
     materialPurple.diffuseColor = Color3.FromHexString('#a72ab5');
     boxPurple.material = materialPurple;
     // boxPurple.position.x = 2;
     boxPurple.position.y = 2.5;
     
     const boxGreen = MeshBuilder.CreateBox("box-green", { size: .1 }, scene);
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


    // animacion de cubitos
    // const frameRate = 10;

    // const xSlide = new BABYLON.Animation("xSlide", "position.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // const keyFrames = [];

    // keyFrames.push({
    //     frame: 0,
    //     value: .3,
    // });

    // keyFrames.push({
    //     frame: frameRate,
    //     value: -.3,
    // });

    // keyFrames.push({
    //     frame: 2 * frameRate,
    //     value: .3,
    // });

    // xSlide.setKeys(keyFrames);

    // boxGreen.animations.push(xSlide);

    // scene.beginAnimation(boxGreen, 0, 2 * frameRate, true);

    
};

export { createScene };
