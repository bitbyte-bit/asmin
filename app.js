const  object =document.getElementById('objectives');
object.innerHTML="<li>To build a body equiped with spiritual values</li><li>To build a body which will offer charitable works</li><li>To build a body which will spread chritianity</li>";
//-----nav-DOM manipulator------
const nav =document.getElementById('nav');
nav.innerHTML="<h4 style='font-weight:bold;'>For more information about <a class='h1'>arise and shine</a><br>reach us on our social media platforms<h5>";

const roles = document.querySelector('.role');
roles.innerHTML="<h3 class='wedo'>What we do;</h3>\n\ngathering resources from well wishers in addition to our own contributed fund by registered members,to reach out to hold up the needy mostly children that need help.Not only help of children but also old vulnerable WAZEE(old men and women). \n\n\nbe helpful and share resources to save such lives; &nbsp;<i class='fa fa-thumbs-down'";

const sub = document.querySelector('.sub-title');
sub.innerHTML="<h4 style='color:white;font-size:large;'>arise and shine ministries international<h4>";

const mission =document.querySelector('.mission');
mission.innerHTML="<li>to..........</li><li>to...........</li><li>to...........</li><li>to............</li><li>to</li>";

const donators =document.getElementById('donateItem-');
const donatorsBtn =document.getElementById('reachOut').addEventListener('click',function(){
        donators.style.height='max-Content';
});
const donator =document.getElementById('donateItem-');
const exitBtn =document.getElementById('quit').addEventListener('click',function(){
        donator.style.height='0';
});
const register = document.getElementById('form');
register.innerHTML="<fieldset role='fieldset'><legend role='information'>fill in your information</legend><form type='submit' method='post' role='form1'><input type='text' placeholder='Full Name' class='input1' required/><br><input type='text' placeholder='Address' class='input1' required /><br><input type='tel' placeholder='phone' class='input1' required /><br><input type='text' class='input1' placeholder='registering as?' required/><br><textarea class='input2' maxLength='300' placeholder='give more relevant information if any'></textarea><br><button type='submit' class='input3'>submit</button><input type='button' class='input3' id='back-btn' value='back'/></form></fieldset>";
const btn =document.querySelector('.btn1').addEventListener('click',function(){
        var seconds =document.querySelector('.memberShip');
        seconds.style.height='max-Content';
});
const home =document.getElementById('back-btn').addEventListener('click',function(){
        var seconds =document.querySelector('.memberShip');
        seconds.style.height='0';
});
const collector =document.querySelector('.btn2');
const beneficiary =document.querySelectorAll('.btn3');
const donor = document.querySelectorAll('.btn4');
collector.addEventListener('click',function(){
        var seconds =document.querySelector('.memberShip');
        seconds.style.height='max-Content';
});


const openPopupButton = document.querySelector('.btn3');
const popup = document.getElementById('pop');
popup.innerHTML="<h4 role='popup'>hello beneficiary</h4><br><br><div class='overlay' id='overlay'><h4 value='informer'>you are welcome to ASMIN.your beneficiary application form will be ready in 1hour from now,please wait......</h4><br><p id='timer'>01:00:00</p></div>";
const overlay = document.querySelector('overlay');
const timerElement = document.getElementById('timer');
openPopupButton.addEventListener('click', () => {
    popup.style.height='max-Content';
    startTimer();
});

function startTimer() {
    let endTime = localStorage.getItem('endTime');

    if (!endTime) {
        endTime = new Date().getTime() + 3600000; // 1 hour in milliseconds
        localStorage.setItem('endTime', endTime);
    }

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            clearInterval(interval);
            localStorage.removeItem('endTime');
            window.location.href = 'beneficiary.html'; 
        } else {
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerElement.textContent = 
                `${hours.toString().padStart(2, '0')}:` + 
                `${minutes.toString().padStart(2, '0')}:` + 
                `${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
};//timer ends here-----
function clearNote(){
document.getElementById('pop').style.height='0';
}setTimeout(() => {
       nested() 
}, 5000);function nested(){
        clearNote();
};
//------sponsor code dom manipulator--
const sponsor = document.getElementById('sponsor');
sponsor.innerHTML="<p role='sponsor'>sponsored by;</p><br><img id='sponsor' src='sponsor.jpg'/><br><br><button role='city-store' class='visit-city'>visit city store</button>"
 
const city =document.querySelector('.visit-city');
city.addEventListener('click',function(){
window.location.href="https://orionent.netlify.app/";
});
function date(){
        const dater = document.getElementById('date');
        const now = new Date();
        const options = {
                weekday:'long',year: 'numeric',month: 'long',
                day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
        };
        dater.textContent=now.toLocaleDateString('en-us', options);
}
setInterval(date,1000);
updateDataTime();
//beneficiary page----
const beneficial =document.querySelector('.root');
beneficial.innerHTML="<h1 role='header2'>i am a beneficiary</h1>";
//-----chart button event handler------
const call1 = document.querySelector('.chat1').addEventListener('click',function(){
        window.location.href="https://wa.me/256745307372";
});
const tell1 =document.getElementById('tell1').addEventListener('click',function(){
        window.location.href="tel:256745307372";
});
const sms3 = document.querySelector('.sms2').addEventListener('click',function(){
        window.location.href="sms:256745307372"
})
const tell2 =document.getElementById('tell2').addEventListener('click',function(){
        window.location.href="tel:256754915817";
});
const tell3 =document.getElementById('tell3').addEventListener('click',function(){
        window.location.href="tel:256741236186";
});

const call2 = document.querySelector('.chat2').addEventListener('click',function(){
        window.location.href="https://wa.me/256754915817";
});
const msg2 = document.querySelector('.sms1').addEventListener('click',function(){
        window.location.href="sms:256754915817";
});
const call3 = document.querySelector('.chat3').addEventListener('click',function(){
        window.location.href="https://wa.me/256741236186";
});const msg3 =document.querySelector('.sms').addEventListener('click',function(){
        window.location.href="sms:256741236186";
});


////////////////////////////////////////////

