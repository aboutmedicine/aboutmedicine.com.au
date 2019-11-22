import * as THREE from "three";

require("three/examples/js/controls/OrbitControls.js");
require("three/examples/js/loaders/GLTFLoader.js");

class SceneManager {
  constructor(canvas) {
    const screen = {
      width: canvas.width,
      height: canvas.height
    };
    const scene = this._buildScene();
    const camera = this._buildCamera(screen);
    const renderer = this._buildRenderer(canvas, screen);
    const controls = this._buildControls(camera, renderer);
    const loader = new THREE.GLTFLoader();
    const clock = new THREE.Clock();

    scene.add(camera);

    this._loader = loader;
    this._scene = scene;
    this._camera = camera;
    this._screen = screen;
    this._controls = controls;
    this._renderer = renderer;
    this._mouse = new THREE.Vector2();
    this._raycaster = new THREE.Raycaster();
    this._canvas = canvas;
    this._clock = clock;

    this._animations = [];
    this._animated = false;
    this._animating = false;
    this._activeScene = null;

    window.onresize = () => this._resize();

    this._resize();
    this._render();
  }

  load(path) {
    return new Promise(res => {
      this._loader.load(path, gltf => {
        let prev = this.scene.getObjectById(this._activeScene);

        if (prev) {
          this.scene.remove(prev);
        }

        this._activeScene = gltf.scene.id;
        this._scene.add(gltf.scene);
        this._interactiveObjects = gltf.scene;

        if (gltf.animations.length) {
          this._animations = gltf.animations;

          this._buildLayers()

          const mixer = this._buildMixer(gltf.scene, gltf.animations);
          this._mixer = mixer;

          this._animated = true;

        } else if (!gltf.animations.length) {

          this._animated = false;
          this._animations = [];

        }

        res();
      });
    });
  }

  checkAnimated() {
    return this._animated;
  }

  checkAnimating() {
    return this._animating;
  }

  checkIntersection(
    event,
    offset = {
      x: 0,
      y: 0
    }
  ) {
    if (!this._interactiveObjects || this._animating) return;

    let x, y;

    if (event.changedTouches) {
      x = event.changedTouches[0].pageX;
      y = event.changedTouches[0].pageY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }

    this._mouse.set(
      ((x + offset.x) / window.innerWidth) * 2 - 1,
      -((y + offset.y) / window.innerHeight) * 2 + 1
    );

    this._raycaster.setFromCamera(this._mouse, this._camera);

    const intersects = this._raycaster.intersectObject(
      this._interactiveObjects,
      true
    );

    let intersection = intersects[0];

    if (intersection && intersection.object.material.clippingPlanes) {
      let filtered = intersects.filter(elem => {
        return intersection.object.material.clippingPlanes.every(elem2 => {
          return elem2.distanceToPoint(elem.point) > 0;
        });
      });
      intersection = filtered[0];
    }
    return intersection;
  }

  worldToScreen(vector3Point) {
    const vector = new THREE.Vector3().copy(vector3Point);
    const hw = this._screen.width / 2;
    const hh = this._screen.height / 2;

    vector.project(this._camera);

    vector.x = vector.x * hw + hw;
    vector.y = -(vector.y * hh) + hh;

    return {
      x: vector.x,
      y: vector.y
    };
  }

  distanceToCamera(vector) {
    return this._camera.position.distanceTo(vector);
  }

  hideMesh(mesh) {
    if (mesh) {
      mesh.visible = false;
    }
  }

  restoreVisibility() {
    this._scene.traverse(object => {
      if (!object.visible) {
        object.visible = true;
      }
      if (object.isMesh) {
        object.material.clippingPlanes = [];
      }
    });
    this._resetCamera();
    this._renderer.localClippingEnabled = false;
    this._renderer.clippingPlanes = [];

    if (this._animations.length) {
      const mixer = this._buildMixer(this._interactiveObjects, this._animations);
      this._mixer = mixer;

      this._buildLayers()

      this._animating = false;
    }
  }

  toggleControls(mode) {
    this._controls.enabled = mode;
  }

  switchTheme() {
    this.scene.background = new THREE.Color(0x333333);
  }

  addObject(object) {
    this._scene.add(object);
  }

  removeObject(object) {
    this._scene.remove(object);
  }

  hideObject(object) {
    object.visible = false;
  }

  play(mesh) {

    for (let i = 0; i < this._animations.length; i++) {

      if (this._animations[i].name.includes(mesh.name)) {

        this._showAnimationOf(mesh.name)

        this._mixer.clipAction(this._animations[i]).paused = false;

      } else if (this._animations[i].name.includes(mesh.parent.name)) {

        this._showAnimationOf(mesh.parent.name)

        this._mixer.clipAction(this._animations[i]).paused = false;
      }
    }
  }

  pause(mesh) {

    for (let i = 0; i < this._animations.length; i++) {

      if (this._animations[i].name.includes(mesh.name)) {

        this._mixer.clipAction(this._animations[i]).paused = true;
      }
    }
  }

  lookAt(mesh) {
    mesh.getWorldPosition(this._controls.target);
    this._controls.update();
  }

  clip(x = -1, y = 0, z = 0) {
    const plane = new THREE.Plane(new THREE.Vector3(x, y, z), 0);

    this._renderer.localClippingEnabled = true;

    const backSideMaterial = new THREE.MeshBasicMaterial({
      color: 0xeeeeee
    });

    backSideMaterial.side = THREE.BackSide;

    this._renderer.clippingPlanes = [plane];

    this._interactiveObjects.traverse(node => {
      if (node.isMesh) {
        node.material.clippingPlanes = [plane];
        node.material.clipShadows = true;
        node.material.needsUpdate = true;

        node.onAfterRender = function(
          renderer,
          scene,
          camera,
          geometry,
          material,
          group
        ) {
          renderer.renderBufferDirect(
            camera,
            scene.fog,
            geometry,
            backSideMaterial,
            node,
            group
          );
        };
      }
    });
  }

  get scene() {
    return this._scene;
  }

  get controls() {
    return this._controls;
  }

  get camera() {
    return this._camera;
  }

  get rect() {
    return this._renderer.domElement.getBoundingClientRect();
  }

  _update() {
    this._renderer.render(this._scene, this._camera);

    if (this._mixer !== undefined) {
      this._mixer.update(this._clock.getDelta());
    }

    this._controls.update();
  }

  _render() {
    requestAnimationFrame(() => this._render());
    this._update();
  }

  _resize() {
    const canvas = this._canvas;
    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    const {
      width,
      height
    } = canvas;

    this._screen.width = width;
    this._screen.height = height;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);

    this._resetCamera();
  }

  _resetCamera() {
    this._controls.reset();
  }

  _setLayers(layer) {

    // Ambient Light
    this._scene.children[0].layers.set(layer);

    // Camera
    this._scene.children[1].layers.set(layer);

    // Camera Point Light
    this._scene.children[1].children[0].layers.set(layer)

  }

  _showAnimationOf(mesh) {

    this._animating = true;

    this._scene.traverse(object => {

      if (object.name.includes(mesh)) {

        object.visible = true;

        this._setLayers(object.userData.layer)

      } else if (object.isMesh) {

        object.visible = false;

      }
    });

  }

  _buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const ambient = new THREE.AmbientLight(0xfafafa);
    scene.add(ambient);

    return scene;
  }

  _buildRenderer(canvas, {
    width,
    height
  }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
      // alpha: true
    });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    return renderer;
  }

  _buildCamera({
    width,
    height
  }) {
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.5, 4000);
    camera.position.x = 5;
    camera.position.y = 5;
    camera.position.z = 10;

    const pointLight = new THREE.PointLight(0xeeeeee, 0.2);
    camera.add(pointLight);

    return camera;
  }

  _buildControls(camera, renderer) {
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;
    controls.zoomSpeed = 0.5;
    controls.panSpeed = 1.2;
    controls.maxDistance = 50;
    controls.minDistance = 1;

    return controls;
  }

  _buildMixer(scene, animations) {
    const mixer = new THREE.AnimationMixer(scene);

    animations.forEach(function(animation) {
      mixer.clipAction(animation).play();
      mixer.clipAction(animation).paused = true;
    });

    return mixer;
  }

  _buildLayers() {

    // Ambient Light
    this._scene.children[0].layers.enableAll();

    // Camera
    this._scene.children[1].layers.enableAll();

    // Camera Point Light
    this._scene.children[1].children[0].layers.enableAll()

    let index = 0;

    for (let i = 0; i < this._interactiveObjects.children.length; i++) {
      if (this._interactiveObjects.children[i].name.includes("anim")) {

        index += 1

        // Animated Parent Objects
        this._interactiveObjects.children[i].layers.set(index);
        this._interactiveObjects.children[i].userData["layer"] = index;
        this._interactiveObjects.children[i].visible = false;

        // Children of the above Parent Object
        if (this._interactiveObjects.children[i].children.length > 0) {
          for (let x in this._interactiveObjects.children[i].children) {
            if (this._interactiveObjects.children[i].children[x].name !== undefined) {
              this._interactiveObjects.children[i].children[x].layers.set(index)
              this._interactiveObjects.children[i].children[x].userData["layer"] = index;
            }
          }
        }

        // Ambient Light
        this._scene.children[0].layers.disable(index);

        // Camera
        this._scene.children[1].layers.disable(index);

        // Camera Point Light
        this._scene.children[1].children[0].layers.disable(index)

      }
    }
  }
}

export default SceneManager;
