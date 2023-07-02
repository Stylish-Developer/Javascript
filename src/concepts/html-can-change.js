// -- JAVASCRIPT can change HTML content, attribute values, styles and show and hide the HTML Elements

function changeContent() {
  const content = (document.getElementById("content").innerHTML =
    "This is HTML content");
}

function changeSrcOn() {
  document.getElementById("gif").src = "/src/assets/swing-on.gif";
}

function changeSrcOff() {
  document.getElementById("gif").src = "/src/assets/swing-off.gif";
}

function changeStyle() {
  const color = (document.getElementById("content").style.color = "red");
  const fontSize = (document.getElementById("content").style.fontSize = "26px");
}

function hideContent() {
  const color = (document.getElementById("content").style.display = "none");
}

function showContent() {
  const color = (document.getElementById("content").style.display = "block");
}
