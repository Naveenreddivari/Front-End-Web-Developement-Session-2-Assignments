let obj = {first:'Naveen',lastname:'Reddyvari', Dob:'mar-10'};
let {first:f,lastname:l, Dob:D}=obj;
function myfun(){
  console.log(`Name  ${obj.first} ${obj.lastname} , Data of Birth  ${obj.Dob}`);
}
myfun();