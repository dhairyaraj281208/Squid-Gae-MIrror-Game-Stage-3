AFRAME.registerComponent('mirror2', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -4 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane2 = document.createElement("a-entity");
    plane2.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2", color: "#7BC8A4" });
    plane2.setAttribute('position', position);
    plane2.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane2.setAttribute("shadow");

    scene.appendChild(plane2);

  }
});
