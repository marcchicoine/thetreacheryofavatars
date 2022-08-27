
  // Set our main variables
  let scene,
  renderer,
  camera,
  model, // Our character
  model2,
  model3,
  model4,
  model5,
  model6,
  model7,
  neck, // Reference to the neck bone in the skeleton
  waist, // Reference to the waist bone in the skeleton
  leftHand, // Reference to the left hand bone in the skeleton
  rightHand, // Reference to the right hand bone in the skeleton
  rightArm, // Reference to the right elbow bone in the skeleton
  leftArm, // Reference to the left elbow bone in the skeleton
  mixer, // THREE.js animations mixer
  clock = new THREE.Clock(), // Used for anims, which run to a clock instead of frame rate 
  currentlyAnimating = false, // Used to check whether characters neck is being used in another anim
  raycaster = new THREE.Raycaster(), // Used to detect the click on our character
  loaderAnim = document.getElementById('js-loader')
  ;
  
 

  init();

  function init() {





    
    let model1_url = 'girl.glb';
    const canvas = document.querySelector('#c');
    const backgroundColor = 0xFFE599;
    
    // Init the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);
    scene.fog = new THREE.Fog(backgroundColor, 60, 100);

    // Init the renderer
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Add a camera
    camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000);

    camera.position.z = 30;
    camera.position.x = 0;
    camera.position.y = -3;





    //textures
    let m2 = new THREE.TextureLoader().load('wood.jpg');

    let model1_tx = new THREE.TextureLoader().load('file8.png');
    model1_tx.flipY = false;


    //meshes
  const model1_mtl = new THREE.MeshPhongMaterial({
    map: model1_tx,
    color: 0xffffff,
     skinning: true });

     const m2m = new THREE.MeshPhongMaterial({
      map: m2,
      color: 0xffffff,
       skinning: true });
  




     //loading
    let loader = new THREE.GLTFLoader();

    loader.load(
    model1_url,
    function (gltf) {
  //
// 
      model = gltf.scene;
      model.traverse(i => {
        
        if (i.isMesh) {
          i.castShadow = true;
          i.receiveShadow = true;
          i.material = model1_mtl;
        }
        
      
      //   // Reference the  bones
        if (active1 = true) {
        if (i.isBone && i.name === 'mixamorigNeck') {
          neck = i;
        }
        if (i.isBone && i.name === 'mixamorigSpine') {
          waist = i;
        }
        if (i.isBone && i.name === 'mixamorigRightForeArm') {
          rightHand = i;
        }
        if (i.isBone && i.name === 'mixamorigLeftForeArm') {
          leftHand = i;
        }
        if (i.isBone && i.name === 'mixamorigLeftArm') {
          leftArm = i;
        }
        if (i.isBone && i.name === 'mixamorigRightArm') {
          rightArm = i;
        }
      }
      else {}
    
      })

      model.scale.set(7, 7, 7);
      model.position.y = -11;
      model.position.z = 4;

      scene.add(model);

      loaderAnim.remove();



// new THREE.GLTFLoader().load('rar.glb', result => {
  
//   model2 = result.scene.children[0];
    
  
//   model2.traverse(i => {

//     if (i.isMesh) {
//       i.castShadow = true;
//       i.receiveShadow = true;
//       i.material = m2m;
//     }
//     //switch models
//     //  // Reference the  bones
//      if (active2 = false) {
//       if (i.isBone && i.name === 'mixamorigNeck') {
//         neck = i;
//       }
//       if (i.isBone && i.name === 'mixamorigSpine') {
//         waist = i;
//       }
//       if (i.isBone && i.name === 'mixamorigRightForeArm') {
//         rightHand = i;
//       }
//       if (i.isBone && i.name === 'mixamorigLeftForeArm') {
//         leftHand = i;
//       }
//       if (i.isBone && i.name === 'mixamorigLeftArm') {
//         leftArm = i;
//       }
//       if (i.isBone && i.name === 'mixamorigRightArm') {
//         rightArm = i;
//       }
//     }
//     else {}
  
//     })


//   model2.position.set (6,-11,-9);
//     model2.scale.set(.08, .08, .08);

//     scene.add(model2);
//     loaderAnim.remove();
  
//       });
//       //load another model
// new THREE.GLTFLoader().load('rar.glb', result => {
//   model3 = result.scene.children[5];
    
  
//   model3.traverse(i => {

//     if (i.isMesh) {
//       i.castShadow = true;
//       i.receiveShadow = true;
//       i.material = m2m;
//     }
//         //switch models
//   //  // Reference the  bones
//    if (active3 = false) {
//     if (i.isBone && i.name === 'mixamorigNeck') {
//       neck = i;
//     }
//     if (i.isBone && i.name === 'mixamorigSpine') {
//       waist = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightForeArm') {
//       rightHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftForeArm') {
//       leftHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftArm') {
//       leftArm = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightArm') {
//       rightArm = i;
//     }
//   }
//   else {}

//   })


//   model3.position.set (-24,-11,-3);
//     model3.scale.set(.08, .08, .08);

//     scene.add(model3);
//     loaderAnim.remove();
  
//       });
//       //load another model
// new THREE.GLTFLoader().load('rar.glb', result => {
//   model4 = result.scene.children[1];
    
  
//   model4.traverse(i => {

//     if (i.isMesh) {
//       i.castShadow = true;
//       i.receiveShadow = true;
//       i.material = m2m;
//     }
//         //switch models
//   // // Reference the  bones
//   if (active4 = false) {
//     if (i.isBone && i.name === 'mixamorigNeck') {
//       neck = i;
//     }
//     if (i.isBone && i.name === 'mixamorigSpine') {
//       waist = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightForeArm') {
//       rightHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftForeArm') {
//       leftHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftArm') {
//       leftArm = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightArm') {
//       rightArm = i;
//     }
//   }
//   else {}

//   })

//   model4.position.set (24,-11,-2);
//     model4.scale.set(.08, .08, .08);

//     scene.add(model4);
//     loaderAnim.remove();
  
//       });
//       //load another model
// new THREE.GLTFLoader().load('rar.glb', result => {
//   model5 = result.scene.children[2];
    
  
//   model5.traverse(i => {

//     if (i.isMesh) {
//       i.castShadow = true;
//       i.receiveShadow = true;
//       i.material = m2m;
//     }
//         //switch models
//   // // Reference the  bones
//   if (active5 = false) {
//     if (i.isBone && i.name === 'mixamorigNeck') {
//       neck = i;
//     }
//     if (i.isBone && i.name === 'mixamorigSpine') {
//       waist = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightForeArm') {
//       rightHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftForeArm') {
//       leftHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftArm') {
//       leftArm = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightArm') {
//       rightArm = i;
//     }
//   }
//   else {}

//   })

//   model5.position.set (-18,-11,-12);
//     model5.scale.set(.08, .08, .08);

//     scene.add(model5);
//     loaderAnim.remove();
  
//       });
//       //load another model
// new THREE.GLTFLoader().load('rar.glb', result => {
//   model6 = result.scene.children[3];
    
  
//   model6.traverse(i => {

//     if (i.isMesh) {
//       i.castShadow = true;
//       i.receiveShadow = true;
//       i.material = m2m;
//     }
//         //switch models
//   //  // Reference the  bones
//    if (active6 = false) {
//     if (i.isBone && i.name === 'mixamorigNeck') {
//       neck = i;
//     }
//     if (i.isBone && i.name === 'mixamorigSpine') {
//       waist = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightForeArm') {
//       rightHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftForeArm') {
//       leftHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftArm') {
//       leftArm = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightArm') {
//       rightArm = i;
//     }
//   }
//   else {}

//   })

//   model6.position.set (16,-11,-8);
//     model6.scale.set(.08, .08, .08);

//     scene.add(model6);
//     loaderAnim.remove();
  
//       });
//       //load another model
// new THREE.GLTFLoader().load('rar.glb', result => {
//   model7 = result.scene.children[4];
    
  
//   model7.traverse(i => {

//     if (i.isMesh) {
//       i.castShadow = true;
//       i.receiveShadow = true;
//       i.material = m2m;
//     }
    
//         //switch models
//   // Reference the  bones
//   if (active7 = false) {
//     if (i.isBone && i.name === 'mixamorigNeck') {
//       neck = i;
//     }
//     if (i.isBone && i.name === 'mixamorigSpine') {
//       waist = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightForeArm') {
//       rightHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftForeArm') {
//       leftHand = i;
//     }
//     if (i.isBone && i.name === 'mixamorigLeftArm') {
//       leftArm = i;
//     }
//     if (i.isBone && i.name === 'mixamorigRightArm') {
//       rightArm = i;
//     }
//   }
//   else {}

//   })

//   model7.position.set (-4,-11,-6);
//     model7.scale.set(.08, .08, .08);

//     scene.add(model7);
//     loaderAnim.remove();
  
//       });
     


      // end of bill
 

      

  //general traverse 
  //scene traverse
// const models = [model, model2, model3, model4, model5, model6, model7];
//         models.forEach((yuppy, i) => {
//           yuppy.traverse(i => {      
            
//             i.castShadow = true;
//             i.receiveShadow = true;
//             i.material = m2m;
          
//         if (i.isBone && i.name === 'mixamorigNeck') {
//           neck = i;
//         }
//         if (i.isBone && i.name === 'mixamorigSpine') {
//           waist = i;
//         }
//         if (i.isBone && i.name === 'mixamorigRightForeArm') {
//           rightHand = i;
//         }
//         if (i.isBone && i.name === 'mixamorigLeftForeArm') {
//           leftHand = i;
//         }
//         if (i.isBone && i.name === 'mixamorigLeftArm') {
//           leftArm = i;
//         }
//         if (i.isBone && i.name === 'mixamorigRightArm') {
//           rightArm = i;
//         }
//       })
//         })
    },
    function (error) {
      console.error(error);
    });

    
    
    //4/24/2022
    // // //load another model

// Load a glTF resource
loader.load(
	// resource URL
	'chickendance.glb',
	// called when the resource is loaded
	function ( gltf ) {
    const model = gltf.scene;

    mixer = new THREE.AnimationMixer(model);

    console.log(gltf.animations);

    mixer.clipAction(gltf.animations[0]).play();

    scene.add(model);   
    
    gltf.scene.scale.set(7, 7, 7);
    gltf.scene.position.y = -11;
    gltf.scene.position.z = -6;
    gltf.scene.position.x = 0;





  });







  

    // Add lights
    let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
    hemiLight.position.set(0, 50, 0);
    // Add hemisphere light to scene
    scene.add(hemiLight);

    let d = 8.25;
    let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
    dirLight.position.set(-8, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 1500;
    dirLight.shadow.camera.left = d * -1;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = d * -1;
    // Add directional Light to scene
    scene.add(dirLight);

    // Floor
    let floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
    let floorMaterial = new THREE.MeshPhongMaterial({
      color: 0xE06666,
      shininess: 10 });

    let floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -0.5 * Math.PI;
    floor.receiveShadow = true;
    floor.position.y = -11;
    scene.add(floor);

    let geometry = new THREE.PlaneGeometry(40, 40);
    let texture = new THREE.TextureLoader().load( 'pipe.png' );
    let material = new THREE.MeshBasicMaterial( { map: texture } );

    // let material = new THREE.MeshBasicMaterial({ color: 0x9bffaf }); // 0xf2ce2e 
    let sphere = new THREE.Mesh(geometry, material);
    sphere.position.z = -15;
    sphere.position.y = 4;
    sphere.position.x = 0;
    scene.add(sphere);


  


  }
//end initiate


  



  function update() {
    if (mixer) {
      mixer.update(clock.getDelta());
    }

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    requestAnimationFrame(update);
    

 

  }

  update();

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvasPixelWidth = canvas.width / window.devicePixelRatio;
    let canvasPixelHeight = canvas.height / window.devicePixelRatio;

    const needResize =
    canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  
  function raycast(e, touch = false) {
    let mouse = {};
    if (touch) {
      mouse.x = 2 * (e.changedTouches[0].clientX / window.innerWidth) - 1;
      mouse.y = 1 - 2 * (e.changedTouches[0].clientY / window.innerHeight);
    } else {
      mouse.x = 2 * (e.clientX / window.innerWidth) - 1;
      mouse.y = 1 - 2 * (e.clientY / window.innerHeight);
    }
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    let intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects[0]) {
      let object = intersects[0].object;

      if (object.name === 'stacy') {

        if (!currentlyAnimating) {
          currentlyAnimating = true;
        }
      }
    }
  }



  setInterval(function (e) {
       //these will all load your movements

    let mousecoords = getMousePos(e);
    let handcoordsR = getHandPoseR(e);
    let handcoordsL = getHandPoseL(e);
    let armcoordsL = getArmPoseL(e);
    let armcoordsR = getArmPoseR(e);
    // let shouldercoordsR = getShoulderPoseR(e) ;
    // let shouldercoordsL = getShoulderPoseL(e) ;

    if (neck && waist && rightHand && leftHand 
      &&  rightArm && leftArm 
      //  rightShoulder && leftShoulder
       ) {
      moveJoint(mousecoords, neck, 50);
      moveJoint(mousecoords, waist, 30);
      moveJoint(handcoordsR, rightHand, 100);
      moveJoint(handcoordsL, leftHand, 100);
      moveJoint(armcoordsL, leftArm, 50);
      moveJoint(armcoordsR, rightArm, 50);
      // moveJoint(shouldercoordsR, rightShoulder, 40);
      // moveJoint(shouldercoordsL, leftShoulder, 40);

    }
    
  


  }, 
  
  
  5);

  function getMousePos(e) {
    return { x: window.innerWidth * nose.x / 400, y: window.innerHeight * nose.y / 300 };
  }

  function getHandPoseR(e) {
    return { x: window.innerWidth * rightWristP.x / 400, y: window.innerHeight * rightWristP.y / 300 };
  }
    
  function getHandPoseL(e) {
    return { x: window.innerWidth * leftWristP.x / 400, y: window.innerHeight * leftWristP.y / 300 };
  }

  function getArmPoseL(e) {
    return { x: window.innerWidth * leftElbowP.x / 400, y: window.innerHeight * leftElbowP.y / 300 };
  }

  function getArmPoseR(e) {
    return { x: window.innerWidth * rightElbowP.x / 400, y: window.innerHeight * rightElbowP.y / 300 };
  }


  function moveJoint(mouse, joint, degreeLimit) {
    let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
    joint.rotation.y = THREE.Math.degToRad(degrees.x);
    joint.rotation.x = THREE.Math.degToRad(degrees.y);
  }

  function getMouseDegrees(x, y, degreeLimit) {
    let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage;

    let w = { x: window.innerWidth, y: window.innerHeight };

    // Left (Rotates neck left between 0 and -degreeLimit)
    // 1. If cursor is in the left half of screen
    if (x <= w.x / 2) {
      // 2. Get the difference between middle of screen and cursor position
      xdiff = w.x / 2 - x;
      // 3. Find the percentage of that difference (percentage toward edge of screen)
      xPercentage = xdiff / (w.x / 2) * 100;
      // 4. Convert that to a percentage of the maximum rotation we allow for the neck
      dx = degreeLimit * xPercentage / 100 * -1;
    }

    // Right (Rotates neck right between 0 and degreeLimit)
    if (x >= w.x / 2) {
      xdiff = x - w.x / 2;
      xPercentage = xdiff / (w.x / 2) * 100;
      dx = degreeLimit * xPercentage / 100;
    }
    // Up (Rotates neck up between 0 and -degreeLimit)
    if (y <= w.y / 2) {
      ydiff = w.y / 2 - y;
      yPercentage = ydiff / (w.y / 2) * 100;
      // Note that I cut degreeLimit in half when she looks up
      dy = degreeLimit * 0.5 * yPercentage / 100 * -1;
    }
    // Down (Rotates neck down between 0 and degreeLimit)
    if (y >= w.y / 2) {
      ydiff = y - w.y / 2;
      yPercentage = ydiff / (w.y / 2) * 100;
      dy = degreeLimit * yPercentage / 100;
    }
    return { x: dx, y: dy };
  }



//////////////////////////////////////////////////////////////fireworks


var container,



renderer2 = new THREE.WebGLRenderer( { alpha: true } );

renderer2.setSize(window.innerWidth, window.innerHeight);
container = document.getElementById('container');
container.appendChild(renderer.domElement);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shadeLighterColor(color, percent) {
    var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}


var meshCount = 5000;
var arrayOfMeshes = [];
for (var i = 0; i < meshCount; i++) {
    var particle = new THREE.PlaneGeometry(2, 1.2);
    for (var k = 0, len = particle.faces.length; k < len; k++) {
        var face = particle.faces[k].clone();
        face.materialIndex = 1;
        particle.faces.push(face);
        particle.faceVertexUvs[0].push(particle.faceVertexUvs[0][k].slice(0));
    }

    frontSideColor = getRandomColor();
    backSideColor = shadeLighterColor(frontSideColor, 0.3);
    var materials = [new THREE.MeshBasicMaterial({ color: frontSideColor, side: THREE.FrontSide }),
        new THREE.MeshBasicMaterial({ color: backSideColor, side: THREE.BackSide })
    ];
    var mesh = new THREE.Mesh(particle, materials);



    mesh.position.x = Math.random() * 200 - 80;
    mesh.position.y = Math.random() * 400 - 20;
    mesh.position.z = Math.random() * 400 - 20;
    scene.add(mesh);
    arrayOfMeshes.push(mesh);
}
function animateConfetti() {
    maximum = 1;
    minimum = 0.5;
    requestAnimationFrame(animateConfetti);


    for (var j = 0; j < meshCount; j++) {

        mesh = arrayOfMeshes[j];

        mesh.rotation.x += Math.random() *(minimum - maximum) + 0.1;
        mesh.rotation.y += 0.1;
        mesh.position.x += 0.01 + 0.001 * Math.random() *(minimum - maximum + 0.1);
        mesh.position.y += -(Math.floor(Math.random() * (maximum - minimum + 0.1)) + minimum);
    }


};



//animateConfetti();
requestAnimationFrame(animateConfetti);
