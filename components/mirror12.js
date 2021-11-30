AFRAME.registerComponent('mirror12', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -19 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane12 = document.createElement("a-entity");
    plane12.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane12.setAttribute('position', position);
    plane12.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane12.setAttribute("color", "#7BC8A4");
    plane12.setAttribute("shadow");

    scene.appendChild(plane12);

  }
});
