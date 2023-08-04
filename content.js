let action = 0;

document.body.addEventListener("keyup", function(e) {
    if (new Date() - action < 1000) {
        if (e.ctrlKey && e.shiftKey) {
            if (e.code = "KeyF") {add(foxes.fox({"width": 1024, "height": 1024}))}
        }
        action = 0;
    }
    else if (e.ctrlKey && e.shiftKey && e.code == "KeyF") {
        action = new Date();

        new Promise(r => setTimeout(r, 1000)).then(() => {
            if (action != 0) {
                add(foxes.fox({"width": 1024, "height": 1024}));
            }
        });
    }
}, true);

function add(e) {
    let elm = document.activeElement;

    elm.value += e;
    elm.dispatchEvent(new InputEvent("beforeinput", {
        data: e,
        inputType: "insertFromPaste",
    }));
}
