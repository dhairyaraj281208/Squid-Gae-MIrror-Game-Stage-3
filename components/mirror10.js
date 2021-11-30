AFRAME.registerComponent('mirror10', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -16 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane10 = document.createElement("a-entity");
    plane10.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane10.setAttribute('position', position);
    plane10.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane10.setAttribute("color", "#7BC8A4");
    plane10.setAttribute("shadow");

    scene.appendChild(plane10);

  }
});
