    
    let btn = document.getElementById('btn');
    let output = document.getElementById('outputtext');
    let trynumber = document.getElementById('tries').value||10;

    let number = [Math.floor(Math.random() * 100)];
    btn.addEventListener('click', function () {
        let input = document.getElementById('userinput').value;
        if (input == number) {
            output.innerHTML = `You are genius, your number was ${number}`;
            trynumber == 10;
        }
        else if (input < number) {
            output.innerHTML = "You guessed too low";
            trynumber -1;
        }
        if (input > number) {
            output.innerHTML = "You guessed too high";
            trynumber -1;
        }
        
    })
        


