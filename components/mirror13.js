AFRAME.registerComponent('mirror13', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -22 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane13 = document.createElement("a-entity");
    plane13.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane13.setAttribute('position', position);
    plane13.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane13.setAttribute("color", "#7BC8A4");
    plane13.setAttribute("shadow");

    scene.appendChild(plane13);

  }
});
