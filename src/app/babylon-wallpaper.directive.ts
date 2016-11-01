import { Directive, ElementRef, HostListener, Input, Renderer,OnInit, OnDestroy } from '@angular/core';
import { CameraChannelService } from './camera-channel.service';
import { Subscription } from 'rxjs/Rx';

import 'babylonjs';
var BABYLON = require('babylonjs');

@Directive({
  selector: '[appBabylonWallpaper]'
})
export class BabylonWallpaperDirective implements OnInit {
  private subscription: Subscription;
  private engine;
  private canvas;

  constructor(
      private el: ElementRef,
      private renderer: Renderer,
      private cameraChannel:CameraChannelService
  ) {}

  ngOnInit() {
    this.canvas = this.renderer.selectRootElement(this.el.nativeElement);
    this.engine = new BABYLON.Engine(this.canvas, true);
    var scene = this.createScene();
    this.cameraChannel.cameraPosition.subscribe((type) => {
      console.log('babylon', type);
    });
    this.engine.runRenderLoop(() =>{
      scene.render();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createScene() {
    var scene = new BABYLON.Scene(this.engine);
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 0.5, 0), scene);


    var sphere = BABYLON.Mesh.CreateSphere("sphere", 32, 2, scene);
    var labs = BABYLON.Mesh.CreateSphere('sphere', 32, 2, scene);
    var works = BABYLON.Mesh.CreateSphere('sphere', 32, 2, scene);
    var profile = BABYLON.Mesh.CreateSphere('sphere', 32, 2, scene);
    labs.position = new BABYLON.Vector3(0,40,-20);
    works.position = new BABYLON.Vector3(40,40,-20);

    var labCameraTarget = new BABYLON.Vector3(0, 45,-30);

    var worksCameraTarget = new BABYLON.Vector3(40, 45,-30);
    scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
    scene.ambientColor = new BABYLON.Color3(1, 1, 1);

    camera.attachControl(this.canvas, true);

    light1.intensity = 1;


    var positionAnimation = new BABYLON.Animation(
        "camPos",
        "position",
        30,
        BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    var keys1 = [{
      frame : 0,
      value : camera.position
    }, {
      frame : 100,
      value : worksCameraTarget
    }];

    positionAnimation.setKeys(keys1);
    camera.animations.push(positionAnimation);

    scene.beginAnimation(camera, 0, 100, false, 1);


    scene.registerBeforeRender(() =>{});
    return scene;
  }
}
