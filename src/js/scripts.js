
//Instanciation du moteur de rendu
var renderer = new THREE.WebGLRenderer();

//Instanciation de la scene
var scene = new THREE.Scene();

//Instanciation de la caméra
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


var clock = 0;

var origin = new THREE.Vector3(0, 0, 0);

var uniforms;

var getRandomNumFloat = function(max){
    return Math.floor(Math.random() * Math.floor(max))/10;
}

var initScene = function()
{

    
    //Initialisation de la scene
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    uniforms = {
        "time": {value: clock},
        "randomVec3":{value: new THREE.Vector3(0.0, 0.0, 0.0)}
    }
    
    var shader = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById("vertexShader").textContent,
        fragmentShader: document.getElementById("fragmentShader").textContent
        
        
    });

    var wireframe = new THREE.MeshBasicMaterial({wireframe:true});
    var geometry = new THREE.SphereGeometry(10, 10, 10);
    var cube = new THREE.Mesh(geometry, shader);
    scene.add(cube);
}


var update = function()
{
    camera.position.z = 20;
    scene.rotateX(Math.cos(clock)/200)
    scene.rotateZ(Math.sin(clock)/200)
    clock = performance.now()/2000;
    uniforms["time"].value = clock*50;
    uniforms["randomVec3"].value = new THREE.Vector3(Math.cos(clock), Math.sin(clock), Math.cos(clock));
};

//Fonction qui va permettre de rendre la scene avec la camera voulu
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

initScene();
GameLoop();