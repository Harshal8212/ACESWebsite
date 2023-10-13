import './style/main.css'
import * as THREE from 'three'


const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})


const scene = new THREE.Scene()


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 4
scene.add(camera)


const donut = new THREE.Mesh(new THREE.TorusGeometry( 10, 3, 16, 150 ), new THREE.MeshNormalMaterial())

scene.add(donut)


const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)
camera.position.setZ(30);
camera.position.setX(-3);

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    
  
    
    camera.position.x = t * -0.002;
    camera.position.z = t * -0.005;
    camera.position.y = t * -0.0005;
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();
  



const loop = () =>
{
    
  
    donut.rotation.x += 0.001;
    donut.rotation.y += 0.005;
    donut.rotation.z += 0.001;

  
    renderer.render(scene, camera)

    
    window.requestAnimationFrame(loop)
}
loop()