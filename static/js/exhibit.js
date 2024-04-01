import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

// :(
const global = global_init();

function global_init() {
	const scene = new THREE.Scene();

	let renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );


	let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.z = 5
	
	let geometry = new THREE.BoxGeometry( 1, 1, 1 );
	let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

	let cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	let global = {
		scene: scene,
		camera: camera,
		renderer: renderer,
		cube: cube
	};

	return global;
}

function animate() {
    requestAnimationFrame( animate );	

    global.cube.rotation.x += 0.01;
    global.cube.rotation.y += 0.02;

    global.renderer.render( global.scene, global.camera );
}

function findElementById(element, id) {
    if (element.id === id) {
        return element;
    }

    for (let i = 0; i < element.children.length; i++) {
        let foundElement = findElementById(element.children[i], id);
        if (foundElement) {
            return foundElement;
        }
    }

    return null;
}

function main() {
    let container = document.getElementById("container")
    let canvas = findElementById(document.body, "main-content")

	let rendererDom = global.renderer.domElement;

	rendererDom.style = '';
	// document.body.insertBefore( rendererDom, document.body.firstChild );
	canvas.appendChild( rendererDom );

    //canvas.innerHTML = rendererDom;

	if (WebGL.isWebGLAvailable())  {
		animate(global);
	} else {
		let warning = WebGL.getWebGLErrorMessage();
		container.appendChild(warning);
	}
}

main()
