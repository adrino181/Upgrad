var divOne = document.getElementById('cont');
divOne.style.display='block';
document.getElementById('upper_container').style.display = 'none';

function add()
{
var user_name = document.getElementById('name').value;
var user_phone = document.getElementById('phone').value;
var dis1 = document.getElementById('cont');	
var dis2 = document.getElementById('upper_container');

if(dis1.style.display == 'none')
{
if(user_phone != "" && user_name!="")
{	
dis1.style.display = "block";
dis2.style.display = 'none';
var table = document.getElementById('content');
var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = user_name;
cell2.innerHTML = user_phone;
cell3.innerHTML = '<button class="dlt_btn" onclick="deleteRow(this)">Delete</button>';
}
}
else
{
dis1.style.display = "none";
dis2.style.display = "block";
}

 document.getElementById('name').value = "";
 document.getElementById('phone').value = "";
 document.getElementById("show_name").innerHTML = "";
 document.getElementById("show_phone").innerHTML = "";
}

function display_name()
{
  var x = document.getElementById(
 'name');
  document.getElementById("show_name").innerHTML = x.value;
}

function display_phone()
{
  var x = document.getElementById('phone');
  document.getElementById("show_phone").innerHTML = x.value;
 }


function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("content").deleteRow(i);
}
