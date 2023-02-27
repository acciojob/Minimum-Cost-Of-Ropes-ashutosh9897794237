function calculateMinCost() {
alert(event);
    event.preventDefault();
  var inputElement = document.queryselector('input').value;
  var arr = inputElement.split(',');
   arr.sort(function (a,b) {return a-b});

	var cost = 0;
	while (arr.length>1){
		var res = Number(arr[0])+ Number(arr[1]);
		arr.push(res);
		cost +=res;
		arr.shift;
		arr.shift;

		arr.short(function (a,b) {return a-b};)
	}
	
  //your code here
  document.getElementById("result").textContent = Cost
  
}  
