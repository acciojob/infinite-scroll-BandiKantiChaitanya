//your code here!
let infiList=document.getElementById('infi-list')

let n=10
for(let i=1;i<=n;i++){
	let list=document.createElement('li')
	list.textContent=`Item ${i}`
	infiList.appendChild(list)
}

infiList.addEventListener('scroll', function() {
    var a = infiList.scrollTop;
    var b = infiList.scrollHeight - infiList.clientHeight;
    // var c = a / b;

     if (a + infiList.clientHeight >= infiList.scrollHeight * 0.9) {
        // Add 2 more items when the user scrolls near the bottom
        for (let i = n + 1; i <= n + 2; i++) {
            let list = document.createElement('li');
            list.textContent = `Item ${i}`;
            infiList.appendChild(list);
        }
        
        // Update n after adding the new items
        n += 2;
    }
});


