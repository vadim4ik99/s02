let name = prompt('What animal is the superhero most similar to?')
let gender = prompt('Is the superhero male or female? Leave blank if unknown or other', '');
let age = prompt('How old is the superhero?');
let regAge = /^[1-9][0-9]{0,4}$/;
let regGendr = /^$|male|famale/i;
let regName = /^[a-z]{0,20}$/;
if (regAge.test(age) && regGendr.test(gender) && regName.test(name)) {
   let desc = '';
   if(age < 18 && gender == 'male') {desc = 'boy';}
   if(age > 18 && gender == 'male') {desc = 'man';}
   if(age > 18 && gender == 'famale') {desc = 'woman';}
   if(age < 18 && gender == 'famale') {desc = 'girl';}
   if(age < 18 && gender == '') {desc = 'kid';}
   if(age > 18 && gender == '') {desc = 'hero';}
   alert('The superhero name is ' +name +'-'+desc);
} 
else { alert('Wrong input data'); }