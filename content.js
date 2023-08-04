let action = 0;

const options = {"width": 1024, "height": 1024};

document.body.addEventListener("keyup", function(e) {
    if (new Date() - action < 1000) {
        action = 0;
        if (e.ctrlKey && e.shiftKey) {
            if (e.code == "KeyF") {add(foxes.fox(options))}
            else if (e.code == "Digit1") {add(foxes.curious(options))}
            else if (e.code == "Digit2") {add(foxes.happy(options))}
            else if (e.code == "Digit3") {add(foxes.scary(options))}
            else if (e.code == "Digit4") {add(foxes.sleeping(options))}
        }
    }
    else if (e.ctrlKey && e.shiftKey && e.code == "KeyF") {
        action = new Date();

        new Promise(r => setTimeout(r, 1000)).then(() => {
            if (action != 0) {
                add(foxes.fox(options));
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
