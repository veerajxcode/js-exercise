let form = document.querySelector("form")
let result = document.querySelector("#result")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${height}`
    }else{
        let value = (weight/ ((height * height)/1000)).toFixed(2)
        result.innerHTML = `Result is ${value}`
    }
    
})