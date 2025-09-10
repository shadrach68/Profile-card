const firstName = document.getElementById("firstName");
const firstUserN = document.getElementById("firstUserN");
const firstUserE = document.getElementById("firstUserE");
const firstUserSrt = document.getElementById("firstUserSrt");
const firstUserSuite = document.getElementById("firstUserSuite");
const firstUserCity = document.getElementById("firstUserCity");
const firstUserZip = document.getElementById("firstUserZip");
const firstUserGEO = document.getElementById("firstUserGEO");
const firstUserTel = document.getElementById("firstUserT");
const firstUserW = document.getElementById("firstUserW");
const firstUserCN = document.getElementById("firstUserCN");
const firstUserCatchP = document.getElementById("firstUserCatchP");
const firstUserBs = document.getElementById("firstUserBs");

const secondName = document.getElementById("secondName");
const secondUserN = document.getElementById("secondUserN");
const secondUserE = document.getElementById("secondUserE");
const secondUserSrt = document.getElementById("secondUserSrt");
const secondUserSuite = document.getElementById("secondUserSuite");
const secondUserCity = document.getElementById("secondUserCity");
const secondUserZip = document.getElementById("secondUserZip");
const secondUserGEO = document.getElementById("secondUserGEO");
const secondUserTel = document.getElementById("secondUserT");
const secondUserW = document.getElementById("secondUserW");
const secondUserCN = document.getElementById("secondUserCN");
const secondUserCatchP = document.getElementById("secondUserCatchP");
const secondUserBs = document.getElementById("secondUserBs");

const thirdName = document.getElementById("thirdName");
const thirdUserN = document.getElementById("thirdUserN");
const thirdUserE = document.getElementById("thirdUserE");
const thirdUserSrt = document.getElementById("thirdUserSrt");
const thirdUserSuite = document.getElementById("thirdUserSuite");
const thirdUserCity = document.getElementById("thirdUserCity");
const thirdUserZip = document.getElementById("thirdUserZip");
const thirdUserGEO = document.getElementById("thirdUserGEO");
const thirdUserTel = document.getElementById("thirdUserT");
const thirdUserW = document.getElementById("thirdUserW");
const thirdUserCN = document.getElementById("thirdUserCN");
const thirdUserCatchP = document.getElementById("thirdUserCatchP");
const thirdUserBs = document.getElementById("thirdUserBs");

const btn = document.getElementById("btn");

// Fetching data from the API
btn.addEventListener("click", fetchData)
async function fetchData() {
    try{
        const request = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await request.json();
        const firstUser = response[0];
        const secondUser = response[6];
        const thirdUser = response[9];
        // Assigning values to variables
        firstName.textContent = firstUser.name;
        firstUserN.textContent = firstUser.username;
        firstUserE.textContent = firstUser.email;
        firstUserSrt.textContent = firstUser.address.street;
        firstUserCity.textContent = firstUser.address.city;
        firstUserSuite.textContent = firstUser.address.suite;
        firstUserZip.textContent = firstUser.address.zipcode;
        firstUserGEO.textContent = "lat " + firstUser.address.geo.lat + " " + "lng- " + firstUser.address.geo.lng;
        firstUserTel.textContent = firstUser.phone;
        firstUserW.textContent = firstUser.website;
        firstUserCN.textContent = firstUser.company.name;
        firstUserCatchP.textContent = firstUser.company.catchPhrase;
        firstUserBs.textContent = firstUser.company.bs;
        
        secondName.textContent = secondUser.name;
        secondUserN.textContent = secondUser.username;
        secondUserE.textContent = secondUser.email;
        secondUserSrt.textContent = secondUser.address.street;
        secondUserCity.textContent = secondUser.address.city;
        secondUserSuite.textContent = secondUser.address.suite;
        secondUserZip.textContent = secondUser.address.zipcode;
        secondUserGEO.textContent = "lat " + secondUser.address.geo.lat + " " + "lng- " + secondUser.address.geo.lng;
        secondUserTel.textContent = secondUser.phone;
        secondUserW.textContent = secondUser.website;
        secondUserCN.textContent = secondUser.company.name;
        secondUserCatchP.textContent = secondUser.company.catchPhrase;
        secondUserBs.textContent = secondUser.company.bs;
        
        thirdName.textContent = thirdUser.name;
        thirdUserN.textContent = thirdUser.username;
        thirdUserE.textContent = thirdUser.email;
        thirdUserSrt.textContent = thirdUser.address.street;
        thirdUserCity.textContent = thirdUser.address.city;
        thirdUserSuite.textContent = thirdUser.address.suite;
        thirdUserZip.textContent = thirdUser.address.zipcode;
        thirdUserGEO.textContent = "lat " + thirdUser.address.geo.lat + " " + "lng- " + thirdUser.address.geo.lng;
        thirdUserTel.textContent = thirdUser.phone;
        thirdUserW.textContent = thirdUser.website;
        thirdUserCN.textContent = thirdUser.company.name;
        thirdUserCatchP.textContent = thirdUser.company.catchPhrase;
        thirdUserBs.textContent = thirdUser.company.bs;

    }catch (err){
        console.log("The error is: ",err);
    }
}

