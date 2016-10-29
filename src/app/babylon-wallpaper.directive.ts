import { Directive, ElementRef, HostListener, Input, Renderer,OnInit } from '@angular/core';
import 'babylonjs';
var BABYLON = require('babylonjs');

@Directive({
  selector: '[appBabylonWallpaper]'
})
export class BabylonWallpaperDirective implements OnInit {
  private engine;
  private canvas;

  constructor(private el: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.canvas = this.renderer.selectRootElement(this.el.nativeElement);
    this.engine = new BABYLON.Engine(this.canvas, true);
    var scene = this.createScene();

    this.engine.runRenderLoop(() =>{
      scene.render();
    });
  }

  createScene() {
    // Now create a basic Babylon Scene object
    var scene = new BABYLON.Scene(this.engine);

    scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
    scene.ambientColor = new BABYLON.Color3(1, 1, 1);
    // camera
    var camera = new BABYLON.AnaglyphArcRotateCamera("camera1",  -Math.PI/2, Math.PI/4, 20, new BABYLON.Vector3.Zero(), 0.033, scene);
    camera.setPosition(new BABYLON.Vector3(-45,15, -70));
    camera.attachControl(this.canvas, true);

    // lights
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 0.5, 0), scene);
    light1.intensity = 1;
    var sphere = BABYLON.Mesh.CreateSphere("sphere", 32, 2, scene);
    console.log(BABYLON);
    // var gradientMaterial = new BABYLON.GradientMaterial("grad", scene);
    // gradientMaterial.topColor = BABYLON.Color3.Red(); // Set the gradient top color
    // gradientMaterial.bottomColor = BABYLON.Color3.Blue(); // Set the gradient bottom color
    // gradientMaterial.offset = 0.25;

    // sphere.material = gradientMaterial;

    scene.registerBeforeRender(function () {

    });
    // Leave this function
    return scene;
  }
}
