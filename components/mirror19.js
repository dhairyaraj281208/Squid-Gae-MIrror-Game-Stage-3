AFRAME.registerComponent('mirror19', {

  init: function () {
    // Do something when component first attached.
    var position = { x: -1.5, y: 0, z: -31 }
    this.createMirror(position)


  },

  createMirror: function (position) {
    var scene = document.querySelector("#scene");
    var plane19 = document.createElement("a-entity");
    plane19.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2" });
    plane19.setAttribute('position', position);
    plane19.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane19.setAttribute("color", "#7BC8A4");
    plane19.setAttribute("shadow");

    scene.appendChild(plane19);

  }
});
