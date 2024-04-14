function lightMode (){
    const light = document.getElementById("light")
    light.classList.add ("light")
    const darkMode = document.getElementById("dark")
    darkMode.classList.remove ("dark")
    document.body.className = 'bg-light'
}

function darkMode (){
    const dark = document.getElementById("dark")
    dark.classList.add ("dark")
    const lightMode = document.getElementById("light")
    lightMode.classList.remove ("light")
    document.body.className = 'bg-dark'
}