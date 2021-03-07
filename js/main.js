	function f(){
   document.getElementById('flag1').classList.remove('unvis');
    document.getElementById('flag1').classList.add('vis');
 }
 function f2(){
   document.getElementById('flag2').classList.remove('unvis');
    document.getElementById('flag2').classList.add('vis');
 }
 function f3(){
   document.getElementById('pool1').classList.remove('unvis');
    document.getElementById('pool1').classList.add('vis');
 }
 function f4(){
   document.getElementById('pool2').classList.remove('unvis');
    document.getElementById('pool2').classList.add('vis');
 }

	setTimeout(f,4000);
	setTimeout(f2,4500);
	setTimeout(f3,2000);
	setTimeout(f4,3000);