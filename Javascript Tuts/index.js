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
    h = checkTime(h)
    m = checkTime(m);
    s = checkTime(s);

    h <= 12 ? document.querySelector(".md").textContent = "AM" : document.querySelector(".md").textContent = "PM";
    
    switch (h) {
      case 13:
        h = 1;
        break;
      case 14:
        h = 2;
        break;
      case 15:
        h = 3;
        break;
      case 16:
        h = 4;
        break;
      case 17:
        h = 5;
        break;
      case 18:
        h = 6;
        break;
      case 19:
        h = 7;
        break;
      case 20:
        h = 8;
        break;
      case 21:
        h = 9;
        break;
      case 22:
        h = 10;
        break;
      case 23:
        h = 11;
        break;
      case 0:
        h=12;
        break;
    
      default:
        break;
    }
      
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