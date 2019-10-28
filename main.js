// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, dna){
  return{
    specimeNum: num,
    dna: dna,
    mutate(){
      randomIndex = Math.floor(Math.random()*this.dna.length);
      const oldBase =  this.dna[randomIndex];
      do {
        dna[randomIndex] = returnRandBase();
      }while(this.dna[randomIndex] === oldBase);
      return this.dna;
    },    
    compareDNA(pAequor){
      const similarities = this.dna.reduce((total, currentValue, currentIndex, arr)=>{
        if (this.dna[currentIndex] === pAequor.dna[currentIndex]){
          return acc+1;
        }else{
          return acc;
        }
      })
      console.log(`${((similarities / this.dna.length) * 100).toFixed(2)}% DNA in common.`);
    },
    willLikelySurvive(){
      const cOrg = this.dna.filter(element => element === 'C' || element === 'G');
      return ((cOrg.length / this.dna.length) * 100).toFixed(2) > 60;  
    },    
  }
};

const pAequor =[]
let i = 0;
while(i < 30) {
  let nominateDNA = pAequorFactory(i,mockUpStrand());
  if (nominateDNA.willLikelySurvive()){
      pAequor.push(nominateDNA);      
  }
  i++;
};

pAequor.forEach((element, i) => {
  console.log(i + ' : ' +element.dna.join(' '));
})




