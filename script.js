function delColor() {
	var dropdown = document.getElementById("colorSelect");
  var selecteIndex = dropdown.selectedIndex;
	//alert("The selectedIndex is: " + selecteIndex)
	dropdown.removeChild(selecteIndex);
}