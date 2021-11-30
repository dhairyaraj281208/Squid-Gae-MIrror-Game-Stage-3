AFRAME.registerComponent('mirror14', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -22 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane14 = document.createElement("a-entity");
    plane14.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane14.setAttribute('position', position);
    plane14.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane14.setAttribute("color", "#7BC8A4");
    plane14.setAttribute("shadow");

    scene.appendChild(plane14);

  }
});
