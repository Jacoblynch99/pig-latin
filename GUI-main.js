const vowel = ['a', 'i' ,'o', 'e', 'u']
const body = document.getElementById('GUI-body')
let inputTag = document.createElement('input')
let divTag = document.createElement('div')


window.onload = () => {
  console.log('******load detected*****')
  inputTag.setAttribute('id', 'input-id')
  inputTag.setAttribute('value', "" )
  inputTag.addEventListener("keyup", function() {
    storeInput(this.value);
  })

  let divTag = document.createElement('div')
  divTag.setAttribute('id', 'output' )

  body.appendChild(inputTag)
  body.appendChild(divTag)  
}

const storeInput = (value) => {
  pigLatin(value)
}


// let el = document.getElementById('input-id');
//   if(el){
//     el.addEventListener('keyup', () => {
//       console.log('hell')
//     });
//   }




// html ONKEYUP storeInput(this.value) create input 
// storeInput = (text-string)
// invoke function with button stuff(yeeeeeaaaaaaah)
// create button in html onclick
// appendchild to display results



const pigLatin = (string) => {
  // let input = 'egg'
  let splitWord = string.toLowerCase().trim().split('') 
  console.log(splitWord)
  if (vowel.includes(splitWord[0])) {
    return vowelFirst(splitWord)
  } else {
    return consonantFirst(splitWord)
  } 

}

const vowelFirst = (vowelWord) => {
  let vowelPig = vowelWord.join('') + 'yay'
  // return vowelPig
  // divTag.innerHTML = vowelPig
  document.getElementById('output').innerHTML = vowelPig
}
 
const consonantFirst = (consonantWord) => {
  
  let consonantPig = consonantWord.join('')

  for (let i = 0; i < consonantPig.length; i++) {
    if (vowel.includes(consonantPig[i])) {
      let newWord = consonantPig.slice([i]) + consonantPig.slice(0, [i]) + 'ay';  
      document.getElementById('output').innerHTML = newWord
    }
  }
  
}
// console.log(pigLatin('expert'))