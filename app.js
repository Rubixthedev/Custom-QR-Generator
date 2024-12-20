let gen = document.querySelector("#generate");
let inp = document.querySelector("#link");
let color;
let bgColor
let dotStyle;
let cornerSquareStyle;
let cornerDotStyle;
let dotBoxes=document.querySelectorAll(".dots-color");
let bgBoxes=document.querySelectorAll(".bg-color");
let dotsStyle=document.querySelectorAll(".dots-style");
let cornerSquare=document.querySelectorAll(".corner-square-style");
let cornerDot=document.querySelectorAll(".corner-dot-style");
for(let box of dotBoxes)
{
    box.addEventListener("click", dotColorSel);
}
for(let box of bgBoxes)
{
    box.addEventListener("click", bgColorSel);
}
for(let box of dotsStyle)
{
    box.addEventListener("click", dotStyleSel);
}
for(let box of cornerSquare)
{
    box.addEventListener("click", cornerSquareSel);
}
for(let box of cornerDot)
{
    box.addEventListener("click", cornerDotSel);
}
function dotColorSel()
{
  for (let box of dotBoxes) {
    box.classList.remove("selected");
    box.classList.add("dots-color");
  }
  if(this.id=="black")
  {
    color="#000000"
  }
  else if(this.id=="white")
  {
    color="#FFFFFF"
  }
  else if(this.id=="gray")
  {
    color="#808080"
  }
  else if(this.id=="blue")
  {
    color="#0000FF"
  }
  else if(this.id=="green")
  {
    color="#008000"
  }
  else if(this.id=="red")
  {
    color="#FF0000"
  }
  else if(this.id=="c-random")
  {
    color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  else
  {
    color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  this.classList.add("selected");
  this.classList.remove("dots-color");
}
function bgColorSel()
{
  for (let box of bgBoxes) {
    box.classList.remove("selected");
    box.classList.add("bg-color");
  }
  if(this.id=="bg-black")
  {
    bgColor="#000000"
  }
  else if(this.id=="bg-white")
  {
    bgColor="#FFFFFF"
  }
  else if(this.id=="bg-gray")
  {
    bgColor="#808080"
  }
  else if(this.id=="bg-blue")
  {
    bgColor="#0000FF"
  }
  else if(this.id=="bg-green")
  {
    bgColor="#008000"
  }
  else if(this.id=="bg-red")
  {
    bgColor="#FF0000"
  }
  else if(this.id=="bg-random")
  {
    bgColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  else
  {
    bgColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  this.classList.add("selected");
  this.classList.remove("bg-color");
}
function dotStyleSel()
{
  for (let box of dotsStyle)
  {
    box.classList.remove("selected");
    box.classList.add("dots-style");
  }
  if (this.id === "square") 
  {
    dotStyle = "square";
  }
  else if (this.id === "dots")
  {
    dotStyle = "dots";
  }
  else if (this.id === "rounded")
  {
    dotStyle = "rounded";
  }
  else if (this.id === "extra-rounded")
  {
    dotStyle = "extra-rounded";
  } 
  else if (this.id === "classy")
  {
    dotStyle = "classy";
  }
  else if (this.id === "classy-rounded")
  {
    dotStyle = "classy-rounded";
  }
  else if(this.id=="d-random")
  {
    let styles = ["square", "dots", "rounded", "extra-rounded", "classy", "classy-rounded"];
    dotStyle = styles[Math.floor(Math.random() * styles.length)];
  }
  else
  {
    let styles = ["square", "dots", "rounded", "extra-rounded", "classy", "classy-rounded"];
    dotStyle = styles[Math.floor(Math.random() * styles.length)];
  }
  this.classList.add("selected");
  this.classList.remove("dots-style");
}
function cornerSquareSel()
{
  for (let box of cornerSquare)
  {
    box.classList.remove("selected");
    box.classList.add("corner-square-style");
  }
  if (this.id === "d-square") 
  {
    cornerSquareStyle = "square";
  }
  else if (this.id === "d-dots")
  {
    cornerSquareStyle = "dot";
  }
  else if (this.id === "c-rounded")
  {
    cornerSquareStyle = "extra-rounded";
  }
  else if (this.id === "cd-random")
  {
    let styles = ["square", "dots", "rounded"];
    cornerSquareStyle = styles[Math.floor(Math.random() * styles.length)];
  }
  else
  {
    let styles = ["square", "dots", "rounded"];
    cornerSquareStyle = styles[Math.floor(Math.random() * styles.length)];
  }
  this.classList.remove("corner-square-style");
  this.classList.add("selected");
}
function cornerDotSel()
{
  for (let box of cornerDot)
  {
    box.classList.remove("selected");
    box.classList.add("corner-dot-style");
  }
  if (this.id === "c-square") 
  {
    cornerDotStyle = "square";
  }
  else if (this.id === "c-dots")
  {
    cornerDotStyle = "dot";
  }
  
  else if (this.id === "cs-random")
  {
    let styles = ["square", "dots"];
    cornerDotStyle = styles[Math.floor(Math.random() * styles.length)];
  }
  else
  {
    let styles = ["square", "dots"];
    cornerDotStyle = styles[Math.floor(Math.random() * styles.length)];
  }
  this.classList.remove("corner-dot-style");
  this.classList.add("selected");
}
gen.addEventListener("click", () => {
  let link = inp.value.trim();

  if (link === "") {
    alert("Please enter a valid URL!");
    return;
  }

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: link,
    dotsOptions:
    {
      color: color,
      type: dotStyle,
    },
    backgroundOptions:
    {
      color: bgColor,
    },
    cornersSquareOptions:
    {
      type: cornerSquareStyle,
    },
    cornersDotOptions:
    {
      type: cornerDotStyle,
    }
  });
  
    const genPage = document.querySelector("#gene");
    genPage.innerHTML = `<head><link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" /><link rel="stylesheet" href="style.css"/><title>Export QR Code</title><link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," /><script src="https://unpkg.com/qr-code-styling/lib/qr-code-styling.js"></script></head><body><div class="new-wrapper"><div class="new-main-container"><div class="new-header"><div class="new-content-wrapper"><h3 class="new-heading">QR code generated</h3><p class="new-description">Your custom QR code is ready. Download it using the button below.</p><div class="new-grid"><div class="new-image-wrapper"><div class="new-image" id="canvas"></div></div></div><div class="new-button-wrapper"><button class="new-button" id="download-QR"><span class="new-button-text">Download QR code</span></button></div><div class="new-back-wrapper"><a href="./index.html" class="new-back-link"><button class="new-back-button"><span class="new-back-button-text">Back to dashboard</span></button></a></div></div></div></div></div></body>`;
    const qrDiv = document.querySelector("#canvas");
    if (qrDiv) 
    {
      qrCode.append(qrDiv);
    } else 
    {
      console.error("QR code container (#canvas) not found!");
    }
    let downloadButton = document.querySelector("#download-QR");
    if (downloadButton) {
      downloadButton.addEventListener("click", function () {
        qrCode.download({ name: "qr-code", extension: "png" });
      });
    }
});
