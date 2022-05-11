const gridContainer = document.querySelector('#grid-container');

    function createGrid(rows, columns) {
      gridContainer.style.setProperty('--grid-rows', rows);
      gridContainer.style.setProperty('--grid-columns', columns);
      for(let i = 0; i < (rows * columns); i++) {
        let square = document.createElement('div');
        gridContainer.appendChild(square).className = 'grid-items';
      }
    }

    //call function
    createGrid(16, 16);

    //hover event 
    const gridItems = document.querySelectorAll('.grid-items')
    gridItems.forEach((gridItem) => {
      gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = 'black';
      });
    })