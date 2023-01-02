let current_user = ['Hassan','Hamza','Irfan','Basit','Zakir'];
let new_user = ['Daniyal','Salman','Zakir','Hunain','Muneeb'];
for(i = 0;i < new_user.length;i++){
    if(current_user.includes(new_user[i])){
        console.log("This name already exist, you need to try again")
    }
    else{
        console.log("This usenname is available")
    }
}
