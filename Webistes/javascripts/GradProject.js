var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry();
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00,wireframe: false } );
var geometry= new THREE.IcosahedronGeometry(0, 0);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// update cube vertices
for (var i = 0, l = geometry.vertices.length; i<l; i++) {
    // we'll move the x & y position of each vertice by a random amount
  geometry.vertices[i].x += -.2 + Math.random()*2;
  geometry.vertices[i].y += -.2 + Math.random()*2;
}

var sphereGeometry = new THREE.SphereGeometry(.7);
var material2 = new THREE.MeshBasicMaterial( { color: 0x00FFFF, wireframe: false } );
var sphere = new THREE.Mesh(sphereGeometry, material2 );
// scene.add( sphere );



// as if we're turning on a lightbulb within the room
var light = new THREE.PointLight(0xFFFF00);
 // position the light so it shines on the cube (x, y, z)
light.position.set(10, 0, 25);
scene.add(light);

camera.position.z = 7;

var animate = function () {
  requestAnimationFrame( animate );

  //cube.scale+=.1;
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  // cube.rotate.z(-40);

  sphere.rotation.x += 0.02;
  sphere.rotation.y += 0.01;

  // var smoothing=300;
  // var peak=1;
  // for (var i = 0; i <= geometry.length; i ++) {
  //     geometry.vertices[i].x += peak * perlin.noise(vertices[i]/smoothing,vertices[i])/smoothing;
  //
  //   }
  // scene.add(new THREE.AmbientLight(conf.ambientColor));
  // let light = new THREE.PointLight(0xffffff);
  // light.position.z = 100;
  // scene.add(light);

  // var x=0.01+0.01;

  // sphere.position.x= 10+30*Math.sin(x);
  // console.log(sphere.position.x);

  renderer.render( scene, camera );
};

animate();


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

var cubeGui = gui.addFolder("cube position");
cubeGui.add(cube.position, 'x');
cubeGui.add(cube.position, 'y');
cubeGui.add(cube.position, 'z');
cubeGui.add(cube.rotation, 'x');
cubeGui.add(cube.rotation, 'y');
cubeGui.open();

var sphereGui = gui.addFolder("sphere position");
sphereGui.add(sphere.position, 'x');
sphereGui.add(sphere.position, 'y');
sphereGui.add(sphere.position, 'z');
sphereGui.open();
