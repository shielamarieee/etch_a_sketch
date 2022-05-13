const gridContainer = document.querySelector('#grid-container');

    function createGrid(rows, columns) {
      gridContainer.style.setProperty('--grid-rows', rows);
      gridContainer.style.setProperty('--grid-columns', columns);
      for(let i = 0; i < (rows * columns); i++) {
        let square = document.createElement('div');
        gridContainer.appendChild(square).className = 'grid-items';
        //fill color
        square.addEventListener('mouseover', () => {
          square.style.backgroundColor = 'black';
        })
      }
    }

    //call function
    createGrid(16, 16);