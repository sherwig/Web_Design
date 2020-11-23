// FinalProj.js

// thirtythree.js
// http://jsfiddle.net/w67tzfhx/
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// import { OrbitControls } from './Plugins/Gui/OrbitControls.js';

var renderer, scene, camera;
var verticePositions;
var angle=0;
var line, cube,sphere;
var MAX_POINTS = 500;
var drawCount;
var torusKnot;
var geometryCube, geometryTorus;
var controls;
var radius;

// import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

function init() {

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// controls();

camera.position.z = 50;
// var controls = new THREE.OrbitControls(camera, renderer.domElement)



  var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 0, -25);
  scene.add(light);

  var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 0, 25);
  scene.add(light);

  // var material = new THREE.MeshNormalMaterial();
  // var colorCone2 = new THREE.Color( "rgba(0,70,255,1)" );
  // // var material = new THREE.MeshLambertMaterial( {color: color.getHex()} );
  // var material = new THREE.MeshNormalMaterial();
  // var geometry= new THREE.IcosahedronGeometry(0, 0);
  // var color = new THREE.Color("#7833aa");
  // var material = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x009900, shinyness: 20 } );


  // var geometry = new THREE.BufferGeometry();
  //
  // // attributes
  // var positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
  // geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
  // var material = new THREE.MeshNormalMaterial();
  //
  // // drawcalls
  // drawCount = 2; // draw the first 2 points, only
  // geometry.setDrawRange( 0, drawCount );
  // cube = new THREE.Mesh( geometry, material );

  geometryCube= new THREE.IcosahedronGeometry(0, 0);
  var color = new THREE.Color("#7833aa");
  var material = new THREE.MeshNormalMaterial();
  // var material = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x009900, shinyness: 20 } );
  cube = new THREE.Mesh( geometryCube, material );
   // scene.add(cube);

   var geometry = new THREE.SphereGeometry( 150, 32, 32);
   var material = new THREE.MeshNormalMaterial();
   sphere = new THREE.Mesh( geometry, material );
   sphere.material.side = THREE.DoubleSide;
   scene.add( sphere );


  geometryTaurus = new THREE.TorusKnotGeometry( radius, 10, 100, 16 );
  var material = new THREE.MeshNormalMaterial();
  // var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  torusKnot = new THREE.Mesh( geometryTaurus, material );
  scene.add( torusKnot );

  // var MAX_POINTS = 500;
  // geometry
  var geometry = new THREE.BufferGeometry();

	// attributes
	var positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
	geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

	// drawcalls
	drawCount = 2; // draw the first 2 points, only
	geometry.setDrawRange( 0, drawCount );

	// material
	var material = new THREE.LineBasicMaterial( { color: 0xff0000, linewidth: 2 } );
  // var material2 = new THREE.MeshNormalMaterial();
	// line
	line = new THREE.Line( geometry,  material );
	// scene.add( line );


  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.update();
	// update positions
	// updatePositions();
}

// function updatePositions()
// {
//   var positions = line.geometry.attributes.position.array;
//
//   var x, y, z, index;
//   x = y = z = index = 0;
//
//   for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {
//
//     positions[ index ++ ] = x;
//     positions[ index ++ ] = y;
//     positions[ index ++ ] = z;
//
//     x += ( Math.random() - 0.5 ) * 30;
//     y += ( Math.random() - 0.5 ) * 30;
//     z += ( Math.random() - 0.5 ) * 30;
//
//     camera.position.x=x;
//     camera.position.y=y;
//     camera.position.z=z;
//   }
// }


function render()
{
    renderer.render( scene, camera );
}

var delta=0;
  function animate()
  {
    requestAnimationFrame(animate);

    delta+=0.01;

    for (var i = 0, l = geometryCube.vertices.length; i<l; i+=3) {
      geometryCube.vertices[i].x=Math.sin(delta);
      geometryCube.vertices[i].y=Math.sin(delta);
      geometryCube.vertices[i].z=Math.sin(delta);
      geometryCube.verticesNeedUpdate=true;
    }


    for (var i = 0, l = geometryTaurus.vertices.length; i<l; i+=2) {
      geometryTaurus.vertices[i].x=Math.sin(delta)*20;
      geometryTaurus.vertices[i].y=Math.sin(delta)*20;
      geometryTaurus.vertices[i].z=Math.cos(delta)*20;
      geometryTaurus.verticesNeedUpdate=true;
    }

    // geometryCube.vertices[0].x=Math.sin(delta);
    // geometryCube.vertices[5].y=Math.sin(delta);
    // geometryCube.vertices[3].z=Math.sin(delta);

    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;
    //

    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.z += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

    controls.update();

    // drawCount = ( drawCount + 1 ) % MAX_POINTS;
    //
	  // line.geometry.setDrawRange( 0, drawCount );
    //
	  //  if ( drawCount === 0 ) {
		// // periodically, generate new date
		//   updatePositions();
		//   line.geometry.attributes.position.needsUpdate = true; // required after the first render
		//   line.material.color.setHSL( Math.random(), 1, 0.5 );
	  //  }
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

  var knotGui = gui.addFolder("Knot geometry");
  knotGui.add(torusKnot.scale, 'x', .1, 5, .1);
  knotGui.add(torusKnot.scale, 'y', .1, 5, .1);
  knotGui.add(torusKnot.scale, 'z', .1, 5, .1);
  knotGui.open();
