var isPalindrome = function(x) {
    var numToStr = x.toString();
    var num = numToStr.split('');
    var revArr = num.reverse();

    if(x===revArr.join('')){
        return true;
    }else{
        return false;
    }
};

isPalindrome(1234567890); //false
isPalindrome(919); //true