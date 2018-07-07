var value1 = document.getElementById('matrix1');
var value2 = document.getElementById('matrix2');
var value3 = document.getElementById('matrix3');
var value4 = document.getElementById('matrix4');
var value5 = document.getElementById('matrix5');
var value6 = document.getElementById('matrix6');
var value7 = document.getElementById('matrix7');
var value8 = document.getElementById('matrix8');
var value9 = document.getElementById('matrix9');
var xvalue = document.getElementById("xxx");
var yvalue = document.getElementById("yyy");
var zvalue = document.getElementById("zet");

var button  = document.getElementById("dupa");
button.onclick = function(){
 
    
    document.getElementById('demo').innerHTML=(value1.value*value5.value*value9.value)+ (value4.value*value8.value*value3.value)+(value7.value*value2.value*value6.value)-(value3.value*value5.value*value7.value)-(value1.value*value8.value*value6.value)-(value9.value*value2.value*value4.value)
    
}
var btn = document.getElementById("equal-result");
btn.onclick = function(){
    document.getElementById('xresult').innerHTML=
        Math.round(( (xvalue.value*value5.value*value9.value)+ (yvalue.value*value8.value*value3.value)+(zvalue.value*value2.value*value6.value)-(value3.value*value5.value*zvalue.value)-(xvalue.value*value8.value*value6.value)-(value9.value*value2.value*yvalue.value)) / ((value1.value*value5.value*value9.value)+ (value4.value*value8.value*value3.value)+(value7.value*value2.value*value6.value)-(value3.value*value5.value*value7.value)-(value1.value*value8.value*value6.value)-(value9.value*value2.value*value4.value))*100)/100
    
     document.getElementById('yresult').innerHTML=Math.round(
       ( (yvalue.value*value1.value*value9.value)+ (zvalue.value*value4.value*value3.value)+(xvalue.value*value7.value*value6.value)-(value3.value*value7.value*yvalue.value)-(zvalue.value*value1.value*value6.value)-(value9.value*value4.value*xvalue.value)) / ((value1.value*value5.value*value9.value)+ (value4.value*value8.value*value3.value)+(value7.value*value2.value*value6.value)-(value3.value*value5.value*value7.value)-(value1.value*value8.value*value6.value)-(value9.value*value2.value*value4.value))*100)/100;
    
      document.getElementById('zresult').innerHTML= Math.round(
       ( (zvalue.value*value1.value*value5.value)+ (xvalue.value*value4.value*value8.value)+(yvalue.value*value7.value*value2.value)-(value5.value*value7.value*xvalue.value)-(yvalue.value*value1.value*value8.value)-(value2.value*value4.value*zvalue.value)) / ((value1.value*value5.value*value9.value)+ (value4.value*value8.value*value3.value)+(value7.value*value2.value*value6.value)-(value3.value*value5.value*value7.value)-(value1.value*value8.value*value6.value)-(value9.value*value2.value*value4.value))*100)/100;
}
