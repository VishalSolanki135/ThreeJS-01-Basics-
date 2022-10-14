// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// Mesh consists geometry and material both
const mesh = new THREE.Mesh(geometry, material);

// at the end, always add the mesh to the scene
scene.add(mesh)

// SIZES
const sizes = {
    width: 1000,
    height: 800
}


// CAMERA (A POINT OF VIEW)
// parameters: (field of view(vertical vision), aspect ratio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

scene.add(camera)

// RENDERER
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
// render using a scene and a camera
renderer.render(scene, camera)