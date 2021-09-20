const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setClearColor('#e5e5e5')
document.body.appendChild(renderer.domElement)

window.addEventListener("resize",()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
})

const makeCube = (colorVal, width, scale, depth, x, y, z) => {
  const geometry = new THREE.BoxGeometry(width, scale, depth)
  //   const texture= new THREE.TextureLoader().load("circuit_pattern.png")
  const texture= new THREE.TextureLoader().load("./FloorsCheckerboard_S_Diffuse.jpg")
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const cube = new THREE.Mesh(geometry, material)
  cube.position.x = x
  cube.position.y = y
  cube.position.z = z
  return cube
}

const makeSphere = function (colorVal, r, w, h, x, y, z) {
  const geometry = new THREE.SphereGeometry(r, w, h)
  const texture= new THREE.TextureLoader().load("./lavatile.jpg")
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const sphere = new THREE.Mesh(geometry, material)
  sphere.position.x = x
  sphere.position.y = y
  sphere.position.z = z
  return sphere
}
const cube = makeCube(0xffffff, 2, 2, 2, 0, 0, 0)
const sphere_1 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, 1, 1)
const sphere_2 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, -1, 1)
const sphere_3 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, 1, 1)
const sphere_4 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, -1, 1)
const sphere_5 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, 1, -1)
const sphere_6 = makeSphere(0xff0000, 0.5, 100, 100, 1.5, -1, -1)
const sphere_7 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, 1, -1)
const sphere_8 = makeSphere(0xff0000, 0.5, 100, 100, -1.5, -1, -1)
scene.add(
  cube,
  sphere_1,
  sphere_2,
  sphere_3,
  sphere_4,
  sphere_5,
  sphere_6,
  sphere_7,
  sphere_8
)
camera.position.z = 20
const r=10;
let angle=0;
function animate(){
  requestAnimationFrame(animate);
  camera.position.x=r*(Math.cos(angle));
  camera.position.y=r*(Math.sin(angle));
  angle+=Math.PI/128;
  renderer.render(scene,camera);
}
animate();