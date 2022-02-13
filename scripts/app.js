
function Finish() {
  document.getElementById("finishBtn").disabled = true;
  var allProgressBars = document.getElementsByClassName("progress-bar");
  for (let element of allProgressBars){
    CompleteProgress(element);
  }  
}

function CompleteProgress(ele){
  var width = 50;
  var progressValEle = ele.querySelector(".progress-value");
  var id = setInterval(frame, 10); 
  function frame() {
      if (width >= 100) {
      clearInterval(id);
    } 
    else {
      width++;
      ele.style.width = width + "%";
      progressValEle.innerText = width + "%";
    }
  }
}
