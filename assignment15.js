let guest_list = ["Ali","Asif","Hussain"];

console.log("Asif is not coming to the dinner due to some reason");

guest_list.splice(1,1,"Hunain")


console.log(guest_list)

for (i = 0;i < guest_list.length; i++){
    
    console.log(`I would like to invite you for the dinner at my house ${guest_list[i]}`)
}