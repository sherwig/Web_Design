var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var verticePositions;
var angle=0;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// function addCrystal()
// {
  // var geometry = new THREE.BoxGeometry();
  // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00,wireframe: false } );



  // var material = new THREE.MeshNormalMaterial();
  var color = new THREE.Color( "rgba(0,70,255,1)" );
  var material = new THREE.MeshLambertMaterial( {color: color.getHex()} );

  var geometry= new THREE.IcosahedronGeometry(0, 0);
  // var color = new THREE.Color("#7833aa");
  // var material = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x009900, shinyness: 20 } );

  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  // update cube vertices
  for (var i = 0, l = geometry.vertices.length; i<l; i++) {
      // we'll move the x & y position of each vertice by a random amount
    geometry.vertices[i].x += -.01 + Math.random()*1.01;
    geometry.vertices[i].y += -.2 + Math.random()*8;
  }

  var geometry= new THREE.IcosahedronGeometry(0, 0);
  var color = new THREE.Color("#7833aa");
  var material = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x009900, shinyness: 20 } );

  var cube2 = new THREE.Mesh( geometry, material );
  scene.add( cube2 );

  cube2.position.x=-3;

  // update cube vertices
  for (var i = 0, l = geometry.vertices.length; i<l; i++) {
      // we'll move the x & y position of each vertice by a random amount
    geometry.vertices[i].x += -.01 + Math.random()*1.01;
    geometry.vertices[i].y += -.2 + Math.random()*8;
  }


  var geometry= new THREE.IcosahedronGeometry(0, 0);
  var color = new THREE.Color("#7833aa");
  var material = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x009900, shinyness: 20 } );

  var cube3 = new THREE.Mesh( geometry, material );
  scene.add( cube3 );

  cube3.position.x=3;

  // update cube vertices
  for (var i = 0, l = geometry.vertices.length; i<l; i++) {
      // we'll move the x & y position of each vertice by a random amount
    geometry.vertices[i].x += -.01 + Math.random()*1.01;
    geometry.vertices[i].y += -.2 + Math.random()*8;
  }




  //
  // cube.position.x=Math.random(-3,3);

// }

var radius=5;
var height=15;
var radialSegments=32;

var geometryCone = new THREE.ConeGeometry( radius, height, radialSegments );
// var colorCone = new THREE.Color("#1A1AFF");
var colorCone = new THREE.Color( "#1A1AFF" );
var materialCone = new THREE.MeshLambertMaterial( {color: colorCone.getHex()} );
// var materialCone = new THREE.MeshPhongMaterial( {color: colorCone.getHex(), specular: 0xFFFF00, shinyness: 10 } );
// var materialCone = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cone = new THREE.Mesh( geometryCone, materialCone );
// scene.add(cone);

var geometryCone = new THREE.ConeGeometry( radius, height, radialSegments );
// var colorCone = new THREE.Color("#1A1AFF");
var colorCone = new THREE.Color( "#1A1AFF" );
var materialCone = new THREE.MeshLambertMaterial( {color: colorCone.getHex()} );
// var materialCone = new THREE.MeshPhongMaterial( {color: colorCone.getHex(), specular: 0xFFFF00, shinyness: 10 } );
// var materialCone = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cone2 = new THREE.Mesh( geometryCone, materialCone );
// scene.add(cone2);

var geometryCone = new THREE.ConeGeometry( radius, height, radialSegments );
// var colorCone = new THREE.Color("#1A1AFF");
var colorCone = new THREE.Color( "#1A1AFF" );
var materialCone = new THREE.MeshLambertMaterial( {color: colorCone.getHex()} );
// var materialCone = new THREE.MeshPhongMaterial( {color: colorCone.getHex(), specular: 0xFFFF00, shinyness: 10 } );
// var materialCone = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cone3 = new THREE.Mesh( geometryCone, materialCone );
// scene.add(cone3);

cone2.position.x=radius*2;
cone3.position.x=-radius*2;


// camera.position.z = 5;

var loader = new THREE.FontLoader();

loader.load( 'Plugins/three/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometry = new THREE.TextGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
} );

function updateCamPosition() {
  // rotate our camera's position on the z/y axis
  angle += 0.005;
  var z = 10+ 3 * Math.cos(angle);

  var heightChanger= 2 * Math.cos(angle);
  radius=heightChanger;


  // var y = 3* Math.sin(angle);
  // console.log(z);
  camera.position.z = z;
  // camera.position.y = y;

  // l = geometry.vertices.size;
  // console.log(l)

  // for (var i = 0, l = geometry.vertices.length; i<l; i++) {
  //     // we'll move the x & y position of each vertice by a random amount
  //   geometry.vertices[i].x += z;
  //   geometry.vertices[i].y += z;
  // }


//   for (var i = 0, l = geometryCone.vertices.length; i<l; i++) {
//     // we'll move the x & y position of each vertice by a random amount
//   geometryCone.vertices[i].x = z;
//   geometryCone.vertices[i].y = z;
// }

  /* rotate the camera so the angle it faces animates -
   there's no exact science to this - I just picked a
   random percentage of the z position */

  // camera.rotation.x = z*0.02;
}





var x = 0, y = 0;

var mountainShape = new THREE.Shape();

 mountainShape.moveTo( x - 20, y - 20 );
 mountainShape.lineTo( x - 5, y + 5);
 mountainShape.lineTo( x , y + 10 );
 // mountainShape.lineTo( x , y + 10 );
 // mountainShape.lineTo( x+5 , y + 5 );


 // mountainShape.lineTo( x+1 , y +2 );
 // mountainShape.lineTo( x+10 , y + 7 );

  // mountainShape.moveTo( x + 20, y - 20 );
  // mountainShape.lineTo( x + 5, y + 5);
  // mountainShape.lineTo( x , y + 10 );
  // mountainShape.lineTo( x-1 , y +2 );
var extrudeSettings = { amount: 1, bevelEnabled: false, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

 var geometry = new THREE.ExtrudeBufferGeometry( mountainShape, extrudeSettings );

// var geometry = new THREE.ShapeGeometry( mountainShape );
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

var x = 0, y = 0;

var mountainShape2 = new THREE.Shape();

 mountainShape2.moveTo( x + 20, y - 20,10 );
 mountainShape2.lineTo( x + 5, y + 5,0);
 mountainShape2.lineTo( x , y + 10 ,10);

 var extrudeSettings = { amount: 1, bevelEnabled: false, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

var geometry = new THREE.ExtrudeBufferGeometry( mountainShape2, extrudeSettings );
// var geometry = new THREE.ShapeGeometry( mountainShape2, extrudeSettings );
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );


var heartShape = new THREE.Shape();

heartShape.moveTo( 0, 0 );
heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
heartShape.bezierCurveTo( 30, 0, 30, 35,30,35 );
heartShape.bezierCurveTo( 30, 55, 10, 77, 25, 95 );
heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );

var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

var geometry = new THREE.ExtrudeBufferGeometry( heartShape, extrudeSettings );

var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial() );
// scene.add( mesh );



// var loader = new THREE.FontLoader();
//
// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
//
// 	var geometry = new THREE.TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 400,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	});
// });


// addCrystal();


// var sphereGeometry = new THREE.SphereGeometry(.7);
// var material2 = new THREE.MeshBasicMaterial( { color: 0x00FFFF, wireframe: false } );
// var sphere = new THREE.Mesh(sphereGeometry, material2 );
// scene.add( sphere );



// as if we're turning on a lightbulb within the room
var light = new THREE.PointLight(0xFFFFFF);
 // position the light so it shines on the cube (x, y, z)
light.position.set(10, 0, 25);
scene.add(light);

// var light2 = new THREE.PointLight(0xFFFF00);
//  // position the light so it shines on the cube (x, y, z)
// light2.position.set(10, 10, 25);
// scene.add(light2);



var animate = function () {
  requestAnimationFrame(animate);

  // updateCamPosition();


  //cube.scale+=.1;
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.02;
  cube2.rotation.z += 0.01;

  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;
  cube3.rotation.z += 0.02;




  cone.rotation.y -= 0.01;
  cone2.rotation.y += 0.01;
  cone3.rotation.y += 0.01;

  // mountainShape.rotation.x += 0.01;

  // cube.rotate.z(-40);

  // sphere.rotation.x += 0.02;
  // sphere.rotation.y += 0.01;

  // var smoothing=300;
  // var peak=1;
  // for (var i = 0; i <= geometry.length; i ++) {
  //     geometry.vertices[i].x += peak * perlin.noise(vertices[i]/smoothing,vertices[i])/smoothing;
  //
  //   }


  // var x=0.01+0.01;
  // tweenIcosahedron();
  // sphere.position.x= 10+30*Math.sin(x);
  // console.log(sphere.position.x);
  // randomize();
  renderer.render( scene, camera );

  updateCamPosition();
};

function randomize()
{
  // console.log("here");

  angle += 0.005;
  // console.log(angle);
  for (var i = 0, l = geometry.vertices.length; i<l; i++) {

      geometry.vertices[i].x = 10 * Math.cos(angle);
      // console.log(geometry.vertices[i].x);
    }
}



// function updateCamPosition() {
//   // rotate our camera's position on the z/y axis
//   angle += 0.005;
//   var z = 100 * Math.cos(angle);
//   var y = 100 * Math.sin(angle);
//   camera.position.z = z;
//   camera.position.y = y;
//
//   /* rotate the camera so the angle it faces animates -
//    there's no exact science to this - I just picked a
//    random percentage of the z position */
//
//   camera.rotation.x = z*0.02;
// }

// updateCamPosition();
animate();


// function getOriginalVerticePositions() {
//   // go through each vertice geometry and store their position in an array
//   for (var i = 0, l = geometry.vertices.length; i<l; i++) {
//     verticePositions.push({x: geometry.vertices[i].x, y: geometry.vertices[i].y});
//   }
// }
//
//
// function getNewVertices() {
//   /* this function returns an array of vertice positions which are randomised
//   from the original vertice position */
//   var newVertices = [];
//   for (var i = 0, l = geometry.vertices.length; i<l; i++) {
//     newVertices[i] = {
//       x: verticePositions[i].x -5 + Math.random()*10,
//       y: verticePositions[i].y -5 + Math.random()*10
//     }
//   }
//   return newVertices;
// }
//
// function tweenIcosahedron() {
//   var newVerticePositions = getNewVertices();
//   // tween each vertice to their new position
//   for (var i = 0; i < geometry.vertices.length; i++) {
//     tweenVertice(i, newVerticePositions);
//   }
// }
//
// function tweenVertice(i, newVerticePositions) {
//   // set the tween
//   TweenLite.to(geometry.vertices[i], 1, {x: newVerticePositions[i].x, y: newVerticePositions[i].y, ease: Back.easeInOut, onComplete: function() {
//     // start the icosahedron tween again now the animation is complete
//     if (i === 0) tweenIcosahedron();
//   }});
// }


// dat gui
// var gui = new gat.dat.GUI();
var gui = new dat.gui.GUI();
var cameraGui = gui.addFolder("camera position");
cameraGui.add(camera.position, 'x');
cameraGui.add(camera.position, 'y');
cameraGui.add(camera.position, 'z');
cameraGui.open();

var cameraGui = gui.addFolder("camera projection");
cameraGui.add(camera, "fov");
cameraGui.open();

var lightGui = gui.addFolder("light position");
lightGui.add(light.position, 'x');
lightGui.add(light.position, 'y');
lightGui.add(light.position, 'z');
lightGui.open();

var coneGui = gui.addFolder("Cone ");
coneGui.add(cone.position, 'x');
coneGui.add(cone.position, 'y');
coneGui.add(cone.position, 'z');
coneGui.add(cone.rotation, 'x');
coneGui.add(cone.rotation, 'y');
// coneGui.add(height, 'height');
// coneGui.add(cone.radius);
coneGui.open();

// var cubeGui = gui.addFolder("cube position");
// cubeGui.add(cube.position, 'x');
// cubeGui.add(cube.position, 'y');
// cubeGui.add(cube.position, 'z');
// cubeGui.add(cube.rotation, 'x');
// cubeGui.add(cube.rotation, 'y');
// cubeGui.open();

// var sphereGui = gui.addFolder("sphere position");
// sphereGui.add(sphere.position, 'x');
// sphereGui.add(sphere.position, 'y');
// sphereGui.add(sphere.position, 'z');
// sphereGui.open();
