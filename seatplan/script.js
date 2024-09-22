currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
 
week = Math.ceil(days / 7);
table = Math.floor(week/2)%3 + 1;
window.setInterval(() => {
    table = Math.floor(week/2)%3 + 1;
    console.log("week "+week+", table "+table)
    document.getElementById("desk"+table).innerHTML="<br>Lukas,  Joshua,  Jayden,  Renas";
    document.getElementById("desk"+((table+0)%3+1)).innerHTML="<br>Leni,  Pauline,  Naima,  Naima";
    document.getElementById("desk"+((table+1)%3+1)).innerHTML="<br>Ronja,  Lina,  Alissa";
}, 100);
