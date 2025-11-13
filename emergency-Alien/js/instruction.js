console.log("Js loaded");
document.querySelector(".UFO").addEventListener("click", UFOIF);
document.querySelector(".Garden").addEventListener("click", GardenIF);
document.querySelector(".Alien").addEventListener("click", AlienIF);

function UFOIF() {
  console.log("UFO STJAELER");
  document.querySelector(".info-text h2").textContent = "UFO";
  document.querySelector(".placeholder").textContent =
    "UFO stjæler dine grønsager";

  document.querySelector("#efficiency").textContent =
    "Aliens vil stjæle vores grønsager og det er ikke så godt";
  document.querySelector("#requirement").textContent =
    "Men du kan beskytte dine grønsager med TE. Spray lidt te og dine problemer bliver løst.";
  document.querySelector("#Hotspot1 path").style.fill = "White";
}

function GardenIF() {
  console.log("Garden");
  document.querySelector(".info-text h2").textContent = "Garden";
  document.querySelector(".placeholder").textContent =
    "Hvilke grønsager bliver stjålet";

  document.querySelector("#efficiency").textContent =
    "Aliens elsker vores grønsager, men de gider ikke dele med os, så de tager det hele";
  document.querySelector("#requirement").textContent =
    "Men du kan beskytte dine grønsager med TE. Spray lidt te og dine problemer bliver løst.";
  document.querySelector("#Hotspot2 path").style.fill = "White";
}

function AlienIF() {
  console.log("UFO STJAELER");
  document.querySelector(".info-text h2").textContent = "Alien";
  document.querySelector(".placeholder").textContent = "Er du selv i fare?";

  document.querySelector("#efficiency").textContent =
    "Aliens elsker vores grønsager, Men de er ikke interesseret i os mennesker.";
  document.querySelector("#requirement").textContent =
    "Men de vil gerne stjæle vores jobs for at hyste vores grønsager";
  document.querySelector("#Hotspot3 path").style.fill = "White";
}
