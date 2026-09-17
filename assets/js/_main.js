function renderEmbedSpinner() {
  let version = document.querySelector(".finalSpinnerVersion").innerText,
    type = document.querySelector(".finalSpinnerType").innerText,
    speed = document.querySelector(".finalSpinnerSpeed").innerText,
    sizeNum = document.querySelector("#spinnerSizeNum").value,
    sizeMeasure = document.querySelector("#spinnerSizeMeasure").value,
    color = document.querySelector("#spinnerColor").value;
  // let bgBlurChk = document.querySelector("#bgBlurEnabledToggle").checked;
  
  if (!version || !type || !speed) {
    return alert("all required fields must have a value.");
  } else {
    let renderedOut = document.querySelector(".renderedSpinnerOutput");
    renderedOut.dataset.spinnerversion = version;
    renderedOut.dataset.spinnertype = type;
    renderedOut.dataset.spinnerspeed = speed;
    renderedOut.parentElement.style.fontSize = `${sizeNum}${sizeMeasure}`;
    renderedOut.parentElement.style.color = color;
    // if (bgBlurChk == true) {
    //   renderedOut.parentElement.style.color = `${color}80`;
    //   renderedOut.style.backdropFilter = "blur(0.25em)";
    //   renderedOut.style.backgroundClip = "text";
    // } else { renderedOut.parentElement.style.color = color; }
    segoeLdrs(`.${renderedOut.className}`);
    document.querySelector(".copyToClipboardInstruction").style.display = "block";
    navigator.clipboard.writeText(document.querySelector(".urlParser").innerText);
  }
}

function toggleWallpaperEnable() {
  let tgle = document.querySelector("#wallpaperEnabledToggle");
  if (tgle.checked == true) {
    tgle.checked = true;
    // document.querySelector(".isWallpaperEnabled").style.backgroundImage = `url('https://vtresmarias.github.io/assets/images/backgrounds/vtm_bg_3.png')`;
    document.querySelector(".isWallpaperEnabled").style.backgroundImage = `url('https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=en-US')`;
  } else {
    tgle.checked = false;
    document.querySelector(".isWallpaperEnabled").style.backgroundImage = "none";
  }
}