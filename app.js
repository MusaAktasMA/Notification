const notifContainer = document.querySelector(".notifContainer");
const button = document.getElementById('button');

const notifications = [
    "Instragram Bildirim",
    "Twitter Bildirim",
    "Youtube Bildirim",
    "Medium Bildirim",
    "LinkedIn Bildirim",
    "GitHub Bildirim",
]

const colors = ["red","purple","black","gray","green","blue","pink","yellow"];

button.addEventListener("click", ()=>createNotifications())

function createNotifications(){
    const notif = document.createElement("div")
    notif.classList.add("notif")
    notif.classList.add(getRandomColor())

    notif.innerText = getRandomNotif()

    notifContainer.appendChild(notif)

    setTimeout(()=>{
        notif.remove();
    },3000)
}

function getRandomNotif(){
    return notifications[Math.floor(Math.random()* notifications.length)]
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}













