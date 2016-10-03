var tShirtApp = angular.module('tShirtApp',[]);

var tShirts = [
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""},
		{location:"/images/1.jpg",description:"lorem ipsum",price:""},
		{location:"/images/2.jpg",description:"lorem ipsum",price:""},
		{location:"/images/3.jpg",description:"lorem ipsum",price:""}
	];

var select10 = function(result){
	console.log(result);
	var items = [];
	var limit = result *10;
	for(var i = limit, j = 0; i < limit+10; i++,j++)
		if(tShirts[i]!==undefined)
			items[j] = tShirts[i];
		else
			break;
	console.log(items);
	return items;
};