function createTable() {

   var num = Number(document.getElementById('a').value); // getting number from UI/ html page.

    if (num < 0 || num == 0) {
        alert('Enter a valid number & non-negative number.');
    }
    else {
       
        for (var i = 1; i <= 20; i++) { // for loop to get loop for 20 times.
            var pTag = document.getElementById('pPrint');//tag id where we have to show tables.
            pTag.innerHTML += num + ' * ' + i + ' = ' + (num * i) + "<br/>"
            // pTag.innerHTML = pTag +   num + ' * ' + i + ' = ' + (num * i) + "<br/>" // equivalent as above.
        }

    }
}
