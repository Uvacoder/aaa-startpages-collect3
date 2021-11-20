const parseEntries = entries => {
  const entriesArr = [];
  let currentRow = 1;

  let currentRowArr = [];

  entries.forEach(entry => {
    const localRow = parseInt(entry.gs$cell.row);

    if (currentRow != localRow) {
      currentRow = localRow;
      entriesArr.push([...currentRowArr]);
      currentRowArr = [];
    }

    currentRowArr.push(entry.content.$t);
  });

  entriesArr.push([...currentRowArr]);
  
  return entriesArr;
};

const $container = document.querySelector('[data-entries]');
const gSheetJSONsrc = 'https://spreadsheets.google.com/feeds/cells/1O36xe8y9oOeYBOr0mvS7NZLDm83hilO0WB9f75CRnJA/1/public/full?alt=json&rnd=' + (1000 * Math.random() + (Date().now))

fetch(gSheetJSONsrc).then((resp) => (resp.json())).then((body) => {
  const entries = [...body.feed.entry];
  const entriesArr = [...parseEntries(entries)];
  entriesArr.shift();
  
  entriesArr.sort((a, b) => (0.5 - Math.random()));

  console.log(entriesArr)
  
  const entriesHTML = entriesArr.reduce((r, d) => (
    r + `<details><summary><strong>[FDI]</strong> ${d[1]}</summary><p>${d[2]}</p>${d.length > 3 ? `<img src="${d[3]}" alt="${d[1]}" />`: '' }</details>`
  ),'')

  $container.innerHTML = entriesHTML;
});

const $cur = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  requestAnimationFrame(() => {
    $cur.style.transform = `translate(${e.pageX}px,${e.pageY}px)`;
  });
});

const $fudikontainer = document.querySelector('[data-fudikontainer]');

const fuddiConfetti = () => {
  const konfetti = (new Array(Math.round(200))).fill('').reduce((r, actuel) => (
    r + `<i class="confetti" style="--rotation: ${-30 + Math.random() * 60}deg; --color: hsl(${Math.random() * 360},100%,70%); --rnd: ${Math.random()}"><span></span></i>`
  ), '');
  
  $fudikontainer.innerHTML = konfetti;
}

fuddiConfetti();
