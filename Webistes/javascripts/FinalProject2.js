// FinalProject2.js

var renderer, scene, camera;
var verticePositions;
var angle=0;
var line,sphere;
var MAX_POINTS = 500;
var drawCount;
var torusKnot;
var geometryCube =new Array(width);
// var geometryCube;
// , geometryTorus;
var controls;
var radius;
var width=10;
var height=10;
var depth=10;
var cube =new Array(width);

var offset=2;
var container;
var video, texture, material, mesh;
var composer;
var mouseX = 0;
var mouseY = 0;
var windowHalfX = window.innerWidth / 2*1.5;
var windowHalfY = window.innerHeight / 2;
var cube_count;
var halfWindowX=(width/2)*offset;
var halfWindowY=(height/2)*offset;
var halfWindowZ=(depth/2)*offset;


// console.log(windowHalfX);
// const meshes = [],
// materials = [],
// xgrid = 20,
// ygrid = 10;

var AMOUNT = 6;


// import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

// https://www.w3docs.com/snippets/javascript/how-to-create-a-two-dimensional-array-in-javascript.html
for (var i=0; i< width; i++)
{
  cube[i]=new Array(height);
  geometryCube[i]=new Array(height);
  for (var j=0; j<depth; j++)
  {
    cube[i][j]=new Array(depth);
    geometryCube[i][j]=new Array(depth);
  }
}

 // console.log(cube);

  camera.position.z = 5;
  // camera.position.x=20;
  // camera.position.y=20;

for ( var i = 0; i < width; i ++ ) {
  for (var j=0; j<height; j++){
    for(var q=0; q< depth; q++){
     geometryCube[i][j][q]= new THREE.IcosahedronGeometry(0, 0);
      // console.log(geometryCube);
      var material = new THREE.MeshNormalMaterial();
      cube[i][j][q] = new THREE.Mesh( geometryCube[i][j][q], material );
      cube[i][j][q].position.x=-halfWindowX+i*offset;
      cube[i][j][q].position.y=-halfWindowY+j*offset;
      cube[i][j][q].position.z=-halfWindowZ+q*offset;

      scene.add(cube[i][j][q]);
    }
   }
  }

// camera.position.z = 50;

  var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 0, -25);
  scene.add(light);

  var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 0, 25);
  scene.add(light);

  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.update();
}

function randomize()
{
  // var rander=Math.random()0,cube.length;
  // rander=Math.floor(rander);

  return Math.floor(Math.random() * (cube.length - 0) ) + 0;
  // return rander;

}


// KeyframeTrack(keyFramer, times : Array, values : Array, interpolation : Constant );

var rand=randomize();
console.log(rand);

function render()
{
    renderer.render( scene, camera );
}

var delta=0;
var clocker=0;

function waitSeconds(seconds = 0) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

seconds=waitSeconds();
console.log(seconds);

function animate()
{
  requestAnimationFrame(animate);
  delta+=.01;
  // var clock = new THREE.Clock();
  // console.log(clock);
  // clocker = clock.getDelta();
  // console.log(clocker);

   offset=offset*Math.sin(delta);
   // console.log(offset);

  for (var i=0; i<cube.length; i++)
  {
    // console.log(cube[i].length);
    for( var j=0; j<cube[i].length; j++)
    {
      for (var q=0; q<cube[i][j].length; q++)
      {
      cube[i][j][q].rotation.x += 0.005;
      cube[i][j][q].rotation.z += 0.01;

      cube[i][j][q].position.x += .01*Math.sin(delta);
      cube[i][j][q].position.y += .01*Math.cos(delta);

      cube[5][j][q].position.z += .012*Math.cos(delta);
      cube[4][j][q].position.z += .012*Math.cos(delta);
      cube[i][4][q].position.x += .012*Math.cos(delta);
      cube[i][5][q].position.x += .012*Math.cos(delta);
      cube[i][j][4].position.y += .012*Math.cos(delta);
      cube[i][j][5].position.y += .012*Math.cos(delta);


        for (var t = 0, l = geometryCube[i][j][q].vertices.length; t<l; t+=5) {
          geometryCube[i][j][q].vertices[t].x=Math.sin(delta);
          geometryCube[i][j][q].vertices[t].y=Math.sin(delta);
          geometryCube[i][j][q].vertices[t].z=Math.cos(delta);
          geometryCube[i][j][q].verticesNeedUpdate=true;
        }
    }
  }

  }

  //   for (var t = 0, l = geometryCube[rand][rand][rand].vertices.length; t<l; t+=3) {
  //   geometryCube[rand][rand][rand].vertices[t].x=Math.sin(delta);
  //   geometryCube[rand][rand][rand].vertices[t].y=Math.cos(delta);
  //   geometryCube[rand][rand][rand].vertices[t].z=Math.cos(delta);
  //   geometryCube[rand][rand][rand].verticesNeedUpdate=true;
  //
  // }


  controls.update();
  render();
  }


  init();
  animate();

  var gui = new dat.gui.GUI();
  var cameraGui = gui.addFolder("camera position");
  cameraGui.add(camera.position, 'x');
  cameraGui.add(camera.position, 'y');
  cameraGui.add(camera.position, 'z', 0, 120, 1);
  cameraGui.open();

  // var knotGui = gui.addFolder("Knot geometry");
  // knotGui.add(torusKnot.scale, 'x', .1, 5, .1);
  // knotGui.add(torusKnot.scale, 'y', .1, 5, .1);
  // knotGui.add(torusKnot.scale, 'z', .1, 5, .1);
  // knotGui.open();
