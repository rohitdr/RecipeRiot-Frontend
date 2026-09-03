 export  const toCamelCase=(str)=> {
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}
export const captalizeFirstLetter=(str)=>{
   
 return str[0].toUpperCase()+str.slice(1).toLowerCase()
}

