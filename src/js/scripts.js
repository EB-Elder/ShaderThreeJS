var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube); */

var geometry = new THREE.Geometry();
var material = new THREE.MeshBasicMaterial({color:0x00ff00 });
geometry.vertices.push(
	new THREE.Vector3( -10,  10, 0 ),
	new THREE.Vector3( -10, -10, 0 ),
	new THREE.Vector3(  10, -10, 0 )
);

geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

geometry.computeBoundingSphere();

var mesh = new THREE.Mesh(geometry, material);



camera.position.z = 50;

scene.add(mesh);
var time = 0;
var update = function()
{
    /* camera.lookAt(new THREE.Vector3(0,0,0));
    camera.position.x = Math.cos(time)*50
    camera.position.z = Math.sin(time)*50
    time+=0.01 */
};

var render = function()
{
    renderer.render(scene, camera);
};

var GameLoop = function()
{
    requestAnimationFrame(GameLoop);

    update();
    render();
};

GameLoop();