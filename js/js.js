 
	
window.onload = function  (){
      var cart = document.getElementById('cartTable');
	  var tr = cart.children[1].rows; 
	  var priceTotal = document.getElementById('priceTotal'); 
	   
	   getTotal();
	   
	 function getTotal() {  
        var price = 0; 
        for (var i = 0; i < tr.length; i++) {  
                price += parseFloat(tr[i].getElementsByTagName('td')[3].innerHTML); 
        } 
        priceTotal.innerHTML = price.toFixed(2);  
    }
	   
	      function getSubtotal(tr) {
        var cells = tr.cells;
        var price = cells[2];  
        var subtotal = cells[3];  
        var countInput = tr.getElementsByTagName('input')[0]; 
        var reduce = tr.getElementsByTagName('span')[0];  
        subtotal.innerHTML = (parseInt(countInput.value) * parseFloat(price.innerHTML)).toFixed(2); 
        if (countInput.value == 1) {
            reduce.innerHTML = '';
        }else{
            reduce.innerHTML = '-';
        }
    }
	  
	  
	   
	  for (var i = 0; i < tr.length; i++) { 
        tr[i].onclick = function (e) {
            var e = e || window.event;
            var el = e.target || e.srcElement;  
            var cls = el.className; 
            var countInout = this.getElementsByTagName('input')[0];  
            var value = parseInt(countInout.value);  
            switch (cls) {
                case 'add': 
                    countInout.value = value + 1;
                    getSubtotal(this);
                    break;
                case 'reduce': 
                    if (value > 1) {
                        countInout.value = value - 1;
                        getSubtotal(this);
                    }
                    break;
                case 'delete': 
                    var conf = confirm('确定删除此商品吗？');
                    if (conf) {
                        this.parentNode.removeChild(this);
                    }
                    break;
            }
            getTotal();
        }
       
    } 
}