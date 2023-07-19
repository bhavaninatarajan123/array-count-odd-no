var arr=[11,10,70,59,2,9];
document.write("Given array is "+[11,10,70,59,2,9]+"<br>");
count=0;
for(let i=0; i<arr.length; i++){
								if(arr[i]%2!=0)
								{
								count++;
								}
								}
								document.write(count);