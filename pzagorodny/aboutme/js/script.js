
var text = ""


var my_array = [prompt(" #1  var my_array = {one, 2, three}; 
 , #2  var my_array  (one, 2, three) , 
   #3 var my_array = [one, 2, [3, 3.5], four];")];


text += my_array[i] + "<br>" ;
document.getElementById('list').innerHTML = text;