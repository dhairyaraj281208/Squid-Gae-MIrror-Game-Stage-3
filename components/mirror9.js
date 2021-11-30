AFRAME.registerComponent('mirror9', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -16 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane9 = document.createElement("a-entity");
    plane9.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane9.setAttribute('position', position);
    plane9.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane9.setAttribute("color", "#7BC8A4");
    plane9.setAttribute("shadow");

    scene.appendChild(plane9);

  }
});
