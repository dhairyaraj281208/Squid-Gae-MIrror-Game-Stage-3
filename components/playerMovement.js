AFRAME.registerComponent("player-movement", {
    init: function () {
        this.walk();
    },
    walk: function () {
        var val = 0;
        while(true){
            window.addEventListener("keydown", (e) => {
                if (
                    e.key === "ArrowUp" || e.key === "w"
                ) {
    
                    var entity = document.querySelector("#count");
                    entity.setAttribute('text', {
                        value: val + 1
                    })
                }
            });
        }
    },
});
