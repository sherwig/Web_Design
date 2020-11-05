// thirtythree.js


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var verticePositions;
var angle=0;
var angle2=0;

// import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

  // var material = new THREE.MeshNormalMaterial();
  var colorCone2 = new THREE.Color( "rgba(0,70,255,1)" );
  // var material = new THREE.MeshLambertMaterial( {color: color.getHex()} );
  var material = new THREE.MeshNormalMaterial();
  var geometry= new THREE.IcosahedronGeometry(0, 0);
  // var color = new THREE.Color("#7833aa");
  // var material = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x009900, shinyness: 20 } );

  var cube = new THREE.Mesh( geometry, material );
  // cube.position.x=-12;
  // cube.position.y=-2;
  scene.add(cube);


  camera.position.z = 5;

  var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 0, -25);
  scene.add(light);


  var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 0, 25);
  scene.add(light);


  var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;


    renderer.render( scene, camera );
    // checkRotation();

    // updateCamPosition();
  };

  animate();
