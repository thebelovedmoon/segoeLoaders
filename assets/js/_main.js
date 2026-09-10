function renderEmbedSpinner() {
  let version = document.querySelector(".finalSpinnerVersion").innerText,
    type = document.querySelector(".finalSpinnerType").innerText,
    speed = document.querySelector(".finalSpinnerSpeed").innerText,
    sizeNum = document.querySelector(".finalSpinnerSizeNum").innerText,
    sizeMeasure = document.querySelector(".finalSpinnerSizeMeasure").innerText,
    color = document.querySelector(".finalSpinnerColor").innerText;

  if (!version || !type || !speed || !sizeNum || !sizeMeasure || !color) {
    return alert("all fields must have a value.");
  } else {
    document.querySelector(".isWallpaperEnabled iframe").src = `/segoeLoaders/spinner.html?version=${version}&type=${type}&speed=${speed}&size=${sizeNum}${sizeMeasure}&color=${color}`;
    document.querySelector(".urlParser").style.cursor = "pointer";
    document.querySelector(".urlParser").onclick = () => { navigator.clipboard.writeText(document.querySelector(".urlParser").innerText); }
    document.querySelector(".copyToClipboardInstruction").style.display = "block";
  }
}

function toggleWallpaperEnable() {
  let tgle = document.querySelector("#wallpaperEnabledToggle");
  if (tgle.checked == true) {
    tgle.checked = true;
    document.querySelector(".isWallpaperEnabled").style.backgroundImage = `url('https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png')`;
  } else {
    tgle.checked = false;
    document.querySelector(".isWallpaperEnabled").style.backgroundImage = "none";
  }
}