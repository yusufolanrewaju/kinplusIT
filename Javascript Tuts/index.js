const output = document.getElementById('output');
const clicker = document.getElementById('clicker');

clicker.addEventListener ('click', ()=>{
    output.innerHTML = Date();
});

document.getElementById('dob').onchange = ()=>{
    let dob = document.getElementById('dob').value
    document.getElementById('age').innerHTML = new Date().getFullYear() - new Date(dob).getFullYear()
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ms = today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('ms').innerHTML = ":" + ms;
    setTimeout(startTime, 10);
  }

  function showMs() {
    if(document.getElementById('ms').style.display === "inline-block") {
      document.getElementById('ms').style.display = "none"
    }
    else{
      document.getElementById('ms').style.display = "inline-block"
    }

  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }