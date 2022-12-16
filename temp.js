  function pet(animal, fed) {
    if(animal == 'dog') {
    alert('Fido is ' + fed)
    } else if(animal == 'cat') {
      alert('Moses is ' + fed)
    }
  }






  function discardListener(servant, move) {
    if(servant == 'mash') {
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
    } else if(servant = 'artoria') {
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
    } else if(servant == 'gilgamesh') {
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
        } else if(servant == 'asterios') {
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
  }