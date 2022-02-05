window.addEventListener("DOMContentLoaded", init);

function init() {
    const width = 16*50;
    const height = 9*50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        80,              // Camera frustum vertical field of view.
        width / height,  // Camera frustum aspect ratio.
        1,               // Camera frustum near plane.
        8000             // Camera frustum far plane.
    );
    camera.position.set(0, 0, 1000);

    // Box
    const geometry = new THREE.BoxGeometry(500, 500, 500);
    const material = new THREE.MeshStandardMaterial({
        color: 0x00ffff
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // Parallel light
    const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2;
    light.position.set(1, 1, 1);
    scene.add(light);

    // Run
    tick();

    function tick() {
        requestAnimationFrame(tick);

        // Rotate a box
        box.rotation.x += 0.03;
        box.rotation.y += 0.01;

        // Rendering
        renderer.render(scene, camera);
    }
}