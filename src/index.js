module.exports = function check(str, bracketsConfig) {
  let out = false;

  let arr = bracketsConfig.map( (e) => e.join("") ); /* прохождение циклом по скобкам */

  for (let i = 0;i < arr.length; i++){ /* прохождение по условию */
    if(str.includes(arr[i])){

      str = str.replace(arr[i],"");
      
      i =   -1;

    }
  }
  if(str.length==0){
    out=true 
  }
    return out;
}

 