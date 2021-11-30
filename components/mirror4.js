AFRAME.registerComponent('mirror4', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -7 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane4 = document.createElement("a-entity");
    plane4.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane4.setAttribute('position', position);
    plane4.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane4.setAttribute("color", "#7BC8A4");
    plane4.setAttribute("shadow");

    scene.appendChild(plane4);

  }
});
