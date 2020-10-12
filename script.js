function generator (){
    let who = Math.floor(Math.random()*3+1);
    let did = Math.floor(Math.random()*3+1);
    let what = Math.floor(Math.random()*3+1);
    let when = Math.floor(Math.random()*3+1);

    let x = document.getElementById("excuse");

    let result = "";

    switch (who){
        case 1:
            result += "My dog ";
            break;
        case 2:
            result += "My boyfriend ";
            break;
        case 3:
            result += "My mother ";
            break;
        default:
            result += "I "
    }
    switch (did){
        case 1:
            result += "broke ";
            break;
        case 2:
            result += "lost ";
            break;
        case 3:
            result += "destroyed ";
            break;
        default:
            result += "i lost "
    }
    switch (what){
        case 1:
            result += "my homeworks ";
            break;
        case 2:
            result += "my Pc ";
            break;
        case 3:
            result += "my mobile phone ";
            break;
        default:
            result += "the head, "
    }
    switch (when){
        case 1:
            result += "this morning.";
            break;
        case 2:
            result += "last night.";
            break;
        case 3:
            result += "a moment ago.";
            break;
        default:
            result += "as always, i am sorry."
    }
    return result;
}
document.write(generator());
