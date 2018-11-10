const book ={
  name:"Ego is the enemy",
  author:"Ryan Holiday",
  publisher:{
    name:"penguine"
  }
}
const {name:publisherName='Self Published'}=book.publisher

console.log(publisherName);


const item=['cofee (hot)','$2.00','$2.50','$2.75']
const[type,,medium]=item;
console.log(`a medium ${type} costs ${medium}`);
