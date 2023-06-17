const themeBtn = document.querySelector("#theme");
let isModified = false;

themeBtn.addEventListener("click", () => {
  if (!isModified) {
    document.body.style.backgroundColor = "#cd201e";
    document.querySelector(".btn").style.backgroundColor = "#fff";
    document.querySelector(".btn").style.color = "#cd201e";
    document.querySelector("section").style.backgroundColor = "#cd201e";
    document.querySelector(".content .textbox h2 span").style.color = "#fff";
    document.querySelector(".circle").style.backgroundColor = "#fff";
    themeBtn.style.color = "#cd201e";
  } else {
    document.body.style.backgroundColor = "";
    document.querySelector(".btn").style.backgroundColor = "";
    document.querySelector(".btn").style.color = "";
    document.querySelector("section").style.backgroundColor = "";
    document.querySelector(".content .textbox h2 span").style.color = ""
    document.querySelector(".circle").style.backgroundColor = "";    ;
    themeBtn.style.color = "";
  }

  // Add a mouseover event to allthe navigation links
  document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("mouseover", () => {
      if (isModified) {
        link.style.color = "#fff";
      }
    });

    link.addEventListener("mouseout", () => {
      if (isModified) {
        link.style.color = "#000000";
      }
    });
  });

  // Add a mouseover event to the .btn element
  document.querySelector(".btn").addEventListener("mouseover", () => {
    if (isModified) {
      document.querySelector(".btn").style.backgroundColor = "#000000";
    }
  });

  // Add a mouseout event to the .btn element
  document.querySelector(".btn").addEventListener("mouseout", () => {
    if (isModified) {
      document.querySelector(".btn").style.backgroundColor = "#fff";
    }
  });

  isModified = !isModified;
});
