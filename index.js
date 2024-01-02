let count = 0;
let countEl = document.getElementById("count-el");
let pastEntriesEl = document.getElementById("pastEntries-el");

function increment() {
    count += 1
    countEl.textContent = count;
}

function save() {
    pastEntriesEl.textContent += count > 0 ? " "+count+" -" : "" ;
    count = 0;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    pastEntriesEl.textContent = count === 0 ? "Past Entries:" : null;
    countEl.textContent = count;
}