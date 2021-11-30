AFRAME.registerComponent('mirror20', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -31 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane20 = document.createElement("a-entity");
    plane20.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane20.setAttribute('position', position);
    plane20.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane20.setAttribute("color", "#7BC8A4");
    plane20.setAttribute("shadow");

    scene.appendChild(plane20);

  }
});
