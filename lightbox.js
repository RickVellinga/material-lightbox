const watBlijf = document.querySelectorAll('.blijven')
const watWeg = document.querySelectorAll('.weg')

const alleInfo = []

for (let i = 0; i < watWeg.length; i++) {
  alleInfo.push(watWeg[i]);
  watWeg[i].remove();
}

const maakSluitKnop = document.createElement('i');
maakSluitKnop.className = 'fas fa-times';
maakSluitKnop.addEventListener('click', sluitModaal);

function maakModaal(num) {
   let modaal = document.createElement('div');
   modaal.id = 'modaal';

   let modaalInhoud = document.createElement('div');
   modaalInhoud.className = 'modaal-inhoud';
   modaalInhoud.innerHTML = alleInfo[num].innerHTML;
   modaalInhoud.addEventListener('click', function(sluit){
     sluit.stopPropagation();
   })

   modaalInhoud.prepend(maakSluitKnop);
   modaal.append(modaalInhoud);
   document.body.append(modaal);

}

function sluitModaal() {
  document.getElementById('modaal').remove();
}

for(let i = 0; i < watBlijf.length; i++) {
  watBlijf[i].addEventListener('click', function() {
    maakModaal(i)
});

}
