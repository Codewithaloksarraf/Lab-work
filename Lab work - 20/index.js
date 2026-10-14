// IF STATEMENTS = if a condition is true, execute some code 
//                 if not, do something else

    const mytext = document.getElementById("my text");
    const mysubmit = document.getElementById("mysubmit");
    const resultElement = document.getElementById("resultElement")
    let age = 0;


    mysubmit.onclick = function{

        age = mytext.value;
        age = number(age);

        if (age >= 100){
            resultElement.textContent = `you are too old to enter this site`;
        }
        else if (age ==0){
            resultElement.textContent = `you can't enter. you were just born.`;
        
        }
        else if (age >= 18){
            resultElement.textContent = `you are okd enough to enter this site.`;
            
        }
        else if (age < 0){
            resultElement.textContent = `you age can't be below 0`;
            
        }
        else {
            resultElement.textContent = `you must be 18+ to enter this site`;

        }

    }







        
 