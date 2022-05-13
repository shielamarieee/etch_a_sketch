const gridContainer = document.querySelector('#grid-container');

    function createGrid(rows, columns) {
      for(let i = 0; i < (rows * columns); i++) {
        gridContainer.style.setProperty('--grid-rows', rows);
        gridContainer.style.setProperty('--grid-columns', columns);
        let square = document.createElement('div');
        gridContainer.appendChild(square).className = 'grid-item';
        //fill color
        square.addEventListener('mouseover', () => {
          square.style.backgroundColor = 'black';
          if(parseFloat(square.style.opacity)) {
            square.style.opacity = parseFloat(square.style.opacity) + 0.2;
          } else {
            square.style.opacity = 0.2;
          }
        })
      }
    }

    //call function
    createGrid(16, 16);

    //resize grid
    const resizeBtn = document.querySelector('#resize-btn');
    resizeBtn.addEventListener('click', () => {
      //input new number of squares per side
      let userInput = parseInt(prompt('input number from 1 - 100 to generate new size of grid', 16));
      //if cancel button from prompt is clicked
      if(userInput === null) {
        return;
      } else if(userInput < 100 || userInput > 1) {
        removeGrid()
        makeGrid(userInput, userInput);
      }
      //loop prompt til given number within range
      while(userInput > 100 || userInput < 1 || isNaN(userInput)){
        userInput = parseInt(prompt('please input numbers only from 1 - 100', 16))
        if(userInput === null) {
          return;
        } else {
          removeGrid();
          makeGrid(userInput, userInput);
        }
      }
    })

    function removeGrid() {
      const gridItem = document.querySelectorAll('.grid-item');
      gridItem.forEach((item) => {
        gridContainer.removeChild(item);
      })
    }
    