import * as THREE from '@/three';



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var renderer = new THREE.WebGLRenderer();
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 5;


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

requestAnimationFrame( animate );
renderer.render( scene, camera );
