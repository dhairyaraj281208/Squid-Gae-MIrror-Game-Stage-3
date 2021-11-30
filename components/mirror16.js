AFRAME.registerComponent('mirror16', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -25 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane16 = document.createElement("a-entity");
    plane16.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane16.setAttribute('position', position);
    plane16.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane16.setAttribute("color", "#7BC8A4");
    plane16.setAttribute("shadow");

    scene.appendChild(plane16);

  }
});
