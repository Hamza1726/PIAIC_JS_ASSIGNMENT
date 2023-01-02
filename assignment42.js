let magician_name=["MAX MAVEN","MASKED MAGICIAN","CAMPBELL McRAE","JAY MARSHAL"];
function make_great(){
    for(i = 0;i < magician_name.length;i++){
        magician_name[i] =`The Great ${magician_name[i]}`
    }
    return magician_name
}
function show_magician(arr){
    for(i = 0;i < arr.length;i++){
        console.log(arr[i])
    }
}
show_magician(make_great(magician_name))