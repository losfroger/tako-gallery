<template>
  <div class="tw-relative">
    <QCircularProgress class="tw-absolute tw-left-1/2 tw-top-1/2" />
    <div
      ref="testViewer"
      class="tw-h-full tw-w-full tw-cursor-all-scroll"
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  model: {
    type: String,
    required: true,
    default: '/3d-models/coding-frog/model.glb'
  }
})

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader'

// init


console.log('Test')

const height = 1024
const width = 1024

const testViewer = ref<HTMLElement | undefined>(undefined)

const camera = new THREE.PerspectiveCamera( 70, 1, 0.01, 1000 )
camera.position.z = 1


const scene = new THREE.Scene()
scene.background = new THREE.Color(THREE.Color.NAMES.white)

new RGBELoader().load( '/hdr/museum.hdr', (text) => {
  text.mapping = THREE.EquirectangularReflectionMapping

  scene.background = text
  scene.environment = text
})

const loader = new GLTFLoader()

const renderer = new THREE.WebGLRenderer( { antialias: true } )
//renderer.toneMapping = THREE.ACESFilmicToneMapping
//renderer.toneMappingExposure = 1
renderer.outputEncoding = THREE.sRGBEncoding

const controls = new OrbitControls( camera, renderer.domElement )
controls.target = new THREE.Vector3(0,2,0)
controls.autoRotate = true

camera.position.set(0, 4, 10)

const light = new THREE.DirectionalLight(0xffffff, 0.5 )
scene.add(light)

const testLoad = ref({
  loaded: 0,
  total: 0,
})

onMounted(async () => {
  renderer.setSize( width,height )
  renderer.setAnimationLoop( animation )

  console.log(testViewer.value)

  const gltf = await loader.loadAsync(props.model, (progress) => {
    testLoad.value.loaded = progress.loaded
    testLoad.value.total = progress.total
  })
  scene.add(gltf.scene)

  if (testViewer.value) {
    console.log('Test appending')
    const canvas = testViewer.value.appendChild(renderer.domElement )
    canvas.className = 'threejs-canvas'
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