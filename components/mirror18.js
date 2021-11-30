AFRAME.registerComponent('mirror18', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -28 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane18 = document.createElement("a-entity");
    plane18.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane18.setAttribute('position', position);
    plane18.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane18.setAttribute("color", "#7BC8A4");
    plane18.setAttribute("shadow");

    scene.appendChild(plane18);

  }
});
