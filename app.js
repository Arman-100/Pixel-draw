const makePalette = () => {
  const palette = [
    "red",
    "blue",
    "yellow",
    "orange",
    "purple",
    "green",
    "white",
    "black"
  ];

  for (let colorIndex = 0; colorIndex < palette.length; colorIndex++) {
    const nextColor = palette[colorIndex];
    const newButton = $("<button>").css("background-color", nextColor);
    $(".palette").append(newButton);
  }
};

makePalette();

const makeGrid = () => {
  for (let i = 0; i < 64; i++) {
    $(`.grid`).append($("<div class='cell'>"));
  }
};

makeGrid();

//travis's way

let currentColor;

const onPaletteClick = event => {
  if (currentColor) {
    currentColor.classList.toggle("active");
  }
  currentColor = event.target;
  currentColor.classList.toggle("active");
  // let futureColor = currentColor.style.backgroundColor;
  // return futureColor;
};

// $(`.palette button`).click(onPaletteClick);

function onPaletteClick2() {
  $(".palette .active").removeClass("active");
  $(this).addClass("active");
}

$(".palette button").click(onPaletteClick2);

function onGridClick() {
  let activeColor = $(".palette .active").css("backgroundColor");
  let cellColor = $(this).css(`backgroundColor`);

  $(this).css("backgroundColor", activeColor);

  if (cellColor === activeColor) {
    $(this).css("backgroundColor", "");
  } else {
    $(this).css("backgroundColor", activeColor);
  }
}

$(`.grid .cell`).click(onGridClick);

const onClearClick = () => {
  $(`.grid .cell`).css("backgroundColor", "");
};

$(`.clear`).click(onClearClick);

const onFillAllClick = () => {
  let activeColor = $(`.palette .active`).css("backgroundColor");
  $(`.grid .cell`).css("backgroundColor", activeColor);
};

$(`.controls .fill`).click(onFillAllClick);

function onFillEmptyClick() {
  let gridCells = $(".grid .cell");

  let activeColor = $(`.palette .active`).css("backgroundColor");

  for (let i = 0; i < gridCells.length; i++) {
    let nextCell = $(gridCells[i]);

    if (nextCell.css("backgroundColor") === "rgba(0, 0, 0, 0)") {
      nextCell.css("backgroundColor", activeColor);
    }
  }

  // let filteredCell = gridCells.filter(
  //   theCells => theCells.css("backgroundColor") === "rgb(0, 0, 0)"
  // );
  // filteredCell.css("backgroundColor", activeColor);
}

$(`.controls .fill-empty`).click(onFillEmptyClick);
