function makePalette() {
  const PALETTE = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "rebeccapurple",
    "pink",
    "white",
    "black"
  ];

  const paletteElement = $(".palette");

  for (let i = 0; i < PALETTE.length; i++) {
    let button = $("<button>");
    button.css("backgroundColor", PALETTE[i]);
    paletteElement.append(button);
  }

  $(".palette button")
    .first()
    .addClass("active");
}

makePalette();

function makeGrid() {
  const gridElement = $(".grid");

  for (let i = 0; i < 64; i++) {
    let cell = $('<div class="cell"></div>');
    gridElement.append(cell);
  }
}

makeGrid();

function onPaletteClick() {
  $(".palette .active").removeClass("active");
  $(this).addClass("active");
}

$(".palette button").click(onPaletteClick);

function onGridClick() {
  let activeColor = $(".palette .active").css("background-color");
  let cellColor = $(this).css("background-color");

  if (cellColor === activeColor) {
    //3
    $(this).css("background-color", "");
  } else {
    // 2
    $(this).css("background-color", activeColor);
  }
}

$(".grid .cell").click(onGridClick);

function onClearClick() {
  $(".grid .cell").css("backgroundColor", "");
}

$(".controls .clear").click(onClearClick);

function onFillAllClick() {
  let activeColor = $(".palette .active").css("backgroundColor");
  $(".cell").css("backgroundColor", activeColor);
}

$(".fill-all").click(onFillAllClick);

function onFillEmptyClick() {
  let activeColor = $(".palette .active").css("backgroundColor");
  let cells = $(".cell");

  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];

    console.log($(cell).css("background-color"));

    if ($(cell).css("backgroundColor") == "rgba(0, 0, 0, 0)") {
      $(cell).css("backgroundColor", activeColor);
    }
  }
}

$(".fill-empty").click(onFillEmptyClick);
