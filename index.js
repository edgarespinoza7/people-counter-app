let count = 0;
let totalPeople = [];


function increment() {
    count++;
    document.getElementById("count-el").innerText = count;
    
}

function save() {
    totalPeople.push(count);
    document.getElementById("previous-ent").innerText = `Previous entries: ${totalPeople.join(' - ')}`;
    console.log(totalPeople);
    count = 0;
    document.getElementById("count-el").innerText = count;
}




