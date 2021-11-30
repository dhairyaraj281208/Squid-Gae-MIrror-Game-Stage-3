AFRAME.registerComponent('mirror15', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -25 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane15 = document.createElement("a-entity");
    plane15.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane15.setAttribute('position', position);
    plane15.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane15.setAttribute("color", "#7BC8A4");
    plane15.setAttribute("shadow");

    scene.appendChild(plane15);

  }
});
