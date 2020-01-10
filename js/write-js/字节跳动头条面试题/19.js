let user_num = readline();
let user_like = readline().split(" ");
let user = {};
user_like.map(function(value,index){
    if(!user[value]){
        user[value] = [];
        user[value].push(index+1);
    }
    else{
        user[value].push(index+1);
    }
});
let test_num = readline();
let result = [];
let count = 0;
for(let i = 0;i < test_num;i++){
    let test_data = readline().split(" ");
    if(!user[test_data[2]]){
        result.push(count);
    }
    else{
        user[test_data[2]].map(function(value){
            if(value>=test_data[0] && value <= test_data[1]){
                count++;
            }
        });
        result.push(count);
        count = 0;
    }
}
result.map(function(value){
    console.log(value);
});
