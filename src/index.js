module.exports = function toReadable (number) {
    const numStr = number.toString();
    const n1 = ['one','two','three','four','five','six','seven','eight','nine'];
    const n10 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const n10_to90 = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const n100 = ['one hundred','two hundred','three hundred','four hundred','five hundred',
    'six hundred','seven hundred','eight hundred','nine hundred'];
    if(number == 0){
        return "zero";
    }else{
        if(number < 20){
            if(number < 10){
                for( let i = 0; i < n1.length; i++){
                    if(number == i+1){
                        return n1[i];                    
                    }
                }
            }else{
                for(let i = 0; i <= n10.length; i++){
                    if(number == i+(1*10)){
                        return n10[i];
                    }
                }
            }
        }else{
            if(number < 100){
                const x = numStr[0];
                const y = numStr[1];
                if(y == 0){
                    return n10_to90[x-1];
                }else{
                    return n10_to90[x-1]+ " "+n1[y-1];
                }
            }else{
                const x = numStr[0];
                const y = numStr[1];
                const z = numStr[2];
                if(y == 0 && z == 0){
                    return n100[x-1];
                }else if(y == 0 && z != 0){
                    return n100[x-1]+" "+n1[z-1];
                }else if( y != 0 && z == 0){
                    return n100[x-1]+ " "+n10_to90[y-1]
                }else if(y < 2 && z != 0){
                    return n100[x-1]+ " "+n10[z]
                }else{
                    return n100[x-1]+ " "+n10_to90[y-1]+ " "+n1[z-1]; 
                }
            }
        }
    }
}
