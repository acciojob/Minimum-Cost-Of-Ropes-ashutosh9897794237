function calculateMinCost(event) {

    event.preventDefault();
  var inputElement = document.getElementById('rope-lengths').value;
  var arr = inputElement.split(',');
   arr.sort(function (a,b) {return a-b});

	var cost = 0;
	while (arr.length>1){
		var res = Number(arr[0])+ Number(arr[1]);
        arr.shift()
        arr.shift()
		arr.push(res);
		cost +=res;

		

		arr.sort(function (a,b) {return a-b})
	}
  //your code here
	import heapq
def ConnectRope(ropes):
    heapq.heapify(ropes)
    res = 0
    while len(ropes) > 1:
        cur = heapq.heappop(ropes)+heapq.heappop(ropes)
        heapq.heappush(ropes, cur)
        res += cur
    return res

ropes = [8, 4, 6, 12]
print(ConnectRope(ropes))
  document.getElementById("result").innerHTML = cost
  
}  
