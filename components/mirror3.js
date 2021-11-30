AFRAME.registerComponent('mirror3', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -7 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane3 = document.createElement("a-entity");
    plane3.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane3.setAttribute('position', position);
    plane3.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane3.setAttribute("color", "#7BC8A4");
    plane3.setAttribute("shadow");

    scene.appendChild(plane3);

  }
});
