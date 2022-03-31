document.addEventListener("keydown", keyboardInputHandler);


function keyboardInputHandler(e) {
  let res = document.getElementById("result");

  //angka
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operator
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //desimal
  if (e.key === ".") {
    res.value += ".";
  }

  //enter
  if (e.key === "Enter") {
    res.value = eval(result.value || null);
  }

  //backspace/hapus angka
  if (e.key === "Backspace") {
    let resultInput = res.value;

    //menghapus elemen angka terahir
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

// menghapus semua angka
function clearScreen() {
  document.getElementById("result").value = "";
}
// menampilkan angka di layar
function liveScreen(value) {
  let res = document.getElementById("result");
  if (!res.value) {
    res.value = "";
  }
  res.value += value;
}