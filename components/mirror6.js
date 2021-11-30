AFRAME.registerComponent('mirror6', {

  init: function () {
    // Do something when component first attached.
    var position = { x: 1.5, y: 0, z: -10 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane6 = document.createElement("a-entity");
    plane6.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane6.setAttribute('position', position);
    plane6.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane6.setAttribute("color", "#7BC8A4");
    plane6.setAttribute("shadow");

    scene.appendChild(plane6);

  }
});
