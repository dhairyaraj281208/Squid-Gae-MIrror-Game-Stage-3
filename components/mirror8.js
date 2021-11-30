AFRAME.registerComponent('mirror8', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -13 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane8 = document.createElement("a-entity");
    plane8.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane8.setAttribute('position', position);
    plane8.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane8.setAttribute("color", "#7BC8A4");
    plane8.setAttribute("shadow");

    scene.appendChild(plane8);

  }
});
