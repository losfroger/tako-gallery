<template>
  <div class="tw-relative tw-isolate tw-block tw-aspect-square tw-overflow-clip tw-rounded-md tw-bg-white">
    <QInnerLoading :showing="!loading.appended">
      <QSpinnerTail
        color="primary"
        size="xl"
      />
    </QInnerLoading>
    <div
      ref="testViewer"
      class="tw-z-0 tw-h-full tw-w-full tw-cursor-all-scroll"
    />
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader'


const props = defineProps({
  model: {
    type: String,
    required: true,
    default: '/3d-models/coding-frog/model.glb'
  }
})


console.log('Test')

const height = 1024
const width = 1024

const testViewer = ref<HTMLElement | undefined>(undefined)
const scene = new THREE.Scene()
scene.background = new THREE.Color(THREE.Color.NAMES.white)

const camera = new THREE.PerspectiveCamera( 70, 1, 0.01, 1000 )
camera.position.set( 7, 3, 7 )

const renderer = new THREE.WebGLRenderer( { antialias: true } )
renderer.outputEncoding = THREE.sRGBEncoding
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

const pmremGenerator = new THREE.PMREMGenerator( renderer )
pmremGenerator.compileEquirectangularShader()

const controls = new OrbitControls( camera, renderer.domElement )

const hlight = new THREE.AmbientLight( 0x404040, 1 )
scene.add( hlight )

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 )
directionalLight.castShadow = true

directionalLight.shadow.mapSize.width = 2048
directionalLight.shadow.mapSize.height = 2048

directionalLight.shadow.camera.top = 4
directionalLight.shadow.camera.bottom = - 4
directionalLight.shadow.camera.left = - 4
directionalLight.shadow.camera.right = 4
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 40
directionalLight.shadow.camera.far = 40
directionalLight.shadow.bias = - 0.002
directionalLight.position.set( 0, 20, 20 )
scene.add( directionalLight )

const loading = ref({
  hdrLoaded: 0,
  hdrTotal: 0,
  glbLoaded: 0,
  glbTotal: 0,
  appended: false,
})

const loadingCalculated = computed(() => ({
  max: loading.value.hdrTotal + loading.value.glbTotal,
  progressLoaded: loading.value.hdrLoaded + loading.value.glbLoaded,
}))

const hdrLoader = new RGBELoader()
hdrLoader.loadAsync( '/hdr/env.hdr', (progress) => {
  loading.value.hdrLoaded = progress.loaded
  loading.value.hdrTotal = progress.total
})
.then((texture) => {
		const envMap = pmremGenerator.fromEquirectangular( texture ).texture
		scene.environment = envMap

    texture.dispose()
		pmremGenerator.dispose()
})


onMounted(async () => {
  renderer.setSize( width,height )
  renderer.setAnimationLoop( animation )

  console.log(testViewer.value)

  const loader = new GLTFLoader()

  const gltf = await loader.loadAsync(props.model, (progress) => {
    loading.value.glbLoaded = progress.loaded
    loading.value.glbTotal = progress.total
  })
  gltf.scene.traverse((child) => {
    console.log(child, child.isObject3D, typeof child)
    if (child.type == 'Mesh' && child instanceof THREE.Mesh) {
      child.castShadow = true
      child.receiveShadow = true

      if (child.material instanceof THREE.MeshStandardMaterial) {
        child.material.envMapIntensity = 0.3
      }
    }
  })

  scene.add(gltf.scene)

  if (testViewer.value) {
    console.log('Test appending')
    const canvas = testViewer.value.appendChild(renderer.domElement )
    canvas.className = 'threejs-canvas'

    loading.value.appended = true
  }
})



// animation

function animation( time: number ) {
  controls.update()
  renderer.render( scene, camera )
}

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement
  //const oldWi
}


</script>

<style>
.threejs-canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>