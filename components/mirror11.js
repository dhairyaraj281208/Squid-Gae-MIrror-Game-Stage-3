AFRAME.registerComponent('mirror11', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -19 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane11 = document.createElement("a-entity");
    plane11.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane11.setAttribute('position', position);
    plane11.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane11.setAttribute("color", "#7BC8A4");
    plane11.setAttribute("shadow");

    scene.appendChild(plane11);

  }
});
