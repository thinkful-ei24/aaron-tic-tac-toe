'use strict';

const eventListeners = function () {
  $('.cell').on('click', function () {


    let closestP = $(this).find('p');
    let closestPValue = closestP.text();
    if (closestPValue === '\xa0') {
      closestP.html(state.addXO);
      state.stateXO = !state.stateXO;
    }

  });

  $('#new-game').on('click', function () {
    state.newGame();
    render();
    eventListeners();
  });

};

function render() {
  $('.board').html(state.addHTML);
}

const state = (function () {

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
  };

  return {
    addHTML,
    stateXO,
    addXO,
    newGame
  };
}());


$(function () {
  render();
  eventListeners();
});