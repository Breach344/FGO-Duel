/*Was adding the new removeMovable() to places around 19725 to speed up code, make 
more readable, and reduce bloat. Next should work on getting the discard to work, deal with the bugging out alert,
 and fix the battle() function so it doesnt activate the alert whenever you move regardless of enemy location*/

/*The code is saying "threeOne" and "fiveFour" and "nineEleven" and "nineSix" and "nineSeven" and "nineEight" and 
"nineTen" dont exist so should be checked*/

/*Currently need to make everything like c8hosen5's Mash section and uncomment discardAlert() to fix bugging alerts*/

/*Alert bug probably fixed but a newly found bug where units cant move to panel 7 is preventing full testing.
Fix that bug next!*/

/*Next try adding missing move to 7 parts like in eightSix. Then make discarding work*/
var power = [];

var power2 = [];

var testDeck = [];

var testDeck2 = [];

var pOneTotal = 0;

var pTwoTotal = 0;

var hand = [];

var hand2 = [];

var partyTotal2 = 0;

var servantP21 = [];

var servantP22 = [];

var servantP23 = [];

var p1Win = 0;
var p2Win = 0;

//var oneUnit1 = [];

//var oneUnit2 = [];

//var oneUnit3 = [];





function powerTotal() {
  let arraySum = 0;
power.forEach(a => arraySum += a);
  
  document.getElementById('power-total').textContent = 'Power total: ' + arraySum;
  
  pOneTotal = arraySum;
}

function powerTotal2() {
  let arraySum = 0;
power2.forEach(a => arraySum += a);
  
  document.getElementById('power-total2').textContent = 'Power total2: ' + arraySum;
  
  pTwoTotal = arraySum;
}


function draw() {
  if(testDeck.length == 0) {
  alert('Player 1 choose a command card from the trash zone to remove from the game');
    
document.querySelectorAll('.trash').forEach(function(card) {
  card.addEventListener('click', function() {
    if(this.id='nr1') {
      trashZone = trashZone.filter(a => {
  return a !== 1});
    }
    this.remove();
    testDeck = trashZone;
    shuffle1();
    trashZone = [];
    document.getElementById('trash-p1').innerHTML = '';
    draw();
  });
});
  }
  
  let top = testDeck[0];
  
  if(top===1) {
    nr1Hand1();
  } 
  if(top===2) {
    nr2Hand1();
  }
  if(top===3) {
    nr3Hand1();
  }
  if(top===4) {
    nr4Hand1();
  }
  if(top===5) {
    nr5Hand1();
  }
  if(top===6) {
    nr6Hand1();
  }
  if(top===7) {
    nr7Hand1();
  }
  if(top===8) {
    nr8Hand1();
  }
  if(top===9) {
    nr9Hand1();
  }
  if(top===10) {
    nr10Hand1();
  }
  if(top===11) {
    nr11Hand1();
  }
  if(top===12) {
    nr12Hand1();
  }
  if(top===13) {
    nr13Hand1();
  }
  if(top===14) {
    nr14Hand1();
  }
  if(top===15) {
    nr15Hand1();
  }
  if(top===16) {
    nr16Hand1();
  }
  if(top===17) {
    nr17Hand1();
  }
  if(top===18) {
    nr18Hand1();
  }
  if(top===19) {
    nr19Hand1();
  }
  if(top===20) {
    nr20Hand1();
  }
  testDeck.shift();
  document.getElementById("test-deck").textContent = testDeck;
}



function draw2() {
  if(testDeck2.length == 0) {
  alert('Player 2 choose a command card from the trash zone to remove from the game');
    
document.querySelectorAll('.trash2').forEach(function(card) {
  card.addEventListener('click', function() {
    if(this.id='n2r1') {
      trashZone2 = trashZone2.filter(a => {
  return a !== 1});
    }
    this.remove();
    testDeck2 = trashZone2;
    shuffle2();
    trashZone2 = [];
    document.getElementById('trash-p2').innerHTML = '';
    draw2();
  });
});
  }
  
  let top = testDeck2[0];
  
  if(top===1) {
    nr1Hand2();
  } 
  if(top===2) {
    nr2Hand2();
  }
  if(top===3) {
    nr3Hand2();
  }
  if(top===4) {
    nr4Hand2();
  }
  if(top===5) {
    nr5Hand2();
  }
  if(top===6) {
    nr6Hand2();
  }
  if(top===7) {
    nr7Hand2();
  }
  if(top===8) {
    nr8Hand2();
  }
  if(top===9) {
    nr9Hand2();
  }
  if(top===10) {
    nr10Hand2();
  }
  if(top===11) {
    nr11Hand2();
  }
  if(top===12) {
    nr12Hand2();
  }
  if(top===13) {
    nr13Hand2();
  }
  if(top===14) {
    nr14Hand2();
  }
  if(top===15) {
    nr15Hand2();
  }
  if(top===16) {
    nr16Hand2();
  }
  if(top===17) {
    nr17Hand2();
  }
  if(top===18) {
    nr18Hand2();
  }
  if(top===19) {
    nr19Hand2();
  }
  if(top===20) {
    nr20Hand2();
  }
  testDeck2.shift();
  document.getElementById("test-deck2").textContent = testDeck2;
}



//Player 1 card 1 section
function nr1Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP11;
  inHand.id="nr1";
  inHand.className="card";
inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII=";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP11 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr1').remove();
      
      nr1Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(1);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP11;       
  inBattle.id="nr1";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII=";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP11 = function() {
    power = power.filter(a => {
  return a !== 1});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP11;
  inHand.id="nr1";
  inHand.className="card"; 
inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII=";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 1 section




//Player 1 card 2 section
function nr2Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP12;
  inHand.id="nr2";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP12 = function () {
    if(power.length <= 2 && battleTime == 1) {
    power.push(2);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP12;       
  inBattle.id="nr2";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,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";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP12 = function() {
    power = power.filter(a => {
  return a !== 2});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP12;
  inHand.id="nr2";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 2 section


//Player 1 card 3 section
function nr3Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP13;
  inHand.id="nr3";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP13 = function () {
    if(power.length <= 2 && battleTime == 1) {
    power.push(3);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP13;       
  inBattle.id="nr3";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,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";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP13 = function() {
    power = power.filter(a => {
  return a !== 3});
    this.remove();
    arts -= 1;
    powerTotal();
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP13;
  inHand.id="nr3";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 3 section


//Player 1 card 4 section
function nr4Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP14;
  inHand.id="nr4";
  inHand.className="card"; 
inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/1200px-Quatre.svg.png";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP14 = function () {
    if(power.length <= 2 && battleTime == 1) {
    power.push(4);
    powerTotal();
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP14;       
  inBattle.id="nr4";
  inBattle.className="card"; 
inBattle.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/1200px-Quatre.svg.png";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP14 = function() {
    power = power.filter(a => {
  return a !== 4});
    this.remove();   
    powerTotal();
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP14;
  inHand.id="nr4";
  inHand.className="card"; 
inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/1200px-Quatre.svg.png";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 4 section


//Player 1 card 5 section
function nr5Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP15;
  inHand.id="nr5";
  inHand.className="card"; 
inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinq.svg/1200px-Cinq.svg.png";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP15 = function () {
    if(power.length <= 2 && battleTime == 1) {
    power.push(5);
    powerTotal();
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP15;       
  inBattle.id="nr5";
  inBattle.className="card"; 
inBattle.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinq.svg/1200px-Cinq.svg.png";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP15 = function() {
    power = power.filter(a => {
  return a !== 5});
    this.remove();   
    powerTotal();
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP15;
  inHand.id="nr5";
  inHand.className="card"; 
inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinq.svg/1200px-Cinq.svg.png";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 5 section



//Player 1 card 6 section
function nr6Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP16;
  inHand.id="nr6";
  inHand.className="card";
inHand.src="data:image/png;base64,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";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP16 = function () {
    /*if(battleTime == 0) {
    document.getElementById('nr6').remove();
      
      nr6Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(6);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP16;       
  inBattle.id="nr6";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,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";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP16 = function() {
    power = power.filter(a => {
  return a !== 6});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP16;
  inHand.id="nr6";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 6 section

//Player 1 card 7 section
function nr7Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP17;
  inHand.id="nr7";
  inHand.className="card";
inHand.src="https://www.thecompliancecenter.com/wp-content/uploads/cm/d/c/dc7_hi.gif";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP17 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr7').remove();
      
      nr7Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(7);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP17;       
  inBattle.id="nr7";
  inBattle.className="card"; 
inBattle.src="https://www.thecompliancecenter.com/wp-content/uploads/cm/d/c/dc7_hi.gif";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP17 = function() {
    power = power.filter(a => {
  return a !== 7});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP17;
  inHand.id="nr7";
  inHand.className="card"; 
inHand.src="https://www.thecompliancecenter.com/wp-content/uploads/cm/d/c/dc7_hi.gif";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 7 section

//Player 1 card 8 section
function nr8Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP18;
  inHand.id="nr8";
  inHand.className="card";
inHand.src="data:image/png;base64,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";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP18 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr8').remove();
      
      nr8Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(8);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP18;       
  inBattle.id="nr8";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,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";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP18 = function() {
    power = power.filter(a => {
  return a !== 8});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP18;
  inHand.id="nr8";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 8 section

//Player 1 card 9 section
function nr9Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP19;
  inHand.id="nr9";
  inHand.className="card";
inHand.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsd6c6Hk9UQn_fDyR1s1_vxPSTHRNGZRvug&usqp=CAU";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP19 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr9').remove();
      
      nr9Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(9);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP19;       
  inBattle.id="nr9";
  inBattle.className="card"; 
inBattle.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsd6c6Hk9UQn_fDyR1s1_vxPSTHRNGZRvug&usqp=CAU";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP19 = function() {
    power = power.filter(a => {
  return a !== 9});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP19;
  inHand.id="nr9";
  inHand.className="card"; 
inHand.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsd6c6Hk9UQn_fDyR1s1_vxPSTHRNGZRvug&usqp=CAU";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 9 section

//Player 1 card 10 section
function nr10Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP110;
  inHand.id="nr10";
  inHand.className="card";
inHand.src="https://www.pngkit.com/png/detail/38-385324_10-number-free-png-image-times-new-roman.png";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP110 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr10').remove();
      
      nr10Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(10);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP110;       
  inBattle.id="nr10";
  inBattle.className="card"; 
inBattle.src="https://www.pngkit.com/png/detail/38-385324_10-number-free-png-image-times-new-roman.png";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP110 = function() {
    power = power.filter(a => {
  return a !== 10});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP110;
  inHand.id="nr10";
  inHand.className="card"; 
inHand.src="https://www.pngkit.com/png/detail/38-385324_10-number-free-png-image-times-new-roman.png";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 10 section

//Player 1 card 11 section
function nr11Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP111;
  inHand.id="nr11";
  inHand.className="card";
inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAeFBMVEX39/cAAAD////8/PyioqIKCgqmpqa0tLT6+vrt7e3x8fH29vaKiorFxcXU1NSzs7O+vr7n5+d7e3vc3NxcXFxkZGRycnKcnJxEREQgICAWFhY9PT1PT09tbW03NzfPz88oKCiOjo5NTU1CQkIcHBwSEhKUlJRmZmZqkutGAAAE+UlEQVR4nO3dbXPaOhAFYLNLY2EH82JomqSE0qbp//+HF+69H0gsy7vSSnTacz52Mqd6jLAlJzOqKgRBEARBEEQUJre4ink7NVftjXG9KK56eJ5dh0zr6bh/um6fs2m9KK59LzQ20upD+y2M9HWW0Ujrj+03MNLh4yAsjdwN2ssb6WEwCEOjWwzbixt5ORyEoZFfbm90Gw/RzkifPe3Fjd9yGunO117YSL98g7Ay8tHbXtbou9/YGV3jby9qHLnOVkb6fnvj2HU2MtL9SHtJI33JaRyub25gpO3YICyM3I+2lzP67+tWRtc+3t44er+xMQ7X+eWN/vWNmdG7vilsdO1rTuPYc7eokX+EBpFqpDrYXsZIu+AgEo3k28qUNga/LclGz664vDHwYDQwBh6M5YyjaywT4zSxgFFATDAKiPmN0xM1xSghZjdO3m6SjBRaPBUyOg4ssdKN41uNckZuPG/J7Iw0l7XnNFL/STaIKKMTfdMzG4UzKdLIzcibjYJGJ3lmxBupk86RfEZehFfhaUYn/SrmNCrmaYSRG9ntOqeRK9FTMdY4tc8oYaQuuCFONLKT3k/zGZlPyjGojNR5f2NS1BgxBoWRneJuncnIrXYiaYyOlk/TZXmNTLX8qaU30mYf1W5odHQcfdlvYKT2FNluZmTqJl5MpRgdVcHXiyWMzOvYz1BgdNRH3GpsjVxpllZqIx3jZ4iVkZY/04hBo2v8v18vauTwW+pUYxXxvDU3VsnEkJHfktvTjazbYmiNlPwxWhgT7zcTRk5vTzdq9vsRxtG/k4ARRhhh/FON/of0rtbsZgPG1vfzn06aC5tlDXCoGyLNbjm0Bhj88Je3nkJ/0JTBWLnrFfnTbt4xnUvZyMjvNM/364bYffjXAsbNZevz89v37dt64y4j+HdsRsaK5o/nyfn4sr9fdefpwR55fuNlk75omc7///8+U2PF1DQVXeqv2ksb/SMzM3rbYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNIvq/E29UXN4aC6jW2Q10mdF+10mI6nOn1+46cbr8EbTfq++hJI41Zl36lHQQnfYbqO8hCJhc1CNYTZbKZBM2kOnf7S2s9UR9ap5+l+2lUzJ1K5e1O2vR7L7KB31p8hDm+du+mJTW+/j2ne91ZeSuq9xQ7jk8TgxDNee4ttnW2fyUVLikdd3QaRbvCa1P7cWxuTzYY+hS617HHmyM5iu7phq/BUaBT2n1m/SZyuvUgcRPrQ0ub1Of4SoFsr+hAbhktsNFq7+k5JVCc2m9NOgt+lfSDolj6IfNzrVGtWbg4Ex9cY3m3VZjfu/wGjw8DAwLsfvCr+J8ZQ8ivXvblS9gFAbDZ4dFkbtvm6YwFytVCfZ5zIazKYmUE/ajfcgbwZbZXpIHEToYzxfQv3m+F0ONpurtl/Xqzoqq3VXha+zo81yHdteLzdWu2TH8Zm+zCntgnoEQRAEQf7C/ANn6XI2Nw3tzwAAAABJRU5ErkJggg==";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP111 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr11').remove();
      
      nr11Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(11);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP111;       
  inBattle.id="nr11";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAeFBMVEX39/cAAAD////8/PyioqIKCgqmpqa0tLT6+vrt7e3x8fH29vaKiorFxcXU1NSzs7O+vr7n5+d7e3vc3NxcXFxkZGRycnKcnJxEREQgICAWFhY9PT1PT09tbW03NzfPz88oKCiOjo5NTU1CQkIcHBwSEhKUlJRmZmZqkutGAAAE+UlEQVR4nO3dbXPaOhAFYLNLY2EH82JomqSE0qbp//+HF+69H0gsy7vSSnTacz52Mqd6jLAlJzOqKgRBEARBEEQUJre4ink7NVftjXG9KK56eJ5dh0zr6bh/um6fs2m9KK59LzQ20upD+y2M9HWW0Ujrj+03MNLh4yAsjdwN2ssb6WEwCEOjWwzbixt5ORyEoZFfbm90Gw/RzkifPe3Fjd9yGunO117YSL98g7Ay8tHbXtbou9/YGV3jby9qHLnOVkb6fnvj2HU2MtL9SHtJI33JaRyub25gpO3YICyM3I+2lzP67+tWRtc+3t44er+xMQ7X+eWN/vWNmdG7vilsdO1rTuPYc7eokX+EBpFqpDrYXsZIu+AgEo3k28qUNga/LclGz664vDHwYDQwBh6M5YyjaywT4zSxgFFATDAKiPmN0xM1xSghZjdO3m6SjBRaPBUyOg4ssdKN41uNckZuPG/J7Iw0l7XnNFL/STaIKKMTfdMzG4UzKdLIzcibjYJGJ3lmxBupk86RfEZehFfhaUYn/SrmNCrmaYSRG9ntOqeRK9FTMdY4tc8oYaQuuCFONLKT3k/zGZlPyjGojNR5f2NS1BgxBoWRneJuncnIrXYiaYyOlk/TZXmNTLX8qaU30mYf1W5odHQcfdlvYKT2FNluZmTqJl5MpRgdVcHXiyWMzOvYz1BgdNRH3GpsjVxpllZqIx3jZ4iVkZY/04hBo2v8v18vauTwW+pUYxXxvDU3VsnEkJHfktvTjazbYmiNlPwxWhgT7zcTRk5vTzdq9vsRxtG/k4ARRhhh/FON/of0rtbsZgPG1vfzn06aC5tlDXCoGyLNbjm0Bhj88Je3nkJ/0JTBWLnrFfnTbt4xnUvZyMjvNM/364bYffjXAsbNZevz89v37dt64y4j+HdsRsaK5o/nyfn4sr9fdefpwR55fuNlk75omc7///8+U2PF1DQVXeqv2ksb/SMzM3rbYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNIvq/E29UXN4aC6jW2Q10mdF+10mI6nOn1+46cbr8EbTfq++hJI41Zl36lHQQnfYbqO8hCJhc1CNYTZbKZBM2kOnf7S2s9UR9ap5+l+2lUzJ1K5e1O2vR7L7KB31p8hDm+du+mJTW+/j2ne91ZeSuq9xQ7jk8TgxDNee4ttnW2fyUVLikdd3QaRbvCa1P7cWxuTzYY+hS617HHmyM5iu7phq/BUaBT2n1m/SZyuvUgcRPrQ0ub1Of4SoFsr+hAbhktsNFq7+k5JVCc2m9NOgt+lfSDolj6IfNzrVGtWbg4Ex9cY3m3VZjfu/wGjw8DAwLsfvCr+J8ZQ8ivXvblS9gFAbDZ4dFkbtvm6YwFytVCfZ5zIazKYmUE/ajfcgbwZbZXpIHEToYzxfQv3m+F0ONpurtl/Xqzoqq3VXha+zo81yHdteLzdWu2TH8Zm+zCntgnoEQRAEQf7C/ANn6XI2Nw3tzwAAAABJRU5ErkJggg==";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP111 = function() {
    power = power.filter(a => {
  return a !== 11});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP111;
  inHand.id="nr11";
  inHand.className="card"; 
inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAeFBMVEX39/cAAAD////8/PyioqIKCgqmpqa0tLT6+vrt7e3x8fH29vaKiorFxcXU1NSzs7O+vr7n5+d7e3vc3NxcXFxkZGRycnKcnJxEREQgICAWFhY9PT1PT09tbW03NzfPz88oKCiOjo5NTU1CQkIcHBwSEhKUlJRmZmZqkutGAAAE+UlEQVR4nO3dbXPaOhAFYLNLY2EH82JomqSE0qbp//+HF+69H0gsy7vSSnTacz52Mqd6jLAlJzOqKgRBEARBEEQUJre4ink7NVftjXG9KK56eJ5dh0zr6bh/um6fs2m9KK59LzQ20upD+y2M9HWW0Ujrj+03MNLh4yAsjdwN2ssb6WEwCEOjWwzbixt5ORyEoZFfbm90Gw/RzkifPe3Fjd9yGunO117YSL98g7Ay8tHbXtbou9/YGV3jby9qHLnOVkb6fnvj2HU2MtL9SHtJI33JaRyub25gpO3YICyM3I+2lzP67+tWRtc+3t44er+xMQ7X+eWN/vWNmdG7vilsdO1rTuPYc7eokX+EBpFqpDrYXsZIu+AgEo3k28qUNga/LclGz664vDHwYDQwBh6M5YyjaywT4zSxgFFATDAKiPmN0xM1xSghZjdO3m6SjBRaPBUyOg4ssdKN41uNckZuPG/J7Iw0l7XnNFL/STaIKKMTfdMzG4UzKdLIzcibjYJGJ3lmxBupk86RfEZehFfhaUYn/SrmNCrmaYSRG9ntOqeRK9FTMdY4tc8oYaQuuCFONLKT3k/zGZlPyjGojNR5f2NS1BgxBoWRneJuncnIrXYiaYyOlk/TZXmNTLX8qaU30mYf1W5odHQcfdlvYKT2FNluZmTqJl5MpRgdVcHXiyWMzOvYz1BgdNRH3GpsjVxpllZqIx3jZ4iVkZY/04hBo2v8v18vauTwW+pUYxXxvDU3VsnEkJHfktvTjazbYmiNlPwxWhgT7zcTRk5vTzdq9vsRxtG/k4ARRhhh/FON/of0rtbsZgPG1vfzn06aC5tlDXCoGyLNbjm0Bhj88Je3nkJ/0JTBWLnrFfnTbt4xnUvZyMjvNM/364bYffjXAsbNZevz89v37dt64y4j+HdsRsaK5o/nyfn4sr9fdefpwR55fuNlk75omc7///8+U2PF1DQVXeqv2ksb/SMzM3rbYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNIvq/E29UXN4aC6jW2Q10mdF+10mI6nOn1+46cbr8EbTfq++hJI41Zl36lHQQnfYbqO8hCJhc1CNYTZbKZBM2kOnf7S2s9UR9ap5+l+2lUzJ1K5e1O2vR7L7KB31p8hDm+du+mJTW+/j2ne91ZeSuq9xQ7jk8TgxDNee4ttnW2fyUVLikdd3QaRbvCa1P7cWxuTzYY+hS617HHmyM5iu7phq/BUaBT2n1m/SZyuvUgcRPrQ0ub1Of4SoFsr+hAbhktsNFq7+k5JVCc2m9NOgt+lfSDolj6IfNzrVGtWbg4Ex9cY3m3VZjfu/wGjw8DAwLsfvCr+J8ZQ8ivXvblS9gFAbDZ4dFkbtvm6YwFytVCfZ5zIazKYmUE/ajfcgbwZbZXpIHEToYzxfQv3m+F0ONpurtl/Xqzoqq3VXha+zo81yHdteLzdWu2TH8Zm+zCntgnoEQRAEQf7C/ANn6XI2Nw3tzwAAAABJRU5ErkJggg==";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 11 section

//Player 1 card 12 section
function nr12Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP112;
  inHand.id="nr12";
  inHand.className="card";
inHand.src="https://www.wackyprint.com/designcodes/0/1/110/11100212.png";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP112 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr12').remove();
      
      nr12Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(12);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP112;       
  inBattle.id="nr12";
  inBattle.className="card"; 
inBattle.src="https://www.wackyprint.com/designcodes/0/1/110/11100212.png";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP112 = function() {
    power = power.filter(a => {
  return a !== 12});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP112;
  inHand.id="nr12";
  inHand.className="card"; 
inHand.src="https://www.wackyprint.com/designcodes/0/1/110/11100212.png";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 12 section

//Player 1 card 13 section
function nr13Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP113;
  inHand.id="nr13";
  inHand.className="card";
inHand.src="https://m.media-amazon.com/images/I/611bVm8huuL.jpg";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP113 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr13').remove();
      
      nr13Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(13);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP113;       
  inBattle.id="nr13";
  inBattle.className="card"; 
inBattle.src="https://m.media-amazon.com/images/I/611bVm8huuL.jpg";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP113 = function() {
    power = power.filter(a => {
  return a !== 13});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP113;
  inHand.id="nr13";
  inHand.className="card"; 
inHand.src="https://m.media-amazon.com/images/I/611bVm8huuL.jpg";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 13 section

//Player 1 card 14 section
function nr14Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP114;
  inHand.id="nr14";
  inHand.className="card";
inHand.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-14-2.jpg?v=1534449017";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP114 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr14').remove();
      
      nr14Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(14);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP114;       
  inBattle.id="nr14";
  inBattle.className="card"; 
inBattle.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-14-2.jpg?v=1534449017";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}


let battleToHandP114 = function() {
    power = power.filter(a => {
  return a !== 14});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP114;
  inHand.id="nr14";
  inHand.className="card"; 
inHand.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-14-2.jpg?v=1534449017";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 14 section

//Player 1 card 15 section
function nr15Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP115;
  inHand.id="nr15";
  inHand.className="card";
inHand.src="https://www.wackyprint.com/previews_store/1/110/number-15-white-black.jpg";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP115 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr15').remove();
      
      nr15Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(15);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP115;       
  inBattle.id="nr15";
  inBattle.className="card"; 
inBattle.src="https://www.wackyprint.com/previews_store/1/110/number-15-white-black.jpg";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP115 = function() {
    power = power.filter(a => {
  return a !== 15});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP115;
  inHand.id="nr15";
  inHand.className="card"; 
inHand.src="https://www.wackyprint.com/previews_store/1/110/number-15-white-black.jpg";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 15 section

//Player 1 card 16 section
function nr16Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP116;
  inHand.id="nr16";
  inHand.className="card";
inHand.src="https://m.media-amazon.com/images/I/611WTQyZnHL._AC_SL1500_.jpg";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP116 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr16').remove();
      
      nr16Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(16);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP116;       
  inBattle.id="nr16";
  inBattle.className="card"; 
inBattle.src="https://m.media-amazon.com/images/I/611WTQyZnHL._AC_SL1500_.jpg";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP116 = function() {
    power = power.filter(a => {
  return a !== 16});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP116;
  inHand.id="nr16";
  inHand.className="card"; 
inHand.src="https://m.media-amazon.com/images/I/611WTQyZnHL._AC_SL1500_.jpg";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 16 section

//Player 1 card 17 section
function nr17Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP117;
  inHand.id="nr17";
  inHand.className="card";
inHand.src="https://www.pngitem.com/pimgs/m/444-4444202_number-cliparts-1-000-black-number-17-hd.png";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP117 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr17').remove();
      
      nr17Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(17);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP117;       
  inBattle.id="nr17";
  inBattle.className="card"; 
inBattle.src="https://www.pngitem.com/pimgs/m/444-4444202_number-cliparts-1-000-black-number-17-hd.png";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP117 = function() {
    power = power.filter(a => {
  return a !== 17});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP117;
  inHand.id="nr17";
  inHand.className="card"; 
inHand.src="https://www.pngitem.com/pimgs/m/444-4444202_number-cliparts-1-000-black-number-17-hd.png";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 17 section

//Player 1 card 18 section
function nr18Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP118;
  inHand.id="nr18";
  inHand.className="card";
inHand.src="http://www.clker.com/cliparts/P/F/w/B/a/k/number-eighteen-hi.png";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP118 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr18').remove();
      
      nr18Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(18);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP118;       
  inBattle.id="nr18";
  inBattle.className="card"; 
inBattle.src="http://www.clker.com/cliparts/P/F/w/B/a/k/number-eighteen-hi.png";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP118 = function() {
    power = power.filter(a => {
  return a !== 18});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP118;
  inHand.id="nr18";
  inHand.className="card"; 
inHand.src="http://www.clker.com/cliparts/P/F/w/B/a/k/number-eighteen-hi.png";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 18 section

//Player 1 card 19 section
function nr19Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP119;
  inHand.id="nr19";
  inHand.className="card";
inHand.src="https://www.pngkit.com/png/detail/160-1607668_number-19-png.png";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP119 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr19').remove();
      
      nr19Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(19);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP119;       
  inBattle.id="nr19";
  inBattle.className="card"; 
inBattle.src="https://www.pngkit.com/png/detail/160-1607668_number-19-png.png";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP119 = function() {
    power = power.filter(a => {
  return a !== 19});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP119;
  inHand.id="nr19";
  inHand.className="card"; 
inHand.src="https://www.pngkit.com/png/detail/160-1607668_number-19-png.png";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 19 section

//Player 1 card 20 section
function nr20Hand1() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP120;
  inHand.id="nr20";
  inHand.className="card";
inHand.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-20-2.jpg?v=1534449013";
   document.getElementById('hand-p1').appendChild(inHand);
}


let handToBattleP120 = function () {
    /*if(battleTime == 0) {
      document.getElementById('nr20').remove();
      
      nr20Trash1();
}*/
  
    if(power.length <= 2 && battleTime == 1) {
    power.push(20);
    powerTotal();
    arts += 1;
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP120;       
  inBattle.id="nr20";
  inBattle.className="card"; 
inBattle.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-20-2.jpg?v=1534449013";
      
   document.getElementById('battle-p1').appendChild(inBattle);
  };
}



let battleToHandP120 = function() {
    power = power.filter(a => {
  return a !== 20});
    this.remove();   
    powerTotal();
    arts -= 1;
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP120;
  inHand.id="nr20";
  inHand.className="card"; 
inHand.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-20-2.jpg?v=1534449013";
  
   document.getElementById('hand-p1').appendChild(inHand);
  };
//End of player 1 card 20 section



//Player 2 card 1 section
function nr1Hand2() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP21;
  inHand.id="nr12";
  inHand.className="card"; 
inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII=";
   document.getElementById('hand-p2').appendChild(inHand);
}


let handToBattleP21 = function () {
    if(power2.length <= 2) {
    power2.push(1);
    powerTotal2();
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP21;       
  inBattle.id="nr12";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII=";
      
   document.getElementById('battle-p2').appendChild(inBattle);
  };
}



let battleToHandP21 = function() {
    power2 = power2.filter(a => {
  return a !== 1});
    this.remove();   
    powerTotal2();
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP21;
  inHand.id="nr12";
  inHand.className="card"; 
inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII=";
  
   document.getElementById('hand-p2').appendChild(inHand);
  };
//End of player 2 card 1 section




//Player 1 card 2 section
function nr2Hand2() {
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP22;
  inHand.id="nr22";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
   document.getElementById('hand-p2').appendChild(inHand);
}


let handToBattleP22 = function () {
    if(power2.length <= 2) {
    power2.push(2);
    powerTotal2();
    this.remove();
    
    let inBattle = document.createElement('img');
  inBattle.onclick=battleToHandP22;       
  inBattle.id="nr22";
  inBattle.className="card"; 
inBattle.src="data:image/png;base64,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";
      
   document.getElementById('battle-p2').appendChild(inBattle);
  };
}



let battleToHandP22 = function() {
    power2 = power2.filter(a => {
  return a !== 2});
    this.remove();   
    powerTotal2();
  
  let inHand= document.createElement('img');
  inHand.onclick=handToBattleP22;
  inHand.id="nr22";
  inHand.className="card"; 
inHand.src="data:image/png;base64,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";
  
   document.getElementById('hand-p2').appendChild(inHand);
  };
//End of player 2 card 2 section


//Player 2 card 3 section
function nr3Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP23;
    inHand.id="nr32";
    inHand.className="card"; 
  inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADCwsKlpaXo6Ojv7+8wMDCzs7OGhob7+/vc3Nz39/ewsLDGxsZjY2O5ubng4OCampp5eXloaGjW1tZLS0uWlpZRUVF8fHynp6e9vb3MzMyOjo6CgoIMDAxCQkI5OTlnZ2dYWFgXFxcoKChwcHAyMjJFRUUdHR0hISE0KZc6AAAH40lEQVR4nO2d6WKbOhCFizEB78EGLwHHeMvy/i943dQ3jUEGzmgZyeX73YBOMdJoNHP49aujo6Ojo6Ojo6Ojo6ODl+A5mczCTbzMoyv5Mt6EL9mwP+Aemwyj4WSTz1dPXj2ndL4Mk4B7tBCD4Wy5eGsQViHdhkPukbcgmMTTV1TbT5nLjFtCDYm/lxH3zcrvc0upMpjkqQpx//MU2yRy1Ivgd64Fu5Bb2DcvGuT9Ibdkgu1pU+h5Zys06lToefMRtz7dCj0v5haoXaH3mTy6Qs+LHl6h98Y645hQ6HmcwVxLha9P6WF6KI5UiWObFS787MevLMjiA0Ui35zaoHAtnAknC4ck1iqM7+7hR0tYItcPtUZh/f/6YItKZJpu7irMG3MwQ3Te4Vk07ihsFzSDc85JtxghQoVF25TLGpPIEt2IFPrt/xyUyJGsEilE/n4KKXzSJaMGgcIUukBTQvUWhiVDoDCHLtCHFEK/DzUIFPawK2wghRs9MmoQKESXLeh3+qpFRR0CheglEughgr8QeaoKz/A1VojClQYRtVQV4m8K9hBNx25VhYTMEZQ1B+IJJVQVEi4yRhS+K9dQT0UhaQCIQs/wwXFFIbbeX9kjCg3PphWFpPvPEIWGdxgVhaSpboQoLNQqaKKskBhzQLOpWgVNlBXi6/0XEaLwWa2EBsoKiZEx9CK+qJXQQFkh8aToGVFoNnVaVki8zABRuFaqoImSwh31OkilykGlgEZKCslrFbK/KNQNvwUlheRJ4Awo/FApoJGSQvLWJgcUml0QbxXScwyxIwoX5OtA+SiF42/mViF9dxo6opBeGQIFNQrH30xP0a2higd1w2/B5OPpLxJ5MKgCUN3wDfL4CpGZ5sg9WBLIalFwD5aEDyg0G3mrAqk+mXMPlgRSe8Jfc0oBqZKacQ+WBNLO4EJzTRVkj29B8TcOkqf55B4sCaRegZiSZWYCKGSsppUA2eKbTXmrAimN4h4rDUCgmxENMtFMuAdLAtlZcI+VBlBK6+aPFFnvudugaADVJm/cY6VRtFfo5r4CqfriHisNYJ6xpwEaAXiEPP0I0gCVJjZbLtwHCLrpR1ucDNsLNF2zpwak3svNiPTUXiBzxzONESDQeIG3CpB30GwBhiKQTP6rgynE3ici0AoTEIgQ6pQ5OvYEgxlSAeWh3XCMjIJhFi4XH5g8z9tyD7yGQfCc9cbxcr5fAetCCbMFsxhQKdcdUqtfQeTo+g6WbwilFUa2x9qSCuf2L4JSCiP79ckofHckp0ZUmG5ceHxfEBS+RT2rl4cSmMKn3AkL0xvQZ5jO455NtpfN0N7DNH955PfwynH94sTrKLfiv9voRltCOmrbbSx/kgoib+9s9ZGoCoWeVxi3wmiPGoWXldJajSp2wH/YWRoLBEnWG/vL6DxNT7Jm32fbt4oXBqNgmPQ2+Rk4tv+JUwcz/dkWc8D6wrVSmtEMdsA8ORPNfTPbgRqtXhzFJKAjv1Mv45UMs8C0OT98F8zJ1MWnCFV5O9pugVkLujejXhghIU/BPVoSkMuQzcdt94H8WxxcFn/9C32yUM/FknuwJCAXHifnU6gnwbV9xhWkhsHNh4iYY7i5YkCdpA5kNQQgyTnznskqQCKbgnuwNJA10f5TDRHIXOOm8cA/8DNFUlOWn0vdAfFts/Y0oxbEL4pkWcwOks8w7XutCECho616yLGNmysiUgLuZOoUmkzdDE2R4NvJTijIms7NfkQkw092LWYFaex2sy0Y6Wdzc0GEct/cgyUBHUNxD5bE4yt8/F/p48800Mef9A6lf4Oyy0Jn+sruKuT2XspyJhYZCt8eoyjbyCAHUJodFG8tSZTlTJAW9kLVTcW839xMWRCM7ICnqm4qpuQMpOooCPmUh+bPsZSOGFSZ4wACdef1S9WhimoHoLoazVV889u7KXIFgBZ8zT6f5YpCNVeFPoWo+Ri4nBRTU6c0F0oRo/sLz+VmCjWvPWK9oPvLVmWFStzuA0CgdjeCSmJTxUWhj7HoTupX5gQVtbtIRKP9886VTYCKHDvyCLXXDFXOMhVEidDmULvFYHU08teEvIfkb9dAVrmldIhhWSl0Nb6StoOHOjL1NyVU037Slv6IwEJeQROC1K3kFaGY1ID5iSD8kFyCEYEmUqWCaUEujEIyNEYOuAWF51LF11BIaibbXb2tlD8l1IhoxgJMcGOJ8nJopTDkzC64Mz1xAh3ImGrQE9yZHGdgL6GpOn1BdwQ1rzBAvEzNdT2JKtCIBzRYc76xJlLR5Ec6oEH8kj2ZD9aiiPLvlAMa6FzbaCGU8JMGeLgIfQnYbP262PThE9M4QjosLhxNNgPdS94e/fajgLYTvzHashbdH8e8XQK8BxucmO3Jq611PcaNW6kZbC38YbjDomm3U8Q1C1e2RuVdLmi6Ia+NC9Q0zio/rFHmA1+W+cvesD6gaqKYbvN4Mw5/W0Yt3pv/vRhzC/034EImCYfJAHSKIgnPlzmh6iU5mBorMFcZCdg6uKppfS1M+Xp/sMQDkQOnoxC466Gw53VM0q4w53aGCGTNHmtZWWFbdom/zvQvc9Sw87kf308GyXiLFBQ2Mh3bJO+bIBlHB8w9T0S6tNwCatDPNtGe5k9arMcOec0NnrMwjqZpq4d6Omz9iZstvV8E/WTSC/14ma/P58X0yuK8zmM/nCR9N40ROjj4D9TfZshOaHJ9AAAAAElFTkSuQmCC";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP23 = function () {
      if(power2.length <= 2) {
      power2.push(3);
      powerTotal2();
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP23;       
    inBattle.id="nr32";
    inBattle.className="card"; 
  inBattle.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADCwsKlpaXo6Ojv7+8wMDCzs7OGhob7+/vc3Nz39/ewsLDGxsZjY2O5ubng4OCampp5eXloaGjW1tZLS0uWlpZRUVF8fHynp6e9vb3MzMyOjo6CgoIMDAxCQkI5OTlnZ2dYWFgXFxcoKChwcHAyMjJFRUUdHR0hISE0KZc6AAAH40lEQVR4nO2d6WKbOhCFizEB78EGLwHHeMvy/i943dQ3jUEGzmgZyeX73YBOMdJoNHP49aujo6Ojo6Ojo6Ojo6ODl+A5mczCTbzMoyv5Mt6EL9mwP+Aemwyj4WSTz1dPXj2ndL4Mk4B7tBCD4Wy5eGsQViHdhkPukbcgmMTTV1TbT5nLjFtCDYm/lxH3zcrvc0upMpjkqQpx//MU2yRy1Ivgd64Fu5Bb2DcvGuT9Ibdkgu1pU+h5Zys06lToefMRtz7dCj0v5haoXaH3mTy6Qs+LHl6h98Y645hQ6HmcwVxLha9P6WF6KI5UiWObFS787MevLMjiA0Ui35zaoHAtnAknC4ck1iqM7+7hR0tYItcPtUZh/f/6YItKZJpu7irMG3MwQ3Te4Vk07ihsFzSDc85JtxghQoVF25TLGpPIEt2IFPrt/xyUyJGsEilE/n4KKXzSJaMGgcIUukBTQvUWhiVDoDCHLtCHFEK/DzUIFPawK2wghRs9MmoQKESXLeh3+qpFRR0CheglEughgr8QeaoKz/A1VojClQYRtVQV4m8K9hBNx25VhYTMEZQ1B+IJJVQVEi4yRhS+K9dQT0UhaQCIQs/wwXFFIbbeX9kjCg3PphWFpPvPEIWGdxgVhaSpboQoLNQqaKKskBhzQLOpWgVNlBXi6/0XEaLwWa2EBsoKiZEx9CK+qJXQQFkh8aToGVFoNnVaVki8zABRuFaqoImSwh31OkilykGlgEZKCslrFbK/KNQNvwUlheRJ4Awo/FApoJGSQvLWJgcUml0QbxXScwyxIwoX5OtA+SiF42/mViF9dxo6opBeGQIFNQrH30xP0a2higd1w2/B5OPpLxJ5MKgCUN3wDfL4CpGZ5sg9WBLIalFwD5aEDyg0G3mrAqk+mXMPlgRSe8Jfc0oBqZKacQ+WBNLO4EJzTRVkj29B8TcOkqf55B4sCaRegZiSZWYCKGSsppUA2eKbTXmrAimN4h4rDUCgmxENMtFMuAdLAtlZcI+VBlBK6+aPFFnvudugaADVJm/cY6VRtFfo5r4CqfriHisNYJ6xpwEaAXiEPP0I0gCVJjZbLtwHCLrpR1ucDNsLNF2zpwak3svNiPTUXiBzxzONESDQeIG3CpB30GwBhiKQTP6rgynE3ici0AoTEIgQ6pQ5OvYEgxlSAeWh3XCMjIJhFi4XH5g8z9tyD7yGQfCc9cbxcr5fAetCCbMFsxhQKdcdUqtfQeTo+g6WbwilFUa2x9qSCuf2L4JSCiP79ckofHckp0ZUmG5ceHxfEBS+RT2rl4cSmMKn3AkL0xvQZ5jO455NtpfN0N7DNH955PfwynH94sTrKLfiv9voRltCOmrbbSx/kgoib+9s9ZGoCoWeVxi3wmiPGoWXldJajSp2wH/YWRoLBEnWG/vL6DxNT7Jm32fbt4oXBqNgmPQ2+Rk4tv+JUwcz/dkWc8D6wrVSmtEMdsA8ORPNfTPbgRqtXhzFJKAjv1Mv45UMs8C0OT98F8zJ1MWnCFV5O9pugVkLujejXhghIU/BPVoSkMuQzcdt94H8WxxcFn/9C32yUM/FknuwJCAXHifnU6gnwbV9xhWkhsHNh4iYY7i5YkCdpA5kNQQgyTnznskqQCKbgnuwNJA10f5TDRHIXOOm8cA/8DNFUlOWn0vdAfFts/Y0oxbEL4pkWcwOks8w7XutCECho616yLGNmysiUgLuZOoUmkzdDE2R4NvJTijIms7NfkQkw092LWYFaex2sy0Y6Wdzc0GEct/cgyUBHUNxD5bE4yt8/F/p48800Mef9A6lf4Oyy0Jn+sruKuT2XspyJhYZCt8eoyjbyCAHUJodFG8tSZTlTJAW9kLVTcW839xMWRCM7ICnqm4qpuQMpOooCPmUh+bPsZSOGFSZ4wACdef1S9WhimoHoLoazVV889u7KXIFgBZ8zT6f5YpCNVeFPoWo+Ri4nBRTU6c0F0oRo/sLz+VmCjWvPWK9oPvLVmWFStzuA0CgdjeCSmJTxUWhj7HoTupX5gQVtbtIRKP9886VTYCKHDvyCLXXDFXOMhVEidDmULvFYHU08teEvIfkb9dAVrmldIhhWSl0Nb6StoOHOjL1NyVU037Slv6IwEJeQROC1K3kFaGY1ID5iSD8kFyCEYEmUqWCaUEujEIyNEYOuAWF51LF11BIaibbXb2tlD8l1IhoxgJMcGOJ8nJopTDkzC64Mz1xAh3ImGrQE9yZHGdgL6GpOn1BdwQ1rzBAvEzNdT2JKtCIBzRYc76xJlLR5Ec6oEH8kj2ZD9aiiPLvlAMa6FzbaCGU8JMGeLgIfQnYbP262PThE9M4QjosLhxNNgPdS94e/fajgLYTvzHashbdH8e8XQK8BxucmO3Jq611PcaNW6kZbC38YbjDomm3U8Q1C1e2RuVdLmi6Ia+NC9Q0zio/rFHmA1+W+cvesD6gaqKYbvN4Mw5/W0Yt3pv/vRhzC/034EImCYfJAHSKIgnPlzmh6iU5mBorMFcZCdg6uKppfS1M+Xp/sMQDkQOnoxC466Gw53VM0q4w53aGCGTNHmtZWWFbdom/zvQvc9Sw87kf308GyXiLFBQ2Mh3bJO+bIBlHB8w9T0S6tNwCatDPNtGe5k9arMcOec0NnrMwjqZpq4d6Omz9iZstvV8E/WTSC/14ma/P58X0yuK8zmM/nCR9N40ROjj4D9TfZshOaHJ9AAAAAElFTkSuQmCC";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP23 = function() {
      power2 = power2.filter(a => {
    return a !== 3});
      this.remove();   
      powerTotal2();
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP23;
    inHand.id="nr32";
    inHand.className="card"; 
  inHand.src="data:image/png;base64,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";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 3 section
  
  
  //Player 2 card 4 section
  function nr4Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP24;
    inHand.id="nr42";
    inHand.className="card"; 
  inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/1200px-Quatre.svg.png";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP24 = function () {
      if(power2.length <= 2) {
      power2.push(4);
      powerTotal2();
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP24;       
    inBattle.id="nr42";
    inBattle.className="card"; 
  inBattle.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/1200px-Quatre.svg.png";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP24 = function() {
      power2 = power2.filter(a => {
    return a !== 4});
      this.remove();   
      powerTotal2();
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP24;
    inHand.id="nr42";
    inHand.className="card"; 
  inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/1200px-Quatre.svg.png";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 4 section
  
  
  //Player 2 card 5 section
  function nr5Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP25;
    inHand.id="nr52";
    inHand.className="card"; 
  inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinq.svg/1200px-Cinq.svg.png";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP25 = function () {
      if(power2.length <= 2) {
      power2.push(5);
      powerTotal2();
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP25;       
    inBattle.id="nr52";
    inBattle.className="card"; 
  inBattle.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinq.svg/1200px-Cinq.svg.png";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP25 = function() {
      power2 = power2.filter(a => {
    return a !== 5});
      this.remove();   
      powerTotal2();
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP25;
    inHand.id="nr52";
    inHand.className="card"; 
  inHand.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinq.svg/1200px-Cinq.svg.png";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 5 section
  
  //Player 2 card 6 section
  function nr6Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP26;
    inHand.id="n2r6";
    inHand.className="card";
  inHand.src="data:image/png;base64,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";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP26 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r6').remove();
        
        nr6Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(6);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP26;       
    inBattle.id="n2r6";
    inBattle.className="card"; 
  inBattle.src="data:image/png;base64,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";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP26 = function() {
      power2 = power2.filter(a => {
    return a !== 6});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP26;
    inHand.id="n2r6";
    inHand.className="card"; 
  inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAAflBMVEX///8AAADw8PCtra3R0dHo6OiwsLD6+vqYmJhtbW3r6+vY2Njd3d3l5eVmZmbZ2dm5ublfX1/Ly8s/Pz+Kiop5eXlPT08qKirCwsI3NzcYGBi1tbWUlJRWVlbMzMyDg4MgICBGRkahoaEQEBBKSkp1dXUvLy86OjokJCQTExPMKNL6AAAIrUlEQVR4nO2d53rqOhBFMZAYQgm9BUI/5Lz/C96Ykqo9kqUtm3O/Wb8TabDl0VSpUlEURVEURVEURVEURVEURVEURVEU5d5Jq++kZUuRk9asse7P98kHi2F3tBt0ypbLynPtuEkgk9Hsbt9E9bGLBf/g0GiXLehvqrWJg+gX5runssX9Rr3pLPqFbr1skT/onXLKnrEdlC32md6bh+xn+Z/LFr1Sn3vKnnGslip7Ne96/0mvROEfA2V/p1nWBpD2w4VPkk056r/FkD2jjNWzYwmfJI3ChR/zhE+SdcHCr5jCJ8m4SNnTIVf4Qp9+GrJDAQpb+zGET5KXgqR3XTZvw8lqMpzu7X95phirx2GPmo5rrU8TvtqqjacO4hex665tQpx2Jge2vbT+gH584WsWEZot+K8Dm/cVfek/y/N35biBzZyObDCn4uRTu7snv7pmXOnFL3bkMsLTVhoiqrcr2vOufqpkIW0jCv8kzDt3D3JI1uksnvTCulnlGecFj3OKJXtlhift5htJED9anOQvnDK3rmjAoSYxJBdn9Ngk8SJ84Ev+ThXO56Mo8GhOejc3UNEtvHZIuPT3bMEzsLb0jGhAO/uVK/gZ+OgfPQesowEj+Ljw0efUlV/YghEXRLGvjJD0/i7FAA1Jd7KgbRmysyN3ZUcT+woybP3XTQXbO/QNC3kVQfknqPPJDi7SD8uwYdGGS44qH82zhG4saMeqUYS+gb7Z0FnQ0uFq/J55knDFfDAPfCDI/AkIGIe/YKR1CDJ/gBZO+Mgo/cKMjICPixH1/TnmfnNajUcNpvRAsTGmyNbk2/zQXTd2vdf2Q4RoFFg4lMjRQyd28RFwxmOY4REwB403ZYvliNkUjON+0umYFw4OdN8V5tjlpmyxHDFXgRzLFssR87IvszIlB8Adv6+yOIjZvvxTtliOmIMJRZdF+GLO8/0jy/6XFXjh/kuKz4C9qmyxHDF/tDGTY0yW//RHa67q5oYs4mEupr+fEmgZ80fr4MFVn2e75brZX636zfVy12uVsDu3fVROOlgaXeHDaFZs3bHZK5wL/9FubM2/+MJ0VOCqM4eLoEPesZcQJcl+XVTtrjlbBbzCmXPvxrYYS8McAzQpzHQn9Pr8ZkFPkBgwJ/cN6R6PqmTfZKM75nl/fXhC1YSAQylVEMCx+lFK0Pau6z1GDaSBGrrvc5pNIUdiNv6AlOrXP3kILKiOaPDZYzlCxZEj22j7r7kkZ/j5B0Gr5kassJzZJf+sQQvtV7oSae8yZzo/EuS0Bog4/oJZvJuZAzJ+PkTZec0J/ms61b0j1YEYrQ8L40wXI43SKvZJhKcvPCdqx1IGvXwd5Nuyx0TsFbvBToSBOoKaUNd0Y3OadJvHZv8wxzWoPyFXYj6YZ3kUqinfmR5rz1/2z7Ra33WdfsKUa7OBMOCL0PUzb5hDnK2Rww/gNg+AiMIM1vQepYI4B8eR6rAA6VHXz9hmb7WtmzNz6cOCTxN9l6j4zNJBzyyos2qWL7haWpZ2LeLacTfeJ+5GuuWR8PQOqOj6Ta60/5MYseL5Wq7S593kt9JgtGitY6Ajv2ct6R6a0nc7LsEnKiOpflZGz0l6r5iG1GDMqsZ0kd7TJ5Uaz0hBBls3ahJQZPSKxyT5WfZnn6vF7TuwHyF5K0r6kJeM1T4nPGjVmEGBGGxFcUqXbLtVwLrJwLEsirlgkz5QMwPXLSEtHYuVFvyCYVyCovIt5mCwXgaeJ6lbTz7fh2CQwIgWw1oAnuEVQuAaLk2GkyJKLyXMnUGDM3QmXJcZlMAj+m4ZvYaSKcVx/6FeIGh86eSKof3fQ2ZgpHIF6UkV7CiDwcimCNE7UqIVpe0YD0fw/kkuBFr4jLN0cGaKVYiMFANjfGwF0s4ZQhMQhsb+T2Bv6idbMAFhZeLjK2gZVtD8yrB0sHNFq+1Ar5dQu4Ydf1phHIpbEGxAbKbRStiRmUl4udhUoMVKkcJnHGIEpacV1aDIAqNuBIYbadKjA9gY0sPtipbiQJ8WQ3pY+0R79jGlhxEd2leLpGd8tTCqQNOYaAZGzQVUmbTdCukcygTm+iJiOQrarSjSo7sQaFlhJD3lw0JWJq2ODNk5FJWMHk3QsT9fATqZc3gUqiOiRNIygH3PCbhUUFEHa7MFmVtS5zf6bFnFw2B40neFvipS/SRamaRTPtFOTgoqRN2sKni/4iz82Of/oIXP2W3B6LQGXpRy5pQBgcFpp5SgvCQlMxbTPr6AvEPG0kHLnledhkwdRhETuN6ItNNmwKBO+ANCiTFalLSCjYXwDQu5zcwuIDTH3+CRQVso9XRSmPgMbVdA5je3/w0VrIcWMW3BuNzeTxgID4vioxDmlCT2DST9PkjtoNvg2N1LMAMUskJh1Rv7JHBcxeR/+i8MFfEvDoHRWP81Cofk92vjJIpvERaMkMa4fQDf0Omn9HHxTIybH4RCI583nf5Bo7HV5QWUV0284sm4gj3OpRtSe1tuFYfXYaw7N6S+yJwRAOGa22gHREjNLrmyq0JnbryLfsTqTHdbv7oVhol4wBGuGHln5ZiHq0sXpUU92EU+tsLJ4BQPYIh7DBs2d86crJ9cC6r5M3EuavnA1rq3EuXvWK7Ujn6gDi43urJ9QSZ/3XYdeOSLxTIcWvmbhnPF2kt5zSTEbIyE0zEKp3Wt3jn/hvSpPWv0URz6K8WcBpfj8JC96zWSSXHnK1NP4LgR8Ua0H5Dvrs0o8qRW0rE55QhvsRnyU9yyueDQP+lO8Qei0677TqZlHGudkr7dAnZYI5TVE/+wQEQnWPNPIluVMm5t83f44C+kAbrTemhKAVQ9D5Cy3DJcGFWP598s6mhYB9LHXAc1Lpb3dnOBg/txe+xF2wVudHbWDWwznhVxpbovrd0RhdyG616p2t2VzqC2XHcP87fNYnG+/mn5+HonGkZRFEVRFEVRFEVRFEVRFEVRFEVRlP8N/wHUz2cmVZ4u0QAAAABJRU5ErkJggg==";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 6 section
  
  //Player 2 card 7 section
  function nr7Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP27;
    inHand.id="n2r7";
    inHand.className="card";
  inHand.src="https://www.thecompliancecenter.com/wp-content/uploads/cm/d/c/dc7_hi.gif";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP27 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r7').remove();
        
        nr7Trash2();
  }
    
      if(power.length <= 2 && battleTime == 1) {
      power2.push(7);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP27;       
    inBattle.id="n2r7";
    inBattle.className="card"; 
  inBattle.src="https://www.thecompliancecenter.com/wp-content/uploads/cm/d/c/dc7_hi.gif";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP27 = function() {
      power2 = power2.filter(a => {
    return a !== 7});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP27;
    inHand.id="n2r7";
    inHand.className="card"; 
  inHand.src="https://www.thecompliancecenter.com/wp-content/uploads/cm/d/c/dc7_hi.gif";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 7 section
  
  //Player 2 card 8 section
  function nr8Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP28;
    inHand.id="n2r8";
    inHand.className="card";
  inHand.src="data:image/png;base64,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";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP28 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r8').remove();
        
        nr8Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(8);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP28;       
    inBattle.id="n2r8";
    inBattle.className="card"; 
  inBattle.src="data:image/png;base64,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";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP28 = function() {
      power2 = power2.filter(a => {
    return a !== 8});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP28;
    inHand.id="n2r8";
    inHand.className="card"; 
  inHand.src="data:image/png;base64,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";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 8 section
  
  //Player 2 card 9 section
  function nr9Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP29;
    inHand.id="n2r9";
    inHand.className="card";
  inHand.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsd6c6Hk9UQn_fDyR1s1_vxPSTHRNGZRvug&usqp=CAU";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP29 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r9').remove();
        
        nr9Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(9);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP29;       
    inBattle.id="n2r9";
    inBattle.className="card"; 
  inBattle.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsd6c6Hk9UQn_fDyR1s1_vxPSTHRNGZRvug&usqp=CAU";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP29 = function() {
      power2 = power2.filter(a => {
    return a !== 9});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP29;
    inHand.id="n2r9";
    inHand.className="card"; 
  inHand.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsd6c6Hk9UQn_fDyR1s1_vxPSTHRNGZRvug&usqp=CAU";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 9 section
  
  //Player 2 card 10 section
  function nr10Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP210;
    inHand.id="n2r10";
    inHand.className="card";
  inHand.src="https://www.pngkit.com/png/detail/38-385324_10-number-free-png-image-times-new-roman.png";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP210 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r10').remove();
        
        nr10Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(10);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP210;       
    inBattle.id="n2r10";
    inBattle.className="card"; 
  inBattle.src="https://www.pngkit.com/png/detail/38-385324_10-number-free-png-image-times-new-roman.png";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP210 = function() {
      power2 = power2.filter(a => {
    return a !== 10});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP210;
    inHand.id="n2r10";
    inHand.className="card"; 
  inHand.src="https://www.pngkit.com/png/detail/38-385324_10-number-free-png-image-times-new-roman.png";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 10 section
  
  //Player 1 card 11 section
  function nr11Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP211;
    inHand.id="n2r1";
    inHand.className="card";
  inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAeFBMVEX39/cAAAD////8/PyioqIKCgqmpqa0tLT6+vrt7e3x8fH29vaKiorFxcXU1NSzs7O+vr7n5+d7e3vc3NxcXFxkZGRycnKcnJxEREQgICAWFhY9PT1PT09tbW03NzfPz88oKCiOjo5NTU1CQkIcHBwSEhKUlJRmZmZqkutGAAAE+UlEQVR4nO3dbXPaOhAFYLNLY2EH82JomqSE0qbp//+HF+69H0gsy7vSSnTacz52Mqd6jLAlJzOqKgRBEARBEEQUJre4ink7NVftjXG9KK56eJ5dh0zr6bh/um6fs2m9KK59LzQ20upD+y2M9HWW0Ujrj+03MNLh4yAsjdwN2ssb6WEwCEOjWwzbixt5ORyEoZFfbm90Gw/RzkifPe3Fjd9yGunO117YSL98g7Ay8tHbXtbou9/YGV3jby9qHLnOVkb6fnvj2HU2MtL9SHtJI33JaRyub25gpO3YICyM3I+2lzP67+tWRtc+3t44er+xMQ7X+eWN/vWNmdG7vilsdO1rTuPYc7eokX+EBpFqpDrYXsZIu+AgEo3k28qUNga/LclGz664vDHwYDQwBh6M5YyjaywT4zSxgFFATDAKiPmN0xM1xSghZjdO3m6SjBRaPBUyOg4ssdKN41uNckZuPG/J7Iw0l7XnNFL/STaIKKMTfdMzG4UzKdLIzcibjYJGJ3lmxBupk86RfEZehFfhaUYn/SrmNCrmaYSRG9ntOqeRK9FTMdY4tc8oYaQuuCFONLKT3k/zGZlPyjGojNR5f2NS1BgxBoWRneJuncnIrXYiaYyOlk/TZXmNTLX8qaU30mYf1W5odHQcfdlvYKT2FNluZmTqJl5MpRgdVcHXiyWMzOvYz1BgdNRH3GpsjVxpllZqIx3jZ4iVkZY/04hBo2v8v18vauTwW+pUYxXxvDU3VsnEkJHfktvTjazbYmiNlPwxWhgT7zcTRk5vTzdq9vsRxtG/k4ARRhhh/FON/of0rtbsZgPG1vfzn06aC5tlDXCoGyLNbjm0Bhj88Je3nkJ/0JTBWLnrFfnTbt4xnUvZyMjvNM/364bYffjXAsbNZevz89v37dt64y4j+HdsRsaK5o/nyfn4sr9fdefpwR55fuNlk75omc7///8+U2PF1DQVXeqv2ksb/SMzM3rbYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNIvq/E29UXN4aC6jW2Q10mdF+10mI6nOn1+46cbr8EbTfq++hJI41Zl36lHQQnfYbqO8hCJhc1CNYTZbKZBM2kOnf7S2s9UR9ap5+l+2lUzJ1K5e1O2vR7L7KB31p8hDm+du+mJTW+/j2ne91ZeSuq9xQ7jk8TgxDNee4ttnW2fyUVLikdd3QaRbvCa1P7cWxuTzYY+hS617HHmyM5iu7phq/BUaBT2n1m/SZyuvUgcRPrQ0ub1Of4SoFsr+hAbhktsNFq7+k5JVCc2m9NOgt+lfSDolj6IfNzrVGtWbg4Ex9cY3m3VZjfu/wGjw8DAwLsfvCr+J8ZQ8ivXvblS9gFAbDZ4dFkbtvm6YwFytVCfZ5zIazKYmUE/ajfcgbwZbZXpIHEToYzxfQv3m+F0ONpurtl/Xqzoqq3VXha+zo81yHdteLzdWu2TH8Zm+zCntgnoEQRAEQf7C/ANn6XI2Nw3tzwAAAABJRU5ErkJggg==";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP211 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r11').remove();
        
        nr21Trash1();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(11);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP211;       
    inBattle.id="n2r11";
    inBattle.className="card"; 
  inBattle.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAeFBMVEX39/cAAAD////8/PyioqIKCgqmpqa0tLT6+vrt7e3x8fH29vaKiorFxcXU1NSzs7O+vr7n5+d7e3vc3NxcXFxkZGRycnKcnJxEREQgICAWFhY9PT1PT09tbW03NzfPz88oKCiOjo5NTU1CQkIcHBwSEhKUlJRmZmZqkutGAAAE+UlEQVR4nO3dbXPaOhAFYLNLY2EH82JomqSE0qbp//+HF+69H0gsy7vSSnTacz52Mqd6jLAlJzOqKgRBEARBEEQUJre4ink7NVftjXG9KK56eJ5dh0zr6bh/um6fs2m9KK59LzQ20upD+y2M9HWW0Ujrj+03MNLh4yAsjdwN2ssb6WEwCEOjWwzbixt5ORyEoZFfbm90Gw/RzkifPe3Fjd9yGunO117YSL98g7Ay8tHbXtbou9/YGV3jby9qHLnOVkb6fnvj2HU2MtL9SHtJI33JaRyub25gpO3YICyM3I+2lzP67+tWRtc+3t44er+xMQ7X+eWN/vWNmdG7vilsdO1rTuPYc7eokX+EBpFqpDrYXsZIu+AgEo3k28qUNga/LclGz664vDHwYDQwBh6M5YyjaywT4zSxgFFATDAKiPmN0xM1xSghZjdO3m6SjBRaPBUyOg4ssdKN41uNckZuPG/J7Iw0l7XnNFL/STaIKKMTfdMzG4UzKdLIzcibjYJGJ3lmxBupk86RfEZehFfhaUYn/SrmNCrmaYSRG9ntOqeRK9FTMdY4tc8oYaQuuCFONLKT3k/zGZlPyjGojNR5f2NS1BgxBoWRneJuncnIrXYiaYyOlk/TZXmNTLX8qaU30mYf1W5odHQcfdlvYKT2FNluZmTqJl5MpRgdVcHXiyWMzOvYz1BgdNRH3GpsjVxpllZqIx3jZ4iVkZY/04hBo2v8v18vauTwW+pUYxXxvDU3VsnEkJHfktvTjazbYmiNlPwxWhgT7zcTRk5vTzdq9vsRxtG/k4ARRhhh/FON/of0rtbsZgPG1vfzn06aC5tlDXCoGyLNbjm0Bhj88Je3nkJ/0JTBWLnrFfnTbt4xnUvZyMjvNM/364bYffjXAsbNZevz89v37dt64y4j+HdsRsaK5o/nyfn4sr9fdefpwR55fuNlk75omc7///8+U2PF1DQVXeqv2ksb/SMzM3rbYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNIvq/E29UXN4aC6jW2Q10mdF+10mI6nOn1+46cbr8EbTfq++hJI41Zl36lHQQnfYbqO8hCJhc1CNYTZbKZBM2kOnf7S2s9UR9ap5+l+2lUzJ1K5e1O2vR7L7KB31p8hDm+du+mJTW+/j2ne91ZeSuq9xQ7jk8TgxDNee4ttnW2fyUVLikdd3QaRbvCa1P7cWxuTzYY+hS617HHmyM5iu7phq/BUaBT2n1m/SZyuvUgcRPrQ0ub1Of4SoFsr+hAbhktsNFq7+k5JVCc2m9NOgt+lfSDolj6IfNzrVGtWbg4Ex9cY3m3VZjfu/wGjw8DAwLsfvCr+J8ZQ8ivXvblS9gFAbDZ4dFkbtvm6YwFytVCfZ5zIazKYmUE/ajfcgbwZbZXpIHEToYzxfQv3m+F0ONpurtl/Xqzoqq3VXha+zo81yHdteLzdWu2TH8Zm+zCntgnoEQRAEQf7C/ANn6XI2Nw3tzwAAAABJRU5ErkJggg==";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP211 = function() {
      power2 = power2.filter(a => {
    return a !== 11});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP211;
    inHand.id="n2r11";
    inHand.className="card"; 
  inHand.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAeFBMVEX39/cAAAD////8/PyioqIKCgqmpqa0tLT6+vrt7e3x8fH29vaKiorFxcXU1NSzs7O+vr7n5+d7e3vc3NxcXFxkZGRycnKcnJxEREQgICAWFhY9PT1PT09tbW03NzfPz88oKCiOjo5NTU1CQkIcHBwSEhKUlJRmZmZqkutGAAAE+UlEQVR4nO3dbXPaOhAFYLNLY2EH82JomqSE0qbp//+HF+69H0gsy7vSSnTacz52Mqd6jLAlJzOqKgRBEARBEEQUJre4ink7NVftjXG9KK56eJ5dh0zr6bh/um6fs2m9KK59LzQ20upD+y2M9HWW0Ujrj+03MNLh4yAsjdwN2ssb6WEwCEOjWwzbixt5ORyEoZFfbm90Gw/RzkifPe3Fjd9yGunO117YSL98g7Ay8tHbXtbou9/YGV3jby9qHLnOVkb6fnvj2HU2MtL9SHtJI33JaRyub25gpO3YICyM3I+2lzP67+tWRtc+3t44er+xMQ7X+eWN/vWNmdG7vilsdO1rTuPYc7eokX+EBpFqpDrYXsZIu+AgEo3k28qUNga/LclGz664vDHwYDQwBh6M5YyjaywT4zSxgFFATDAKiPmN0xM1xSghZjdO3m6SjBRaPBUyOg4ssdKN41uNckZuPG/J7Iw0l7XnNFL/STaIKKMTfdMzG4UzKdLIzcibjYJGJ3lmxBupk86RfEZehFfhaUYn/SrmNCrmaYSRG9ntOqeRK9FTMdY4tc8oYaQuuCFONLKT3k/zGZlPyjGojNR5f2NS1BgxBoWRneJuncnIrXYiaYyOlk/TZXmNTLX8qaU30mYf1W5odHQcfdlvYKT2FNluZmTqJl5MpRgdVcHXiyWMzOvYz1BgdNRH3GpsjVxpllZqIx3jZ4iVkZY/04hBo2v8v18vauTwW+pUYxXxvDU3VsnEkJHfktvTjazbYmiNlPwxWhgT7zcTRk5vTzdq9vsRxtG/k4ARRhhh/FON/of0rtbsZgPG1vfzn06aC5tlDXCoGyLNbjm0Bhj88Je3nkJ/0JTBWLnrFfnTbt4xnUvZyMjvNM/364bYffjXAsbNZevz89v37dt64y4j+HdsRsaK5o/nyfn4sr9fdefpwR55fuNlk75omc7///8+U2PF1DQVXeqv2ksb/SMzM3rbYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNAuMMAraYYTRLDDCKGiHEUazwAijoB1GGM0CI4yCdhhhNIvq/E29UXN4aC6jW2Q10mdF+10mI6nOn1+46cbr8EbTfq++hJI41Zl36lHQQnfYbqO8hCJhc1CNYTZbKZBM2kOnf7S2s9UR9ap5+l+2lUzJ1K5e1O2vR7L7KB31p8hDm+du+mJTW+/j2ne91ZeSuq9xQ7jk8TgxDNee4ttnW2fyUVLikdd3QaRbvCa1P7cWxuTzYY+hS617HHmyM5iu7phq/BUaBT2n1m/SZyuvUgcRPrQ0ub1Of4SoFsr+hAbhktsNFq7+k5JVCc2m9NOgt+lfSDolj6IfNzrVGtWbg4Ex9cY3m3VZjfu/wGjw8DAwLsfvCr+J8ZQ8ivXvblS9gFAbDZ4dFkbtvm6YwFytVCfZ5zIazKYmUE/ajfcgbwZbZXpIHEToYzxfQv3m+F0ONpurtl/Xqzoqq3VXha+zo81yHdteLzdWu2TH8Zm+zCntgnoEQRAEQf7C/ANn6XI2Nw3tzwAAAABJRU5ErkJggg==";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 11 section
  
  //Player 2 card 12 section
  function nr12Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP212;
    inHand.id="n2r12";
    inHand.className="card";
  inHand.src="https://www.wackyprint.com/designcodes/0/1/110/11100212.png";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP212 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r12').remove();
        
        nr12Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(12);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHand212;       
    inBattle.id="n2r12";
    inBattle.className="card"; 
  inBattle.src="https://www.wackyprint.com/designcodes/0/1/110/11100212.png";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP212 = function() {
      power2 = power2.filter(a => {
    return a !== 12});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP212;
    inHand.id="n2r12";
    inHand.className="card"; 
  inHand.src="https://www.wackyprint.com/designcodes/0/1/110/11100212.png";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 12 section
  
  //Player 2 card 13 section
  function nr13Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP213;
    inHand.id="n2r13";
    inHand.className="card";
  inHand.src="https://m.media-amazon.com/images/I/611bVm8huuL.jpg";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP213 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r13').remove();
        
        nr13Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(13);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP213;       
    inBattle.id="n2r13";
    inBattle.className="card"; 
  inBattle.src="https://m.media-amazon.com/images/I/611bVm8huuL.jpg";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP213 = function() {
      power2 = power2.filter(a => {
    return a !== 13});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP213;
    inHand.id="n2r13";
    inHand.className="card"; 
  inHand.src="https://m.media-amazon.com/images/I/611bVm8huuL.jpg";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 13 section
  
  //Player 2 card 14 section
  function nr14Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP214;
    inHand.id="n2r14";
    inHand.className="card";
  inHand.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-14-2.jpg?v=1534449017";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP214 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r14').remove();
        
        nr14Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(14);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP214;       
    inBattle.id="n2r14";
    inBattle.className="card"; 
  inBattle.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-14-2.jpg?v=1534449017";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  //End of player 2 card 14 section
  
  //Player 2 card 15 section
  function nr15Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP215;
    inHand.id="n2r15";
    inHand.className="card";
  inHand.src="https://www.wackyprint.com/previews_store/1/110/number-15-white-black.jpg";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP215 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r15').remove();
        
        nr15Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(15);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP215;       
    inBattle.id="n2r15";
    inBattle.className="card"; 
  inBattle.src="https://www.wackyprint.com/previews_store/1/110/number-15-white-black.jpg";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP215 = function() {
      power2 = power2.filter(a => {
    return a !== 15});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP215;
    inHand.id="n2r15";
    inHand.className="card"; 
  inHand.src="https://www.wackyprint.com/previews_store/1/110/number-15-white-black.jpg";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 16 section
  
  //Player 2 card 16 section
  function nr16Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP216;
    inHand.id="n2r16";
    inHand.className="card";
  inHand.src="https://m.media-amazon.com/images/I/611WTQyZnHL._AC_SL1500_.jpg";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP216 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r16').remove();
        
        nr16Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(16);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP216;       
    inBattle.id="n2r16";
    inBattle.className="card"; 
  inBattle.src="https://m.media-amazon.com/images/I/611WTQyZnHL._AC_SL1500_.jpg";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP216 = function() {
      power2 = power2.filter(a => {
    return a !== 16});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP216;
    inHand.id="n2r16";
    inHand.className="card"; 
  inHand.src="https://m.media-amazon.com/images/I/611WTQyZnHL._AC_SL1500_.jpg";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 16 section
  
  //Player 2 card 17 section
  function nr17Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP217;
    inHand.id="n2r17";
    inHand.className="card";
  inHand.src="https://www.pngitem.com/pimgs/m/444-4444202_number-cliparts-1-000-black-number-17-hd.png";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP217 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r17').remove();
        
        nr17Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(17);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP217;       
    inBattle.id="n2r17";
    inBattle.className="card"; 
  inBattle.src="https://www.pngitem.com/pimgs/m/444-4444202_number-cliparts-1-000-black-number-17-hd.png";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP217 = function() {
      power2 = power2.filter(a => {
    return a !== 17});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP217;
    inHand.id="n2r17";
    inHand.className="card"; 
  inHand.src="https://www.pngitem.com/pimgs/m/444-4444202_number-cliparts-1-000-black-number-17-hd.png";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 17 section
  
  //Player 2 card 18 section
  function nr18Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP218;
    inHand.id="n2r18";
    inHand.className="card";
  inHand.src="http://www.clker.com/cliparts/P/F/w/B/a/k/number-eighteen-hi.png";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP218 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r18').remove();
        
        nr18Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(18);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP218;       
    inBattle.id="n2r18";
    inBattle.className="card"; 
  inBattle.src="http://www.clker.com/cliparts/P/F/w/B/a/k/number-eighteen-hi.png";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP218 = function() {
      power2 = power2.filter(a => {
    return a !== 18});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP218;
    inHand.id="n2r18";
    inHand.className="card"; 
  inHand.src="http://www.clker.com/cliparts/P/F/w/B/a/k/number-eighteen-hi.png";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 18 section
  
  //Player 2 card 19 section
  function nr19Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP219;
    inHand.id="n2r19";
    inHand.className="card";
  inHand.src="https://www.pngkit.com/png/detail/160-1607668_number-19-png.png";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP219 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r19').remove();
        
        nr19Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(19);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP219;       
    inBattle.id="n2r19";
    inBattle.className="card"; 
  inBattle.src="https://www.pngkit.com/png/detail/160-1607668_number-19-png.png";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP219 = function() {
      power2 = power2.filter(a => {
    return a !== 19});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP219;
    inHand.id="n2r19";
    inHand.className="card"; 
  inHand.src="https://www.pngkit.com/png/detail/160-1607668_number-19-png.png";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 19 section
  
  //Player 2 card 20 section
  function nr20Hand2() {
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP220;
    inHand.id="n2r20";
    inHand.className="card";
  inHand.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-20-2.jpg?v=1534449013";
     document.getElementById('hand-p2').appendChild(inHand);
  }
  
  
  let handToBattleP220 = function () {
      if(battleTime == 0) {
        document.getElementById('n2r20').remove();
        
        nr20Trash2();
  }
    
      if(power2.length <= 2 && battleTime == 1) {
      power2.push(20);
      powerTotal2();
      arts += 1;
      this.remove();
      
      let inBattle = document.createElement('img');
    inBattle.onclick=battleToHandP220;       
    inBattle.id="n2r20";
    inBattle.className="card"; 
  inBattle.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-20-2.jpg?v=1534449013";
        
     document.getElementById('battle-p2').appendChild(inBattle);
    };
  }
  
  
  
  let battleToHandP220 = function() {
      power2 = power2.filter(a => {
    return a !== 20});
      this.remove();   
      powerTotal2();
      arts -= 1;
    
    let inHand= document.createElement('img');
    inHand.onclick=handToBattleP220;
    inHand.id="n2r20";
    inHand.className="card"; 
  inHand.src="https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-PNDB-20-2.jpg?v=1534449013";
    
     document.getElementById('hand-p2').appendChild(inHand);
    };
  //End of player 2 card 20 section
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //Start of p1 section
  const fill1 = function() {
    if(testDeck.length < 15 && !testDeck.includes(1)) {
    testDeck.push(1, 2, 3, 4, 5);
      
      document.getElementById('fill-1').removeEventListener('click', fill1);
      
      document.getElementById('fill-1').addEventListener('click', removeFill1);
      
      document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  }};
  
  
  
  const fill2 = function() {
    if(testDeck.length < 15 && !testDeck.includes(6)) {
    testDeck.push(6, 7, 8, 9, 10);
      
      document.getElementById('fill-2').removeEventListener('click', fill2);
      
      document.getElementById('fill-2').addEventListener('click', removeFill2);
      
      document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  }};
  
  
  
  const fill3 = function() {
    if(testDeck.length < 15 && !testDeck.includes(11)) {
    testDeck.push(11, 12, 13, 14, 15);
      
      document.getElementById('fill-3').removeEventListener('click', fill3);
      
      document.getElementById('fill-3').addEventListener('click', removeFill3);
      
      document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  }};
  
  
  
  const fill4 = function() {
    if(testDeck.length < 15 && !testDeck.includes(16)) {
    testDeck.push(16, 17, 18, 19, 20);
      
      document.getElementById('fill-3').removeEventListener('click', fill4);
      
      document.getElementById('fill-3').addEventListener('click', removeFill4);
      
      document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  }};
  
  
  
  const removeFill1 = function() {
    testDeck = testDeck.filter(a => a !== 1);
    testDeck = testDeck.filter(a => a !== 2);
    testDeck = testDeck.filter(a => a !== 3);
    testDeck = testDeck.filter(a => a !== 4);
    testDeck = testDeck.filter(a => a !== 5);
      
      document.getElementById('fill-1').addEventListener('click', fill1);
      
      document.getElementById('fill-1').removeEventListener('click', removeFill1);
      
      document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  };
    
    
      
  
  const removeFill2 = function() {
    testDeck = testDeck.filter(a => a !== 6);
    testDeck = testDeck.filter(a => a !== 7);
    testDeck = testDeck.filter(a => a !== 8);
    testDeck = testDeck.filter(a => a !== 9);
    testDeck = testDeck.filter(a => a !== 10);
      
      document.getElementById('fill-2').addEventListener('click', fill2);
      
      document.getElementById('fill-2').removeEventListener('click', removeFill2);
    
    document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  };
  
  
  
  const removeFill3 = function() {
    testDeck = testDeck.filter(a => a !== 11);
    testDeck = testDeck.filter(a => a !== 12);
    testDeck = testDeck.filter(a => a !== 13);
    testDeck = testDeck.filter(a => a !== 14);
    testDeck = testDeck.filter(a => a !== 15);
      
      document.getElementById('fill-3').addEventListener('click', fill3);
      
      document.getElementById('fill-3').removeEventListener('click', removeFill3);
    
    document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  };
  
  
  
  const removeFill4 = function() {
    testDeck = testDeck.filter(a => a !== 16);
    testDeck = testDeck.filter(a => a !== 17);
    testDeck = testDeck.filter(a => a !== 18);
    testDeck = testDeck.filter(a => a !== 19);
    testDeck = testDeck.filter(a => a !== 20);
      
      document.getElementById('fill-1').addEventListener('click', fill4);
      
      document.getElementById('fill-1').removeEventListener('click', removeFill4);
      
      document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  }
  //End of fill player 1
  
      
      
  const f2ill1 = function() {
    if(testDeck2.length < 15 && !testDeck2.includes(1)) {
    testDeck2.push(1, 2, 3, 4, 5);
      
      document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  }};
  
  const f2ill2 = function() {
    if(testDeck2.length < 15 && !testDeck2.includes(6)) {
    testDeck2.push(6, 7, 8, 9, 10);
      
      document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  }};
  
  const f2ill3 = function() {
    if(testDeck2.length < 15 && !testDeck2.includes(11)) {
    testDeck2.push(11, 12, 13, 14, 15);
      
      document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  }};
  
  const f2ill4 = function() {
    if(testDeck2.length < 15 && !testDeck2.includes(16)) {
    testDeck2.push(16, 17, 18, 19, 20);
      
      document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  }};
  
  
  
  const r2emoveFill1 = function() {
    testDeck2 = testDeck2.filter(a => a !== 1);
    testDeck2 = testDeck2.filter(a => a !== 2);
    testDeck2 = testDeck2.filter(a => a !== 3);
    testDeck2 = testDeck2.filter(a => a !== 4);
    testDeck2 = testDeck2.filter(a => a !== 5);
  };
  
  const r2emoveFill2 = function() {
    testDeck2 = testDeck2.filter(a => a !== 6);
    testDeck2 = testDeck2.filter(a => a !== 7);
    testDeck2 = testDeck2.filter(a => a !== 8);
    testDeck2 = testDeck2.filter(a => a !== 9);
    testDeck2 = testDeck2.filter(a => a !== 10);
  };
  
  const r2emoveFill3 = function() {
    testDeck2 = testDeck2.filter(a => a !== 11);
    testDeck2 = testDeck2.filter(a => a !== 12);
    testDeck2 = testDeck2.filter(a => a !== 13);
    testDeck2 = testDeck2.filter(a => a !== 14);
    testDeck2 = testDeck2.filter(a => a !== 15);
  };
  
  const r2emoveFill4 = function() {
    testDeck2 = testDeck2.filter(a => a !== 16);
    testDeck2 = testDeck2.filter(a => a !== 17);
    testDeck2 = testDeck2.filter(a => a !== 18);
    testDeck2 = testDeck2.filter(a => a !== 19);
    testDeck2 = testDeck2.filter(a => a !== 20);
  };
  //End of fill player 2
  
  
  
    document.getElementById('fill-1').addEventListener('click', fill1);
  
  document.getElementById('fill-2').addEventListener('click', fill2);
  
  document.getElementById('fill-1').addEventListener('click', fill3);
  //End of p1 section
  
  
  
  
  
  
  
  //Start of p2 section
  const fill12 = function() {
    if(testDeck2.length < 15 && !testDeck2.includes(1)) {
    testDeck2.push(1, 2, 3, 4, 5);
      
      document.getElementById('fill-12').removeEventListener('click', fill12);
      
      document.getElementById('fill-12').addEventListener('click', removeFill12);
      
      document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  }};
  
  
  
  const fill22 = function() {
    if(testDeck2.length < 15 && !testDeck2.includes(6)) {
    testDeck2.push(6, 7, 8, 9, 10);
      
      document.getElementById('fill-22').removeEventListener('click', fill22);
      
      document.getElementById('fill-22').addEventListener('click', removeFill22);
      
      document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  }};
  
  
  
  
  const removeFill12 = function() {
    testDeck2 = testDeck2.filter(a => a !== 1);
    testDeck2 = testDeck2.filter(a => a !== 2);
    testDeck2 = testDeck2.filter(a => a !== 3);
    testDeck2 = testDeck2.filter(a => a !== 4);
    testDeck2 = testDeck2.filter(a => a !== 5);
      
      document.getElementById('fill-12').addEventListener('click', fill12);
      
      document.getElementById('fill-12').removeEventListener('click', removeFill12);
      
      document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  };
    
    
      
  
  const removeFill22 = function() {
    testDeck2 = testDeck2.filter(a => a !== 6);
    testDeck2 = testDeck2.filter(a => a !== 7);
    testDeck2 = testDeck2.filter(a => a !== 8);
    testDeck2 = testDeck2.filter(a => a !== 9);
    testDeck2 = testDeck2.filter(a => a !== 10);
      
      document.getElementById('fill-22').addEventListener('click', fill22);
      
      document.getElementById('fill-22').removeEventListener('click', removeFill22);
    
    document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  };
      
      
    document.getElementById('fill-12').addEventListener('click', fill12);
  
  document.getElementById('fill-22').addEventListener('click', fill22);
  //End of p2 section
  
  
  
  
  
  
  function handVisible1() {
  if(document.getElementById('hand-p1').style.visibility !== 'visible') {
    document.getElementById('hand-p1').style.visibility = 'visible';
    
  } else {
    document.getElementById('hand-p1').style.visibility = 'hidden';
  }};
  
  
  function handVisible2() {
  if(document.getElementById('hand-p2').style.visibility !== 'visible') {
    document.getElementById('hand-p2').style.visibility = 'visible';
    
  } else {
    document.getElementById('hand-p2').style.visibility = 'hidden';
  }};
  
  
  
  
  
  
  function shuffle1() {
      let shuffle1 = testDeck.sort(() => Math.random() - 0.5);
  
  document.getElementById('test-deck').textContent = 'Test deck: ' + testDeck;
  };
  
  function shuffle2() {
      let shuffle2 = testDeck2.sort(() => Math.random() - 0.5);
  
  document.getElementById('test-deck2').textContent = 'Test deck2: ' + testDeck2;
  };
  
  
  
  function startBattle() {
    if(power.length == 3 && power2.length == 3) {
      chainChecker();
      
      if(pOneTotal > pTwoTotal) {
       alert(`Player 1 wins battle ${pOneTotal} to ${pTwoTotal}`); 
      }
      
      if(pTwoTotal > pOneTotal) {
       alert(`Player 2 wins battle ${pTwoTotal} to ${pOneTotal}`);  
      }
      
      if(pTwoTotal == pOneTotal) {
       alert(`Tie at ${pOneTotal} to ${pTwoTotal}`); 
      }
      p1Winner();
      
      
      
  removeCounter();
  addQCounter();
  addACounter();
  }};
  
  
  
  
  
  
  
  
  
  
  function p1Winner() {
  //p11-p21 panelTen to panelSeven Mash
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('mash') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p11');
    panelSeven.classList.add('mash');
    panelSeven.classList.add('shielder');
    
    
     panelTen.classList.remove('occupied-p11');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p11-p21 panelTen to panelSeven Mash
  
    
  //p11-p21 panelTen to panelSeven Artoria
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('artoria') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p11');
    panelSeven.classList.add('artoria');
    panelSeven.classList.add('saber');
    
    
     panelTen.classList.remove('occupied-p11');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p11-p21 panelTen to panelSeven Artoria
    
    
  //p11-p21 panelTen to panelSeven Gilgamesh
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('gilgamesh') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p11');
    panelSeven.classList.add('gilgamesh');
    panelSeven.classList.add('archer');
    
    
     panelTen.classList.remove('occupied-p11');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p11-p21 panelTen to panelSeven Gilgamesh
    
    
  //p11-p21 panelTen to panelSeven Asterios
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('asterios') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p11');
    panelSeven.classList.add('asterios');
    panelSeven.classList.add('berserker');
    
    
     panelTen.classList.remove('occupied-p13');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p11-p21 panelTen to panelSeven Asterios
    
    
    
  //p13-p21 panelTen to panelSeven Mash
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('mash') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p13');
    panelSeven.classList.add('mash');
    panelSeven.classList.add('shielder');
    
    
     panelTen.classList.remove('occupied-p13');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p13-p21 panelTen to panelSeven Mash
  
    
  //p13-p21 panelTen to panelSeven Artoria
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('artoria') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p13');
    panelSeven.classList.add('artoria');
    panelSeven.classList.add('saber');
    
    
     panelTen.classList.remove('occupied-p13');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p13-p21 panelTen to panelSeven Artoria
    
    
  //p13-p21 panelTen to panelSeven Gilgamesh
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('gilgamesh') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p13');
    panelSeven.classList.add('gilgamesh');
    panelSeven.classList.add('archer');
    
    
     panelTen.classList.remove('occupied-p13');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p13-p21 panelTen to panelSeven Gilgamesh
    
    
  //p13-p21 panelTen to panelSeven Asterios
  if(panelSeven.classList.contains('occupied-p21') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('asterios') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                         
                         panelSeven.classList.remove('occupied-p21');
    panelSeven.classList.remove('selected-move');
    panelSeven.classList.remove('mash2');
   panelSeven.classList.remove('shielder2');
    panelSeven.classList.remove('artoria2');
    panelSeven.classList.remove('saber2');
  panelSeven.classList.remove('gilgamesh2');
    panelSeven.classList.remove('archer2');
   panelSeven.classList.remove('asterios2');
  panelSeven.classList.remove('berserker2');
  
    
    panelSeven.classList.add('occupied-p13');
    panelSeven.classList.add('asterios');
    panelSeven.classList.add('berserker');
    
    
     panelTen.classList.remove('occupied-p13');
    panelTen.removeEventListener('click', pTenClick);
    panelTen.classList.remove('pending-move');
    
    
    panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
    panelNine.classList.remove('movable');
    
    
      
      p1Win -= 1;
  }
  //End of p13-p21 panelTen to panelSeven Asterios
    
    
  
    
    
  //p11-p22 panelTen to panelSeven Mash
  if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('mash') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
                       
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('mash');
panelSeven.classList.add('shielder');


panelTen.classList.remove('occupied-p11');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p22 panelTen to panelSeven Mash


//p11-p22 panelTen to panelSeven Artoria
if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('artoria') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('artoria');
panelSeven.classList.add('saber');


panelTen.classList.remove('occupied-p11');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p22 panelTen to panelSeven Artoria


//p11-p22 panelTen to panelSeven Gilgamesh
if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('gilgamesh') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('gilgamesh');
panelSeven.classList.add('archer');


panelTen.classList.remove('occupied-p11');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p22 panelTen to panelSeven Gilgamesh


//p11-p22 panelTen to panelSeven Asterios
if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('asterios') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('asterios');
panelSeven.classList.add('berserker');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p22 panelTen to panelSeven Asterios



//p13-p22 panelTen to panelSeven Mash
if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('mash') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('mash');
panelSeven.classList.add('shielder');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p22 panelTen to panelSeven Mash


//p13-p22 panelTen to panelSeven Artoria
if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('artoria') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('artoria');
panelSeven.classList.add('saber');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p22 panelTen to panelSeven Artoria


//p13-p22 panelTen to panelSeven Gilgamesh
if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('gilgamesh') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('gilgamesh');
panelSeven.classList.add('archer');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p22 panelTen to panelSeven Gilgamesh


//p13-p22 panelTen to panelSeven Asterios
if(panelSeven.classList.contains('occupied-p22') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('asterios') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p22');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('asterios');
panelSeven.classList.add('berserker');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p22 panelTen to panelSeven Asterios





//p11-p23 panelTen to panelSeven Mash
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('mash') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('mash');
panelSeven.classList.add('shielder');


panelTen.classList.remove('occupied-p11');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p23 panelTen to panelSeven Mash


//p11-p23 panelTen to panelSeven Artoria
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('artoria') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('artoria');
panelSeven.classList.add('saber');


panelTen.classList.remove('occupied-p11');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p23 panelTen to panelSeven Artoria


//p11-p23 panelTen to panelSeven Gilgamesh
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('gilgamesh') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('gilgamesh');
panelSeven.classList.add('archer');


panelTen.classList.remove('occupied-p11');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p23 panelTen to panelSeven Gilgamesh


//p11-p23 panelTen to panelSeven Asterios
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p11') && panelTen.classList.contains('asterios') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p11');
panelSeven.classList.add('asterios');
panelSeven.classList.add('berserker');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p11-p23 panelTen to panelSeven Asterios



//p13-p23 panelTen to panelSeven Mash
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('mash') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('mash');
panelSeven.classList.add('shielder');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p23 panelTen to panelSeven Mash


//p13-p23 panelTen to panelSeven Artoria
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('artoria') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('artoria');
panelSeven.classList.add('saber');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p23 panelTen to panelSeven Artoria


//p13-p23 panelTen to panelSeven Gilgamesh
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('gilgamesh') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('gilgamesh');
panelSeven.classList.add('archer');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p23 panelTen to panelSeven Gilgamesh


//p13-p23 panelTen to panelSeven Asterios
if(panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('occupied-p13') && panelTen.classList.contains('asterios') && panelTen.classList.contains('pending-move') && panelSeven.classList.contains('selected-move')) {
    
    panelSeven.classList.remove('occupied-p23');
panelSeven.classList.remove('selected-move');
panelSeven.classList.remove('mash2');
panelSeven.classList.remove('shielder2');
panelSeven.classList.remove('artoria2');
panelSeven.classList.remove('saber2');
panelSeven.classList.remove('gilgamesh2');
panelSeven.classList.remove('archer2');
panelSeven.classList.remove('asterios2');
panelSeven.classList.remove('berserker2');


panelSeven.classList.add('occupied-p13');
panelSeven.classList.add('asterios');
panelSeven.classList.add('berserker');


panelTen.classList.remove('occupied-p13');
panelTen.removeEventListener('click', pTenClick);
panelTen.classList.remove('pending-move');


panelSix.classList.remove('movable');
panelSeven.classList.remove('movable');
panelNine.classList.remove('movable');



p1Win -= 1;
}
//End of p13-p23 panelTen to panelSeven Asterios
}











function chainChecker() {
//P1 section
if((power = [1, 2, 3]) || (power = [1, 2, 4]) || (power = [1, 2, 5])) {
pOneTotal += 1; 
} else

if((power = [2, 3, 4]) || (power = [2, 3, 5])) {
pOneTotal += 2; 
} else

if(power = [3, 4, 5]) {
pOneTotal += 3; 
}


typeChain();
checkQuick();
checkArts();
battleToTrash();
//End of p1 section

//P2 section
if((power2 = [1, 2, 3]) || (power2 = [1, 2, 4]) || (power2 = [1, 2, 5])) {
pTwoTotal += 1; 
} else

if((power2 = [2, 3, 4]) || (power2 = [2, 3, 5])) {
pTwoTotal += 2; 
} else

if(power2 = [3, 4, 5]) {
pTwoTotal += 3; 
}
//End of p2 section
}






//First battle
function typeChain() {
if(buster == 3) {
pOneTotal += 3;
}

if(quickCounter >= 1) {
pOneTotal += 7;
}

if(artsCounter >= 1) {
pOneTotal +=3;
}
};
//End of first

//Second check if quick
function checkQuick() {
if(quick == 3) {
addQuick += 1;
}   
};
//End of second

//Third remove old counter
function removeCounter() {
if(quickCounter >= 1) {
quickCounter -=1;
}

if(artsCounter >= 1) {
artsCounter -=1;
}
};
//End of third

//Fourth add new qCounter
function addQCounter() {
if(addQuick == 1) {
addQuick -= 1;
quickCounter = 1;
}

document.getElementById('quick-counter').textContent = 'Quick counter: ' + quickCounter;
};
//End of fourth

var quick = 0;
var arts = 0;
var buster = 0;

var quickCounter = 0;
var artsCounter = 0;

var addQuick = 0;
var addArts = 0;



var quick2 = 0;
var arts2 = 0;
var buster2 = 0;

var quickCounter2 = 0;
var artsCounter2 = 0;

var addQuick2 = 0;
var addArts2 = 0;



document.getElementById('quick-counter').textContent = 'Quick counter: ' + quickCounter;

document.getElementById('arts-counter').textContent = 'Arts counter: ' + artsCounter;











//Second check if arts
function checkArts() {
if(arts == 3) {
addArts += 1;
}   
};
//End of second


//Third remove old counter
//End of third


//Fourth add new aCounter
function addACounter() {
if(addArts == 1) {
addArts -= 1;
artsCounter = 2;
}

document.getElementById('arts-counter').textContent = 'Arts counter: ' + artsCounter;
};
//End of fourth










var trashZone = [];


function nr1Trash1() {
let inTrash= document.createElement('img');
inTrash.id="nr1";
inTrash.className="card trash"; 
inTrash.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII=";

trashZone.push(1);

inTrash.style.position = 'relative';

let arrLength = trashZone.length;

let distance = arrLength *= -257;

inTrash.style.top = `${distance}px`;

inTrash.style.transform = 'translate(20px, 265px)';

document.getElementById('trash-p1').appendChild(inTrash);
}




function battleToTrash() {
if(power.includes(1)) {
nr1Trash1();
}
trashZone = power;
power = [];
document.getElementById('battle-p1').innerHTML = '';
}











//Combining
const panel = document.querySelectorAll('.panel');

const panelOne = document.getElementById('panel-1');

const panelTwo = document.getElementById('panel-2');

const panelThree = document.getElementById('panel-3');

const panelFour = document.getElementById('panel-4');

const panelFive = document.getElementById('panel-5');

const panelSix = document.getElementById('panel-6');

const panelSeven = document.getElementById('panel-7');

const panelEight = document.getElementById('panel-8');

const panelNine = document.getElementById('panel-9');

const panelTen = document.getElementById('panel-10');

const panelEleven = document.getElementById('panel-11');













//Panel 2 section
//Player 2 movable 2-3
const pTwoClick = function() {
if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {

if(!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p22') &&
(panelTwo.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p23') &&
(panelTwo.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelThree.classList.contains('occupied-p22') && (!panelThree.classList.contains('occupied-p23') &&
(panelTwo.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
panelTwo.classList.add('pending-move');

panelThree.classList.add('movable')
};
//End of player two movable 2-3

//Player one movable 2-3
if(!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p12') &&
(panelTwo.classList.contains('occupied-p13')) && turnPhase == 2 ||
(!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p13') &&
(panelTwo.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelThree.classList.contains('occupied-p12') && (!panelThree.classList.contains('occupied-p13') &&
(panelTwo.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
panelTwo.classList.add('pending-move');

panelThree.classList.add('movable');
};
//End of player one movable 2-3

//Player one movable 2-5
if(!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p12') &&
(panelTwo.classList.contains('occupied-p13')) && turnPhase == 2 ||

(!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p13') &&
(panelTwo.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelFive.classList.contains('occupied-p12') && (!panelFive.classList.contains('occupied-p13') &&
(panelTwo.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
panelTwo.classList.add('pending-move');

panelFive.classList.add('movable')
};
//End of player one movable 2-5

//Player two movable 2-5
if(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p22') &&
(panelTwo.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p23') &&
(panelTwo.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelFive.classList.contains('occupied-p22') && (!panelFive.classList.contains('occupied-p23') &&
(panelTwo.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
panelTwo.classList.add('pending-move');

panelFive.classList.add('movable');
};
//End of player two movable 2-5


//Player one movable 2-6
if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
(panelTwo.classList.contains('occupied-p13')) && turnPhase == 2 ||

(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
(panelTwo.classList.contains('occupied-p12')) && turnPhase2 == 2 ||                                        
(!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
(panelTwo.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
panelTwo.classList.add('pending-move');

panelSix.classList.add('movable')
};
//End of player one movable 2-6

//Player two movable 2-6
if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
(panelTwo.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
(panelTwo.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
(panelTwo.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
panelTwo.classList.add('pending-move');

panelSix.classList.add('movable');
};
//End of player two movable 2-6
} else 
//Remove movable/pending move
if(panelTwo.classList.contains('pending-move')) {
panelTwo.classList.remove('pending-move');

panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');
//End of remove movable/pending-move
}};



//Move from p2 to p3
const twoThree = function twoToThree() {
if(panelTwo.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelTwo.classList.contains('occupied-p11')))
) {

if(panelThree.classList.contains('occupied-p21') ||
panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {

//battle();
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p11');
panelThree.classList.add('mash');
panelThree.classList.add('shielder');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p11');
panelThree.classList.add('artoria');
panelThree.classList.add('saber');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p11');
panelThree.classList.add('gilgamesh');
panelThree.classList.add('archer');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p11');
panelThree.classList.add('asterios');
panelThree.classList.add('berserker');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}





if(panelTwo.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelTwo.classList.contains('occupied-p12')))
) {

if(panelThree.classList.contains('occupied-p21') ||
panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {

//battle()
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p12');
panelThree.classList.add('mash');
panelThree.classList.add('shielder');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase +=1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p12');
panelThree.classList.add('artoria');
panelThree.classList.add('saber');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p12');
panelThree.classList.add('gilgamesh');
panelThree.classList.add('archer');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('asterios')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p12');
panelThree.classList.add('asterios');
panelThree.classList.add('berserker');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}





if(panelTwo.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') &&(panelTwo.classList.contains('occupied-p13')))
) {

if(panelThree.classList.contains('occupied-p21') ||
panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {

//battle();
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p13');
panelThree.classList.add('mash');
panelThree.classList.add('shielder');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p13');
panelThree.classList.add('artoria');
panelThree.classList.add('saber');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p13');
panelThree.classList.add('gilgamesh');
panelThree.classList.add('archer');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelTwo.classList.contains('asterios')) {

panelThree.classList.remove('selected-move');


panelThree.classList.add('occupied-p13');
panelThree.classList.add('asterios');
panelThree.classList.add('berserker');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}

checkAll();
};
//End of move from p2 to p3



//Move from p2 to p5
const twoFive = function twoToFive() {
if(panelTwo.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelTwo.classList.contains('occupied-p11')))
) {

if(panelFive.classList.contains('occupied-p21') ||
panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {

//battle()
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p11');
panelFive.classList.add('mash');
panelFive.classList.add('shielder');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p11');
panelFive.classList.add('artoria');
panelFive.classList.add('saber');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p11');
panelFive.classList.add('gilgamesh');
panelFive.classList.add('archer');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p11');
panelFive.classList.add('asterios');
panelFive.classList.add('berserker');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}





if(panelTwo.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelTwo.classList.contains('occupied-p12')))
) {

if(panelFive.classList.contains('occupied-p21') ||
panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {

//battle()
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p12');
panelFive.classList.add('mash');
panelFive.classList.add('shielder');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase +=1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p12');
panelFive.classList.add('artoria');
panelFive.classList.add('saber');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p12');
panelFive.classList.add('gilgamesh');
panelFive.classList.add('archer');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('asterios')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p12');
panelFive.classList.add('asterios');
panelFive.classList.add('berserker');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}





if(panelTwo.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') &&(panelTwo.classList.contains('occupied-p13')))
) {

if(panelFive.classList.contains('occupied-p21') ||
panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {

//battle();
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p13');
panelFive.classList.add('mash');
panelFive.classList.add('shielder');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p13');
panelFive.classList.add('artoria');
panelFive.classList.add('saber');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p13');
panelFive.classList.add('gilgamesh');
panelFive.classList.add('archer');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelTwo.classList.contains('asterios')) {

panelFive.classList.remove('selected-move');


panelFive.classList.add('occupied-p13');
panelFive.classList.add('asterios');
panelFive.classList.add('berserker');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}

checkAll();
};
//End of move from p2 to p5



//Move from p2 to p6
const twoSix = function twoToSix() {
if(panelTwo.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelTwo.classList.contains('occupied-p11')))
) {

if(panelSix.classList.contains('occupied-p21') ||
panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {

//battle()
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p11');
panelSix.classList.add('mash');
panelSix.classList.add('shielder');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p11');
panelSix.classList.add('artoria');
panelSix.classList.add('saber');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p11');
panelSix.classList.add('gilgamesh');
panelSix.classList.add('archer');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p11');
panelSix.classList.add('asterios');
panelSix.classList.add('berserker');


panelTwo.classList.remove('occupied-p11');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}





if(panelTwo.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelTwo.classList.contains('occupied-p12')))
) {

if(panelSix.classList.contains('occupied-p21') ||
panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {

//battle()
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p12');
panelSix.classList.add('mash');
panelSix.classList.add('shielder');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase +=1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p12');
panelSix.classList.add('artoria');
panelSix.classList.add('saber');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p12');
panelSix.classList.add('gilgamesh');
panelSix.classList.add('archer');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('asterios')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p12');
panelSix.classList.add('asterios');
panelSix.classList.add('berserker');


panelTwo.classList.remove('occupied-p12');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}





if(panelTwo.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') &&(panelTwo.classList.contains('occupied-p13')))
) {

if(panelSix.classList.contains('occupied-p21') ||
panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {

//battle();
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('mash')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p13');
panelSix.classList.add('mash');
panelSix.classList.add('shielder');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('mash');
panelTwo.classList.remove('shielder');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('artoria')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p13');
panelSix.classList.add('artoria');
panelSix.classList.add('saber');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('artoria');
panelTwo.classList.remove('saber');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('gilgamesh')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p13');
panelSix.classList.add('gilgamesh');
panelSix.classList.add('archer');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('gilgamesh');
panelTwo.classList.remove('archer');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;

} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTwo.classList.contains('asterios')) {

panelSix.classList.remove('selected-move');


panelSix.classList.add('occupied-p13');
panelSix.classList.add('asterios');
panelSix.classList.add('berserker');


panelTwo.classList.remove('occupied-p13');
panelTwo.classList.remove('asterios');
panelTwo.classList.remove('berserker');
panelTwo.removeEventListener('click', pTwoClick);
panelTwo.classList.remove('pending-move');


panelThree.classList.remove('movable');
panelFive.classList.remove('movable');
panelSix.classList.remove('movable');

turnPhase += 1;
} 
}

checkAll();
};
//End of move from p2 to p6





function c2hosen3() {
    if(panelThree.classList.contains('movable')) {
      panelThree.classList.add('selected-move');
     
      if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
        discardAlert('Mash');
  
        discardListenerMash(twoThree);
    }
  }
     
     
     
  if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
    discardAlert('Artoria');
  
    discardListenerArtoria(twoThree);
  }
  
     
     
    
  if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
    discardAlert('Gilgamesh');
  
    discardListenerGilgamesh(twoThree);
  }
    
  
  
  if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
    discardAlert('Asterios');
  
    discardListenerAsterios(twoThree);
  }
  }
   
   
   
   
   
   
   
   
   
   
   
   
  function c2hosen5() {
   if(panelFive.classList.contains('movable')) {
      panelFive.classList.add('selected-move');
     
      if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
        discardAlert('Mash');
  
        discardListenerMash(twoFive);
    }
  }
     
     
     
  if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
    discardAlert('Artoria');
  
    discardListenerArtoria(twoFive);
  }
  
     
     
    
  if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
    discardAlert('Gilgamesh');
  
    discardListenerGilgamesh(twoFive);
  }
    
  
  
  if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
    discardAlert('Asterios');
  
    discardListenerAsterios(twoFive);
  }
   }
   
   
   
   
   
   function c2hosen6() {
   if(panelSix.classList.contains('movable')) {
        panelSix.classList.add('selected-move');
     
        if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(twoSix);
      }
    }
       
       
       
    if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(twoSix);
    }
    
       
       
      
    if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(twoSix);
    }
      
    
    
    if(panelTwo.classList.contains('pending-move') && panelTwo.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(twoSix);
    }
   }
   //End of panel 2 section
   
   
   
   
   
   //Panel 3 section
   //Player 2 movable 3-2
   const pThreeClick = function() {
    if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {
      
      
   //Player one movable 3-2
   if(!panelOne.classList.contains('occupied-p11') && (!panelOne.classList.contains('occupied-p12') &&
   (panelThree.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelOne.classList.contains('occupied-p11') && (!panelOne.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelOne.classList.contains('occupied-p12') && (!panelOne.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelThree.classList.add('pending-move');
     
     panelOne.classList.add('movable');
   };
   //End of player one movable 3-1
   
      
   //Player one movable 3-2
   if(!panelTwo.classList.contains('occupied-p11') && (!panelTwo.classList.contains('occupied-p12') &&
   (panelThree.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelTwo.classList.contains('occupied-p11') && (!panelTwo.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelTwo.classList.contains('occupied-p12') && (!panelTwo.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelThree.classList.add('pending-move');
     
     panelTwo.classList.add('movable');
   };
   //End of player one movable 3-2
      
   //Player two movable 3-2
   if(!panelTwo.classList.contains('occupied-p21') && (!panelTwo.classList.contains('occupied-p22') &&
   (panelThree.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelTwo.classList.contains('occupied-p21') && (!panelTwo.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelTwo.classList.contains('occupied-p22') && (!panelTwo.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelThree.classList.add('pending-move');
      
      panelTwo.classList.add('movable')
    };
   //End of player two movable 3-2
      
     
   //Player one movable 3-4
   if(!panelFour.classList.contains('occupied-p11') && (!panelFour.classList.contains('occupied-p12') &&
   (panelThree.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelFour.classList.contains('occupied-p11') && (!panelFour.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelFour.classList.contains('occupied-p12') && (!panelFour.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelThree.classList.add('pending-move');
     
     panelFour.classList.add('movable');
   };
   //End of player one movable 3-4
      
   //Player two movable 3-4
   if(!panelFour.classList.contains('occupied-p21') && (!panelFour.classList.contains('occupied-p22') &&
   (panelThree.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelFour.classList.contains('occupied-p21') && (!panelFour.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelFour.classList.contains('occupied-p22') && (!panelFour.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelThree.classList.add('pending-move');
      
      panelFour.classList.add('movable')
    };
   //End of player two movable 3-4
      
     
   //Player one movable 3-5
   if(!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p12') &&
   (panelThree.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelFive.classList.contains('occupied-p12') && (!panelFive.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelThree.classList.add('pending-move');
     
     panelFive.classList.add('movable');
   };
   //End of player one movable 3-5
      
   //Player two movable 3-5
   if(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p22') &&
   (panelThree.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelFive.classList.contains('occupied-p22') && (!panelFive.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelThree.classList.add('pending-move');
      
      panelFive.classList.add('movable')
    };
   //End of player two movable 3-5
     
      
   //Player one movable 3-6
   if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
   (panelThree.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelThree.classList.add('pending-move');
     
     panelSix.classList.add('movable');
   };
   //End of player one movable 3-6
      
   //Player two movable 3-6
   if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
   (panelThree.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelThree.classList.add('pending-move');
      
      panelSix.classList.add('movable')
    };
   //End of player two movable 3-6
     
      
   //Player one movable 3-7
   if(!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p12') &&
   (panelThree.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p12') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelThree.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelThree.classList.add('pending-move');
     
     panelSeven.classList.add('movable');
   };
   //End of player one movable 3-7
      
   //Player two movable 3-7
   if(!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p22') &&
   (panelThree.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p22') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelThree.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelThree.classList.add('pending-move');
      
      panelSeven.classList.add('movable')
    };
   //End of player two movable 3-7
     
     } else 
    //Remove movable/pending move
     if(panelThree.classList.contains('pending-move')) {
      panelThree.classList.remove('pending-move');
       
       panelOne.classList.remove('movable');
       panelTwo.classList.remove('movable');
       panelFour.classList.remove('movable');
       panelFive.classList.remove('movable');
       panelSix.classList.remove('movable');
      panelSeven.classList.remove('movable');
       //End of remove movable/pending-move
   }};
   
   
   
   //Move from p3 to p1
   function threeToOne() {
   if(panelThree.classList.contains('pending-move') &&(panelOne.classList.contains('movable') && (panelThree.classList.contains('occupied-p13')))) { 
     panelOne.classList.add('occupied-p13');
     
     panelThree.classList.remove('pending-move');
     panelThree.classList.remove('occupied-p13');
     panelThree.removeEventListener('click', pThreeClick);
     
     panelOne.classList.remove('movable');
     
     panelTwo.classList.remove('movable');
     
     panelFour.classList.remove('movable');
     
     panelFive.classList.remove('movable');
     
     panelSix.classList.remove('movable');
     
     panelSeven.classList.remove('movable');
     
     oneVictory();
   }
     
   if(panelThree.classList.contains('pending-move') && (panelOne.classList.contains('movable') && (panelThree.classList.contains('occupied-p11')))) {
     panelOne.classList.add('occupied-p11');
     
     panelThree.classList.remove('pending-move');
     panelThree.classList.remove('occupied-p11');
     
     panelThree.removeEventListener('click', pThreeClick);
     
     panelOne.classList.remove('movable');
     
     panelTwo.classList.remove('movable');
     
     panelFour.classList.remove('movable');
     
     panelFive.classList.remove('movable');
     
     panelSix.classList.remove('movable');
     
     panelSeven.classList.remove('movable');
     
     oneVictory();
   }
     
   if(panelThree.classList.contains('pending-move') && (panelOne.classList.contains('movable') && (panelThree.classList.contains('occupied-p12')))) {
     panelOne.classList.add('occupied-p12');
     
     panelThree.classList.remove('pending-move');
     panelThree.classList.remove('occupied-p12');
     
     panelThree.removeEventListener('click', pThreeClick);
     
     panelOne.classList.remove('movable');
     
     panelTwo.classList.remove('movable');
     
     panelFour.classList.remove('movable');
     
     panelFive.classList.remove('movable');
     
     panelSix.classList.remove('movable');
     
     panelSeven.classList.remove('movable');
     
     oneVictory();
   }};
   //End of move from p3 to p1
   
   
   
   //Move from p3 to p2
   const threeTwo = function threeToTwo() {
   if(panelThree.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p11')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelTwo.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p12')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelTwo.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') &&(panelThree.classList.contains('occupied-p13')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
     panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       //battle();
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p3 to p2
   
   
   //Move from p3 to p4
   const threeFour = function threeToFour() {
   if(panelThree.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p11')))
     ) {
       
   if(panelFour.classList.contains('occupied-p21') ||
   panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('mash');
     panelFour.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('artoria');
     panelFour.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('gilgamesh');
     panelFour.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelFour.classList.contains('asterios')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('asterios');
     panelFour.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p12')))
     ) {
       
   if(panelFour.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('mash');
     panelFour.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelTwo.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('artoria');
     panelFour.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('gilgamesh');
     panelFour.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('asterios');
     panelFour.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') &&(panelThree.classList.contains('occupied-p13')))
     ) {
       
   if(panelFour.classList.contains('occupied-p21') ||
     panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
     
       //battle();
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('mash');
     panelFour.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('artoria');
     panelFour.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('gilgamesh');
     panelFour.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pTenClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('asterios');
     panelFour.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p3 to p4
   
   
   
   //Move from p3 to p5
   const threeFive = function threeToFive() {
   if(panelThree.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p11')))
     ) {
       
   if(panelFive.classList.contains('occupied-p21') ||
   panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p11');
     panelFive.classList.add('mash');
     panelFive.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p11');
     panelFive.classList.add('artoria');
     panelFive.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p11');
     panelFive.classList.add('gilgamesh');
     panelFive.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p11');
     panelFive.classList.add('asterios');
     panelFive.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p12')))
     ) {
       
   if(panelFive.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p12');
     panelFive.classList.add('mash');
     panelFive.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p12');
     panelFive.classList.add('artoria');
     panelFive.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p12');
     panelFive.classList.add('gilgamesh');
     panelFive.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p12');
     panelFive.classList.add('asterios');
     panelFive.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') &&(panelThree.classList.contains('occupied-p13')))
     ) {
       
   if(panelFive.classList.contains('occupied-p21') ||
     panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
     
       //battle();
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p13');
     panelFive.classList.add('mash');
     panelFive.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p13');
     panelFive.classList.add('artoria');
     panelFive.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p13');
     panelFive.classList.add('gilgamesh');
     panelFive.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelFive.classList.remove('selected-move');
     
     
     panelFive.classList.add('occupied-p13');
     panelFive.classList.add('asterios');
     panelFive.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p3 to p5
   
   
   
   //Move from p3 to p6
   const threeSix = function threeToSix() {
   if(panelThree.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p11')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
   panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p12')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') &&(panelThree.classList.contains('occupied-p13')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
     panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       //battle();
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p3 to p6
   
   
   
   //Move from p3 to p7
   const threeSeven = function threeToSeven() {
   if(panelThree.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p11')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
   panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p11');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelThree.classList.contains('occupied-p12')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p12');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelThree.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') &&(panelThree.classList.contains('occupied-p13')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
     panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       //battle();
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('mash');
     panelThree.classList.remove('shielder');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('artoria');
     panelThree.classList.remove('saber');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('gilgamesh');
     panelThree.classList.remove('archer');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelThree.classList.remove('occupied-p13');
     panelThree.classList.remove('asterios');
     panelThree.classList.remove('berserker');
     panelThree.removeEventListener('click', pThreeClick);
     panelThree.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p3 to p7
   
   
   
   function c3hosen1() {
    if(panelOne.classList.contains('movable')) {
        panelOne.classList.add('selected-move');
     
        if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(threeOne);
      }
    }
       
       
       
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(threeOne);
    }
    
       
       
      
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(threeOne);
    }
      
    
    
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(threeOne);
    }
   }
   
   
   function c3hosen2() {
   if(panelTwo.classList.contains('movable')) {
        panelTwo.classList.add('selected-move');
     
        if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(threeTwo);
      }
    }
       
       
       
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(threeTwo);
    }
    
       
       
      
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(threeTwo);
    }
      
    
    
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(threeTwo);
    }
   }
   
   
   function c3hosen4() {
   if(panelFour.classList.contains('movable')) {
        panelFour.classList.add('selected-move');
     
        if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(threeFour);
      }
    }
       
       
       
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(threeFour);
    }
    
       
       
      
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(threeFour);
    }
      
    
    
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(threeFour);
    }
   }
   
   
   function c3hosen5() {
   if(panelFive.classList.contains('movable')) {
        panelFive.classList.add('selected-move');
     
        if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(threeFive);
      }
    }
       
       
       
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(threeFive);
    }
    
       
       
      
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(threeFive);
    }
      
    
    
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(threeFive);
    }
   }
   
   
   function c3hosen6() {
   if(panelSix.classList.contains('movable')) {
        panelSix.classList.add('selected-move');
     
        if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(threeSix);
      }
    }
       
       
       
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(threeSix);
    }
    
       
       
      
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(threeSix);
    }
      
    
    
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(threeSix);
    }
   }
   
   function c3hosen7() {
   if(panelSeven.classList.contains('movable')) {
        panelSeven.classList.add('selected-move');
     
        if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(threeSeven);
      }
    }
       
       
       
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(threeSeven);
    }
    
       
       
      
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(threeSeven);
    }
      
    
    
    if(panelThree.classList.contains('pending-move') && panelThree.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(threeSeven);
    }
   }
   //End of panel 3 section
   
   
   
   //Panel 4 section
   //Player 4 movable 4-3
   const pFourClick = function() {
    if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {
   
    if(!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p22') &&
   (panelFour.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p23') &&
   (panelFour.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelThree.classList.contains('occupied-p22') && (!panelThree.classList.contains('occupied-p23') &&
   (panelFour.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelFour.classList.add('pending-move');
      
      panelThree.classList.add('movable')
    };
   //End of player two movable 4-3
      
   //Player one movable 4-3
   if(!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p12') &&
   (panelFour.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p13') &&
   (panelFour.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelThree.classList.contains('occupied-p12') && (!panelThree.classList.contains('occupied-p13') &&
   (panelFour.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFour.classList.add('pending-move');
     
     panelThree.classList.add('movable');
   };
   //End of player one movable 4-3
    
   //Player one movable 4-6
   if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
   (panelFour.classList.contains('occupied-p13')) && turnPhase == 2 ||
   
   (!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
   (panelFour.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
   (panelFour.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFour.classList.add('pending-move');
     
     panelSix.classList.add('movable')
   };
   //End of player one movable 4-6
   
   //Player two movable 4-6
   if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
   (panelFour.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
     (!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
   (panelFour.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
   (panelFour.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
     panelFour.classList.add('pending-move');
     
     panelSix.classList.add('movable');
   };
   //End of player two movable 4-6
   
      
   //Player one movable 4-7
   if(!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p12') &&
   (panelFour.classList.contains('occupied-p13')) && turnPhase == 2 ||
   
     (!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelFour.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p12') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelFour.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFour.classList.add('pending-move');
     
     panelSeven.classList.add('movable')
   };
   //End of player one movable 4-7
      
   //Player two movable 4-7
   if(!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p22') &&
   (panelFour.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
     (!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelFour.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p22') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelFour.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
     panelFour.classList.add('pending-move');
     
     panelSeven.classList.add('movable');
   };
    //End of player two movable 4-7
     } else 
    //Remove movable/pending move
     if(panelFour.classList.contains('pending-move')) {
      panelFour.classList.remove('pending-move');
    
       panelThree.classList.remove('movable');
      panelSix.classList.remove('movable');
    panelSeven.classList.remove('movable');
       //End of remove movable/pending-move
   }};
   
   
   
   //Move from p4 to p3
   const fourThree = function fourToThree() {
   if(panelFour.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelFour.classList.contains('occupied-p11')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       //battle()
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelThree.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('asterios');
     panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFour.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelFour.classList.contains('occupied-p12')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('asterios');
     panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFour.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') &&(panelFour.classList.contains('occupied-p13')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
     panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFour.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('asterios');
    panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p4 to p3
   
   
   
   //Move from p4 to p6
   const fourSix = function fourToSix() {
   if(panelFour.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelFour.classList.contains('occupied-p11')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
   panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('asterios');
     panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFour.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelFour.classList.contains('occupied-p12')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
   panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('asterios');
     panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFour.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') &&(panelFour.classList.contains('occupied-p13')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
     panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFour.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('asterios');
    panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p4 to p6
   
   
   
   //Move from p4 to p7
   const fourSeven = function fourToSeven() {
   if(panelFour.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelFour.classList.contains('occupied-p11')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
   panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p11');
     panelFour.classList.remove('asterios');
     panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFour.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelFour.classList.contains('occupied-p12')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
   panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p12');
     panelFour.classList.remove('asterios');
     panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFour.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') &&(panelFour.classList.contains('occupied-p13')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
     panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('mash');
     panelFour.classList.remove('shielder');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('artoria');
     panelFour.classList.remove('saber');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('gilgamesh');
     panelFour.classList.remove('archer');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelFour.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelFour.classList.remove('occupied-p13');
     panelFour.classList.remove('asterios');
    panelFour.classList.remove('berserker');
     panelFour.removeEventListener('click', pFourClick);
     panelFour.classList.remove('pending-move');
     
     
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p4 to p7
   
   
   
   
   
   function c4hosen3() {
   if(panelThree.classList.contains('movable')) {
        panelThree.classList.add('selected-move');
     
        if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fourThree);
      }
    }
       
       
       
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fourThree);
    }
    
       
       
      
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fourThree);
    }
      
    
    
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fourThree);
    }
   }
   
   
   
   
   
   
   function c4hosen6() {
   if(panelSix.classList.contains('movable')) {
        panelSix.classList.add('selected-move');
     
        if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fourSix);
      }
    }
       
       
       
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fourSix);
    }
    
       
       
      
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fourSix);
    }
      
    
    
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fourSix);
    }
   }
   
   
   
   
   
   function c4hosen7() {
   if(panelSeven.classList.contains('movable')) {
        panelSeven.classList.add('selected-move');
     
        if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fourSeven);
      }
    }
       
       
       
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fourSeven);
    }
    
       
       
      
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fourSeven);
    }
      
    
    
    if(panelFour.classList.contains('pending-move') && panelFour.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fourSeven);
    }
   }
   //End of panel 4 section
   
   
   
   //Panel 5 section
   //Player 5 movable 5-2
   const pFiveClick = function() {
    if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {
   
    if(!panelTwo.classList.contains('occupied-p21') && (!panelTwo.classList.contains('occupied-p22') &&
   (panelFive.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelTwo.classList.contains('occupied-p21') && (!panelTwo.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelTwo.classList.contains('occupied-p22') && (!panelTwo.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelFive.classList.add('pending-move');
      
      panelTwo.classList.add('movable')
    };
   //End of player two movable 5-2
      
   //Player one movable 5-2
   if(!panelTwo.classList.contains('occupied-p11') && (!panelTwo.classList.contains('occupied-p12') &&
   (panelFive.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelTwo.classList.contains('occupied-p11') && (!panelTwo.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelTwo.classList.contains('occupied-p12') && (!panelTwo.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFive.classList.add('pending-move');
     
     panelTwo.classList.add('movable');
   };
   //End of player one movable 5-2
    
   //Player one movable 5-3
   if(!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p12') &&
   (panelFive.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelThree.classList.contains('occupied-p12') && (!panelThree.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFive.classList.add('pending-move');
     
     panelThree.classList.add('movable');
   };
   //End of player one movable 5-3
   
   //Player two movable 5-3
   if(!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p22') &&
   (panelFive.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelThree.classList.contains('occupied-p22') && (!panelThree.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelFive.classList.add('pending-move');
      
      panelThree.classList.add('movable')
    };
   //End of player two movable 5-3
   
      
   //Player one movable 5-6
   if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
   (panelFive.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFive.classList.add('pending-move');
     
     panelSix.classList.add('movable');
   };
   //End of player one movable 5-6
   
   //Player two movable 5-6
   if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
   (panelFive.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelFive.classList.add('pending-move');
      
      panelSix.classList.add('movable')
    };
   //End of player two movable 5-6
      
      
   //Player one movable 5-8
   if(!panelEight.classList.contains('occupied-p11') && (!panelEight.classList.contains('occupied-p12') &&
   (panelFive.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelEight.classList.contains('occupied-p11') && (!panelEight.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelEight.classList.contains('occupied-p12') && (!panelEight.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFive.classList.add('pending-move');
     
     panelEight.classList.add('movable');
   };
   //End of player one movable 5-8
   
   //Player two movable 5-8
   if(!panelEight.classList.contains('occupied-p21') && (!panelEight.classList.contains('occupied-p22') &&
   (panelFive.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelEight.classList.contains('occupied-p21') && (!panelEight.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelEight.classList.contains('occupied-p22') && (!panelEight.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelFive.classList.add('pending-move');
      
      panelEight.classList.add('movable')
    };
   //End of player two movable 5-8
      
      
   //Player one movable 5-9
   if(!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p12') &&
   (panelFive.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelNine.classList.contains('occupied-p12') && (!panelNine.classList.contains('occupied-p13') &&
   (panelFive.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelFive.classList.add('pending-move');
     
     panelNine.classList.add('movable');
   };
   //End of player one movable 5-9
   
   //Player two movable 5-9
   if(!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p22') &&
   (panelFive.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelNine.classList.contains('occupied-p22') && (!panelNine.classList.contains('occupied-p23') &&
   (panelFive.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelFive.classList.add('pending-move');
      
      panelNine.classList.add('movable')
    };
   //End of player two movable 5-9
     } else 
    //Remove movable/pending move
     if(panelFive.classList.contains('pending-move')) {
      panelFive.classList.remove('pending-move');
    
       panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFive.classList.remove('movable');
       panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
      panelNine.classList.remove('movable');
       //End of remove movable/pending-move
   }};
   
   
   
   
   
   
   
   
   
   
   
   
   function c5hosen2() {
    if(panelTwo.classList.contains('movable')) {
        panelTwo.classList.add('selected-move');
     
        if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fiveTwo);
      }
    }
       
       
       
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fiveTwo);
    }
    
       
       
      
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fiveTwo);
    }
      
    
    
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fiveTwo);
    }
   }
   
   
   
   function c5hosen3() {
   if(panelThree.classList.contains('movable')) {
        panelThree.classList.add('selected-move');
     
        if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fiveThree);
      }
    }
       
       
       
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fiveThree);
    }
    
       
       
      
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fiveThree);
    }
      
    
    
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fiveThree);
    }
   }
   
   
   
   function c5hosen4() {
   if(panelFour.classList.contains('movable')) {
        panelFour.classList.add('selected-move');
     
        if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fiveFour);
      }
    }
       
       
       
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fiveFour);
    }
    
       
       
      
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fiveFour);
    }
      
    
    
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fiveFour);
    }
   }
   
   
   
   function c5hosen6() {
   if(panelSix.classList.contains('movable')) {
        panelSix.classList.add('selected-move');
     
        if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fiveSix);
      }
    }
       
       
       
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fiveSix);
    }
    
       
       
      
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fiveSix);
    }
      
    
    
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fiveSix);
    }
   }
   
   
   
   function c5hosen8() {
   if(panelEight.classList.contains('movable')) {
        panelEight.classList.add('selected-move');
     
        if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fiveEight);
      }
    }
       
       
       
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fiveEight);
    }
    
       
       
      
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fiveEight);
    }
      
    
    
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fiveEight);
    }
   }
   
   
   
   function c5hosen9() {
   if(panelNine.classList.contains('movable')) {
        panelNine.classList.add('selected-move');
     
        if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(fiveNine);
      }
    }
       
       
       
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(fiveNine);
    }
    
       
       
      
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(fiveNine);
    }
      
    
    
    if(panelFive.classList.contains('pending-move') && panelFive.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(fiveNine);
    }
   }
   
   
   
   
   
   
   
   
   
   //Move from p5 to p2
   const fiveTwo = function fiveToTwo() { if(panelFive.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p11')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p12')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') &&(panelFive.classList.contains('occupied-p13')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
     panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('asterios');
    panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p5 to p2
   
   
   //Move from p5 to p3
   const fiveThree = function fiveToThree() { if(panelFive.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p11')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p12')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') &&(panelFive.classList.contains('occupied-p13')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
     panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('asterios');
    panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p5 to p3
   
   
   //Move from p5 to p6
   const fiveSix = function fiveToSix() { if(panelFive.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p11')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p12')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
   panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') &&(panelFive.classList.contains('occupied-p13')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
     panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('asterios');
    panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p5 to p6
   
   
   //Move from p5 to p8
   const fiveEight = function fiveToEight() { if(panelFive.classList.contains('pending-move') && (panelEight.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p11')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelEight.classList.contains('occupied-p22') || panelEight.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p11');
     panelEight.classList.add('mash');
     panelEight.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p11');
     panelEight.classList.add('artoria');
     paneEight.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !paneEight.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p11');
     panelEight.classList.add('gilgamesh');
     panelEight.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p11');
     panelEight.classList.add('asterios');
     panelEight.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelEight.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p12')))
     ) {
       
   if(panelEight.classList.contains('occupied-p21') ||
   panelEight.classList.contains('occupied-p22') || panelEight.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p12');
     panelEight.classList.add('mash');
     panelEight.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p12');
     panelEight.classList.add('artoria');
     panelEight.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p12');
     panelEight.classList.add('gilgamesh');
     panelEight.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p12');
     panelEight.classList.add('asterios');
     panelEight.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelEight.classList.contains('selected-move') &&(panelFive.classList.contains('occupied-p13')))
     ) {
       
   if(panelEight.classList.contains('occupied-p21') ||
     panelEight.classList.contains('occupied-p22') || panelEight.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p13');
     panelEight.classList.add('mash');
     panelEight.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p13');
     panelEight.classList.add('artoria');
     panelEight.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p13');
     panelEight.classList.add('gilgamesh');
     panelEight.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelEight.classList.remove('selected-move');
     
     
     panelEight.classList.add('occupied-p13');
     panelEight.classList.add('asterios');
     panelEight.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('asterios');
    panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p5 to p8
   
   
   //Move from p5 to p9
   const fiveNine = function fiveToNine() { if(panelFive.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p11')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('mash');
     panelNine.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('artoria');
     panelNine.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('gilgamesh');
     panelNine.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('asterios');
     panelNine.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p11');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelFive.classList.contains('occupied-p12')))
     ) {
       
   if(panelNine.classList.contains('occupied-p21') ||
   panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('mash');
     panelNine.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('artoria');
     panelNine.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('gilgamesh');
     panelNine.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('asterios');
     panelNine.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p12');
     panelFive.classList.remove('asterios');
     panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelFive.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') &&(panelFive.classList.contains('occupied-p13')))
     ) {
       
   if(panelNine.classList.contains('occupied-p21') ||
   panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('mash')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('mash');
     panelNine.classList.add('shielder');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('mash');
     panelFive.classList.remove('shielder');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('artoria')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('artoria');
     panelNine.classList.add('saber');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('artoria');
     panelFive.classList.remove('saber');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('gilgamesh')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('gilgamesh');
     panelNine.classList.add('archer');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('gilgamesh');
     panelFive.classList.remove('archer');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelFive.classList.contains('asterios')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('asterios');
     panelNine.classList.add('berserker');
     
     
      panelFive.classList.remove('occupied-p13');
     panelFive.classList.remove('asterios');
    panelFive.classList.remove('berserker');
     panelFive.removeEventListener('click', pFiveClick);
     panelFive.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelSix.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p5 to p9
   //End of panel 5 section
   
   
   
   //Panel 6 section
   //Player 6 movable 6-2
const pSixClick = function() {
    if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {
   
    if(!panelTwo.classList.contains('occupied-p21') && (!panelTwo.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelTwo.classList.contains('occupied-p21') && (!panelTwo.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelTwo.classList.contains('occupied-p22') && (!panelTwo.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelTwo.classList.add('movable')
    };
   //End of player two movable 6-2
      
   //Player one movable 6-2
   if(!panelTwo.classList.contains('occupied-p11') && (!panelTwo.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelTwo.classList.contains('occupied-p11') && (!panelTwo.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelTwo.classList.contains('occupied-p12') && (!panelTwo.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelTwo.classList.add('movable');
   };
   //End of player one movable 5-2
    
   //Player one movable 6-3
   if(!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelThree.classList.contains('occupied-p12') && (!panelThree.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelThree.classList.add('movable');
   };
   //End of player one movable 6-3
   
   //Player two movable 6-3
   if(!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelThree.classList.contains('occupied-p22') && (!panelThree.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelThree.classList.add('movable')
    };
   //End of player two movable 6-3
   
      
   //Player one movable 6-4
   if(!panelFour.classList.contains('occupied-p11') && (!panelFour.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelFour.classList.contains('occupied-p11') && (!panelFour.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelFour.classList.contains('occupied-p12') && (!panelFour.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelFour.classList.add('movable');
   };
   //End of player one movable 6-4
   
   //Player two movable 6-4
   if(!panelFour.classList.contains('occupied-p21') && (!panelFour.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelFour.classList.contains('occupied-p21') && (!panelFour.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelFour.classList.contains('occupied-p22') && (!panelFour.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelFour.classList.add('movable')
    };
   //End of player two movable 6-4
      
      
   //Player one movable 6-5
   if(!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelFive.classList.contains('occupied-p12') && (!panelFive.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelFive.classList.add('movable');
   };
   //End of player one movable 6-5
   
   //Player two movable 6-5
   if(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelFive.classList.contains('occupied-p22') && (!panelFive.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelFive.classList.add('movable')
    };
   //End of player two movable 6-5
      
      
   //Player one movable 6-7
   if(!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p12') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelSeven.classList.add('movable');
   };
   //End of player one movable 6-6
   
   //Player two movable 6-7
   if(!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p22') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelSeven.classList.add('movable')
    };
   //End of player two movable 6-7
      
      
   //Player one movable 6-8
   if(!panelEight.classList.contains('occupied-p11') && (!panelEight.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelEight.classList.contains('occupied-p11') && (!panelEight.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelEight.classList.contains('occupied-p12') && (!panelEight.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelEight.classList.add('movable');
   };
   //End of player one movable 6-8
   
   //Player two movable 6-8
   if(!panelEight.classList.contains('occupied-p21') && (!panelEight.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelEight.classList.contains('occupied-p21') && (!panelEight.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelEight.classList.contains('occupied-p22') && (!panelEight.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelEight.classList.add('movable')
    };
   //End of player two movable 6-8
      
      
   //Player one movable 6-9
   if(!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelNine.classList.contains('occupied-p12') && (!panelNine.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelNine.classList.add('movable');
   };
   //End of player one movable 6-9
   
   //Player two movable 6-9
   if(!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelNine.classList.contains('occupied-p22') && (!panelNine.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelNine.classList.add('movable')
    };
   //End of player two movable 6-9
      
      
   //Player one movable 6-10
   if(!panelTen.classList.contains('occupied-p11') && (!panelTen.classList.contains('occupied-p12') &&
   (panelSix.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelTen.classList.contains('occupied-p11') && (!panelTen.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelTen.classList.contains('occupied-p12') && (!panelTen.classList.contains('occupied-p13') &&
   (panelSix.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelSix.classList.add('pending-move');
     
     panelTen.classList.add('movable');
   };
   //End of player one movable 6-10
   
   //Player two movable 6-10
   if(!panelTen.classList.contains('occupied-p21') && (!panelTen.classList.contains('occupied-p22') &&
   (panelSix.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelTen.classList.contains('occupied-p21') && (!panelTen.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelTen.classList.contains('occupied-p22') && (!panelTen.classList.contains('occupied-p23') &&
   (panelSix.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelSix.classList.add('pending-move');
      
      panelTen.classList.add('movable')
    };
   //End of player two movable 6-10
     } else 
    //Remove movable/pending move
     if(panelSix.classList.contains('pending-move')) {
      panelSix.classList.remove('pending-move');
    
       panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
      panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
      panelNine.classList.remove('movable');
       panelTen.classList.remove('movable');
       //End of remove movable/pending-move
   }};
   
   
   
   
   
   
   
   
   
   
   function c6hosen2() {
   if(panelTwo.classList.contains('movable')) {
        panelTwo.classList.add('selected-move');
     
        if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(sixTwo);
      }
    }
       
       
       
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(sixTwo);
    }
    
       
       
      
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(sixTwo);
    }
      
    
    
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(sixTwo);
    }
   }
   
   
   
   function c6hosen3() {
   if(panelThree.classList.contains('movable')) {
        panelThree.classList.add('selected-move');
     
        if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(sixThree);
      }
    }
       
       
       
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(sixThree);
    }
    
       
       
      
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(sixThree);
    }
      
    
    
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(sixThree);
    }
   }
   
   
   
   function c6hosen4() {
   if(panelFour.classList.contains('movable')) {
        panelFour.classList.add('selected-move');
     
        if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(sixFour);
      }
    }
       
       
       
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(sixFour);
    }
    
       
       
      
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(sixFour);
    }
      
    
    
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(sixFour);
    }
   }
   
   
   
   function c6hosen5() {
   if(panelFive.classList.contains('movable')) {
        panelFive.classList.add('selected-move');
     
        if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(sixFive);
      }
    }
       
       
       
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(sixFive);
    }
    
       
       
      
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(sixFive);
    }
      
    
    
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(sixFive);
    }
   }



   function c6hosen7() {
    if(panelTwo.classList.contains('movable')) {
         panelTwo.classList.add('selected-move');
      
         if(panelSeven.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
           discardAlert('Mash');
     
           discardListenerMash(sixSeven);
       }
     }
        
        
        
     if(panelSeven.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
       discardAlert('Artoria');
     
       discardListenerArtoria(sixSeven);
     }
     
        
        
       
     if(panelSeven.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
       discardAlert('Gilgamesh');
     
       discardListenerGilgamesh(sixSeven);
     }
       
     
     
     if(panelSeven.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
       discardAlert('Asterios');
     
       discardListenerAsterios(sixSeven);
     }
    }
   
   
   
   function c6hosen8() {
   if(panelEight.classList.contains('movable')) {
        panelEight.classList.add('selected-move');
     
        if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(sixEight);
      }
    }
       
       
       
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(sixEight);
    }
    
       
       
      
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(sixEight);
    }
      
    
    
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(sixEight);
    }
   }
   
   
   
   function c6hosen9() {
   if(panelNine.classList.contains('movable')) {
        panelNine.classList.add('selected-move');
     
        if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(sixNine);
      }
    }
       
       
       
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(sixNine);
    }
    
       
       
      
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(sixNine);
    }
      
    
    
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(sixNine);
    }
   }
   
   
   
   function c6hosen10() {
   if(panelTen.classList.contains('movable')) {
        panelTen.classList.add('selected-move');
     
        if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(sixTen);
      }
    }
       
       
       
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(sixTen);
    }
    
       
       
      
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(sixTen);
    }
      
    
    
    if(panelSix.classList.contains('pending-move') && panelSix.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(sixTen);
    }
   }
   
   
   
   
   
   
   
   
   
   //Move from p6 to p2
   const sixTwo = function sixToTwo() { if(panelTwo.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p11');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('asterios');
     panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelSix.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p12');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('asterios');
     panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelSix.classList.contains('pending-move') && (panelTwo.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
     ) {
       
   if(panelTwo.classList.contains('occupied-p21') ||
   panelTwo.classList.contains('occupied-p22') || panelTwo.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('mash');
     panelTwo.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('artoria');
     panelTwo.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('gilgamesh');
     panelTwo.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelTwo.classList.contains('occupied-p21') && !panelTwo.classList.contains('occupied-p22') && !panelTwo.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelTwo.classList.remove('selected-move');
     
     
     panelTwo.classList.add('occupied-p13');
     panelTwo.classList.add('asterios');
     panelTwo.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('asterios');
    panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p6 to p2
   
   
   //Move from p6 to p3
   const sixThree = function sixToThree() { if(panelThree.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p11');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('asterios');
     panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelSix.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p12');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('asterios');
     panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelSix.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
     ) {
       
   if(panelThree.classList.contains('occupied-p21') ||
   panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('mash');
     panelThree.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('artoria');
     panelThree.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('gilgamesh');
     panelThree.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelThree.classList.remove('selected-move');
     
     
     panelThree.classList.add('occupied-p13');
     panelThree.classList.add('asterios');
     panelThree.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('asterios');
    panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p6 to p3
   
   
   //Move from p6 to p4
   const sixFour = function sixToFour() { if(panelFour.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
     ) {
       
   if(panelFour.classList.contains('occupied-p21') ||
   panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('mash');
     panelFour.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('artoria');
     panelFour.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('gilgamesh');
     panelFour.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p11');
     panelFour.classList.add('asterios');
     panelFour.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p11');
     panelSix.classList.remove('asterios');
     panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelSix.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
     ) {
       
   if(panelFour.classList.contains('occupied-p21') ||
   panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('mash');
     panelFour.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('artoria');
     panelFour.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('gilgamesh');
     panelFour.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p12');
     panelFour.classList.add('asterios');
     panelFour.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p12');
     panelSix.classList.remove('asterios');
     panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelSix.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
     ) {
       
   if(panelFour.classList.contains('occupied-p21') ||
   panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('mash');
     panelFour.classList.add('shielder');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('mash');
     panelSix.classList.remove('shielder');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('artoria');
     panelFour.classList.add('saber');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('artoria');
     panelSix.classList.remove('saber');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('gilgamesh');
     panelFour.classList.add('archer');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('gilgamesh');
     panelSix.classList.remove('archer');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
     
     panelFour.classList.remove('selected-move');
     
     
     panelFour.classList.add('occupied-p13');
     panelFour.classList.add('asterios');
     panelFour.classList.add('berserker');
     
     
      panelSix.classList.remove('occupied-p13');
     panelSix.classList.remove('asterios');
    panelSix.classList.remove('berserker');
     panelSix.removeEventListener('click', pSixClick);
     panelSix.classList.remove('pending-move');
     
     
     panelTwo.classList.remove('movable');
     panelThree.classList.remove('movable');
     panelFour.classList.remove('movable');
     panelFive.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelEight.classList.remove('movable');
     panelNine.classList.remove('movable');
     panelTen.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p6 to p4
   
   
   //Move from p6 to p5
   const sixFive = function sixToFive() { if(panelFive.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
  ) {
    
if(panelFive.classList.contains('occupied-p21') ||
panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p11');
  panelFive.classList.add('mash');
  panelFive.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p11');
  panelFive.classList.add('artoria');
  panelFive.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p11');
  panelFive.classList.add('gilgamesh');
  panelFive.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p11');
  panelFive.classList.add('asterios');
  panelFive.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
  ) {
    
if(panelFive.classList.contains('occupied-p21') ||
panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p12');
  panelFive.classList.add('mash');
  panelFive.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p12');
  panelFive.classList.add('artoria');
  panelFive.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p12');
  panelFive.classList.add('gilgamesh');
  panelFive.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p12');
  panelFive.classList.add('asterios');
  panelFive.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
  ) {
    
if(panelFive.classList.contains('occupied-p21') ||
panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p13');
  panelFive.classList.add('mash');
  panelFive.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p13');
  panelFive.classList.add('artoria');
  panelFive.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p13');
  panelFive.classList.add('gilgamesh');
  panelFive.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelFive.classList.remove('selected-move');
  
  
  panelFive.classList.add('occupied-p13');
  panelFive.classList.add('asterios');
  panelFive.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('asterios');
 panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p6 to p5


//Move from p6 to p7
const sixSeven = function sixToSeven() { if(panelSeven.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
  ) {
    
if(panelSeven.classList.contains('occupied-p21') ||
panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p11');
  panelSeven.classList.add('mash');
  panelSeven.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p11');
  panelSeven.classList.add('artoria');
  panelSeven.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p11');
  panelSeven.classList.add('gilgamesh');
  panelSeven.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p11');
  panelSeven.classList.add('asterios');
  panelSeven.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
  ) {
    
if(panelSeven.classList.contains('occupied-p21') ||
panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p12');
  panelSeven.classList.add('mash');
  panelSeven.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p12');
  panelSeven.classList.add('artoria');
  panelSeven.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p12');
  panelSeven.classList.add('gilgamesh');
  panelSeven.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p12');
  panelSeven.classList.add('asterios');
  panelSeven.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
  ) {
    
if(panelSeven.classList.contains('occupied-p21') ||
panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p13');
  panelSeven.classList.add('mash');
  panelSeven.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p13');
  panelSeven.classList.add('artoria');
  panelSeven.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p13');
  panelSeven.classList.add('gilgamesh');
  panelSeven.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelSeven.classList.remove('selected-move');
  
  
  panelSeven.classList.add('occupied-p13');
  panelSeven.classList.add('asterios');
  panelSeven.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('asterios');
 panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p6 to p7


//Move from p6 to p8
const sixEight = function sixToEight() { if(panelEight.classList.contains('pending-move') && (panelEight.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
  ) {
    
if(panelEight.classList.contains('occupied-p21') ||
panelEight.classList.contains('occupied-p22') || panelEight.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p11');
  panelEight.classList.add('mash');
  panelEight.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p11');
  panelEight.classList.add('artoria');
  panelEight.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p11');
  panelEight.classList.add('gilgamesh');
  panelEight.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p11');
  panelEight.classList.add('asterios');
  panelEight.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelEight.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
  ) {
    
if(panelEight.classList.contains('occupied-p21') ||
panelEight.classList.contains('occupied-p22') || panelEight.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p12');
  panelEight.classList.add('mash');
  panelEight.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p12');
  panelEight.classList.add('artoria');
  panelEight.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p12');
  panelEight.classList.add('gilgamesh');
  panelEight.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p12');
  panelEight.classList.add('asterios');
  panelEight.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelEight.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
  ) {
    
if(panelEight.classList.contains('occupied-p21') ||
panelEight.classList.contains('occupied-p22') || panelEight.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelEight.classList.contains('mash')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p13');
  panelEight.classList.add('mash');
  panelEight.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p13');
  panelEight.classList.add('artoria');
  panelEight.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p13');
  panelEight.classList.add('gilgamesh');
  panelEight.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelEight.classList.contains('occupied-p21') && !panelEight.classList.contains('occupied-p22') && !panelEight.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelEight.classList.remove('selected-move');
  
  
  panelEight.classList.add('occupied-p13');
  panelEight.classList.add('asterios');
  panelEight.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('asterios');
 panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p6 to p8


//Move from p6 to p9
const sixNine = function sixToNine() { if(panelNine.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
  ) {
    
if(panelNine.classList.contains('occupied-p21') ||
panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('mash');
  panelNine.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('artoria');
  panelNine.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('gilgamesh');
  panelNine.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('asterios');
  panelNine.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
  ) {
    
if(panelNine.classList.contains('occupied-p21') ||
panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('mash');
  panelNine.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('artoria');
  panelNine.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('gilgamesh');
  panelNine.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('asterios');
  panelNine.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
  ) {
    
if(panelNine.classList.contains('occupied-p21') ||
panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelNine.classList.contains('mash')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('mash');
  panelNine.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('artoria');
  panelNine.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('gilgamesh');
  panelNine.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('asterios');
  panelNine.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('asterios');
 panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p6 to p9


//Move from p6 to p10
const sixTen = function sixToTen() { if(panelTen.classList.contains('pending-move') && (panelTen.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p11')))
  ) {
    
if(panelTen.classList.contains('occupied-p21') ||
panelTen.classList.contains('occupied-p22') || panelTen.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('mash');
  panelTen.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('artoria');
  panelTen.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('gilgamesh');
  panelTen.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('asterios');
  panelTen.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p11');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelTen.classList.contains('selected-move') && (panelSix.classList.contains('occupied-p12')))
  ) {
    
if(panelTen.classList.contains('occupied-p21') ||
panelTen.classList.contains('occupied-p22') || panelTen.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('mash')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('mash');
  panelTen.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('artoria');
  panelTen.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('gilgamesh');
  panelTen.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('asterios');
  panelTen.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p12');
  panelSix.classList.remove('asterios');
  panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSix.classList.contains('pending-move') && (panelTen.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
  ) {
    
if(panelTen.classList.contains('occupied-p21') ||
panelTen.classList.contains('occupied-p22') || panelTen.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('mash');
  panelTen.classList.add('shielder');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('mash');
  panelSix.classList.remove('shielder');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('artoria')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('artoria');
  panelTen.classList.add('saber');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('artoria');
  panelSix.classList.remove('saber');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('gilgamesh')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('gilgamesh');
  panelTen.classList.add('archer');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('gilgamesh');
  panelSix.classList.remove('archer');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSix.classList.contains('asterios')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('asterios');
  panelTen.classList.add('berserker');
  
  
   panelSix.classList.remove('occupied-p13');
  panelSix.classList.remove('asterios');
 panelSix.classList.remove('berserker');
  panelSix.removeEventListener('click', pSixClick);
  panelSix.classList.remove('pending-move');
  
  
  panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelFive.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p6 to p10
//End of panel 6 section



//Panel 7 section
//Player 2 movable 7-3
const pSevenClick = function() {
 if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {

 if(!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p22') &&
(panelSeven.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelThree.classList.contains('occupied-p21') && (!panelThree.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelThree.classList.contains('occupied-p22') && (!panelThree.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelSeven.classList.add('pending-move');
   
   panelThree.classList.add('movable')
 };
//End of player two movable 7-3
   
//Player one movable 7-3
if(!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p12') &&
(panelSeven.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelThree.classList.contains('occupied-p11') && (!panelThree.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelThree.classList.contains('occupied-p12') && (!panelThree.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelSeven.classList.add('pending-move');
  
  panelThree.classList.add('movable');
};
//End of player one movable 7-3
 
//Player one movable 7-4
if(!panelFour.classList.contains('occupied-p11') && (!panelFour.classList.contains('occupied-p12') &&
(panelSeven.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelFour.classList.contains('occupied-p11') && (!panelFour.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelFour.classList.contains('occupied-p12') && (!panelFour.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelSeven.classList.add('pending-move');
  
  panelFour.classList.add('movable');
};
//End of player one movable 7-4

//Player two movable 7-4
if(!panelFour.classList.contains('occupied-p21') && (!panelFour.classList.contains('occupied-p22') &&
(panelSeven.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelFour.classList.contains('occupied-p21') && (!panelFour.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelFour.classList.contains('occupied-p22') && (!panelFour.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelSeven.classList.add('pending-move');
   
   panelFour.classList.add('movable')
 };
//End of player two movable 7-4

   
//Player one movable 7-6
if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
(panelSeven.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelSeven.classList.add('pending-move');
  
  panelSix.classList.add('movable');
};
//End of player one movable 7-6

//Player two movable 7-6
if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
(panelSeven.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelSeven.classList.add('pending-move');
   
   panelSix.classList.add('movable')
 };
//End of player two movable 7-6
   
   
//Player one movable 7-9
if(!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p12') &&
(panelSeven.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelNine.classList.contains('occupied-p12') && (!panelNine.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelSeven.classList.add('pending-move');
  
  panelNine.classList.add('movable');
};
//End of player one movable 7-9

//Player two movable 7-9
if(!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p22') &&
(panelSeven.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelNine.classList.contains('occupied-p22') && (!panelNine.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelSeven.classList.add('pending-move');
   
   panelNine.classList.add('movable')
 };
//End of player two movable 7-9
   
   
//Player one movable 7-10
if(!panelTen.classList.contains('occupied-p11') && (!panelTen.classList.contains('occupied-p12') &&
(panelSeven.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelTen.classList.contains('occupied-p11') && (!panelTen.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelTen.classList.contains('occupied-p12') && (!panelTen.classList.contains('occupied-p13') &&
(panelSeven.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelSeven.classList.add('pending-move');
  
  panelTen.classList.add('movable');
};
//End of player one movable 7-10

//Player two movable 7-10
if(!panelTen.classList.contains('occupied-p21') && (!panelTen.classList.contains('occupied-p22') &&
(panelSeven.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelTen.classList.contains('occupied-p21') && (!panelTen.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelTen.classList.contains('occupied-p22') && (!panelTen.classList.contains('occupied-p23') &&
(panelSeven.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelSeven.classList.add('pending-move');
   
   panelTen.classList.add('movable')
 };
//End of player two movable 7-10
  } else 
 //Remove movable/pending move
  if(panelSeven.classList.contains('pending-move')) {
   panelSeven.classList.remove('pending-move');
 
    panelTwo.classList.remove('movable');
  panelThree.classList.remove('movable');
  panelFive.classList.remove('movable');
    panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
   panelNine.classList.remove('movable');
    //End of remove movable/pending-move
}};











function c7hosen3() {
if(panelThree.classList.contains('movable')) {
     panelThree.classList.add('selected-move');
  
     if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
      discardAlert('Mash');

      discardListenerMash(sevenThree);
  }
}
   
   
   
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
  discardAlert('Artoria');

  discardListenerArtoria(sevenThree);
}

   
   
  
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
  discardAlert('Gilgamesh');

  discardListenerGilgamesh(sevenThree);
}
  


if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
  discardAlert('Asterios');

  discardListenerAsterios(sevenThree);
}
}



function c7hosen4() {
if(panelFour.classList.contains('movable')) {
     panelFour.classList.add('selected-move');
  
     if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
      discardAlert('Mash');

      discardListenerMash(sevenFour);
  }
}
   
   
   
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
  discardAlert('Artoria');

  discardListenerArtoria(sevenFour);
}

   
   
  
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
  discardAlert('Gilgamesh');

  discardListenerGilgamesh(sevenFour);
}
  


if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
  discardAlert('Asterios');

  discardListenerAsterios(sevenFour);
}
}


function c7hosen6() {
if(panelSix.classList.contains('movable')) {
     panelSix.classList.add('selected-move');
  
     if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
      discardAlert('Mash');

      discardListenerMash(sevenSix);
  }
}
   
   
   
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
  discardAlert('Artoria');

  discardListenerArtoria(sevenSix);
}

   
   
  
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
  discardAlert('Gilgamesh');

  discardListenerGilgamesh(sevenSix);
}
  


if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
  discardAlert('Asterios');

  discardListenerAsterios(sevenSix);
}
}


function c7hosen10() {
if(panelTen.classList.contains('movable')) {
     panelTen.classList.add('selected-move');
  
     if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
      discardAlert('Mash');

      discardListenerMash(sevenTen);
  }
}
   
   
   
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
  discardAlert('Artoria');

  discardListenerArtoria(sevenTen);
}

   
   
  
if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
  discardAlert('Gilgamesh');

  discardListenerGilgamesh(sevenTen);
}
  


if(panelSeven.classList.contains('pending-move') && panelSeven.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
  discardAlert('Asterios');

  discardListenerAsterios(sevenTen);
}
}









//Move from p7 to p3
const sevenThree = function sevenToThree() { if(panelThree.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p11')))
  ) {
    
if(panelThree.classList.contains('occupied-p21') ||
panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p11');
  panelThree.classList.add('mash');
  panelThree.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p11');
  panelThree.classList.add('artoria');
  panelThree.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p11');
  panelThree.classList.add('gilgamesh');
  panelThree.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p11');
  panelThree.classList.add('asterios');
  panelThree.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p12')))
  ) {
    
if(panelThree.classList.contains('occupied-p21') ||
panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p12');
  panelThree.classList.add('mash');
  panelThree.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p12');
  panelThree.classList.add('artoria');
  panelThree.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p12');
  panelThree.classList.add('gilgamesh');
  panelThree.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p12');
  panelThree.classList.add('asterios');
  panelThree.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelThree.classList.contains('selected-move') &&(panelThree.classList.contains('occupied-p13')))
  ) {
    
if(panelThree.classList.contains('occupied-p21') ||
panelThree.classList.contains('occupied-p22') || panelThree.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p13');
  panelThree.classList.add('mash');
  panelThree.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p13');
  panelThree.classList.add('artoria');
  panelThree.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p13');
  panelThree.classList.add('gilgamesh');
  panelThree.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelThree.classList.contains('occupied-p21') && !panelThree.classList.contains('occupied-p22') && !panelThree.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelThree.classList.remove('selected-move');
  
  
  panelThree.classList.add('occupied-p13');
  panelThree.classList.add('asterios');
  panelThree.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('asterios');
 panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p7 to p3


//Move from p7 to p4
const sevenFour = function sevenToFour() { if(panelFour.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p11')))
  ) {
    
if(panelFour.classList.contains('occupied-p21') ||
panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p11');
  panelFour.classList.add('mash');
  panelFour.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p11');
  panelFour.classList.add('artoria');
  panelFour.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p11');
  panelFour.classList.add('gilgamesh');
  panelFour.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p11');
  panelFour.classList.add('asterios');
  panelFour.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p12')))
  ) {
    
if(panelFour.classList.contains('occupied-p21') ||
panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p12');
  panelFour.classList.add('mash');
  panelFour.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p12');
  panelFour.classList.add('artoria');
  panelFour.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p12');
  panelFour.classList.add('gilgamesh');
  panelFour.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p12');
  panelFour.classList.add('asterios');
  panelFour.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelFour.classList.contains('selected-move') &&(panelFour.classList.contains('occupied-p13')))
  ) {
    
if(panelFour.classList.contains('occupied-p21') ||
panelFour.classList.contains('occupied-p22') || panelFour.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p13');
  panelFour.classList.add('mash');
  panelFour.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p13');
  panelFour.classList.add('artoria');
  panelFour.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p13');
  panelFour.classList.add('gilgamesh');
  panelFour.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelFour.classList.contains('occupied-p21') && !panelFour.classList.contains('occupied-p22') && !panelFour.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelFour.classList.remove('selected-move');
  
  
  panelFour.classList.add('occupied-p13');
  panelFour.classList.add('asterios');
  panelFour.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('asterios');
 panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p7 to p4


//Move from p7 to p6
const sevenSix = function sevenToSix() { if(panelSix.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p11')))
  ) {
    
if(panelSix.classList.contains('occupied-p21') ||
panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p11');
  panelSix.classList.add('mash');
  panelSix.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p11');
  panelSix.classList.add('artoria');
  panelSix.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p11');
  panelSix.classList.add('gilgamesh');
  panelSix.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p11');
  panelSix.classList.add('asterios');
  panelSix.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p12')))
  ) {
    
if(panelSix.classList.contains('occupied-p21') ||
panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p12');
  panelSix.classList.add('mash');
  panelSix.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p12');
  panelSix.classList.add('artoria');
  panelSix.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p12');
  panelSix.classList.add('gilgamesh');
  panelSix.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p12');
  panelSix.classList.add('asterios');
  panelSix.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') &&(panelSix.classList.contains('occupied-p13')))
  ) {
    
if(panelSix.classList.contains('occupied-p21') ||
panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p13');
  panelSix.classList.add('mash');
  panelSix.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p13');
  panelSix.classList.add('artoria');
  panelSix.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p13');
  panelSix.classList.add('gilgamesh');
  panelSix.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelSix.classList.remove('selected-move');
  
  
  panelSix.classList.add('occupied-p13');
  panelSix.classList.add('asterios');
  panelSix.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('asterios');
 panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p7 to p6


//Move from p7 to p9
const sevenNine = function sevenToNine() { if(panelNine.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p11')))
  ) {
    
if(panelNine.classList.contains('occupied-p21') ||
panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('mash');
  panelNine.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('artoria');
  panelNine.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('gilgamesh');
  panelNine.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p11');
  panelNine.classList.add('asterios');
  panelNine.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p12')))
  ) {
    
if(panelNine.classList.contains('occupied-p21') ||
panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('mash');
  panelNine.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('artoria');
  panelNine.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('gilgamesh');
  panelNine.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p12');
  panelNine.classList.add('asterios');
  panelNine.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') &&(panelNine.classList.contains('occupied-p13')))
  ) {
    
if(panelNine.classList.contains('occupied-p21') ||
panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('mash');
  panelNine.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('artoria');
  panelNine.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('gilgamesh');
  panelNine.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelNine.classList.remove('selected-move');
  
  
  panelNine.classList.add('occupied-p13');
  panelNine.classList.add('asterios');
  panelNine.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('asterios');
 panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p7 to p9


//Move from p7 to p10
const sevenTen = function sevenToTen() { if(panelTen.classList.contains('pending-move') && (panelTen.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p11')))
  ) {
    
if(panelTen.classList.contains('occupied-p21') ||
panelTen.classList.contains('occupied-p22') || panelTen.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('mash');
  panelTen.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('artoria');
  panelTen.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panetenl.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('gilgamesh');
  panelTen.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p11');
  panelTen.classList.add('asterios');
  panelTen.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p11');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelTen.classList.contains('selected-move') && (panelSeven.classList.contains('occupied-p12')))
  ) {
    
if(panelTen.classList.contains('occupied-p21') ||
panelTen.classList.contains('occupied-p22') || panelTen.classList.contains('occupied-p23')) {
  
    battle()
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('mash');
  panelTen.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase +=1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('artoria');
  panelTen.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('gilgamesh');
  panelTen.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p12');
  panelTen.classList.add('asterios');
  panelTen.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p12');
  panelSeven.classList.remove('asterios');
  panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  
  
  
  
  if(panelSeven.classList.contains('pending-move') && (panelTen.classList.contains('selected-move') &&(panelTen.classList.contains('occupied-p13')))
  ) {
    
if(panelTen.classList.contains('occupied-p21') ||
panelTen.classList.contains('occupied-p22') || panelTen.classList.contains('occupied-p23')) {
  
    battle();
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('mash')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('mash');
  panelTen.classList.add('shielder');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('mash');
  panelSeven.classList.remove('shielder');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('artoria')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('artoria');
  panelTen.classList.add('saber');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('artoria');
  panelSeven.classList.remove('saber');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('gilgamesh')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('gilgamesh');
  panelTen.classList.add('archer');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('gilgamesh');
  panelSeven.classList.remove('archer');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
  
} else if(!panelTen.classList.contains('occupied-p21') && !panelTen.classList.contains('occupied-p22') && !panelTen.classList.contains('occupied-p23') && panelSeven.classList.contains('asterios')) {
  
  panelTen.classList.remove('selected-move');
  
  
  panelTen.classList.add('occupied-p13');
  panelTen.classList.add('asterios');
  panelTen.classList.add('berserker');
  
  
   panelSeven.classList.remove('occupied-p13');
  panelSeven.classList.remove('asterios');
 panelSeven.classList.remove('berserker');
  panelSeven.removeEventListener('click', pSevenClick);
  panelSeven.classList.remove('pending-move');
  
  
  panelThree.classList.remove('movable');
  panelFour.classList.remove('movable');
  panelSix.classList.remove('movable');
  panelEight.classList.remove('movable');
  panelNine.classList.remove('movable');
  panelTen.classList.remove('movable');
  
  turnPhase += 1;
} 
  }
  
  checkAll();
};
//End of move from p7 to p10
//End of panel 7 section



//Panel 8 section
//Player 2 movable 8-5
const pEightClick = function() {
 if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {

 if(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p22') &&
(panelEight.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p23') &&
(panelEight.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelFive.classList.contains('occupied-p22') && (!panelFive.classList.contains('occupied-p23') &&
(panelEight.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelEight.classList.add('pending-move');
   
   panelFive.classList.add('movable')
 };
//End of player two movable 8-5
   
//Player one movable 8-5
if(!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p12') &&
(panelEight.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p13') &&
(panelEight.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelFive.classList.contains('occupied-p12') && (!panelFive.classList.contains('occupied-p13') &&
(panelEight.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelEight.classList.add('pending-move');
  
  panelFive.classList.add('movable');
};
//End of player one movable 8-5
 
//Player one movable 8-6
if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
(panelEight.classList.contains('occupied-p13')) && turnPhase == 2 ||

(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
(panelEight.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
(panelEight.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelEight.classList.add('pending-move');
  
  panelSix.classList.add('movable')
};
//End of player one movable 8-6

//Player two movable 8-6
if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
(panelFive.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

  (!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
(panelEight.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
(panelEight.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
  panelEight.classList.add('pending-move');
  
  panelSix.classList.add('movable');
};
//End of player two movable 8-6

   
//Player one movable 8-9
if(!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p12') &&
(panelEight.classList.contains('occupied-p13')) && turnPhase == 2 ||

  (!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p13') &&
(panelEight.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelNine.classList.contains('occupied-p12') && (!panelNine.classList.contains('occupied-p13') &&
(panelEight.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelEight.classList.add('pending-move');
  
  panelNine.classList.add('movable')
};
//End of player one movable 8-9
   
//Player two movable 8-9
if(!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p22') &&
(panelEight.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

  (!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p23') &&
(panelEight.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelNine.classList.contains('occupied-p22') && (!panelNine.classList.contains('occupied-p23') &&
(panelEight.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
  panelEight.classList.add('pending-move');
  
  panelNine.classList.add('movable');
};
 //End of player two movable 8-9
  } else 
 //Remove movable/pending move
  if(panelEight.classList.contains('pending-move')) {
   panelEight.classList.remove('pending-move');
 
    panelFive.classList.remove('movable');
    panelSix.classList.remove('movable');
 panelNine.classList.remove('movable');
    //End of remove movable/pending-move
}};









function c8hosen5() {
if(panelFive.classList.contains('movable')) {
     panelFive.classList.add('selected-move');
  
     if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
      discardAlert('Mash');

      discardListenerMash(eightFive);
  }

   
   
   
if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
  discardAlert('Artoria');

  discardListenerArtoria(eightFive);
}

   
   
  
if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
  discardAlert('Gilgamesh');

  discardListenerGilgamesh(eightFive);
}
  


if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
  discardAlert('Asterios');

  discardListenerAsterios(eightFive);
}
  }
}













function c8hosen6() {
if(panelSix.classList.contains('movable')) {
     panelSix.classList.add('selected-move');
  
     if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
      discardAlert('Mash');

      discardListenerMash(eightSix);
  }
   
   
   
if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
  discardAlert('Artoria');

  discardListenerArtoria(eightSix);
}

   
   
  
if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
  discardAlert('Gilgamesh');

  discardListenerGilgamesh(eightSix);
}
  


if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
  discardAlert('Asterios');

  discardListenerAsterios(eightSix);
}
}
}




function c8hosen9() {
if(panelNine.classList.contains('movable')) {
     panelNine.classList.add('selected-move');
  
     if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
      discardAlert('Mash');

      discardListenerMash(eightNine);
  }
   
   
   
if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
  discardAlert('Artoria');

  discardListenerArtoria(eightNine);
}

   
   
  
if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
  discardAlert('Gilgamesh');

  discardListenerGilgamesh(eightNine);
}
  


if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
  discardAlert('Asterios');

  discardListenerAsterios(eightNine);
}
}
}









//Move from p8 to p5
const eightFive = function eightToFive() {
if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p23')))
  ) {
  
  panelFive.classList.add('occupied-p23');
  
  panelEight.classList.remove('occupied-p23');

  removeMovable();
  
  //battle();
}
  
if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p21')))
  ) {
  
  panelFive.classList.add('occupied-p21');
  
  panelEight.classList.remove('occupied-p21');

  removeMovable();
  
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p22')))
  ) {
  
  panelFive.classList.add('occupied-p22');
  
  panelEight.classList.remove('occupied-p22');

  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p11')))
  ) {
  
  panelFive.classList.add('occupied-p11');
  
  panelEight.classList.remove('occupied-p11');

  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p12')))
  ) {
  
  panelFive.classList.add('occupied-p12');
  
  panelEight.classList.remove('occupied-p12');

  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p13')))
  ) {
  
  panelFive.classList.add('occupied-p13');
    
  panelEight.classList.remove('occupied-p13');

  removeMovable();
}
  checkAll();
};
//End of move from p8 to p5



//Move from p8 to p6
const eightSix = function eightToSix() {
if(panelEight.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelEight.classList.contains('occupied-p23')))
  ) {
  
  panelSix.classList.add('occupied-p23');
  
  panelEight.classList.remove('occupied-p23');
  
  removeMovable();
  
  //battle();
}
  
if(panelEight.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelEight.classList.contains('occupied-p21')))
  ) {
  
  panelSix.classList.add('occupied-p21');
  
  panelEight.classList.remove('occupied-p21');
  
  removeMovable();
  
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelNine.classList.contains('movable') && (panelEight.classList.contains('occupied-p22')))
  ) {
  
  panelSix.classList.add('occupied-p22');
  
  panelEight.classList.remove('occupied-p22');
  
  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelEight.classList.contains('occupied-p11')))
  ) {
  
  panelSix.classList.add('occupied-p11');
  
  panelEight.classList.remove('occupied-p11');
  
  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelEight.classList.contains('occupied-p12')))
  ) {
  
  panelSix.classList.add('occupied-p12');
  
  panelEight.classList.remove('occupied-p12');
 
  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelEight.classList.contains('occupied-p13')))
  ) {
  
  panelSix.classList.add('occupied-p13');
    
  panelEight.classList.remove('occupied-p13');
  
  removeMovable();
  
  //battle();
}
  checkAll();
};
//End of move from p8 to p6

//Move from p8 to p9
const eightNine = function eightToNine() {
if(panelEight.classList.contains('pending-move') && (panelNine.classList.contains('movable') && (panelEight.classList.contains('occupied-p23')))
  ) {
  
  panelNine.classList.add('occupied-p23');
  
  panelEight.classList.remove('occupied-p23');
  
  removeMovable();
  
  //battle();
}
  
if(panelEight.classList.contains('pending-move') && (panelNine.classList.contains('movable') && (panelEight.classList.contains('occupied-p21')))
  ) {
  
  panelNine.classList.add('occupied-p21');
  
  panelEight.classList.remove('occupied-p21');
  
  removeMovable();
  
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelNine.classList.contains('movable') && (panelEight.classList.contains('occupied-p22')))
  ) {
  
  panelNine.classList.add('occupied-p22');
  
  panelEight.classList.remove('occupied-p22');
  
  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelNine.classList.contains('movable') && (panelEight.classList.contains('occupied-p11')))
  ) {
  
  panelNine.classList.add('occupied-p11');
  
  panelEight.classList.remove('occupied-p11');
  
  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelNine.classList.contains('movable') && (panelEight.classList.contains('occupied-p12')))
  ) {
  
  panelNine.classList.add('occupied-p12');
  
  panelEight.classList.remove('occupied-p12');
 
  removeMovable();
    
  //battle();
}
  
  if(panelEight.classList.contains('pending-move') && (panelNine.classList.contains('movable') && (panelEight.classList.contains('occupied-p13')))
  ) {
  
  panelNine.classList.add('occupied-p13');
    
  panelEight.classList.remove('occupied-p13');
  
  removeMovable();
  
  //battle();
}
  checkAll();
};
//End of move from p8 to p9
//End of panel 8 section



//Panel 9 section
//Player 2 movable 9-5
const pNineClick = function() {
 if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {
   
   
//Player two movable 9-11
if(!panelEleven.classList.contains('occupied-p21') && (!panelEleven.classList.contains('occupied-p22') &&
(panelNine.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
  (!panelEleven.classList.contains('occupied-p21') && (!panelEleven.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelEleven.classList.contains('occupied-p22') && (!panelEleven.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
  panelNine.classList.add('pending-move');
  
  panelEleven.classList.add('movable');
};
//End of player two movable 9-11

   
//Player one movable 9-5
if(!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p12') &&
(panelNine.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelFive.classList.contains('occupied-p11') && (!panelFive.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelFive.classList.contains('occupied-p12') && (!panelFive.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelNine.classList.add('pending-move');
  
  panelFive.classList.add('movable');
};
//End of player one movable 9-5
   
//Player two movable 9-5
if(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p22') &&
(panelNine.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelFive.classList.contains('occupied-p21') && (!panelFive.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelFive.classList.contains('occupied-p22') && (!panelFive.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelNine.classList.add('pending-move');
   
   panelFive.classList.add('movable')
 };
//End of player two movable 9-5
   
  
//Player one movable 9-6
if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
(panelNine.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelNine.classList.add('pending-move');
  
  panelSix.classList.add('movable');
};
//End of player one movable 9-6
   
//Player two movable 9-6
if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
(panelNine.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelNine.classList.add('pending-move');
   
   panelSix.classList.add('movable')
 };
//End of player two movable 9-6
   
   
//Player one movable 9-7
if(!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p12') &&
(panelNine.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelSeven.classList.contains('occupied-p12') && (!panelSeven.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelNine.classList.add('pending-move');
  
  panelSeven.classList.add('movable');
};
//End of player one movable 9-7
   
//Player two movable 9-7
if(!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p22') &&
(panelNine.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelSeven.classList.contains('occupied-p22') && (!panelSeven.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelNine.classList.add('pending-move');
   
   panelSeven.classList.add('movable')
 };
//End of player two movable 9-7
   
   
//Player one movable 9-8
if(!panelEight.classList.contains('occupied-p11') && (!panelEight.classList.contains('occupied-p12') &&
(panelNine.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelEight.classList.contains('occupied-p11') && (!panelEight.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelEight.classList.contains('occupied-p12') && (!panelEight.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelNine.classList.add('pending-move');
  
  panelEight.classList.add('movable');
};
//End of player one movable 9-8
   
//Player two movable 9-8
if(!panelEight.classList.contains('occupied-p21') && (!panelEight.classList.contains('occupied-p22') &&
(panelNine.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelEight.classList.contains('occupied-p21') && (!panelEight.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelEight.classList.contains('occupied-p22') && (!panelEight.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelNine.classList.add('pending-move');
   
   panelEight.classList.add('movable')
 };
//End of player two movable 9-8
   
   
//Player one movable 9-10
if(!panelTen.classList.contains('occupied-p11') && (!panelTen.classList.contains('occupied-p12') &&
(panelNine.classList.contains('occupied-p13')) && turnPhase == 2 ||
  (!panelTen.classList.contains('occupied-p11') && (!panelTen.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
(!panelTen.classList.contains('occupied-p12') && (!panelTen.classList.contains('occupied-p13') &&
(panelNine.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
  panelNine.classList.add('pending-move');
  
  panelTen.classList.add('movable');
};
//End of player one movable 9-10
   
//Player two movable 9-10
if(!panelTen.classList.contains('occupied-p21') && (!panelTen.classList.contains('occupied-p22') &&
(panelNine.classList.contains('occupied-p23')) && turnPhase2 == 2 ||

(!panelTen.classList.contains('occupied-p21') && (!panelTen.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
(!panelTen.classList.contains('occupied-p22') && (!panelTen.classList.contains('occupied-p23') &&
(panelNine.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
   panelNine.classList.add('pending-move');
   
   panelTen.classList.add('movable')
 };
//End of player two movable 9-10
  
  } else 
 //Remove movable/pending move
  if(panelNine.classList.contains('pending-move')) {
   panelNine.classList.remove('pending-move');
    
 panelFive.classList.remove('movable');
    panelSix.classList.remove('movable');
  panelSeven.classList.remove('movable');
  panelEight.classList.remove('movable');
    panelTen.classList.remove('movable');
 panelEleven.classList.remove('movable');
    //End of remove movable/pending-move
}};














function c9hosen11() {
    if(panelEleven.classList.contains('movable')) {
        panelEleven.classList.add('selected-move');
     
        if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(nineEleven);
      }
    }
       
       
       
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(nineEleven);
    }
    
       
       
      
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(nineEleven);
    }
      
    
    
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(nineEleven);
    }
   }
   
   
   
   
   
   function c9hosen5() {
   if(panelFive.classList.contains('movable')) {
        panelFive.classList.add('selected-move');
     
        if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(nineFive);
      }
    }
       
       
       
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(nineFive);
    }
    
       
       
      
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(nineFive);
    }
      
    
    
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(nineFive);
    }
   }
   
   
   
   function c9hosen6() {
   if(panelSix.classList.contains('movable')) {
        panelSix.classList.add('selected-move');
     
        if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(nineSix);
      }
    }
       
       
       
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(nineSix);
    }
    
       
       
      
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(nineSix);
    }
      
    
    
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(nineSix);
    }
   }
   
   function feck() {
    alert('feck');
   }
   
   
   function c9hosen7() {
   if(panelSeven.classList.contains('movable')) {
        panelSeven.classList.add('selected-move');
     
        if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(nineSeven);
      }
    }
       
       
       
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(nineSeven);
    }
    
       
       
      
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(nineSeven);
    }
      
    
    
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(nineSeven);
    }
   }
   
   
   
   function c9hosen8() {
   if(panelEight.classList.contains('movable')) {
        panelEight.classList.add('selected-move');
     
        if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(nineEight);
      }
    }
       
       
       
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(nineEight);
    }
    
       
       
      
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(nineEight);
    }
      
    
    
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(nineEight);
    }
   }
   
   
   
   function c9hosen10() {
   if(panelTen.classList.contains('movable')) {
        panelTen.classList.add('selected-move');
     
        if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(nineTen);
      }
    }
       
       
       
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(nineTen);
    }
    
       
       
      
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(nineTen);
    }
      
    
    
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(nineTen);
    }
   }
   
   
   
   
   
   
   
   
   
   //Move from p9 to p11
   function NineToEleven() {
   if(panelNine.classList.contains('pending-move') &&(panelEleven.classList.contains('movable') && (panelNine.classList.contains('occupied-p13')))) { 
     panelEleven.classList.add('occupied-p13');
     
     panelNine.classList.remove('occupied-p13');
     
     removeMovable();
     
     twoVictory();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelEleven.classList.contains('movable') && (panelNine.classList.contains('occupied-p11')))) {
     panelEleven.classList.add('occupied-p11');
     
     panelNine.classList.remove('occupied-p11');

     removeMovable();
     
     twoVictory();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelEleven.classList.contains('movable') && (panelNine.classList.contains('occupied-p12')))) {
     panelEleven.classList.add('occupied-p12');
     
     panelNine.classList.remove('occupied-p12');

     removeMovable();
     
     twoVictory();
   }};
   //End of move from p9 to p11
   
   
   
   //Move from p9 to p5
   function nineToFive() {
   if(panelNine.classList.contains('pending-move') &&(panelFive.classList.contains('movable') && (panelNine.classList.contains('occupied-p13')))) { 
     panelFive.classList.add('occupied-p13');
     
     panelNine.classList.remove('occupied-p13');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelNine.classList.contains('occupied-p11')))) {
     panelFive.classList.add('occupied-p11');
     
     panelNine.classList.remove('occupied-p11');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelNine.classList.contains('occupied-p12')))) {
     panelFive.classList.add('occupied-p12');
     
     panelNine.classList.remove('occupied-p12');
     
     removeMovable();
   }
     
     if(panelNine.classList.contains('pending-move') &&(panelFive.classList.contains('movable') && (panelNine.classList.contains('occupied-p23')))) { 
     panelFive.classList.add('occupied-p23');

     panelNine.classList.remove('occupied-p23');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelNine.classList.contains('occupied-p21')))) {
     panelFive.classList.add('occupied-p21');
     
     panelNine.classList.remove('occupied-p21');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelNine.classList.contains('occupied-p22')))) {
     panelFive.classList.add('occupied-p22');
     
     panelNine.classList.remove('occupied-p22');
     
     removeMovable();
   }
   checkAll();
   };
   //End of move from p9 to p5
   
   
   //Move from p9 to p6
   function nineToSix() {
   if(panelNine.classList.contains('pending-move') &&(panelSix.classList.contains('movable') && (panelNine.classList.contains('occupied-p13')))) { 
     panelSix.classList.add('occupied-p13');
     
     panelNine.classList.remove('occupied-p13');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelNine.classList.contains('occupied-p11')))) {
     panelSix.classList.add('occupied-p11');
     
     panelNine.classList.remove('occupied-p11');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelNine.classList.contains('occupied-p12')))) {
     panelSix.classList.add('occupied-p12');

     panelNine.classList.remove('occupied-p12');
     
     removeMovable();
   }
     
     if(panelNine.classList.contains('pending-move') &&(panelSix.classList.contains('movable') && (panelNine.classList.contains('occupied-p23')))) { 
     panelSix.classList.add('occupied-p23');
     
     panelNine.classList.remove('occupied-p23');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelNine.classList.contains('occupied-p21')))) {
     panelSix.classList.add('occupied-p21');
     
     panelNine.classList.remove('occupied-p21');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSix.classList.contains('movable') && (panelNine.classList.contains('occupied-p22')))) {
     panelSix.classList.add('occupied-p22');
     
     panelNine.classList.remove('occupied-p22');
     
     removeMovable();
   }
   checkAll();
   };
   //End of move from p9 to p6
   
   
   //Move from p9 to p7
   function nineToSeven() {
   if(panelNine.classList.contains('pending-move') &&(panelSeven.classList.contains('movable') && (panelNine.classList.contains('occupied-p13')))) { 
     panelSeven.classList.add('occupied-p13');
     
     panelNine.classList.remove('occupied-p13');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSeven.classList.contains('movable') && (panelNine.classList.contains('occupied-p11')))) {
     panelSeven.classList.add('occupied-p11');
     
     panelNine.classList.remove('occupied-p11');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSeven.classList.contains('movable') && (panelNine.classList.contains('occupied-p12')))) {
     panelSeven.classList.add('occupied-p12');
     
     panelNine.classList.remove('occupied-p12');
     
     removeMovable();
   }
     
     if(panelNine.classList.contains('pending-move') &&(panelSeven.classList.contains('movable') && (panelNine.classList.contains('occupied-p23')))) { 
     panelSeven.classList.add('occupied-p23');
     
     panelNine.classList.remove('occupied-p23');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSeven.classList.contains('movable') && (panelNine.classList.contains('occupied-p21')))) {
     panelSeven.classList.add('occupied-p21');
     
     panelNine.classList.remove('occupied-p21');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelSeven.classList.contains('movable') && (panelNine.classList.contains('occupied-p22')))) {
     panelSeven.classList.add('occupied-p22');
     
     panelNine.classList.remove('occupied-p22');
     
     removeMovable();
   }
   checkAll();
   };
   //End of move from p9 to p7
   
   
   //Move from p9 to p8
   function nineToEight() {
   if(panelNine.classList.contains('pending-move') &&(panelEight.classList.contains('movable') && (panelNine.classList.contains('occupied-p13')))) { 
     panelEight.classList.add('occupied-p13');
     
     panelNine.classList.remove('occupied-p13');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelEight.classList.contains('movable') && (panelNine.classList.contains('occupied-p11')))) {
     panelEight.classList.add('occupied-p11');
     
     panelNine.classList.remove('occupied-p11');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelEight.classList.contains('movable') && (panelNine.classList.contains('occupied-p12')))) {
     panelEight.classList.add('occupied-p12');
     
     panelNine.classList.remove('occupied-p12');
     
     removeMovable();
   }
     
     if(panelNine.classList.contains('pending-move') &&(panelEight.classList.contains('movable') && (panelNine.classList.contains('occupied-p23')))) { 
     panelEight.classList.add('occupied-p23');
     
     panelNine.classList.remove('occupied-p23');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelEight.classList.contains('movable') && (panelNine.classList.contains('occupied-p21')))) {
     panelEight.classList.add('occupied-p21');
     
     panelNine.classList.remove('occupied-p21');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelEight.classList.contains('movable') && (panelNine.classList.contains('occupied-p22')))) {
     panelEight.classList.add('occupied-p22');
     
     panelNine.classList.remove('occupied-p22');
     
     removeMovable();
   }
   checkAll();
   };
   //End of move from p9 to p8
   
   
   //Move from p9 to p10
   function nineToTen() {
   if(panelNine.classList.contains('pending-move') &&(panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p13')))) { 
     panelTen.classList.add('occupied-p13');
     
     panelNine.classList.remove('occupied-p13');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p11')))) {
     panelTen.classList.add('occupied-p11');
     
     panelNine.classList.remove('occupied-p11');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p12')))) {
     panelTen.classList.add('occupied-p12');
     
     panelNine.classList.remove('occupied-p12');
     
     removeMovable();
   }
     
     if(panelNine.classList.contains('pending-move') &&(panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p23')))) { 
     panelTen.classList.add('occupied-p23');
     
     panelNine.classList.remove('occupied-p23');

     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p21')))) {
     panelTen.classList.add('occupied-p21');
     
     panelNine.classList.remove('occupied-p21');
     
     removeMovable();
   }
     
   if(panelNine.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p22')))) {
     panelTen.classList.add('occupied-p22');
     
     panelNine.classList.remove('occupied-p22');
     
     removeMovable();
   }
   checkAll();
   };
   //End of move from p9 to p10
   //End of panel 9 section
   
   
   
   //Panel 10 section
   //Player 2 movable 10-6
   const pTenClick = function() {
    if(!panelTwo.classList.contains('pending-move') && !panelThree.classList.contains('pending-move') && !panelFour.classList.contains('pending-move') && !panelFive.classList.contains('pending-move') && !panelSix.classList.contains('pending-move') && !panelSeven.classList.contains('pending-move') && !panelEight.classList.contains('pending-move') && !panelNine.classList.contains('pending-move') && !panelTen.classList.contains('pending-move')) {
   
    if(!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p22') &&
   (panelTen.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
   (!panelSix.classList.contains('occupied-p21') && (!panelSix.classList.contains('occupied-p23') &&
   (panelTen.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSix.classList.contains('occupied-p22') && (!panelSix.classList.contains('occupied-p23') &&
   (panelTen.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
      panelTen.classList.add('pending-move');
      
      panelSix.classList.add('movable')
    };
   //End of player two movable 10-6
      
   //Player one movable 10-6
   if(!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p12') &&
   (panelTen.classList.contains('occupied-p13')) && turnPhase == 2 ||
     (!panelSix.classList.contains('occupied-p11') && (!panelSix.classList.contains('occupied-p13') &&
   (panelTen.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSix.classList.contains('occupied-p12') && (!panelSix.classList.contains('occupied-p13') &&
   (panelTen.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelTen.classList.add('pending-move');
     
     panelSix.classList.add('movable');
   };
   //End of player one movable 10-6
    
   //Player one movable 10-7
   if(!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p12') &&
   (panelTen.classList.contains('occupied-p13')) && turnPhase == 2 ||
   
   (!panelSeven.classList.contains('occupied-p11') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelTen.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p12') && (!panelSeven.classList.contains('occupied-p13') &&
   (panelTen.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelTen.classList.add('pending-move');
     
     panelSeven.classList.add('movable')
   };
   //End of player one movable 10-7
   
   //Player two movable 10-7
   if(!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p22') &&
   (panelTen.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
     (!panelSeven.classList.contains('occupied-p21') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelTen.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelSeven.classList.contains('occupied-p22') && (!panelSeven.classList.contains('occupied-p23') &&
   (panelTen.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
     panelTen.classList.add('pending-move');
     
     panelSeven.classList.add('movable');
   };
   //End of player two movable 10-7
   
      
   //Player one movable 10-9
   if(!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p12') &&
   (panelTen.classList.contains('occupied-p13')) && turnPhase == 2 ||
   
     (!panelNine.classList.contains('occupied-p11') && (!panelNine.classList.contains('occupied-p13') &&
   (panelTen.classList.contains('occupied-p12')) && turnPhase == 2 ||                                        
   (!panelNine.classList.contains('occupied-p12') && (!panelNine.classList.contains('occupied-p13') &&
   (panelTen.classList.contains('occupied-p11')) && turnPhase == 2)))))) {
     panelTen.classList.add('pending-move');
     
     panelNine.classList.add('movable')
   };
   //End of player one movable 10-9
      
   //Player two movable 10-9
   if(!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p22') &&
   (panelTen.classList.contains('occupied-p23')) && turnPhase2 == 2 ||
   
     (!panelNine.classList.contains('occupied-p21') && (!panelNine.classList.contains('occupied-p23') &&
   (panelTen.classList.contains('occupied-p22')) && turnPhase2 == 2 ||                                        
   (!panelNine.classList.contains('occupied-p22') && (!panelNine.classList.contains('occupied-p23') &&
   (panelTen.classList.contains('occupied-p21')) && turnPhase2 == 2)))))) {
     panelTen.classList.add('pending-move');
     
     panelNine.classList.add('movable');
   };
    //End of player two movable 10-9
     } else 
    //Remove movable/pending move
     if(panelTen.classList.contains('pending-move')) {
      panelTen.classList.remove('pending-move');
       
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
      panelNine.classList.remove('movable');
       //End of remove movable/pending-move
   }};
   
   
   
   
   
   
   
   
   
   function c10hosen6() {
   if(panelSix.classList.contains('movable')) {
        panelSix.classList.add('selected-move');
     
        if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(tenSix);
      }
    }
       
       
       
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(tenSix);
    }
    
       
       
      
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(tenSix);
    }
      
    
    
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(tenSix);
    }
   }
   
   
   
   
   
   
   
   
   
   
   
   
   function c10hosen7() {
   if(panelSeven.classList.contains('movable')) {
        panelSeven.classList.add('selected-move');
     
        if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(tenSeven);
      }
    }
       
       
       
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(tenSeven);
    }
    
       
       
      
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(tenSeven);
    }
      
    
    
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(tenSeven);
    }
   }
   
   
   
   
   
   function c10hosen9() {
   if(panelNine.classList.contains('movable')) {
        panelNine.classList.add('selected-move');
     
        if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListenerMash(tenNine);
      }
    }
       
       
       
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListenerArtoria(tenNine);
    }
    
       
       
      
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListenerGilgamesh(tenNine);
    }
      
    
    
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListenerAsterios(tenNine);
    }
   }
   
   
   
   
   
   
   
   
   
   //Move from p10 to p6
   const tenSix = function tenToSix() {
   if(panelTen.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelTen.classList.contains('occupied-p11')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
   panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p11');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelTen.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') && (panelTen.classList.contains('occupied-p12')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
   panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p12');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelTen.classList.contains('pending-move') && (panelSix.classList.contains('selected-move') &&(panelTen.classList.contains('occupied-p13')))
     ) {
       
   if(panelSix.classList.contains('occupied-p21') ||
     panelSix.classList.contains('occupied-p22') || panelSix.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('mash');
     panelSix.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('artoria');
     panelSix.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('gilgamesh');
     panelSix.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSix.classList.contains('occupied-p21') && !panelSix.classList.contains('occupied-p22') && !panelSix.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelSix.classList.remove('selected-move');
     
     
     panelSix.classList.add('occupied-p13');
     panelSix.classList.add('asterios');
     panelSix.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p10 to p6
   
   
   
   //Move from p10 to p7
   const tenSeven = function tenToSeven() {
   if(panelTen.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelTen.classList.contains('occupied-p11')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
   panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p11');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
      turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelTen.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelTen.classList.contains('occupied-p12')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
   panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p12');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelTen.classList.contains('pending-move') && (panelSeven.classList.contains('selected-move') && (panelTen.classList.contains('occupied-p13')))
     ) {
       
   if(panelSeven.classList.contains('occupied-p21') ||
     panelSeven.classList.contains('occupied-p22') || panelSeven.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('mash');
     panelSeven.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
       if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('artoria');
     panelSeven.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   }
       if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('gilgamesh');
     panelSeven.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
         turnPhase += 1;
   }
       if(!panelSeven.classList.contains('occupied-p21') && !panelSeven.classList.contains('occupied-p22') && !panelSeven.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelSeven.classList.remove('selected-move');
     
     
     panelSeven.classList.add('occupied-p13');
     panelSeven.classList.add('asterios');
     panelSeven.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
         
         turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p10 to p7
   
   
   
   //Move from p10 to p9
   const tenNine = function tenToNine() {
   if(panelTen.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelTen.classList.contains('occupied-p11')))
     ) {
       
   if(panelNine.classList.contains('occupied-p21') ||
   panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('mash');
     panelNine.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('artoria');
     panelNine.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('gilgamesh');
     panelNine.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p11');
     panelNine.classList.add('asterios');
     panelNine.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p11');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelTen.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') && (panelTen.classList.contains('occupied-p12')))
     ) {
       
   if(panelNine.classList.contains('occupied-p21') ||
   panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
     
       battle()
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('mash');
     panelNine.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase +=1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('artoria');
     panelNine.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('gilgamesh');
     panelNine.classList.add('archer');
     
     
     panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p12');
     panelNine.classList.add('asterios');
     panelNine.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p12');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     
     
     
     
     if(panelTen.classList.contains('pending-move') && (panelNine.classList.contains('selected-move') &&(panelTen.classList.contains('occupied-p13')))
     ) {
       
   if(panelNine.classList.contains('occupied-p21') ||
     panelNine.classList.contains('occupied-p22') || panelNine.classList.contains('occupied-p23')) {
     
       battle();
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('mash')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('mash');
     panelNine.classList.add('shielder');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('mash');
     panelTen.classList.remove('shielder');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('artoria')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('artoria');
     panelNine.classList.add('saber');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('artoria');
     panelTen.classList.remove('saber');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('gilgamesh')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('gilgamesh');
     panelNine.classList.add('archer');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('gilgamesh');
     panelTen.classList.remove('archer');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
     
   } else if(!panelNine.classList.contains('occupied-p21') && !panelNine.classList.contains('occupied-p22') && !panelNine.classList.contains('occupied-p23') && panelTen.classList.contains('asterios')) {
     
     panelNine.classList.remove('selected-move');
     
     
     panelNine.classList.add('occupied-p13');
     panelNine.classList.add('asterios');
     panelNine.classList.add('berserker');
     
     
      panelTen.classList.remove('occupied-p13');
     panelTen.classList.remove('asterios');
     panelTen.classList.remove('berserker');
     panelTen.removeEventListener('click', pTenClick);
     panelTen.classList.remove('pending-move');
     
     
     panelSix.classList.remove('movable');
     panelSeven.classList.remove('movable');
     panelNine.classList.remove('movable');
     
     turnPhase += 1;
   } 
     }
     
     checkAll();
   };
   //End of move from p10 to p9
   
   
   
   //Add pTwo click movable to move EL
   function checkPTwo() {
   if(panelTwo.classList.contains('occupied-p11') || (panelTwo.classList.contains('occupied-p12') ||(panelTwo.classList.contains('occupied-p13') ||(panelTwo.classList.contains('occupied-p21') || (panelTwo.classList.contains('occupied-p22') ||(panelTwo.classList.contains('occupied-p23') && (!panelTwo.classList.contains('pending-move')))))))) {
     panelTwo.addEventListener('click', pTwoClick);                  
     }}
   //End of add pTwo click movable to move EL
   
   
   
   //Add pThree click movable to move EL
   function checkPThree() {
   if(panelThree.classList.contains('occupied-p11') || (panelThree.classList.contains('occupied-p12') ||(panelThree.classList.contains('occupied-p13') ||
   (panelThree.classList.contains('occupied-p21') ||  
   (panelThree.classList.contains('occupied-p22') ||
   (panelThree.classList.contains('occupied-p23') &&
   (!panelThree.classList.contains('pending-move')))))))) {
     panelThree.addEventListener('click', pThreeClick);                  
    }}
   //End of add pThree click movable to move EL
   
   
   
   //Add pFour click movable to move EL
   function checkPFour() {
    if(panelFour.classList.contains('occupied-p11') || (panelFour.classList.contains('occupied-p12') ||(panelFour.classList.contains('occupied-p13') ||(panelFour.classList.contains('occupied-p21') || (panelFour.classList.contains('occupied-p22') ||(panelFour.classList.contains('occupied-p23') && (!panelFour.classList.contains('pending-move')))))))) {
        panelFour.addEventListener('click', pFourClick);                  
        }}
      //End of add pFour click movable to move EL
      
      
      
      //Add pFive click movable to move EL
      function checkPFive() {
      if(panelFive.classList.contains('occupied-p11') || (panelFive.classList.contains('occupied-p12') ||(panelFive.classList.contains('occupied-p13') ||(panelFive.classList.contains('occupied-p21') || (panelFive.classList.contains('occupied-p22') ||(panelFive.classList.contains('occupied-p23') && (!panelFive.classList.contains('pending-move')))))))) {
        panelFive.addEventListener('click', pFiveClick);                  
        }}
      //End of add pFive click movable to move EL
      
      
      
      //Add pSix click movable to move EL
      function checkPSix() {
      if(panelSix.classList.contains('occupied-p11') || (panelSix.classList.contains('occupied-p12') ||(panelSix.classList.contains('occupied-p13') ||(panelSix.classList.contains('occupied-p21') || (panelSix.classList.contains('occupied-p22') ||(panelSix.classList.contains('occupied-p23') && (!panelSix.classList.contains('pending-move')))))))) {
        panelSix.addEventListener('click', pSixClick);                  
        }}
      //End of add pSix click movable to move EL
      
      
      
      //Add pSeven click movable to move EL
      function checkPSeven() {
      if(panelSeven.classList.contains('occupied-p11') || (panelSeven.classList.contains('occupied-p12') ||(panelSeven.classList.contains('occupied-p13') ||(panelSeven.classList.contains('occupied-p21') || (panelSeven.classList.contains('occupied-p22') ||(panelSeven.classList.contains('occupied-p23') && (!panelSeven.classList.contains('pending-move')))))))) {
        panelSeven.addEventListener('click', pSevenClick);                  
        }}
      //End of add pSeven click movable to move EL
      
      
      
      //Add pEight click movable to move EL
      function checkPEight() {
      if(panelEight.classList.contains('occupied-p11') || (panelEight.classList.contains('occupied-p12') ||(panelEight.classList.contains('occupied-p13') ||(panelEight.classList.contains('occupied-p21') || (panelEight.classList.contains('occupied-p22') ||(panelEight.classList.contains('occupied-p23') && (!panelEight.classList.contains('pending-move')))))))) { panelEight.addEventListener('click', pEightClick);                  
        }}
      //End of add pEight click movable to move EL
      
      
      
      //Add pNine click movable to move EL
      function checkPNine() {
      if(panelNine.classList.contains('occupied-p11') || (panelNine.classList.contains('occupied-p12') ||(panelNine.classList.contains('occupied-p13') ||(panelNine.classList.contains('occupied-p21') || (panelNine.classList.contains('occupied-p22') ||(panelNine.classList.contains('occupied-p23') && (!panelNine.classList.contains('pending-move')))))))) {
        panelNine.addEventListener('click', pNineClick);                  
        }}
      //End of add pNine click movable to move EL
      
      
      
      //Add pTwo click movable to move EL
      function checkPTen() {
      if(panelTen.classList.contains('occupied-p11') || (panelTen.classList.contains('occupied-p12') ||(panelTen.classList.contains('occupied-p13') ||(panelTen.classList.contains('occupied-p21') || (panelTen.classList.contains('occupied-p22') ||(panelTen.classList.contains('occupied-p23') && (!panelTen.classList.contains('pending-move')))))))) {
        panelTen.addEventListener('click', pTenClick);                  
        }}
      //End of add pTen click movable to move EL
      
      
      
      function checkAll() {
        checkPTwo();
        checkPThree();
        checkPFour();
        checkPFive();
        checkPSix();
        checkPSeven();
        checkPEight();
        checkPNine();
        checkPTen();
      }
      checkAll();
      
      
      
      //Player one wins alert
      function oneVictory() {
        alert('Player one wins!');
      };
      //End of player one wins alert
      
      
      
      //Player two wins alert
      function twoVictory() {
        alert('Player two wins!');
      };
      //End of player two wins alert
      
      
      
      /*
      document.getElementById('test').addEventListener('click', function() {
      if(panelTwo.style.pointerEvents !== 'none') {   
        document.getElementById('panel-2').style.pointerEvents = 'none';
           } else { document.getElementById('panel-2').style.pointerEvents = 'auto';
      }})*/
      
      
      
      //Start battle
      function battle() {
         alert('Battle!');
        
        battleTime += 1;
         };
      //End of start battle
      
      
      /*
      //Pause screen for battle
      document.getElementById('test').addEventListener('click', function() {
      if(panelTwo.style.pointerEvents !== 'none') {   
        document.getElementById('panel-2').style.pointerEvents = 'none';
         
        document.getElementById('panel-3').style.pointerEvents = 'none';
          
        document.getElementById('panel-4').style.pointerEvents = 'none';
       
        document.getElementById('panel-5').style.pointerEvents = 'none';
              
        document.getElementById('panel-6').style.pointerEvents = 'none';
                        
        document.getElementById('panel-7').style.pointerEvents = 'none';
                           
        document.getElementById('panel-8').style.pointerEvents = 'none';                     
        document.getElementById('panel-9').style.pointerEvents = 'none';
                                 
        document.getElementById('panel-10').style.pointerEvents = 'none';
      }})
      */
      
      
      
      
      
      
      
      function unitTwoToThree() {
        if(panelTwo.classList.contains('mash')) {
      panelThree.classList.contains('mash');
      panelThree.classList.contains('shielder');
          
      panelTwo.classList.remove('mash');
      panelTwo.classList.remove('shielder');      }
      }
      
      
      
      
      
      var servantP11 = [];
      
      var servantP12 = [];
      
      var servantP13 = [];
      
      var partyTotal = 0;
      
      
      
      
      
      
      
      
      function mashPush() {
        if(servantP11.includes("mash")) {
          servantP11 = [];
        } else if(servantP12.includes('mash')) {
          servantP12 = [];
        } else if(servantP13.includes('mash')) {
          servantP13 = [];
        } else if(servantP11.length == 0) {
          servantP11.push("mash");
        } else if(servantP12.length == 0) {
          servantP12.push('mash');
        } else if(servantP13.length == 0) {
          servantP13.push('mash');
        }
      };
      
      function artoriaPush() {
        if(servantP11.includes("artoria")) {
          servantP11 = [];
          partyTotal -= 5;
        } else if(servantP12.includes('artoria')) {
          servantP12 = [];
          partyTotal -= 5;
        } else if(servantP13.includes('artoria')) {
          servantP13 = [];
          partyTotal -= 5;
        } else if(servantP11.length == 0) {
          servantP11.push("artoria");
          partyTotal += 5;
        } else if(servantP12.length == 0) {
          servantP12.push('artoria');
          partyTotal += 5;
        } else if(servantP13.length == 0) {
          servantP13.push('artoria');
          partyTotal += 5;
        }
      };
      
      function gilgameshPush() {
        if(servantP11.includes("gilgamesh")) {
          servantP11 = [];
          partyTotal -= 5;
        } else if(servantP12.includes('gilgamesh')) {
          servantP12 = [];
          partyTotal -= 5;
        } else if(servantP13.includes('gilgamesh')) {
          servantP13 = [];
          partyTotal -= 5;
        } else if(servantP11.length == 0) {
          servantP11.push("gilgamesh");
          partyTotal += 5;
        } else if(servantP12.length == 0) {
          servantP12.push('gilgamesh');
          partyTotal += 5;
        } else if(servantP13.length == 0) {
          servantP13.push('gilgamesh');
          partyTotal += 5;
        }
      };
      
      function asteriosPush() {
        if(servantP11.includes("asterios")) {
          servantP11 = [];
          partyTotal -= 1;
        } else 
          
        if(servantP12.includes('asterios')) {
          servantP12 = [];
          partyTotal -= 1;
        } else 
          
        if(servantP13.includes('asterios')) {
          servantP13 = [];
          partyTotal -= 1;
        } else 
          
        if(servantP11.length == 0) {
          servantP11.push("asterios");
          partyTotal += 1;
        } else 
          
        if(servantP12.length == 0) {
          servantP12.push('asterios');
          partyTotal += 1;
        } else 
          
        if(servantP13.length == 0) {
          servantP13.push('asterios');
          partyTotal += 1;
        }
      };
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var battleTime = 0;
      
      
      
      function cancelMove() {
      panelNine.classList.remove('selected-move');
      
      document.getElementById('nr1').removeEventListener('click', eightNine);
      }
      
      
      
      
      
      
      
      
      
      /*
      function turnCounter() {
        if(document.getElementById('panel-2').classList.contains('occupied-p21')) {
          turnPhases += 1;
          document.getElementById('turn-number').textContent = turnCount;
        }
      };
      turnCounter();
      
      function turnLimiter() {
        if((turnCount % 2) == 1) {
          console.log('Odd!');
        }
      }*/
      
      
      
      
      
      
      
      
      //var turnCount = 0;
      
      
      
      
      
      
      
      
      //Player 1 unit selection
      var abilityCards = [];
      
      
      
      //Mash selection section
      function mashSelect() {
        if(!testDeck.includes(1)) {
          testDeck.push(1, 2, 3, 4, 5);
        } else if(testDeck.includes(1)) {
          testDeck = testDeck.filter(a => {
        return a !== 1 && 2 && 3 && 4 && 5});
        }
        
        if(servantP11.includes("mash")) {
          servantP11 = [];
          
          document.getElementById('select-one').style.backgroundImage = '';
        } else if(servantP12.includes('mash')) {
          servantP12 = [];
          
          document.getElementById('select-two').style.backgroundImage = '';
        } else if(servantP13.includes('mash')) {
          servantP13 = [];
          
          document.getElementById('select-three').style.backgroundImage = '';
        } else if(servantP11.length == 0) {
          servantP11.push("mash");
          
          document.getElementById('select-one').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/2019-04/001%20Mash%20Kyrieknight%203.png)';
        } else if(servantP12.length == 0) {
          servantP12.push('mash');
          
          document.getElementById('select-two').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/2019-04/001%20Mash%20Kyrieknight%203.png)';
        } else if(servantP13.length == 0) {
          servantP13.push('mash');
          
          document.getElementById('select-three').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/2019-04/001%20Mash%20Kyrieknight%203.png)';
        }
      }
      
      
      
      function skill1() {
        let skill1 = "Transient Wall of Snowflakes: [Continuous] During your opponent's turn, all of your controlled Servants get POWER +1.";
      
      let skill2 = "Obscurant Wall of Chalk: Select 1 of your Servants. On the next turn, if the selected Servant lost in a battle, if the POWER difference is 5 or less, the selected Servant will not be ELIMINATED.";
      
      let skill3 = "Shield of Rousing Resolution: On the next turn, if the opponent can move any of their Servants, the Servant they wish to move must move closer towards this unit, or into the spot that this unit is on.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill1  && document.getElementById('skill-select-one').textContent !== skill2 && document.getElementById('skill-select-one').textContent !== skill3 && document.getElementById('skill-select-two').textContent !== skill1  && document.getElementById('skill-select-two').textContent !== skill2 && document.getElementById('skill-select-two').textContent !== skill3 && document.getElementById('skill-select-three').textContent !== skill1 && document.getElementById('skill-select-three').textContent !== skill2 && document.getElementById('skill-select-three').textContent !== skill3;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(1) && !abilityCards.includes(2) && !abilityCards.includes(3)) {
         abilityCards.push(1);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill1;
        
        fill1;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill1;
        
        fill1;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill1;
        
        fill1;
      } else if(document.getElementById('skill-select-one').textContent == skill1 || document.getElementById('skill-select-one').textContent == skill2 || document.getElementById('skill-select-one').textContent == skill3) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          } else if(document.getElementById('skill-select-two').textContent == skill1 || document.getElementById('skill-select-two').textContent == skill2 || document.getElementById('skill-select-two').textContent == skill3) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          } else if(document.getElementById('skill-select-three').textContent == skill1 || document.getElementById('skill-select-three').textContent == skill2 || document.getElementById('skill-select-three').textContent == skill3) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          }
        
        mashSelect();
      }
      
      
      function skill2() {
        let skill1 = "Transient Wall of Snowflakes: [Continuous] During your opponent's turn, all of your controlled Servants get POWER +1.";
      
      let skill2 = "Obscurant Wall of Chalk: Select 1 of your Servants. On the next turn, if the selected Servant lost in a battle, if the POWER difference is 5 or less, the selected Servant will not be ELIMINATED.";
      
      let skill3 = "Shield of Rousing Resolution: On the next turn, if the opponent can move any of their Servants, the Servant they wish to move must move closer towards this unit, or into the spot that this unit is on.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill1  && document.getElementById('skill-select-one').textContent !== skill2 && document.getElementById('skill-select-one').textContent !== skill3 && document.getElementById('skill-select-two').textContent !== skill1  && document.getElementById('skill-select-two').textContent !== skill2 && document.getElementById('skill-select-two').textContent !== skill3 && document.getElementById('skill-select-three').textContent !== skill1 && document.getElementById('skill-select-three').textContent !== skill2 && document.getElementById('skill-select-three').textContent !== skill3;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(1) && !abilityCards.includes(2) && !abilityCards.includes(3)) {
         abilityCards.push(2);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill2;
        
        fill1;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill2;
        
        fill1;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill2;
        
        fill1;
      } else if(document.getElementById('skill-select-one').textContent == skill1 || document.getElementById('skill-select-one').textContent == skill2 || document.getElementById('skill-select-one').textContent == skill3) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          } else if(document.getElementById('skill-select-two').textContent == skill1 || document.getElementById('skill-select-two').textContent == skill2 || document.getElementById('skill-select-two').textContent == skill3) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          } else if(document.getElementById('skill-select-three').textContent == skill1 || document.getElementById('skill-select-three').textContent == skill2 || document.getElementById('skill-select-three').textContent == skill3) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          }
        
      mashSelect();
      }
      
      
      function skill3() {
        let skill1 = "Transient Wall of Snowflakes: [Continuous] During your opponent's turn, all of your controlled Servants get POWER +1.";
      
      let skill2 = "Obscurant Wall of Chalk: Select 1 of your Servants. On the next turn, if the selected Servant lost in a battle, if the POWER difference is 5 or less, the selected Servant will not be ELIMINATED.";
      
      let skill3 = "Shield of Rousing Resolution: On the next turn, if the opponent can move any of their Servants, the Servant they wish to move must move closer towards this unit, or into the spot that this unit is on.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill1  && document.getElementById('skill-select-one').textContent !== skill2 && document.getElementById('skill-select-one').textContent !== skill3 && document.getElementById('skill-select-two').textContent !== skill1  && document.getElementById('skill-select-two').textContent !== skill2 && document.getElementById('skill-select-two').textContent !== skill3 && document.getElementById('skill-select-three').textContent !== skill1 && document.getElementById('skill-select-three').textContent !== skill2 && document.getElementById('skill-select-three').textContent !== skill3;
        
        if(abilityCards.length <= 2 && !abilityCards.includes(1) && !abilityCards.includes(2) && !abilityCards.includes(3)) {
         abilityCards.push(3);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill3;
        
        fill1;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill3;
        
        fill1;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill3;
        
        fill1;
      } else if(document.getElementById('skill-select-one').textContent == skill1 || document.getElementById('skill-select-one').textContent == skill2 || document.getElementById('skill-select-one').textContent == skill3) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          } else if(document.getElementById('skill-select-two').textContent == skill1 || document.getElementById('skill-select-two').textContent == skill2 || document.getElementById('skill-select-two').textContent == skill3) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          } else if(document.getElementById('skill-select-three').textContent == skill1 || document.getElementById('skill-select-three').textContent == skill2 || document.getElementById('skill-select-three').textContent == skill3) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 1});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 2});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 3});
          
          removeFill1();
          
          }
        
      mashSelect();
      }
      //End of Mash selection section
      
      
      
      //Artoria selection section
      function artoriaSelect() {
        if(!testDeck.includes(6)) {
          testDeck.push(6, 7, 8, 9, 10);
        } else if(testDeck.includes(6)) {
          testDeck = testDeck.filter(a => {
        return a !== 6 && 7 && 8 && 9 && 10});
        }
        
        if(servantP11.includes("artoria")) {
          servantP11 = [];
          
          partyTotal -= 5;
          
          document.getElementById('select-one').style.backgroundImage = '';
        } else if(servantP12.includes('artoria')) {
          servantP12 = [];
          
          partyTotal -= 5;
          
          document.getElementById('select-two').style.backgroundImage = '';
        } else if(servantP13.includes('artoria')) {
          servantP13 = [];
          
          partyTotal -= 5;
          
          document.getElementById('select-three').style.backgroundImage = '';
        } else if(servantP11 == 0) {
          servantP11.push("artoria");
          
          partyTotal += 5;
          
          document.getElementById('select-one').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/Artoria3.png?itok=D77myqc-)';
        } else if(servantP12.length == 0) {
          servantP12.push('artoria');
          
          partyTotal += 5;
          
          document.getElementById('select-two').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/Artoria3.png?itok=D77myqc-)';
        } else if(servantP13.length == 0) {
          servantP13.push('artoria');
          
          partyTotal += 5;
          
          document.getElementById('select-three').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/Artoria3.png?itok=D77myqc-)';
        }
      }
      
      
      
      function skill4() {
        let skill4 = "Charisma B: [Continuous] During your turn, all of your controlling Servants get POWER +1.";
      
      let skill5 = "Mana Burst A: [Continuous] When this Servant is combat, this Servant gets BUSTER CARD POWER +1. (If there are 2 BUSTER CARD used and it belongs to her, both cards will get POWER +1 each.)";
      
      let skill6 = "Instinct A: Draw 2 Cards from your COMMAND DECK.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill4  && document.getElementById('skill-select-one').textContent !== skill5 && document.getElementById('skill-select-one').textContent !== skill6 && document.getElementById('skill-select-two').textContent !== skill4  && document.getElementById('skill-select-two').textContent !== skill5 && document.getElementById('skill-select-two').textContent !== skill6 && document.getElementById('skill-select-three').textContent !== skill4 && document.getElementById('skill-select-three').textContent !== skill5 && document.getElementById('skill-select-three').textContent !== skill6;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(4) && !abilityCards.includes(5) && !abilityCards.includes(6)) {
         abilityCards.push(4);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill4;
        
        fill2;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill4;
        
        fill2;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill4;
        
        fill2;
      } else if(document.getElementById('skill-select-one').textContent == skill4 || document.getElementById('skill-select-one').textContent == skill5 || document.getElementById('skill-select-one').textContent == skill6) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          } else if(document.getElementById('skill-select-two').textContent == skill4 || document.getElementById('skill-select-two').textContent == skill5 || document.getElementById('skill-select-two').textContent == skill6) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          } else if(document.getElementById('skill-select-three').textContent == skill4 || document.getElementById('skill-select-three').textContent == skill5 || document.getElementById('skill-select-three').textContent == skill6) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          }
        
        artoriaSelect();
      }
      
      
      function skill5() {
        let skill4 = "Charisma B: [Continuous] During your turn, all of your controlling Servants get POWER +1.";
      
      let skill5 = "Mana Burst A: [Continuous] When this Servant is combat, this Servant gets BUSTER CARD POWER +1. (If there are 2 BUSTER CARD used and it belongs to her, both cards will get POWER +1 each.)";
      
      let skill6 = "Instinct A: Draw 2 Cards from your COMMAND DECK.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill4  && document.getElementById('skill-select-one').textContent !== skill5 && document.getElementById('skill-select-one').textContent !== skill6 && document.getElementById('skill-select-two').textContent !== skill4  && document.getElementById('skill-select-two').textContent !== skill5 && document.getElementById('skill-select-two').textContent !== skill6 && document.getElementById('skill-select-three').textContent !== skill4 && document.getElementById('skill-select-three').textContent !== skill5 && document.getElementById('skill-select-three').textContent !== skill6;
        
      if(abilityCards.length <= 3 && !abilityCards.includes(4) && !abilityCards.includes(5) && !abilityCards.includes(6) && abilityCards.length <= 2) {
         abilityCards.push(5);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill5;
        
        fill2;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill5;
        
        fill2;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill5;
        
        fill2;
      } else if(document.getElementById('skill-select-one').textContent == skill4 || document.getElementById('skill-select-one').textContent == skill5 || document.getElementById('skill-select-one').textContent == skill6) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          } else if(document.getElementById('skill-select-two').textContent == skill4 || document.getElementById('skill-select-two').textContent == skill5 || document.getElementById('skill-select-two').textContent == skill6) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          } else if(document.getElementById('skill-select-three').textContent == skill4 || document.getElementById('skill-select-three').textContent == skill5 || document.getElementById('skill-select-three').textContent == skill6) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          }
        
      artoriaSelect();
      }
      
      function skill6() {
        let skill4 = "Charisma B: [Continuous] During your turn, all of your controlling Servants get POWER +1.";
      
      let skill5 = "Mana Burst A: [Continuous] When this Servant is combat, this Servant gets BUSTER CARD POWER +1. (If there are 2 BUSTER CARD used and it belongs to her, both cards will get POWER +1 each.)";
      
      let skill6 = "Instinct A: Draw 2 Cards from your COMMAND DECK.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill4  && document.getElementById('skill-select-one').textContent !== skill5 && document.getElementById('skill-select-one').textContent !== skill6 && document.getElementById('skill-select-two').textContent !== skill4  && document.getElementById('skill-select-two').textContent !== skill5 && document.getElementById('skill-select-two').textContent !== skill6 && document.getElementById('skill-select-three').textContent !== skill4 && document.getElementById('skill-select-three').textContent !== skill5 && document.getElementById('skill-select-three').textContent !== skill6;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(4) && !abilityCards.includes(5) && !abilityCards.includes(6)) {
         abilityCards.push(6);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill6;
        
        fill2;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill6;
        
        fill2;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill6;
        
        fill2;
      } else if(document.getElementById('skill-select-one').textContent == skill4 || document.getElementById('skill-select-one').textContent == skill5 || document.getElementById('skill-select-one').textContent == skill6) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          } else if(document.getElementById('skill-select-two').textContent == skill4 || document.getElementById('skill-select-two').textContent == skill5 || document.getElementById('skill-select-two').textContent == skill6) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          } else if(document.getElementById('skill-select-three').textContent == skill4 || document.getElementById('skill-select-three').textContent == skill5 || document.getElementById('skill-select-three').textContent == skill6) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 4});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 5});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 6});
          
          removeFill2();
          
          }
        
      artoriaSelect();
      }
      //End of Artoria selection section
      
      //Gilgamesh selection section
      function gilgameshSelect() {
        if(!testDeck.includes(11)) {
          testDeck.push(11, 12, 13, 14, 15);
        } else if(testDeck.includes(11)) {
          testDeck = testDeck.filter(a => {
        return a !== 11 && 12 && 13 && 14 && 15});
        }
        
        if(servantP11.includes("gilgamesh")) {
          servantP11 = [];
          
          partyTotal -= 5;
          
          document.getElementById('select-one').style.backgroundImage = '';
        } else if(servantP12.includes('gilgamesh')) {
          servantP12 = [];
          
          partyTotal -= 5;
          
          document.getElementById('select-two').style.backgroundImage = '';
        } else if(servantP13.includes('gilgamesh')) {
          servantP13 = [];
          
          partyTotal -= 5;
          
          document.getElementById('select-three').style.backgroundImage = '';
        } else if(servantP11.length == 0) {
          servantP11.push("gilgamesh");
          
          partyTotal += 5;
          
          document.getElementById('select-one').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/012%20Gilgamesh%202.png?itok=w0Th2323)';
        } else if(servantP12.length == 0) {
          servantP12.push('gilgamesh');
          
          partyTotal +=5;
          
          document.getElementById('select-two').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/012%20Gilgamesh%202.png?itok=w0Th2323)';
        } else if(servantP13.length == 0) {
          servantP13.push('gilgamesh');
          
          partyTotal += 5;
          
          document.getElementById('select-three').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/012%20Gilgamesh%202.png?itok=w0Th2323)';
        }
      }
      
      
      
      function skill7() {
        let skill7 = "Charisma A+: [Cost: Exhaust NP 4] [Continuous] During your turn, all of your controlling Servants get POWER +2.";
      
      let skill8 = "Golden Rule A: Place up to 3 ARTS CARD from your hand into the TRASH pile. Then, draw up to the same number of cards discarded this way.";
      
      let skill9 = "Collector EX: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH pile into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill7  && document.getElementById('skill-select-one').textContent !== skill8 && document.getElementById('skill-select-one').textContent !== skill9 && document.getElementById('skill-select-two').textContent !== skill7  && document.getElementById('skill-select-two').textContent !== skill8 && document.getElementById('skill-select-two').textContent !== skill9 && document.getElementById('skill-select-three').textContent !== skill7 && document.getElementById('skill-select-three').textContent !== skill8 && document.getElementById('skill-select-three').textContent !== skill9;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(7) && !abilityCards.includes(8) && !abilityCards.includes(9)) {
         abilityCards.push(7);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill7;
        
        fill3;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill7;
        
        fill3;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill7;
        
        fill3;
      } else if(document.getElementById('skill-select-one').textContent == skill7 || document.getElementById('skill-select-one').textContent == skill8 || document.getElementById('skill-select-one').textContent == skill9) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          } else if(document.getElementById('skill-select-two').textContent == skill7 || document.getElementById('skill-select-two').textContent == skill8 || document.getElementById('skill-select-two').textContent == skill9) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          } else if(document.getElementById('skill-select-three').textContent == skill7 || document.getElementById('skill-select-three').textContent == skill8 || document.getElementById('skill-select-three').textContent == skill9) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          }
        
        gilgameshSelect();
      }
      
      
      function skill8() {
        let skill7 = "Charisma A+: [Cost: Exhaust NP 4] [Continuous] During your turn, all of your controlling Servants get POWER +2.";
      
      let skill8 = "Golden Rule A: Place up to 3 ARTS CARD from your hand into the TRASH pile. Then, draw up to the same number of cards discarded this way.";
      
      let skill9 = "Collector EX: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH pile into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill7  && document.getElementById('skill-select-one').textContent !== skill8 && document.getElementById('skill-select-one').textContent !== skill9 && document.getElementById('skill-select-two').textContent !== skill7  && document.getElementById('skill-select-two').textContent !== skill8 && document.getElementById('skill-select-two').textContent !== skill9 && document.getElementById('skill-select-three').textContent !== skill7 && document.getElementById('skill-select-three').textContent !== skill8 && document.getElementById('skill-select-three').textContent !== skill9;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(7) && !abilityCards.includes(8) && !abilityCards.includes(9)) {
         abilityCards.push(8);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill8;
        
        fill3;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill8;
        
        fill3;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill8;
        
        fill3;
      } else if(document.getElementById('skill-select-one').textContent == skill7 || document.getElementById('skill-select-one').textContent == skill8 || document.getElementById('skill-select-one').textContent == skill9) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          } else if(document.getElementById('skill-select-two').textContent == skill7 || document.getElementById('skill-select-two').textContent == skill8 || document.getElementById('skill-select-two').textContent == skill9) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          } else if(document.getElementById('skill-select-three').textContent == skill7 || document.getElementById('skill-select-three').textContent == skill8 || document.getElementById('skill-select-three').textContent == skill9) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          }
        
      gilgameshSelect();
      }
      
      
      function skill9() {
        let skill7 = "Charisma A+: [Cost: Exhaust NP 4] [Continuous] During your turn, all of your controlling Servants get POWER +2.";
      
      let skill8 = "Golden Rule A: Place up to 3 ARTS CARD from your hand into the TRASH pile. Then, draw up to the same number of cards discarded this way.";
      
      let skill9 = "Collector EX: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH pile into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill7  && document.getElementById('skill-select-one').textContent !== skill8 && document.getElementById('skill-select-one').textContent !== skill9 && document.getElementById('skill-select-two').textContent !== skill7  && document.getElementById('skill-select-two').textContent !== skill8 && document.getElementById('skill-select-two').textContent !== skill9 && document.getElementById('skill-select-three').textContent !== skill7 && document.getElementById('skill-select-three').textContent !== skill8 && document.getElementById('skill-select-three').textContent !== skill9;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(7) && !abilityCards.includes(8) && !abilityCards.includes(9)) {
         abilityCards.push(9);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill9;
        
        fill3;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill9;
        
        fill3;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill9;
        
        fill3;
      } else if(document.getElementById('skill-select-one').textContent == skill7 || document.getElementById('skill-select-one').textContent == skill8 || document.getElementById('skill-select-one').textContent == skill9) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          } else if(document.getElementById('skill-select-two').textContent == skill7 || document.getElementById('skill-select-two').textContent == skill8 || document.getElementById('skill-select-two').textContent == skill9) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          } else if(document.getElementById('skill-select-three').textContent == skill7 || document.getElementById('skill-select-three').textContent == skill8 || document.getElementById('skill-select-three').textContent == skill9) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 7});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 8});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 9});
          
          removeFill3();
          
          }
        
      gilgameshSelect();
      }
      //End of Gilgamesh selection section
      
      
      
      //Asterios selection section
      function asteriosSelect() {
        if(!testDeck.includes(16)) {
          testDeck.push(16, 17, 18, 19, 20);
        } else if(testDeck.includes(16)) {
          testDeck = testDeck.filter(a => {
        return a !== 16 && 17 && 18 && 19 && 20});
        }
        
        if(servantP11.includes("asterios")) {
          servantP11 = [];
          
          partyTotal -= 1;
          
          document.getElementById('select-one').style.backgroundImage = '';
        } else if(servantP12.includes('asterios')) {
          servantP12 = [];
          
          partyTotal -= 1;
          
          document.getElementById('select-two').style.backgroundImage = '';
        } else if(servantP13.includes('asterios')) {
          servantP13 = [];
          
          partyTotal -= 1;
          
          document.getElementById('select-three').style.backgroundImage = '';
        } else if(servantP11.length == 0) {
          servantP11.push("asterios");
          
          partyTotal += 1;
          
          document.getElementById('select-one').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/053%20Asterios%203.png?itok=fjB0XbyI)';
        } else if(servantP12.length == 0) {
          servantP12.push('asterios');
          
          partyTotal += 1;
          
          document.getElementById('select-two').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/053%20Asterios%203.png?itok=fjB0XbyI)';
        } else if(servantP13.length == 0) {
          servantP13.push('asterios');
          
          partyTotal += 1;
          
          document.getElementById('select-three').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/053%20Asterios%203.png?itok=fjB0XbyI)';
        }
      }
      
      
      
      function skill10() {
        let skill10 = "Monsterous Strength A+: [Continuous] During your turn, this unit gets POWER +2.";
      
      let skill11 = "Natural Demon A++: [Cost: Exhaust NP 2] [Continuous] You (player) cannot be affected by any skill effects your opponent controls. [Continuous] During your opponent's turn, this unit gets POWER +2.";
      
      let skill12 = "Labrys of the Abyss C: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH zone into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill10  && document.getElementById('skill-select-one').textContent !== skill11 && document.getElementById('skill-select-one').textContent !== skill12 && document.getElementById('skill-select-two').textContent !== skill10  && document.getElementById('skill-select-two').textContent !== skill11 && document.getElementById('skill-select-two').textContent !== skill12 && document.getElementById('skill-select-three').textContent !== skill10 && document.getElementById('skill-select-three').textContent !== skill11 && document.getElementById('skill-select-three').textContent !== skill12;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(10) && !abilityCards.includes(11) && !abilityCards.includes(12)) {
         abilityCards.push(10);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill10;
        
        fill4;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill10;
        
        fill4;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill10;
        
        fill4;
      } else if(document.getElementById('skill-select-one').textContent == skill10 || document.getElementById('skill-select-one').textContent == skill11 || document.getElementById('skill-select-one').textContent == skill12) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          } else if(document.getElementById('skill-select-two').textContent == skill10 || document.getElementById('skill-select-two').textContent == skill11 || document.getElementById('skill-select-two').textContent == skill12) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          } else if(document.getElementById('skill-select-three').textContent == skill10 || document.getElementById('skill-select-three').textContent == skill11 || document.getElementById('skill-select-three').textContent == skill12) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          }
        
        asteriosSelect();
      }
      
      function skill11() {
        let skill10 = "Monsterous Strength A+: [Continuous] During your turn, this unit gets POWER +2.";
      
      let skill11 = "Natural Demon A++: [Cost: Exhaust NP 2] [Continuous] You (player) cannot be affected by any skill effects your opponent controls. [Continuous] During your opponent's turn, this unit gets POWER +2.";
      
      let skill12 = "Labrys of the Abyss C: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH zone into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill10  && document.getElementById('skill-select-one').textContent !== skill11 && document.getElementById('skill-select-one').textContent !== skill12 && document.getElementById('skill-select-two').textContent !== skill10  && document.getElementById('skill-select-two').textContent !== skill11 && document.getElementById('skill-select-two').textContent !== skill12 && document.getElementById('skill-select-three').textContent !== skill10 && document.getElementById('skill-select-three').textContent !== skill11 && document.getElementById('skill-select-three').textContent !== skill12;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(10) && !abilityCards.includes(11) && !abilityCards.includes(12)) {
         abilityCards.push(11);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill11;
        
        fill4;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill11;
        
        fill4;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill11;
        
        fill4;
      } else if(document.getElementById('skill-select-one').textContent == skill10 || document.getElementById('skill-select-one').textContent == skill11 || document.getElementById('skill-select-one').textContent == skill12) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          } else if(document.getElementById('skill-select-two').textContent == skill10 || document.getElementById('skill-select-two').textContent == skill11 || document.getElementById('skill-select-two').textContent == skill12) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          } else if(document.getElementById('skill-select-three').textContent == skill10 || document.getElementById('skill-select-three').textContent == skill11 || document.getElementById('skill-select-three').textContent == skill12) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          }
        
        asteriosSelect();
      }
      
      function skill12() {
        let skill10 = "Monsterous Strength A+: [Continuous] During your turn, this unit gets POWER +2.";
      
      let skill11 = "Natural Demon A++: [Cost: Exhaust NP 2] [Continuous] You (player) cannot be affected by any skill effects your opponent controls. [Continuous] During your opponent's turn, this unit gets POWER +2.";
      
      let skill12 = "Labrys of the Abyss C: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH zone into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one').textContent !== skill10  && document.getElementById('skill-select-one').textContent !== skill11 && document.getElementById('skill-select-one').textContent !== skill12 && document.getElementById('skill-select-two').textContent !== skill10  && document.getElementById('skill-select-two').textContent !== skill11 && document.getElementById('skill-select-two').textContent !== skill12 && document.getElementById('skill-select-three').textContent !== skill10 && document.getElementById('skill-select-three').textContent !== skill11 && document.getElementById('skill-select-three').textContent !== skill12;
        
      if(abilityCards.length <= 2 && !abilityCards.includes(10) && !abilityCards.includes(11) && !abilityCards.includes(12)) {
         abilityCards.push(12);
      }
        
        if(document.getElementById('skill-select-one').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one').textContent = skill12;
        
        fill4;
      } else if(document.getElementById('skill-select-two').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two').textContent = skill12;
        
        fill4;
      } else if(document.getElementById('skill-select-three').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three').textContent = skill12;
        
        fill4;
      } else if(document.getElementById('skill-select-one').textContent == skill10 || document.getElementById('skill-select-one').textContent == skill11 || document.getElementById('skill-select-one').textContent == skill12) {
            document.getElementById('skill-select-one').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          } else if(document.getElementById('skill-select-two').textContent == skill10 || document.getElementById('skill-select-two').textContent == skill11 || document.getElementById('skill-select-two').textContent == skill12) {
            document.getElementById('skill-select-two').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          } else if(document.getElementById('skill-select-three').textContent == skill10 || document.getElementById('skill-select-three').textContent == skill11 || document.getElementById('skill-select-three').textContent == skill12) {
            document.getElementById('skill-select-three').textContent = '';
          
          abilityCards = abilityCards.filter(a => {
        return a !== 10});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 11});
          
          abilityCards = abilityCards.filter(a => {
        return a !== 12});
          
          removeFill4();
          
          }
        
        asteriosSelect();
      }
      //End of Asterios selection section
      
      
      
      function confirmUnits() {
        if(partyTotal <= 11 && abilityCards.length == 3) {
        
        if(servantP11.includes('mash')) {
          panelEight.classList.add('mash');
          panelEight.classList.add('shielder');
        }
        
        if(servantP11.includes('artoria')) {
          panelEight.classList.add('artoria');
          panelEight.classList.add('saber');
        }
        
        if(servantP11.includes('gilgamesh')) {
          panelEight.classList.add('gilgamesh');
          panelEight.classList.add('archer');
        }
        
        if(servantP11.includes('asterios')) {
          panelEight.classList.add('asterios');
         panelEight.classList.add('berserker');
        }
        
        
        if(servantP12.includes('mash')) {
          panelNine.classList.add('mash');
          panelNine.classList.add('shielder');
        }
        
        if(servantP12.includes('artoria')) {
          panelNine.classList.add('artoria');
          panelNine.classList.add('saber');
        }
        
        if(servantP12.includes('gilgamesh')) {
          panelNine.classList.add('gilgamesh');
          panelNine.classList.add('archer');
        }
        
        if(servantP12.includes('asterios')) {
          panelNine.classList.add('asterios');
          panelNine.classList.add('berserker');
        }
        
        
        if(servantP13.includes('mash')) {
          panelTen.classList.add('mash');
          panelTen.classList.add('shielder');
        }
        
        if(servantP13.includes('artoria')) {
          panelTen.classList.add('artoria');
          panelTen.classList.add('saber');
        }
        
        if(servantP13.includes('gilgamesh')) {
          panelTen.classList.add('gilgamesh');
          panelTen.classList.add('archer');
        }
        
        if(servantP13.includes('asterios')) {
          panelTen.classList.add('asterios');
          panelTen.classList.add('berserker');
        }
          document.getElementById('team-select').style.display = 'none';
        }
        
        else {
          alert(`Please make sure you have 3 units selected and your party cost is below 11. You have ${abilityCards.length} units selected and your party cost is ${partyTotal} out of 11`);
        }
      };
      //End of player 1 unit selection
      
      
      
      
      
      
      
      
      
      
      //Player 2 unit selection
      var abilityCards2 = [];
      
      
      
      //Mash selection section
      function mashSelect2() {
        if(!testDeck2.includes(1)) {
          testDeck2.push(1, 2, 3, 4, 5);
        } else if(testDeck2.includes(1)) {
          testDeck2 = testDeck2.filter(a => {
        return a !== 1 && 2 && 3 && 4 && 5});
        }
        
        if(servantP21.includes("mash2")) {
          servantP21 = [];
          
          document.getElementById('select-one2').style.backgroundImage = '';
        } else if(servantP22.includes('mash2')) {
          servantP22 = [];
          
          document.getElementById('select-two2').style.backgroundImage = '';
        } else if(servantP23.includes('mash2')) {
          servantP23 = [];
          
          document.getElementById('select-three2').style.backgroundImage = '';
        } else if(servantP21.length == 0) {
          servantP21.push("mash2");
          
          document.getElementById('select-one2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/2019-04/001%20Mash%20Kyrieknight%203.png)';
        } else if(servantP22.length == 0) {
          servantP22.push('mash2');
          
          document.getElementById('select-two2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/2019-04/001%20Mash%20Kyrieknight%203.png)';
        } else if(servantP23.length == 0) {
          servantP23.push('mash2');
          
          document.getElementById('select-three2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/2019-04/001%20Mash%20Kyrieknight%203.png)';
        }
      }
      
      
      
      function s2kill1() {
        let skill1 = "Transient Wall of Snowflakes: [Continuous] During your opponent's turn, all of your controlled Servants get POWER +1.";
      
      let skill2 = "Obscurant Wall of Chalk: Select 1 of your Servants. On the next turn, if the selected Servant lost in a battle, if the POWER difference is 5 or less, the selected Servant will not be ELIMINATED.";
      
      let skill3 = "Shield of Rousing Resolution: On the next turn, if the opponent can move any of their Servants, the Servant they wish to move must move closer towards this unit, or into the spot that this unit is on.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill1  && document.getElementById('skill-select-one2').textContent !== skill2 && document.getElementById('skill-select-one2').textContent !== skill3 && document.getElementById('skill-select-two2').textContent !== skill1  && document.getElementById('skill-select-two2').textContent !== skill2 && document.getElementById('skill-select-two2').textContent !== skill3 && document.getElementById('skill-select-three2').textContent !== skill1 && document.getElementById('skill-select-three2').textContent !== skill2 && document.getElementById('skill-select-three2').textContent !== skill3;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(1) && !abilityCards2.includes(2) && !abilityCards2.includes(3)) {
         abilityCards2.push(1);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill1;
        
        f2ill1;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill1;
        
        f2ill1;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill1;
        
        f2ill1;
      } else if(document.getElementById('skill-select-one2').textContent == skill1 || document.getElementById('skill-select-one2').textContent == skill2 || document.getElementById('skill-select-one2').textContent == skill3) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill1 || document.getElementById('skill-select-two2').textContent == skill2 || document.getElementById('skill-select-two2').textContent == skill3) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill1 || document.getElementById('skill-select-three2').textContent == skill2 || document.getElementById('skill-select-three2').textContent == skill3) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          }
        
        mashSelect2();
      }
      
      
      function s2kill2() {
        let skill1 = "Transient Wall of Snowflakes: [Continuous] During your opponent's turn, all of your controlled Servants get POWER +1.";
      
      let skill2 = "Obscurant Wall of Chalk: Select 1 of your Servants. On the next turn, if the selected Servant lost in a battle, if the POWER difference is 5 or less, the selected Servant will not be ELIMINATED.";
      
      let skill3 = "Shield of Rousing Resolution: On the next turn, if the opponent can move any of their Servants, the Servant they wish to move must move closer towards this unit, or into the spot that this unit is on.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill1  && document.getElementById('skill-select-one2').textContent !== skill2 && document.getElementById('skill-select-one2').textContent !== skill3 && document.getElementById('skill-select-two2').textContent !== skill1  && document.getElementById('skill-select-two2').textContent !== skill2 && document.getElementById('skill-select-two2').textContent !== skill3 && document.getElementById('skill-select-three2').textContent !== skill1 && document.getElementById('skill-select-three2').textContent !== skill2 && document.getElementById('skill-select-three2').textContent !== skill3;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(1) && !abilityCards2.includes(2) && !abilityCards2.includes(3)) {
         abilityCards2.push(2);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill2;
        
        f2ill1;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill2;
        
        f2ill1;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill2;
        
        f2ill1;
      } else if(document.getElementById('skill-select-one2').textContent == skill1 || document.getElementById('skill-select-one2').textContent == skill2 || document.getElementById('skill-select-one2').textContent == skill3) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill1 || document.getElementById('skill-select-two2').textContent == skill2 || document.getElementById('skill-select-two2').textContent == skill3) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill1 || document.getElementById('skill-select-three2').textContent == skill2 || document.getElementById('skill-select-three2').textContent == skill3) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          }
        
      mashSelect2();
      }
      
      
      function s2kill3() {
        let skill1 = "Transient Wall of Snowflakes: [Continuous] During your opponent's turn, all of your controlled Servants get POWER +1.";
      
      let skill2 = "Obscurant Wall of Chalk: Select 1 of your Servants. On the next turn, if the selected Servant lost in a battle, if the POWER difference is 5 or less, the selected Servant will not be ELIMINATED.";
      
      let skill3 = "Shield of Rousing Resolution: On the next turn, if the opponent can move any of their Servants, the Servant they wish to move must move closer towards this unit, or into the spot that this unit is on.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill1  && document.getElementById('skill-select-one2').textContent !== skill2 && document.getElementById('skill-select-one2').textContent !== skill3 && document.getElementById('skill-select-two2').textContent !== skill1  && document.getElementById('skill-select-two2').textContent !== skill2 && document.getElementById('skill-select-two2').textContent !== skill3 && document.getElementById('skill-select-three2').textContent !== skill1 && document.getElementById('skill-select-three2').textContent !== skill2 && document.getElementById('skill-select-three2').textContent !== skill3;
        
        if(abilityCards2.length <= 2 && !abilityCards2.includes(1) && !abilityCards2.includes(2) && !abilityCards2.includes(3)) {
         abilityCards2.push(3);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill3;
        
        f2ill1;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill3;
        
        f2ill1;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill3;
        
        f2ill1;
      } else if(document.getElementById('skill-select-one2').textContent == skill1 || document.getElementById('skill-select-one2').textContent == skill2 || document.getElementById('skill-select-one2').textContent == skill3) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill1 || document.getElementById('skill-select-two2').textContent == skill2 || document.getElementById('skill-select-two2').textContent == skill3) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill1 || document.getElementById('skill-select-three2').textContent == skill2 || document.getElementById('skill-select-three2').textContent == skill3) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 1});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 2});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 3});
          
          r2emoveFill1();
          
          }
        
      mashSelect2();
      }
      //End of Mash selection section
      
      
      
      //Artoria selection section
      function artoriaSelect2() {
        if(!testDeck2.includes(6)) {
          testDeck2.push(6, 7, 8, 9, 10);
        } else if(testDeck2.includes(6)) {
          testDeck2 = testDeck2.filter(a => {
        return a !== 6 && 7 && 8 && 9 && 10});
        }
        
        if(servantP21.includes("artoria2")) {
          servantP21 = [];
          
          document.getElementById('select-one2').style.backgroundImage = '';
        } else if(servantP22.includes('artoria2')) {
          servantP22 = [];
          
          document.getElementById('select-two2').style.backgroundImage = '';
        } else if(servantP23.includes('artoria2')) {
          servantP23 = [];
          
          document.getElementById('select-three2').style.backgroundImage = '';
        } else if(servantP21.length == 0) {
          servantP21.push("artoria2");
          
          document.getElementById('select-one2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/Artoria3.png?itok=D77myqc-)';
        } else if(servantP22.length == 0) {
          servantP22.push('artoria2');
          
          document.getElementById('select-two2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/Artoria3.png?itok=D77myqc-)';
        } else if(servantP23.length == 0) {
          servantP23.push('artoria2');
          
          document.getElementById('select-three2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/Artoria3.png?itok=D77myqc-)';
        }
      }
      
      
      
      function s2kill4() {
        let skill4 = "Charisma B: [Continuous] During your turn, all of your controlling Servants get POWER +1.";
      
      let skill5 = "Mana Burst A: [Continuous] When this Servant is combat, this Servant gets BUSTER CARD POWER +1. (If there are 2 BUSTER CARD used and it belongs to her, both cards will get POWER +1 each.)";
      
      let skill6 = "Instinct A: Draw 2 Cards from your COMMAND DECK.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill4  && document.getElementById('skill-select-one2').textContent !== skill5 && document.getElementById('skill-select-one2').textContent !== skill6 && document.getElementById('skill-select-two2').textContent !== skill4  && document.getElementById('skill-select-two2').textContent !== skill5 && document.getElementById('skill-select-two2').textContent !== skill6 && document.getElementById('skill-select-three2').textContent !== skill4 && document.getElementById('skill-select-three2').textContent !== skill5 && document.getElementById('skill-select-three2').textContent !== skill6;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(4) && !abilityCards2.includes(5) && !abilityCards2.includes(6)) {
         abilityCards2.push(4);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill4;
        
        f2ill2;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill4;
        
        f2ill2;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill4;
        
        f2ill2;
      } else if(document.getElementById('skill-select-one2').textContent == skill4 || document.getElementById('skill-select-one2').textContent == skill5 || document.getElementById('skill-select-one2').textContent == skill6) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill4 || document.getElementById('skill-select-two2').textContent == skill5 || document.getElementById('skill-select-two2').textContent == skill6) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill4 || document.getElementById('skill-select-three2').textContent == skill5 || document.getElementById('skill-select-three2').textContent == skill6) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          }
        
        artoriaSelect2();
      }
      
      
      function s2kill5() {
        let skill4 = "Charisma B: [Continuous] During your turn, all of your controlling Servants get POWER +1.";
      
      let skill5 = "Mana Burst A: [Continuous] When this Servant is combat, this Servant gets BUSTER CARD POWER +1. (If there are 2 BUSTER CARD used and it belongs to her, both cards will get POWER +1 each.)";
      
      let skill6 = "Instinct A: Draw 2 Cards from your COMMAND DECK.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill4  && document.getElementById('skill-select-one2').textContent !== skill5 && document.getElementById('skill-select-one2').textContent !== skill6 && document.getElementById('skill-select-two2').textContent !== skill4  && document.getElementById('skill-select-two2').textContent !== skill5 && document.getElementById('skill-select-two2').textContent !== skill6 && document.getElementById('skill-select-three2').textContent !== skill4 && document.getElementById('skill-select-three2').textContent !== skill5 && document.getElementById('skill-select-three2').textContent !== skill6;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(4) && !abilityCards2.includes(5) && !abilityCards2.includes(6)) {
         abilityCards2.push(5);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill5;
        
        f2ill2;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill5;
        
        f2ill2;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill5;
        
        f2ill2;
      } else if(document.getElementById('skill-select-one2').textContent == skill4 || document.getElementById('skill-select-one2').textContent == skill5 || document.getElementById('skill-select-one2').textContent == skill6) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill4 || document.getElementById('skill-select-two2').textContent == skill5 || document.getElementById('skill-select-two2').textContent == skill6) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill4 || document.getElementById('skill-select-three2').textContent == skill5 || document.getElementById('skill-select-three2').textContent == skill6) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          }
        
      artoriaSelect2();
      }
      
      function s2kill6() {
        let skill4 = "Charisma B: [Continuous] During your turn, all of your controlling Servants get POWER +1.";
      
      let skill5 = "Mana Burst A: [Continuous] When this Servant is combat, this Servant gets BUSTER CARD POWER +1. (If there are 2 BUSTER CARD used and it belongs to her, both cards will get POWER +1 each.)";
      
      let skill6 = "Instinct A: Draw 2 Cards from your COMMAND DECK.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill4  && document.getElementById('skill-select-one2').textContent !== skill5 && document.getElementById('skill-select-one2').textContent !== skill6 && document.getElementById('skill-select-two2').textContent !== skill4  && document.getElementById('skill-select-two2').textContent !== skill5 && document.getElementById('skill-select-two2').textContent !== skill6 && document.getElementById('skill-select-three2').textContent !== skill4 && document.getElementById('skill-select-three2').textContent !== skill5 && document.getElementById('skill-select-three2').textContent !== skill6;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(4) && !abilityCards2.includes(5) && !abilityCards2.includes(6)) {
         abilityCards2.push(6);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill6;
        
        f2ill2;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill6;
        
        f2ill2;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill6;
        
        f2ill2;
      } else if(document.getElementById('skill-select-one2').textContent == skill4 || document.getElementById('skill-select-one2').textContent == skill5 || document.getElementById('skill-select-one2').textContent == skill6) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill4 || document.getElementById('skill-select-two2').textContent == skill5 || document.getElementById('skill-select-two2').textContent == skill6) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill4 || document.getElementById('skill-select-three2').textContent == skill5 || document.getElementById('skill-select-three2').textContent == skill6) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 4});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 5});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 6});
          
          r2emoveFill2();
          
          }
        
      artoriaSelect2();
      }
      //End of Artoria selection section
      
      //Gilgamesh selection section
      function gilgameshSelect2() {
        if(!testDeck2.includes(11)) {
          testDeck2.push(11, 12, 13, 14, 15);
        } else if(testDeck2.includes(11)) {
          testDeck2 = testDeck2.filter(a => {
        return a !== 11 && 12 && 13 && 14 && 15});
        }
        
        if(servantP21.includes('gilgamesh2')) {
          servantP21 = [];
          
          document.getElementById('select-one2').style.backgroundImage = '';
        } else if(servantP22.includes('gilgamesh2')) {
          servantP22 = [];
          
          document.getElementById('select-two2').style.backgroundImage = '';
        } else if(servantP23.includes('gilgamesh2')) {
          servantP23 = [];
          
          document.getElementById('select-three2').style.backgroundImage = '';
        } else if(servantP21.length == 0) {
          servantP21.push('gilgamesh2');
          
          document.getElementById('select-one2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/012%20Gilgamesh%202.png?itok=w0Th2323)';
        } else if(servantP22.length == 0) {
          servantP22.push('gilgamesh2');
          
          document.getElementById('select-two2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/012%20Gilgamesh%202.png?itok=w0Th2323)';
        } else if(servantP23.length == 0) {
          servantP23.push('gilgamesh2');
          
          document.getElementById('select-three2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/012%20Gilgamesh%202.png?itok=w0Th2323)';
        }
      }
      
      
      
      function s2kill7() {
        let skill7 = "Charisma A+: [Cost: Exhaust NP 4] [Continuous] During your turn, all of your controlling Servants get POWER +2.";
      
      let skill8 = "Golden Rule A: Place up to 3 ARTS CARD from your hand into the TRASH pile. Then, draw up to the same number of cards discarded this way.";
      
      let skill9 = "Collector EX: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH pile into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill7  && document.getElementById('skill-select-one2').textContent !== skill8 && document.getElementById('skill-select-one2').textContent !== skill9 && document.getElementById('skill-select-two2').textContent !== skill7  && document.getElementById('skill-select-two2').textContent !== skill8 && document.getElementById('skill-select-two2').textContent !== skill9 && document.getElementById('skill-select-three2').textContent !== skill7 && document.getElementById('skill-select-three2').textContent !== skill8 && document.getElementById('skill-select-three2').textContent !== skill9;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(7) && !abilityCards2.includes(8) && !abilityCards2.includes(9)) {
         abilityCards2.push(7);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill7;
        
        f2ill3;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill7;
        
        f2ill3;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill7;
        
        f2ill3;
      } else if(document.getElementById('skill-select-one2').textContent == skill7 || document.getElementById('skill-select-one2').textContent == skill8 || document.getElementById('skill-select-one2').textContent == skill9) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill7 || document.getElementById('skill-select-two2').textContent == skill8 || document.getElementById('skill-select-two2').textContent == skill9) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill7 || document.getElementById('skill-select-three2').textContent == skill8 || document.getElementById('skill-select-three2').textContent == skill9) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          }
        
        gilgameshSelect2();
      }
      
      
      function s2kill8() {
        let skill7 = "Charisma A+: [Cost: Exhaust NP 4] [Continuous] During your turn, all of your controlling Servants get POWER +2.";
      
      let skill8 = "Golden Rule A: Place up to 3 ARTS CARD from your hand into the TRASH pile. Then, draw up to the same number of cards discarded this way.";
      
      let skill9 = "Collector EX: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH pile into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill7  && document.getElementById('skill-select-one2').textContent !== skill8 && document.getElementById('skill-select-one2').textContent !== skill9 && document.getElementById('skill-select-two2').textContent !== skill7  && document.getElementById('skill-select-two2').textContent !== skill8 && document.getElementById('skill-select-two2').textContent !== skill9 && document.getElementById('skill-select-three2').textContent !== skill7 && document.getElementById('skill-select-three2').textContent !== skill8 && document.getElementById('skill-select-three2').textContent !== skill9;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(7) && !abilityCards2.includes(8) && !abilityCards2.includes(9)) {
         abilityCards2.push(8);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill8;
        
        f2ill3;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill8;
        
        f2ill3;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill8;
        
        f2ill3;
      } else if(document.getElementById('skill-select-one2').textContent == skill7 || document.getElementById('skill-select-one2').textContent == skill8 || document.getElementById('skill-select-one2').textContent == skill9) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill7 || document.getElementById('skill-select-two2').textContent == skill8 || document.getElementById('skill-select-two2').textContent == skill9) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill7 || document.getElementById('skill-select-three2').textContent == skill8 || document.getElementById('skill-select-three2').textContent == skill9) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          }
        
      gilgameshSelect2();
      }
      
      
      function s2kill9() {
        let skill7 = "Charisma A+: [Cost: Exhaust NP 4] [Continuous] During your turn, all of your controlling Servants get POWER +2.";
      
      let skill8 = "Golden Rule A: Place up to 3 ARTS CARD from your hand into the TRASH pile. Then, draw up to the same number of cards discarded this way.";
      
      let skill9 = "Collector EX: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH pile into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill7  && document.getElementById('skill-select-one2').textContent !== skill8 && document.getElementById('skill-select-one2').textContent !== skill9 && document.getElementById('skill-select-two2').textContent !== skill7  && document.getElementById('skill-select-two2').textContent !== skill8 && document.getElementById('skill-select-two2').textContent !== skill9 && document.getElementById('skill-select-three2').textContent !== skill7 && document.getElementById('skill-select-three2').textContent !== skill8 && document.getElementById('skill-select-three2').textContent !== skill9;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(7) && !abilityCards2.includes(8) && !abilityCards2.includes(9)) {
         abilityCards2.push(9);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill9;
        
        f2ill3;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill9;
        
        f2ill3;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill9;
        
        f2ill3;
      } else if(document.getElementById('skill-select-one2').textContent == skill7 || document.getElementById('skill-select-one2').textContent == skill8 || document.getElementById('skill-select-one2').textContent == skill9) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill7 || document.getElementById('skill-select-two2').textContent == skill8 || document.getElementById('skill-select-two2').textContent == skill9) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill7 || document.getElementById('skill-select-three2').textContent == skill8 || document.getElementById('skill-select-three2').textContent == skill9) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 7});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 8});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 9});
          
          r2emoveFill3();
          
          }
        
      gilgameshSelect2();
      }
      //End of Gilgamesh selection section
      
      
      
      //Asterios selection section
      function asteriosSelect2() {
        if(!testDeck2.includes(16)) {
          testDeck2.push(16, 17, 18, 19, 20);
        } else if(testDeck2.includes(16)) {
          testDeck2 = testDeck2.filter(a => {
        return a !== 16 && 17 && 18 && 19 && 20});
        }
        
        if(servantP21.includes('asterios2')) {
          servantP21 = [];
          
          document.getElementById('select-one2').style.backgroundImage = '';
        } else if(servantP22.includes('asterios2')) {
          servantP22 = [];
          
          document.getElementById('select-two2').style.backgroundImage = '';
        } else if(servantP23.includes('asterios2')) {
          servantP23 = [];
          
          document.getElementById('select-three2').style.backgroundImage = '';
        } else if(servantP21.length == 0) {
          servantP21.push('asterios2');
          
          document.getElementById('select-one2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/053%20Asterios%203.png?itok=fjB0XbyI)';
        } else if(servantP22.length == 0) {
          servantP22.push('asterios2');
          
          document.getElementById('select-two2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/053%20Asterios%203.png?itok=fjB0XbyI)';
        } else if(servantP23.length == 0) {
          servantP23.push('asterios2');
          
          document.getElementById('select-three2').style.backgroundImage = 'url(https://gamepress.gg/grandorder/sites/grandorder/files/styles/servant_image/public/2017-07/053%20Asterios%203.png?itok=fjB0XbyI)';
        }
      }
      
      
      
      function s2kill10() {
        let skill10 = "Monsterous Strength A+: [Continuous] During your turn, this unit gets POWER +2.";
      
      let skill11 = "Natural Demon A++: [Cost: Exhaust NP 2] [Continuous] You (player) cannot be affected by any skill effects your opponent controls. [Continuous] During your opponent's turn, this unit gets POWER +2.";
      
      let skill12 = "Labrys of the Abyss C: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH zone into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill10  && document.getElementById('skill-select-one2').textContent !== skill11 && document.getElementById('skill-select-one2').textContent !== skill12 && document.getElementById('skill-select-two2').textContent !== skill10  && document.getElementById('skill-select-two2').textContent !== skill11 && document.getElementById('skill-select-two2').textContent !== skill12 && document.getElementById('skill-select-three2').textContent !== skill10 && document.getElementById('skill-select-three2').textContent !== skill11 && document.getElementById('skill-select-three2').textContent !== skill12;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(10) && !abilityCards2.includes(11) && !abilityCards2.includes(12)) {
         abilityCards2.push(10);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill10;
        
        f2ill4;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill10;
        
        f2ill4;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill10;
        
        f2ill4;
      } else if(document.getElementById('skill-select-one2').textContent == skill10 || document.getElementById('skill-select-one2').textContent == skill11 || document.getElementById('skill-select-one2').textContent == skill12) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill10 || document.getElementById('skill-select-two2').textContent == skill11 || document.getElementById('skill-select-two2').textContent == skill12) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill10 || document.getElementById('skill-select-three2').textContent == skill11 || document.getElementById('skill-select-three2').textContent == skill12) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          }
        
        asteriosSelect2();
      }
      
      function s2kill11() {
        let skill10 = "Monsterous Strength A+: [Continuous] During your turn, this unit gets POWER +2.";
      
      let skill11 = "Natural Demon A++: [Cost: Exhaust NP 2] [Continuous] You (player) cannot be affected by any skill effects your opponent controls. [Continuous] During your opponent's turn, this unit gets POWER +2.";
      
      let skill12 = "Labrys of the Abyss C: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH zone into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill10  && document.getElementById('skill-select-one2').textContent !== skill11 && document.getElementById('skill-select-one2').textContent !== skill12 && document.getElementById('skill-select-two2').textContent !== skill10  && document.getElementById('skill-select-two2').textContent !== skill11 && document.getElementById('skill-select-two2').textContent !== skill12 && document.getElementById('skill-select-three2').textContent !== skill10 && document.getElementById('skill-select-three2').textContent !== skill11 && document.getElementById('skill-select-three2').textContent !== skill12;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(10) && !abilityCards2.includes(11) && !abilityCards2.includes(12)) {
         abilityCards2.push(11);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill11;
        
        f2ill4;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill11;
        
        f2ill4;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill11;
        
        f2ill4;
      } else if(document.getElementById('skill-select-one2').textContent == skill10 || document.getElementById('skill-select-one2').textContent == skill11 || document.getElementById('skill-select-one2').textContent == skill12) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill10 || document.getElementById('skill-select-two2').textContent == skill11 || document.getElementById('skill-select-two2').textContent == skill12) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill10 || document.getElementById('skill-select-three2').textContent == skill11 || document.getElementById('skill-select-three2').textContent == skill12) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          }
        
        asteriosSelect2();
      }
      
      function s2kill12() {
        let skill10 = "Monsterous Strength A+: [Continuous] During your turn, this unit gets POWER +2.";
      
      let skill11 = "Natural Demon A++: [Cost: Exhaust NP 2] [Continuous] You (player) cannot be affected by any skill effects your opponent controls. [Continuous] During your opponent's turn, this unit gets POWER +2.";
      
      let skill12 = "Labrys of the Abyss C: [Cost: Exhaust NP 2] Add 1 QUICK CARD from the TRASH zone into your hand.";
        
        var selectChecker = document.getElementById('skill-select-one2').textContent !== skill10  && document.getElementById('skill-select-one2').textContent !== skill11 && document.getElementById('skill-select-one2').textContent !== skill12 && document.getElementById('skill-select-two2').textContent !== skill10  && document.getElementById('skill-select-two2').textContent !== skill11 && document.getElementById('skill-select-two2').textContent !== skill12 && document.getElementById('skill-select-three2').textContent !== skill10 && document.getElementById('skill-select-three2').textContent !== skill11 && document.getElementById('skill-select-three2').textContent !== skill12;
        
      if(abilityCards2.length <= 2 && !abilityCards2.includes(10) && !abilityCards2.includes(11) && !abilityCards2.includes(12)) {
         abilityCards2.push(12);
      }
        
        if(document.getElementById('skill-select-one2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-one2').textContent = skill12;
        
        f2ill4;
      } else if(document.getElementById('skill-select-two2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-two2').textContent = skill12;
        
        f2ill4;
      } else if(document.getElementById('skill-select-three2').textContent == '' && selectChecker) {
        document.getElementById('skill-select-three2').textContent = skill12;
        
        f2ill4;
      } else if(document.getElementById('skill-select-one2').textContent == skill10 || document.getElementById('skill-select-one2').textContent == skill11 || document.getElementById('skill-select-one2').textContent == skill12) {
            document.getElementById('skill-select-one2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          } else if(document.getElementById('skill-select-two2').textContent == skill10 || document.getElementById('skill-select-two2').textContent == skill11 || document.getElementById('skill-select-two2').textContent == skill12) {
            document.getElementById('skill-select-two2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          } else if(document.getElementById('skill-select-three2').textContent == skill10 || document.getElementById('skill-select-three2').textContent == skill11 || document.getElementById('skill-select-three2').textContent == skill12) {
            document.getElementById('skill-select-three2').textContent = '';
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 10});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 11});
          
          abilityCards2 = abilityCards2.filter(a => {
        return a !== 12});
          
          r2emoveFill4();
          
          }
        
        asteriosSelect2();
      }
      //End of Asterios selection section
      
      
      
      function confirmUnits2() {
        if(partyTotal2 <= 11 && abilityCards2.length == 3) {
          
          if(servantP11.includes('mash')) {
          panelEight.classList.add('mash');
          panelEight.classList.add('shielder');
          
        } else if(servantP12.includes('mash')) {
          panelNine.classList.add('mash');
          panelNine.classList.add('shielder');
          
        } else if(servantP13.includes('mash')) {
          panelTen.classList.add('mash');
          panelTen.classList.add('shielder');
        }
        
        if(servantP11.includes('artoria')) {
          panelEight.classList.add('artoria');
          panelEight.classList.add('saber');
          
        } else if(servantP12.includes('artoria')) {
          panelNine.classList.add('artoria');
          panelNine.classList.add('saber');
          
        } else if(servantP11.includes('artoria')) {
          panelTen.classList.add('artoria');
          panelTen.classList.add('saber');
        }
        
        
        
        if(servantP11.includes('gilgamesh')) {
         panelEight.classList.add('gilgamesh');
          panelEight.classList.add('archer');
          
        } else if(servantP12.includes('gilgamesh')) {
          panelNine.classList.add('gilgamesh');
          panelNine.classList.add('archer');
          
        } else if(servantP13.includes('gilgamesh')) {
          panelTen.classList.add('gilgamesh');
          panelTen.classList.add('archer');
        }
        
        
        
        if(servantP11.includes('asterios')) {
          panelEight.classList.add('asterios');
         panelEight.classList.add('berserker');
          
        } else if(servantP12.includes('asterios')) {
          panelNine.classList.add('asterios');
          panelNine.classList.add('berserker');
          
        } else if(servantP13.includes('asterios')) {
          panelTen.classList.add('asterios');
          panelTen.classList.add('berserker');
        }
        
          
          
          
        
        if(servantP21.includes('mash2')) {
          panelFour.classList.add('mash2');
          panelFour.classList.add('shielder2');
          
        } else if(servantP22.includes('mash2')) {
          panelThree.classList.add('mash2');
          panelThree.classList.add('shielder2');
          
        } else if(servantP23.includes('mash2')) {
          panelTwo.classList.add('mash2');
          panelTwo.classList.add('shielder2');
        }
        
        if(servantP21.includes('artoria2')) {
          panelFour.classList.add('artoria2');
          panelFour.classList.add('saber2');
          
        } else if(servantP22.includes('artoria2')) {
          panelThree.classList.add('artoria2');
          panelThree.classList.add('saber2');
          
        } else if(servantP21.includes('artoria2')) {
          panelTwo.classList.add('artoria2');
          panelTwo.classList.add('saber2');
        }
        
        
        
        if(servantP21.includes('gilgamesh2')) {
         panelFour.classList.add('gilgamesh2');
          panelFour.classList.add('archer2');
          
        } else if(servantP22.includes('gilgamesh2')) {
          panelThree.classList.add('gilgamesh2');
          panelThree.classList.add('archer2');
          
        } else if(servantP23.includes('gilgamesh2')) {
          panelTwo.classList.add('gilgamesh2');
          panelTwo.classList.add('archer2');
        }
        
        
        
        if(servantP21.includes('asterios2')) {
          panelFour.classList.add('asterios2');
         panelFour.classList.add('berserker2');
          
        } else if(servantP22.includes('asterios2')) {
          panelThree.classList.add('asterios2');
          panelThree.classList.add('berserker2');
          
        } else if(servantP23.includes('asterios2')) {
          panelTwo.classList.add('asterios2');
          panelTwo.classList.add('berserker2');
        }
      
          document.getElementById('team-select2').style.display = 'none';
          
          gameStart();
        }
        
        else {
          alert(`Please make sure you have 3 units selected and your party cost is below 11. You have ${abilityCards2.length} units selected and your party cost is ${partyTotal2} out of 11`);
        }
      };
      //End of player 2 unit selection
      
      
      
      function test1() { document.getElementById('test-me').textContent=abilityCards;
      }
      
      function test2() { document.getElementById('test2').textContent=abilityCards2;
      }
      
      
      
      function gameStart() {
        shuffle1();
        shuffle2();
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
      }
      
      
      function tester() {
        alert(panelEight.classList);
      }
      
      
      
      
      
      var turnPhase = 0;
      
      var turnPhase2 = 0;
      
      
      
      //P1 turn phases
      function startPhase() {
        alert('Would you like to activate a skill card?');
        turnPhase += 1;
      }
      
      function actionPhase() {
        turnPhase += 1;
      }
      
      function chargePhase() {
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        
        if(hand.length <= 5) {
          draw();
        }
        turnPhase += 1;
      }
      
      function endPhase() {
        turnPhase += 1;
      }
      
      function turnTransition() {
        turnPhase -= 4;
        document.getElementById('hand-p1').style.visibility = 'hidden';
        alert('Player two\'s turn! Switch control of the console.');
      };
      //End of p1 turn phases
      
      //P2 turn phases
      function startPhase2() {
        alert('Would you like to activate a skill card?');
        turnPhase2 += 1;
      }
      
      function actionPhase2() {
        turnPhase2 += 1;
      }
      
      function chargePhase2() {
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        
        if(hand2.length <= 5) {
          draw2();
        }
        turnPhase2 += 1;
      }
      
      function endPhase2() {
        turnPhase2 += 1;
      };
      
      function turnTransition2() {
        turnPhase2 -= 4;
        document.getElementById('hand-p2').style.visibility = 'hidden';
        alert('Player one\'s turn! Switch control of the console.');
      };
      //End of p2 turn phases
      
      
      
      function phaseChanger() {
        if(turnPhase == 0) {
          startPhase();
        } else if(turnPhase == 1) {
          actionPhase();
        } else if(turnPhase == 2) {
          chargePhase();
        } else if(turnPhase == 3) {
          endPhase();
        } else if(turnPhase == 4) {
          turnTransition();
        }
        
        document.getElementById('phase-change').textContent = turnPhase;
      }
      
      
      
      
      
      
      
      function c8hosen9() {
      if(panelNine.classList.contains('movable')) {
           panelNine.classList.add('selected-move');
        
           if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
            discardAlert('Mash');
      
            discardListenerMash(eightNine);
        }
      }
         
         
         
      if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
        discardAlert('Artoria');
      
        discardListenerArtoria(eightNine);
      }
      
         
         
        
      if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
        discardAlert('Gilgamesh');
      
        discardListenerGilgamesh(eightNine);
      }
        
      
      
      if(panelEight.classList.contains('pending-move') && panelEight.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
        discardAlert('Asterios');
      
        discardListenerAsterios(eightNine);
      }
      }
      
      
      
      
      function teest() {
        alert(panelSeven.classList);
      }







      function removeMovable() { document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('movable', 'pending-move');

        panelTwo.removeEventListener('click', pTwoClick);
        panelThree.removeEventListener('click', pThreeClick);
        panelFour.removeEventListener('click', pFourClick);
        panelFive.removeEventListener('click', pFiveClick);
        panelSix.removeEventListener('click', pSixClick);
        panelSeven.removeEventListener('click', pSevenClick);
        panelEight.removeEventListener('click', pEightClick);
        panelNine.removeEventListener('click', pNineClick);
        panelTen.removeEventListener('click', pTenClick);
      })
    }



    function discardListenerMash(move) {
      if(document.getElementById('nr1') !== null) { 
        document.getElementById('nr1').addEventListener('click', move);
      }
       
      if(document.getElementById('nr2') !== null) {
        document.getElementById('nr2').addEventListener('click', move);
      }
       
      if(document.getElementById('nr3') !== null) {
        document.getElementById('nr3').addEventListener('click', move);
      }
       
      if(document.getElementById('nr4') !== null) {
        document.getElementById('nr4').addEventListener('click', move);
      }
       
      if(document.getElementById('nr5') !== null) {
        document.getElementById('nr5').addEventListener('click', move);
      }
    }



    function discardListenerArtoria(move) {
      if(document.getElementById('nr6') !== null) { 
        document.getElementById('nr6').addEventListener('click', move);
      }
       
      if(document.getElementById('nr7') !== null) {
        document.getElementById('nr7').addEventListener('click', move);
      }
       
      if(document.getElementById('nr8') !== null) {
        document.getElementById('nr8').addEventListener('click', move);
      }
       
      if(document.getElementById('nr9') !== null) {
        document.getElementById('nr9').addEventListener('click', move);
      }
       
      if(document.getElementById('nr10') !== null) {
        document.getElementById('nr10').addEventListener('click', move);
      }
    }



    function discardListenerGilgamesh(move) {
      if(document.getElementById('nr11') !== null) { 
        document.getElementById('nr11').addEventListener('click', move);
      }
       
      if(document.getElementById('nr12') !== null) {
        document.getElementById('nr12').addEventListener('click', move);
      }
       
      if(document.getElementById('nr13') !== null) {
        document.getElementById('nr13').addEventListener('click', move);
      }
       
      if(document.getElementById('nr14') !== null) {
        document.getElementById('nr14').addEventListener('click', move);
      }
       
      if(document.getElementById('nr15') !== null) {
        document.getElementById('nr15').addEventListener('click', move);
      }
    }



    function discardListenerAsterios(move) {
      if(document.getElementById('nr16') !== null) { 
        document.getElementById('nr16').addEventListener('click', move);
      }
       
      if(document.getElementById('nr17') !== null) {
        document.getElementById('nr17').addEventListener('click', move);
      }
       
      if(document.getElementById('nr18') !== null) {
        document.getElementById('nr18').addEventListener('click', move);
      }
       
      if(document.getElementById('nr19') !== null) {
        document.getElementById('nr19').addEventListener('click', move);
      }
       
      if(document.getElementById('nr20') !== null) {
        document.getElementById('nr20').addEventListener('click', move);
      }
    }



    function discardAlert(servant) {
      alert('Discard a ' + servant + ' command card to move');
    }

    function testDiscard(servant) {
      alert('Discard a ' + servant + ' command card to move');
    }