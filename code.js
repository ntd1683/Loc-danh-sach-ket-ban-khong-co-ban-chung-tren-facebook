function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
for(let i=0;i<10;i++){
	window.scrollTo(0, document.body.scrollHeight);
await sleep(1000);
}
let select = document.getElementsByClassName("_55wp _7om2 _5pxa _8yo0 _5vbx");
let button = document.getElementsByClassName("_54k8 _52jg _56bs _26vk _56b_ _5uc3 _3cqr _8yo0 _56bt");
do
{
var check = 0;
for (let i=0;i<select.length;i++)
{
		if(!select[i].textContent.includes("bạn chung"))
		{
			await sleep(1000);
			button[i].click();
			console.log(i);
			select[i].remove();
			check++;
		}
}
}while(check!==0);
