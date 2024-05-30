//type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside ul");
}, false)
document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation()
}, false)
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log("google is clicked");
},false)