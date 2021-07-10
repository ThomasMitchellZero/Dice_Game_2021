const image_str = function(n){
    return `images/dice${n}.png`
}

const roll_die = function(n){
    return  Math.ceil(Math.random() * n);
};

const change_picture = function(target, pic_name){
    document.getElementById(target).setAttribute('src',pic_name)

}

const on_roll = function(){
    let die1 = roll_die(6);
    let die2 = roll_die(6);

    change_picture('img1', image_str(die1));
    change_picture('img2', image_str(die2));

    if(die1 > die2){
        document.getElementById('text_result').innerHTML = "Player 1 wins";
    } else if(die2 > die1){
        document.getElementById('text_result').innerHTML = "Player 2 wins";
    } else {
        document.getElementById('text_result').innerHTML = "It's a tie";
    }

};