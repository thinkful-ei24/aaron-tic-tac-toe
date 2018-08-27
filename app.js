'use strict';

const eventListeners = function () {
  $('.cell').on('click', function () {
    if (state.gameOver === false) {

      let closestP = $(this).find('p');
      let closestPValue = closestP.text();
      if (closestPValue === '\xa0') {
        closestP.html(state.addXO);
        state.stateXO = !state.stateXO;
      }
    }
  });


  $('#new-game').on('click', function () {
    state.newGame();
    render();
    eventListeners();
  });

  $('.cell').on('click', function () {
    if ($('#0').find("p").text() !== '\xa0' && $('#0').find("p").text() === $('#1').find("p").text() && $('#0').find("p").text() === $('#2').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#0').addClass("win");
      $('#1').addClass("win");
      $('#2').addClass("win");
    }
    if ($('#0').find("p").text() !== '\xa0' && $('#0').find("p").text() === $('#3').find("p").text() && $('#0').find("p").text() === $('#6').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#0').addClass("win");
      $('#3').addClass("win");
      $('#6').addClass("win");
    }
    if ($('#0').find("p").text() !== '\xa0' && $('#0').find("p").text() === $('#4').find("p").text() && $('#0').find("p").text() === $('#8').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#0').addClass("win");
      $('#4').addClass("win");
      $('#8').addClass("win");
    }
    if ($('#3').find("p").text() !== '\xa0' && $('#3').find("p").text() === $('#4').find("p").text() && $('#3').find("p").text() === $('#5').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#3').addClass("win");
      $('#4').addClass("win");
      $('#5').addClass("win");
    }
    if ($('#6').find("p").text() !== '\xa0' && $('#6').find("p").text() === $('#7').find("p").text() && $('#6').find("p").text() === $('#8').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#6').addClass("win");
      $('#7').addClass("win");
      $('#8').addClass("win");
    }
    if ($('#1').find("p").text() !== '\xa0' && $('#1').find("p").text() === $('#4').find("p").text() && $('#1').find("p").text() === $('#7').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#1').addClass("win");
      $('#4').addClass("win");
      $('#7').addClass("win");
    }
    if ($('#2').find("p").text() !== '\xa0' && $('#2').find("p").text() === $('#5').find("p").text() && $('#2').find("p").text() === $('#8').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#2').addClass("win");
      $('#5').addClass("win");
      $('#8').addClass("win");
    }
    if ($('#2').find("p").text() !== '\xa0' && $('#2').find("p").text() === $('#4').find("p").text() && $('#2').find("p").text() === $('#6').find("p").text()) {
      state.gameOver = true;
      console.log(state.gameOver);
      $('#2').addClass("win");
      $('#4').addClass("win");
      $('#6').addClass("win");
    }

  });
};

function render() {
  $('.board').html(state.addHTML);
}

const state = (function () {
  let gameOver = false;
  let stateXO = false;

  const addHTML = `<div class="row">
  <div class="cell" id="0">
      <p>&nbsp;</p>
  </div>
  <div class="cell" id="1">
      <p>&nbsp;</p>
  </div>
  <div class="cell" id="2">
      <p>&nbsp;</p>
  </div>
</div>
<div class="row">
  <div class="cell" id="3">
      <p>&nbsp;</p>
  </div>
  <div class="cell" id="4">
      <p>&nbsp;</p>
  </div>
  <div class="cell" id="5">
      <p>&nbsp;</p>
  </div>
</div>
<div class="row">
  <div class="cell" id="6">
      <p>&nbsp;</p>
  </div>
  <div class="cell" id="7">
      <p>&nbsp;</p>
  </div>
  <div class="cell" id="8">
      <p>&nbsp;</p>
  </div>
</div>`;


  const addXO = function () {
    let xOrO = '';

    if (state.stateXO) {
      xOrO = 'X';
    }
    if (!state.stateXO) {
      xOrO = 'O';
    }
    return xOrO;

  };


  const newGame = function () {
    this.stateXO = false;
    state.gameOver = false;
  };

  return {
    addHTML,
    stateXO,
    addXO,
    newGame,
    gameOver
  };
}());


$(function () {
  render();
  eventListeners();
});