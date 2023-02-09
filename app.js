// EX1
// function test() {
//     console.log(a);
//     console.log(four());
//     var a = 1;
//     function four() {
//     return 4;
//     }
//     }
//     test();
// output : undefined  4

// EX2
// 1)
// closestTo100=(a,b)=>{
//     if(Math.abs(100-a)<Math.abs(100-b))
//     {console.log(a);}
//     else
//     {console.log(b);}
// }
// closestTo100(63,90);

// 2)
// const btn=document.getElementById("add");
// btn.addEventListener("click" ,addition=()=>{
//     var x=Number(document.getElementById("a").value);
//     var y=Number(document.getElementById("b").value);
//     var somme=x+y;
//     document.getElementById("res").value=somme;
//     console.log(somme);
//     });
    //methode 2
// addition=()=>{
// var x=Number(document.getElementById("a").value);
// var y=Number(document.getElementById("b").value);
// var somme=x+y;
// document.getElementById("res").value=somme;
// console.log(somme);
// }

// 3)
// const hailstone=(n)=>{
//     while(n!=1)
//     {
//         if(n%2==0)
//         {
//             console.log(n);
//             console.log(n +'='+n+'/2');
//             n=n/2;
//         }
//         else
//         {
//             console.log(n);
//             console.log(n +'='+n+'*3+1'); 
//             n=n*3+1;
//         }
//     }
//     console.log(n);
// }
// hailstone(5);

// EX3
// 1)
// const makeNewString=(ch)=>{
//     if(ch.length<3){
//         return ch;
//     }
//     else{
//         var ch1=ch.substring(0,3)+ch.substring(ch.length-3);
//         var b=ch[ch.length-3];
//         return ch1;
//     }
// }
// console.log(makeNewString("balkisa"));

// 2)
// const firstHalf=(ch)=>{
//     if((ch.length)%2!=0)
//     {console.log("la taille est impair!");}
//     else{
//         var ch1=ch.substring(0,ch.length/2);
//         console.log(ch1);
//     }
// }
// firstHalf("burritoo");

// 3)
// concatinate=(ch1,ch2)=>{
//     var a=ch1.substring(1)+ch2.substring(1);
//     console.log(a);
// }
// concatinate("oyugi","a yo");

// 4)
// const contains2To4=(ch)=>{
//     var occ;
//     var t=[];
// for(var i=0;i<ch.length;i++)
// {
//     occ=1;
//     for(var j=i+1;j<ch.length;j++)
//     {
//         if(ch[i]==ch[j]){
//             occ+=1;
//         }
//     }
//     if(occ>1 && occ<=4){
//         console.log("over");
//         break;
//     }
// }
// }
// contains2To4("aahbb");

//EX4
// 1)
// const evenNumbers=(n)=>{
//     if(n%2==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(evenNumbers(4));
// // 2)
// var numbers={
//     t:[1,2,3,4,5,6,7,8,9,10],
//     filter:function(){
//         var result=[];
//         for(number of numbers.t){
//             if(evenNumbers(number)){
//                 result.push(number);
//             }
//         }
//         return result;
//     },
// };
// var filtered=numbers.filter();
// console.log(filtered);
// // 3)
// const pop=(n)=>{
//     if(n==null){
//         console.log(numbers.t[0]);
//     }
//     else{
//         for(var i=0;i<n;i++)
//         {
//             console.log(numbers.t[i]);
//         }
//     }
// }
// pop();
// EX5
// document.write("<table border='1'>");
 
// document.write("<tr><td>X</td>");
// for(let i=1; i<=9 ; i++) {
//     document.write("<td>", i, "</td>");
// }
 
// document.write("<tr>");
// for(let i=1; i<=5 ; i++) {
//     document.write("<td>", i, "</td>");
//     for(let j=1; j<=9; j++) {
//         document.write("<td>", i*j, "</td>"); 
//     }
     
//     document.write("</tr>");     
// }
// document.write("</table>");
// EX6
// 1)

const CalculScore=()=>{
    var score=0;
    var a=document.querySelector(".formul")
    var x=a.querySelectorAll('input[type="checkbox"]:checked');
    if(x.length<3 || x.length>3){
    alert( "veuillez choisir entre 1 et 3 cases");}
    else{
    for(var i=0;i<x.length;i++)
    {
        score+=Number(x[i].value);
    }
    
    if(score>15)
    {
        alert("Votre score est "+score+", Vous êtes déjà un joueur expert");
    }
    else{
        alert("Votre score est "+score+", Vous êtes encore un joueur débutant");
    }
}
}