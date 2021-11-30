AFRAME.registerComponent('mirror17', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -28 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane17 = document.createElement("a-entity");
    plane17.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane17.setAttribute('position', position);
    plane17.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane17.setAttribute("color", "#7BC8A4");
    plane17.setAttribute("shadow");

    scene.appendChild(plane17);

  }
});
