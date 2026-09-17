// LOAD FONTS AUTOMATICALLY
const windowsSpinnerImport = document.createElement("style");
windowsSpinnerImport.textContent = `
  @font-face {
    font-family: "Segoe Boot Semilight";
    src: url("/segoeLoaders/assets/fonts/segoe_slboot.ttf");
    font-display: swap;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Segoe Boot Semilight";
    src: url("/segoeLoaders/assets/fonts/segoen_slboot.ttf");
    font-display: swap;
    font-stretch: condensed;
  }
`;
document.head.appendChild(windowsSpinnerImport);

let windowsSpinnerV1 = [
  "&#xE052;", "&#xE053;", "&#xE054;", "&#xE055;", "&#xE056;",
  "&#xE057;", "&#xE058;", "&#xE059;", "&#xE05A;", "&#xE05B;",
  "&#xE05C;", "&#xE05D;", "&#xE05E;", "&#xE05F;", "&#xE060;",
  "&#xE061;", "&#xE062;", "&#xE063;", "&#xE064;", "&#xE065;",
  "&#xE066;", "&#xE067;", "&#xE068;", "&#xE069;", "&#xE06A;",
  "&#xE06B;", "&#xE06C;", "&#xE06D;", "&#xE06E;", "&#xE06F;",
  "&#xE070;", "&#xE071;", "&#xE072;", "&#xE073;", "&#xE074;",
  "&#xE075;", "&#xE076;", "&#xE077;", "&#xE078;", "&#xE079;",
  "&#xE07A;", "&#xE07B;", "&#xE07C;", "&#xE07D;", "&#xE07E;",
  "&#xE07F;", "&#xE080;", "&#xE081;", "&#xE082;", "&#xE083;",
  "&#xE084;", "&#xE085;", "&#xE086;", "&#xE087;", "&#xE088;",
  "&#xE089;", "&#xE08A;", "&#xE08B;", "&#xE08C;", "&#xE08D;",
  "&#xE08E;", "&#xE08F;", "&#xE090;", "&#xE091;", "&#xE092;",
  "&#xE093;", "&#xE094;", "&#xE095;", "&#xE096;", "&#xE097;",
  "&#xE098;", "&#xE099;", "&#xE09A;", "&#xE09B;", "&#xE09C;",
  "&#xE09D;", "&#xE09E;", "&#xE09F;", "&#xE0A0;", "&#xE0A1;",
  "&#xE0A2;", "&#xE0A3;", "&#xE0A4;", "&#xE0A5;", "&#xE0A6;",
  "&#xE0A7;", "&#xE0A8;", "&#xE0A9;", "&#xE0AA;", "&#xE0AB;",
  "&#xE0AC;", "&#xE0AD;", "&#xE0AE;", "&#xE0AF;", "&#xE0B0;",
  "&#xE0B1;", "&#xE0B2;", "&#xE0B3;", "&#xE0B4;", "&#xE0B5;",
  "&#xE0B6;", "&#xE0B7;", "&#xE0B8;", "&#xE0B9;", "&#xE0BA;",
  "&#xE0BB;", "&#xE0BC;", "&#xE0BD;", "&#xE0BE;", "&#xE0BF;",
  "&#xE0C0;", "&#xE0C1;", "&#xE0C2;", "&#xE0C3;", "&#xE0C4;",
  "&#xE0C5;", "&#xE0C6;", "&#xE0C7;", "&#xE0C8;", "&#xE0C9;",
  "&#xE0CA;", "&#xE0CB;",
], windowsSpinnerV2 = [
  "&#xE100;", "&#xE101;", "&#xE102;", "&#xE103;", "&#xE104;",
  "&#xE105;", "&#xE106;", "&#xE107;", "&#xE108;", "&#xE109;",
  "&#xE10A;", "&#xE10B;", "&#xE10C;", "&#xE10D;", "&#xE10E;",
  "&#xE10F;", "&#xE110;", "&#xE111;", "&#xE112;", "&#xE113;",
  "&#xE114;", "&#xE115;", "&#xE116;", "&#xE117;", "&#xE118;",
  "&#xE119;", "&#xE11A;", "&#xE11B;", "&#xE11C;", "&#xE11D;",
  "&#xE11E;", "&#xE11F;", "&#xE120;", "&#xE121;", "&#xE122;",
  "&#xE123;", "&#xE124;", "&#xE125;", "&#xE126;", "&#xE127;",
  "&#xE128;", "&#xE129;", "&#xE12A;", "&#xE12B;", "&#xE12C;",
  "&#xE12D;", "&#xE12E;", "&#xE12F;", "&#xE130;", "&#xE131;",
  "&#xE132;", "&#xE133;", "&#xE134;", "&#xE135;", "&#xE136;",
  "&#xE137;", "&#xE138;", "&#xE139;", "&#xE13A;", "&#xE13B;",
  "&#xE13C;", "&#xE13D;", "&#xE13E;", "&#xE13F;", "&#xE140;",
  "&#xE141;", "&#xE142;", "&#xE143;", "&#xE144;", "&#xE145;",
  "&#xE146;", "&#xE147;", "&#xE148;", "&#xE149;", "&#xE14A;",
  "&#xE14B;", "&#xE14C;", "&#xE14D;", "&#xE14E;", "&#xE14F;",
  "&#xE150;", "&#xE151;", "&#xE152;", "&#xE153;", "&#xE154;",
  "&#xE155;", "&#xE156;", "&#xE157;", "&#xE158;", "&#xE159;",
  "&#xE15A;", "&#xE15B;", "&#xE15C;", "&#xE15D;", "&#xE15E;",
  "&#xE15F;", "&#xE160;", "&#xE161;", "&#xE162;", "&#xE163;",
  "&#xE164;", "&#xE165;", "&#xE166;", "&#xE167;", "&#xE168;",
  "&#xE169;", "&#xE16A;", "&#xE16B;", "&#xE16C;", "&#xE16D;",
  "&#xE16E;", "&#xE16F;", "&#xE170;", "&#xE171;", "&#xE172;",
  "&#xE173;", "&#xE174;", "&#xE175;", "&#xE176;",
];

const segoeLdrsIntervals = new WeakMap();

function segoeLdrs(thisElmt) {
  // CALL THIS FUNCTION WITH A SPECIFIC CLASS ".elmt" OR ID "#elmt"
  // FOR ONLY A LOADER SCREEN, PUT IN onload() OF <body>

  let winSpinBlk = document.querySelector(`${thisElmt}`), c = 0;
  if (!winSpinBlk) { return console.error(`spinner element ${thisElmt} not found`); }

  clearInterval(segoeLdrsIntervals.get(winSpinBlk));

  // INSTANTIATE CRITICAL FONT METADATA
  winSpinBlk.style.fontFamily = "'Segoe Boot Semilight', sans-serif";
  winSpinBlk.style.fontStretch = winSpinBlk.dataset.spinnertype;

  // CUSTOMIZE ELEMENTS VIA CSS -- BE SURE TO INCLUDE !important
  winSpinBlk.style.color = "inherit";
  winSpinBlk.style.fontSize = "inherit";
  winSpinBlk.style.display = "inline-block";
  winSpinBlk.style.verticalAlign = "baseline";
  winSpinBlk.style.pointerEvents = "none";
  winSpinBlk.style.userSelect = "none";

  const spnr = () => {
    let spn;

    switch (winSpinBlk.dataset.spinnerversion) {
      case "1":
        spn = c % windowsSpinnerV1.length;
        winSpinBlk.innerHTML = `${windowsSpinnerV1[spn]}`;
        break;
      case "2":
        spn = c % windowsSpinnerV2.length;
        winSpinBlk.innerHTML = `${windowsSpinnerV2[spn]}`;
        break;
      default:
        return console.error("invalid spinner version.");
    }
    c++;
  };
  spnr();
  
  segoeLdrsIntervals.set(
    winSpinBlk,
    setInterval(spnr, Number(winSpinBlk.dataset.spinnerspeed)),
  );
}