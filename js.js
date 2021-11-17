function sortNumber1() {
    var list, i, switchIng, b, shouldSwitch;
    list = document.getElementById("id01");//получаем id
    switchIng = true;
    while (switchIng) {
      switchIng = false;
      b = list.getElementsByTagName("li");//указываем в каком тегэ сортировать элементы
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
          if ((b[i].innerHTML).toLowerCase() > (b[i + 1].innerHTML).toLowerCase()) {
            shouldSwitch = true;
            break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);//меняем элементы местами
        switchIng = true;
    }
  }
}



function sortNumber2() {
    var list, i, switchIng, b, shouldSwitch;
    list = document.getElementById("id01");//получаем id
    switchIng = true;
    while (switchIng) {
      switchIng = false;
      b = list.getElementsByTagName("li");//указываем в каком тегэ сортировать элементы
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
          if ((b[i].innerHTML).toUpperCase() < (b[i + 1].innerHTML).toUpperCase()) {//если надо строки сортировать то убрать Number
            shouldSwitch= true;
            break;
          }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);//меняем элементы местами
        switchIng = true;
      }
    }
  }
