const bookContent = {
    "book1": 
    `When the National Security Agency's invincible code-breaking machine encounters a mysterious code it cannot break, 
    the agency calls in its head cryptographer, Susan Fletcher, a brilliant, beautiful mathematician, 
    What she uncovers send shock waves through the corridors of power. The NSA is being held hostage not by guns or bombs, 
    but by a code so complex that if released would cripple U.S. intelligence. <br>

    Caught in an accelerating tempet of secrecy and lies, Fletcher battles to save the agency she believes in. Betrayed on all sides. 
    She finds herself fighting not only for her country but for her life, and in the end, for the life of the man she loves...`,



    "book2": 
    `Darkness falls <br>

    Despair abounds.. <br>

    Evil reigns. <br>

    Eragon and his dragon, Saphira, have just saved the rebel state from destruction by the forces of King Galbatorix, cruel ruler of the Empire. 
    Now Eragon must travel to Ellesméra, land of the elves, for further training in magic and swordsmanship, the vital skills of the Dragon Rider. 
    It is the journey of a lifetime, each day a fresh adventure. But chaos and Betrayal plague him at every turn, and Eragon isn't sure whom he can trust.<br>

    Meanwhile, his cousin Roran must fight a new battle back home in Carvahall one that puts Eragon in even graver danger`,



    "book3": 
    `'Key is in the lock all right, sir. On the inside. Mr Ackroyd must have locked himself in.' <br>

    Poor Roger Ackroyd. He knew that the woman he loved had been harbouring a guilty secret - she poisoned her first husband. And yesterday she killed herself.
    <br>
    But guilty secrets rarely stay secret. Who had been blackmailing her before her death? Had it really driven her to suicide? 
    And would it all be revealed in the letter that arrived in the evening post? Sadly Roger Ackroyd wasn't going to live long enough to find out...`,



    "book4": 
    `EVERY DAY THE SAME. UNTIL TODAY. <br>

    Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. <br>

    She's even started to feel like she knows the people who live in one of the houses. Their life as she sees it is perfect. If only Rachel could be that happy.
    <br>
    And then she sees something shocking, and in one moment everything changes. <br>

    Now Rachel has a chance to become a part of the lives she's only watched from afar. <br>

    Now they'll see: she's much more than just the girl on the train...`,



    
    "book5": 
    `For Jack Reacher being invisible has become a habit. <br>

    He spends his days digging swimming pools by hand and his nights as the bouncer in the local strip club in the Florida Keys. <br>

    He doesn't want to be found. <br>

    But someone has sent a private detective to seek him out.

    Then Reacher finds the guy beaten to death with his fingertips sliced off. It's time to head north and work out who is trying to find him and why.`
};

const coverButtons = document.querySelectorAll(".book button");

coverButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const clickedButton = event.currentTarget;
        const bookId = clickedButton.id; 

        const allCovers = document.querySelectorAll("#coverPage");
        allCovers.forEach(cover => {
            cover.innerHTML = "";
            cover.style.visibility = "hidden";
        });

        const coverPage = clickedButton.parentElement.parentElement.nextElementSibling;

        coverPage.innerHTML = bookContent[bookId];
        coverPage.style.visibility = "visible";
        coverPage.scrollIntoView({
            behaviour: 'smooth',
            block: 'center'
        });
    });
});
