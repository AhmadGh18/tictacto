let divs = document.querySelectorAll(".main div");
let s = document.querySelector("select");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let m;
let count = 0;
let sec;
divs.forEach((d) => {
  d.addEventListener("click", () => {
    count++;
    d.innerHTML = `${getit()}`;
    if (getit() == "X") {
      sec = "O";
    } else {
      sec = "X";
    }
    d.classList.add("finish");
    d.classList.add("user");
    let vari = false;
    while (vari == false) {
      let m = Math.floor(Math.random() * 9);
      if (!divs[m].classList.contains("finish")) {
        divs[m].innerHTML = `${sec}`;
        divs[m].classList.add("finish");
        divs[m].classList.add("computer");
        count++;
        vari = true;
      }
      if (count > 8) {
        break;
      }
      console.log(count);
    }
  });
});

document.addEventListener("click", () => {
  for (let i = 0; i < 9; i++) {
    if (
      (divs[0].classList.contains("computer") &&
        divs[1].classList.contains("computer") &&
        divs[2].classList.contains("computer")) ||
      (divs[0].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[8].classList.contains("computer")) ||
      (divs[0].classList.contains("computer") &&
        divs[3].classList.contains("computer") &&
        divs[6].classList.contains("computer")) ||
      (divs[1].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[7].classList.contains("computer")) ||
      (divs[2].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[6].classList.contains("computer")) ||
      (divs[2].classList.contains("computer") &&
        divs[5].classList.contains("computer") &&
        divs[8].classList.contains("computer")) ||
      (divs[6].classList.contains("computer") &&
        divs[7].classList.contains("computer") &&
        divs[8].classList.contains("computer")) ||
      (divs[3].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[5].classList.contains("computer"))
    ) {
      if (
        divs[0].classList.contains("computer") &&
        divs[1].classList.contains("computer") &&
        divs[2].classList.contains("computer")
      ) {
        document.querySelector(".alone6").style.display = "block";
      } else if (
        divs[0].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[8].classList.contains("computer")
      ) {
        document.querySelector(".alone2 ").style.display = "block";
      } else if (
        divs[0].classList.contains("computer") &&
        divs[3].classList.contains("computer") &&
        divs[6].classList.contains("computer")
      ) {
        document.querySelector(".alone9").style.display = "block";
      } else if (
        divs[1].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[7].classList.contains("computer")
      ) {
        document.querySelector(".alone3").style.display = "block";
      } else if (
        divs[2].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[6].classList.contains("computer")
      ) {
        document.querySelector(".alone").style.display = "block";
      } else if (
        divs[2].classList.contains("computer") &&
        divs[5].classList.contains("computer") &&
        divs[8].classList.contains("computer")
      ) {
        document.querySelector(".alone10").style.display = "block";
      } else if (
        divs[6].classList.contains("computer") &&
        divs[7].classList.contains("computer") &&
        divs[8].classList.contains("computer")
      ) {
        document.querySelector(".alone7").style.display = "block";
      } else if (
        divs[3].classList.contains("computer") &&
        divs[4].classList.contains("computer") &&
        divs[5].classList.contains("computer")
      ) {
        document.querySelector(".alone4").style.display = "block";
      }
      setallasnone();
      break;
    } else if (
      (divs[0].classList.contains("user") &&
        divs[1].classList.contains("user") &&
        divs[2].classList.contains("user")) ||
      (divs[0].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[8].classList.contains("user")) ||
      (divs[0].classList.contains("user") &&
        divs[3].classList.contains("user") &&
        divs[6].classList.contains("user")) ||
      (divs[1].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[7].classList.contains("user")) ||
      (divs[2].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[6].classList.contains("user")) ||
      (divs[2].classList.contains("user") &&
        divs[5].classList.contains("user") &&
        divs[8].classList.contains("user")) ||
      (divs[6].classList.contains("user") &&
        divs[7].classList.contains("user") &&
        divs[8].classList.contains("user")) ||
      (divs[3].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[5].classList.contains("user"))
    ) {
      setallasnone();
      if (
        divs[0].classList.contains("user") &&
        divs[1].classList.contains("user") &&
        divs[2].classList.contains("user")
      ) {
        document.querySelector(".alone6").style.display = "block";
      } else if (
        divs[0].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[8].classList.contains("user")
      ) {
        document.querySelector(".alone2 ").style.display = "block";
      } else if (
        divs[0].classList.contains("user") &&
        divs[3].classList.contains("user") &&
        divs[6].classList.contains("user")
      ) {
        document.querySelector(".alone9").style.display = "block";
      } else if (
        divs[1].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[7].classList.contains("user")
      ) {
        document.querySelector(".alone3").style.display = "block";
      } else if (
        divs[2].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[6].classList.contains("user")
      ) {
        document.querySelector(".alone").style.display = "block";
      } else if (
        divs[2].classList.contains("user") &&
        divs[5].classList.contains("user") &&
        divs[8].classList.contains("user")
      ) {
        document.querySelector(".alone10").style.display = "block";
      } else if (
        divs[6].classList.contains("user") &&
        divs[7].classList.contains("user") &&
        divs[8].classList.contains("user")
      ) {
        document.querySelector(".alone7").style.display = "block";
      } else if (
        divs[3].classList.contains("user") &&
        divs[4].classList.contains("user") &&
        divs[5].classList.contains("user")
      ) {
        document.querySelector(".alone4").style.display = "block";
      }

      break;
    }
  }
});

function setallasnone() {
  setTimeout(() => {
    location.reload();
  }, 1000);
  divs.forEach((d) => {
    d.classList.add("finish");
  });
}
let mai = document.querySelector(".main");

let getit = () => {
  if (s.value != "") {
    mai.style.display = "grid";
    s.style.display = "none";

    let a = document.querySelector("select").value;
    return a;
  } else {
    console.log();
  }
};
