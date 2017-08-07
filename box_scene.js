var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x00ff00);

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);


var geometry = new THREE.CubeGeometry(100, 100, 100);
var material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -1000);

scene.add(mesh);

requestAnimationFrame(render);

function render(){
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);    
}