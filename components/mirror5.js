AFRAME.registerComponent('mirror5', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -10 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane5 = document.createElement("a-entity");
    plane5.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane5.setAttribute('position', position);
    plane5.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane5.setAttribute("color", "#7BC8A4");
    plane5.setAttribute("shadow");

    scene.appendChild(plane5);

  }
});
