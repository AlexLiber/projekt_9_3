var str = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(str);

var dinosaur = 'triceratops';
    modifiedText = dinosaur.toUpperCase();
console.log(modifiedText);

var changeDinosaur = str.replace('Velociraptor', modifiedText);
console.log(changeDinosaur);

var halfOfDinosaur = changeDinosaur.length / 2;
console.log(halfOfDinosaur);

var halfOfText = changeDinosaur.slice(0, 72);
console.log(halfOfText);