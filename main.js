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
      randomIndex = Math.floor(Math.random()*15);
      const previousDnaRandomIndex =  this.dna[randomIndex];
      do {
        dna[randomIndex] = returnRandBase();
      }while(this.dna[randomIndex] !== previousDnaRandomIndex);
      return this.dna;
    },
    compareDNA(pAequor){
      let same = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]){
          same ++
        };
      }
      console.log(`${((same / 15) * 100).toFixed()}% DNA in common.`);
    },
    willLikelySurvive(){
      let cOrg = 0;
      this.dna.forEach(element => {
        if (element === 'C' || element === 'G'){
          cOrg++
        }        
      });
      if (((cOrg / 15) * 100).toFixed() > 60){
        return true;
      }else{
        return false;
      }
    }    
  }
}

const pAequor =[]
let i = 0;
do {
  let nominateDNA = pAequorFactory(i,mockUpStrand());
  if (nominateDNA.willLikelySurvive()){
      pAequor.push(nominateDNA);
      i++
  }
}while(i < 30);

pAequor.forEach(element => {
  console.log(element.dna);
})





