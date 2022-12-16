const nineTen = function nineToTen() {
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















    const tenSix = function tenToSix() {
        if(panelTen.classList.contains('pending-move') &&(panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p13')))) { 
          panelSix.classList.add('occupied-p13');
          
          panelTen.classList.remove('occupied-p13');
     
          removeMovable();

          //battle();
        }
          
        if(panelTen.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p11')))) {
          panelSix.classList.add('occupied-p11');
          
          panelTen.classList.remove('occupied-p11');
     
          removeMovable();

          //battle();
        }
          
        if(panelTen.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p12')))) {
          panelSix.classList.add('occupied-p12');
          
          panelTen.classList.remove('occupied-p12');
          
          removeMovable();

          //battle();
        }
          
          if(panelTen.classList.contains('pending-move') &&(panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p23')))) { 
          panelSix.classList.add('occupied-p23');
          
          panelTen.classList.remove('occupied-p23');
     
          removeMovable();

          //battle();
        }
          
        if(panelTen.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p21')))) {
          panelSix.classList.add('occupied-p21');
          
          panelTen.classList.remove('occupied-p21');
          
          removeMovable();

          //battle();
        }
          
        if(panelTen.classList.contains('pending-move') && (panelTen.classList.contains('movable') && (panelNine.classList.contains('occupied-p22')))) {
          panelSix.classList.add('occupied-p22');
          
          panelTen.classList.remove('occupied-p22');
          
          removeMovable();

          //battle();
        }
        checkAll();
        };
    
    
    
    
    
        






        /*Old example

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


        */































   function c9hosen11() {
    if(panelEleven.classList.contains('movable')) {
        panelEleven.classList.add('selected-move');
     
        if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListener('mash', nineEleven);
      }
    }
       
       
       
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListener('artoria', nineEleven);
    }
    
       
       
      
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListener('gilgamesh', nineEleven);
    }
      
    
    
    if(panelNine.classList.contains('pending-move') && panelNine.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListener('asterios', nineEleven);
    }
   }







//9 11
   function c10hosen6() {
    if(panelSix.classList.contains('movable')) {
        panelSix.classList.add('selected-move');
     
        if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListener('mash', tenSix);
      }
    }
       
       
       
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListener('artoria', tenSix);
    }
    
       
       
      
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListener('gilgamesh', tenSix);
    }
      
    
    
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListener('asterios', tenSix);
    }
   }



   function c10hosen7() {
    if(panelSeven.classList.contains('movable')) {
        panelSeven.classList.add('selected-move');
     
        if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListener('mash', tenSeven);
      }
    }
       
       
       
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListener('artoria', tenSeven);
    }
    
       
       
      
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListener('gilgamesh', tenSeven);
    }
      
    
    
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListener('asterios', tenSeven);
    }
   }



   function c10hosen9() {
    if(panelNine.classList.contains('movable')) {
        panelNine.classList.add('selected-move');
     
        if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("mash") && (document.getElementById('nr1') !== null || document.getElementById('nr2') !== null || document.getElementById('nr3') !== null || document.getElementById('nr4') !== null || document.getElementById('nr5') !== null)) {
          discardAlert('Mash');
    
          discardListener('mash', tenEight);
      }
    }
       
       
       
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("artoria") && (document.getElementById('nr6') !== null || document.getElementById('nr7') !== null || document.getElementById('nr8') !== null || document.getElementById('nr9') !== null || document.getElementById('nr10') !== null)) {
      discardAlert('Artoria');
    
      discardListener('artoria', tenEight);
    }
    
       
       
      
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("gilgamesh") && (document.getElementById('nr10') !== null || document.getElementById('nr12') !== null || document.getElementById('nr13') !== null || document.getElementById('nr14') !== null || document.getElementById('nr15') !== null)) {
      discardAlert('Gilgamesh');
    
      discardListener('gilgamesh', tenEight);
    }
      
    
    
    if(panelTen.classList.contains('pending-move') && panelTen.classList.contains("asterios") && (document.getElementById('nr16') !== null || document.getElementById('nr17') !== null || document.getElementById('nr18') !== null || document.getElementById('nr19') !== null || document.getElementById('nr20') !== null)) {
      discardAlert('Asterios');
    
      discardListener('asterios', tenEight);
    }
   }






   /**/
   /*
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
*/









//8 5
    //Move from p10 to p7
const tenSeven = function tenToSeven() {
    if(panelten.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p23')))
      ) {
      
      panelSeven.classList.add('occupied-p23');
      
      panelSeven.classList.remove('occupied-p23');
    
      removeMovable();
      
      //battle();
    }
      
    if(panelTen.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p21')))
      ) {
      
      panelSeven.classList.add('occupied-p21');
      
      panelTen.classList.remove('occupied-p21');
    
      removeMovable();
      
      //battle();
    }
      
      if(panelTen.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p22')))
      ) {
      
      panelSeven.classList.add('occupied-p22');
      
      panelTen.classList.remove('occupied-p22');
    
      removeMovable();
        
      //battle();
    }
      
      if(panelTen.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p11')))
      ) {
      
      panelSeven.classList.add('occupied-p11');
      
      panelTen.classList.remove('occupied-p11');
    
      removeMovable();
        
      //battle();
    }
      
      if(panelTen.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p12')))
      ) {
      
      panelSeven.classList.add('occupied-p12');
      
      panelTen.classList.remove('occupied-p12');
    
      removeMovable();
        
      //battle();
    }
      
      if(panelTen.classList.contains('pending-move') && (panelFive.classList.contains('movable') && (panelEight.classList.contains('occupied-p13')))
      ) {
      
      panelSeven.classList.add('occupied-p13');
        
      panelTen.classList.remove('occupied-p13');
    
      removeMovable();
    }
      checkAll();
    };
    //End of move from p10 to p7







    //five.classlist.add('mash')






//8 5
    //Move from p8 to p5
   const eightFive = function eightToFive() { if(panelFive.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelEight.classList.contains('occupied-p11')))
   ) {
     
 if(panelFive.classList.contains('occupied-p21') ||
 panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
   
     battle()
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('mash')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p11');
   panelFive.classList.add('mash');
   panelFive.classList.add('shielder');
   
   
   panelEight.classList.remove('occupied-p11');
   panelEight.classList.remove('mash');
   panelEight.classList.remove('shielder');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('artoria')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p11');
   panelFive.classList.add('artoria');
   panelFive.classList.add('saber');
   
   
   panelEight.classList.remove('occupied-p11');
   panelEight.classList.remove('artoria');
   panelEight.classList.remove('saber');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('gilgamesh')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p11');
   panelFive.classList.add('gilgamesh');
   panelFive.classList.add('archer');
   
   
   panelEight.classList.remove('occupied-p11');
   panelEight.classList.remove('gilgamesh');
   panelEight.classList.remove('archer');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('asterios')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p11');
   panelFive.classList.add('asterios');
   panelFive.classList.add('berserker');
   
   
   panelEight.classList.remove('occupied-p11');
   panelEight.classList.remove('asterios');
   panelEight.classList.remove('berserker');
   
   removeMovable();
   
   turnPhase += 1;
 } 
   }
   
   
   
   
   
   if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') && (panelEight.classList.contains('occupied-p12')))
   ) {
     
 if(panelFive.classList.contains('occupied-p21') ||
 panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
   
     battle()
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('mash')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p12');
   panelFive.classList.add('mash');
   panelFive.classList.add('shielder');
   
   
   panelEight.classList.remove('occupied-p12');
   panelEight.classList.remove('mash');
   panelEight.classList.remove('shielder');
   
   removeMovable();
   
   turnPhase +=1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('artoria')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p12');
   panelFive.classList.add('artoria');
   panelFive.classList.add('saber');
   
   
   panelEight.classList.remove('occupied-p12');
   panelEight.classList.remove('artoria');
   panelEight.classList.remove('saber');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('gilgamesh')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p12');
   panelFive.classList.add('gilgamesh');
   panelFive.classList.add('archer');
   
   
   panelEight.classList.remove('occupied-p12');
   panelEight.classList.remove('gilgamesh');
   panelEight.classList.remove('archer');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('asterios')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p12');
   panelFive.classList.add('asterios');
   panelFive.classList.add('berserker');
   
   
   panelEight.classList.remove('occupied-p12');
   panelEight.classList.remove('asterios');
   panelEight.classList.remove('berserker');
   
   removeMovable();
   
   turnPhase += 1;
 } 
   }
   
   
   
   
   
   if(panelEight.classList.contains('pending-move') && (panelFive.classList.contains('selected-move') &&(panelEight.classList.contains('occupied-p13')))
   ) {
     
 if(panelFive.classList.contains('occupied-p21') ||
 panelFive.classList.contains('occupied-p22') || panelFive.classList.contains('occupied-p23')) {
   
     battle();
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('mash')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p13');
   panelFive.classList.add('mash');
   panelFive.classList.add('shielder');
   
   
   panelEight.classList.remove('occupied-p13');
   panelEight.classList.remove('mash');
   panelEight.classList.remove('shielder');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('artoria')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p13');
   panelFive.classList.add('artoria');
   panelFive.classList.add('saber');
   
   
   panelEight.classList.remove('occupied-p13');
   panelEight.classList.remove('artoria');
   panelEight.classList.remove('saber');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('gilgamesh')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p13');
   panelFive.classList.add('gilgamesh');
   panelFive.classList.add('archer');
   
   
   panelEight.classList.remove('occupied-p13');
   panelEight.classList.remove('gilgamesh');
   panelEight.classList.remove('archer');
   
   removeMovable();
   
   turnPhase += 1;
   
 } else if(!panelFive.classList.contains('occupied-p21') && !panelFive.classList.contains('occupied-p22') && !panelFive.classList.contains('occupied-p23') && panelEight.classList.contains('asterios')) {
   
   panelFive.classList.remove('selected-move');
   
   
   panelFive.classList.add('occupied-p13');
   panelFive.classList.add('asterios');
   panelFive.classList.add('berserker');
   
   
   panelEight.classList.remove('occupied-p13');
   panelEight.classList.remove('asterios');
   panelEight.classList.remove('berserker');
   
   removeMovable();
   
   turnPhase += 1;
 } 
   }
   
   checkAll();
 };
 //End of move from p8 to p5