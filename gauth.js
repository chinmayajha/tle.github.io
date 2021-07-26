function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    document.getElementById("nameID").innerHTML = "Hey, " + profile.getGivenName();
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    var names = ["Chinmay Jha", "Priyansh Agarwal", "Soham Ghoshal"];
    var emails = ["arnabmunshi200@gmail.com", "sg1192k@gmail.com", "sai102789@gmail.com", "tle.eliminators@gmail.com", "yashsahay999@gmail.com", "codewithvk256@gmail.com", "smodak2000@gmail.com", "bhavyammodi@gmail.com", "sharleenclement123@gmail.com", "sushmanthreddymereddy@gmail.com", "mohammedraqeeb9999@gmail.com",
        "i.there.hariomsingh@gmail.com", "orendon@gmail.com", "sarveshk21122001@gmail.com", "umnik11234@gmail.com", "dnaha18@gmail.com", "saxenatushar3010@gmail.com", "umar9897222@gmail.com", "divyanshu9upreti@gmail.com", "wasim7raja10@gmail.com", "somanshusharma611@gmail.com", "krishabh07022019@gmail.com", "ayush.01344@gmail.com",
        "jerryladdu@gmail.com", "rohitbindal29@gmail.com", "rockdony5@gmail.com", "priyanshjha99@gmail.com", "yashporwal321@gmail.com", "2019sristi.sharma@ves.ac.in", "bharathsai1211@gmail.com", "prathu.agg@gmail.com", "jiteshchawla1511@gmail.com", "akshitofficial09@gmail.com", "aman.amanjolly@gmail.com", "sourabhmiglani57@gmail.com",
        "bikashsahu252@gmail.com", "raswanthvijay007@gmail.com", "121dcabingoel@gmail.com", "dipeshpandey2001@gmail.com", "yashwanthrajlakumarapu@gmail.com", "nikmanhunter9@gmail.com", "ankitkesar01@gmail.com", "pilaniapiyush@gmail.com", "ayushkansara@gmail.com", "ayushsingh41098@gmail.com", "prasham.16.b.fe@gmail.com",
        "bhatianishant763@gmail.com", "pbpcodes@gmail.com", "abhishektripathi911@gmail.com", "18bansal.aman@gmail.com", "sumitjangid1692153@gmail.com", "30julykush@gmail.com", "mohantynishanta@gmail.com", "talmiz1234@gmail.com", "shubhankar9817@gmail.com", "ashishpatna1936@gmail.com", "sasikanth.rayaprolu1234@gmail.com", "raghavjaipur00@gmail.com",
        "sai102789@gmail.com", "madhurtd14@gmail.com", "vanshikamattoo0105@gmail.com", "syedarifimam20@gmail.com", "preeti.pky@gmail.com", "bhavyammodi@gmail.com", "smodak2000@gmail.com", "codewithvk256@gmail.com", "umar9897222@gmail.com", "yashporwal321@gmail.com", "misra.suyash12321@gmail.com", "j.kamlesh8102@gmail.com", "raswanthvijay007@gmail.com",
        "aryan8op@gmail.com", "2019sristi.sharma@ves.ac.in", "dnaha18@gmail.com", "orendon@gmail.com", "somanshusharma611@gmail.com", "rajat18078@iiitd.ac.in", "sai.manideep.360@gmail.com", "pkssfs1721@gmail.com", "vaibhavtiwari.ece17@nituk.ac.in", "abhishek.kvj.2@gmail.com", "devakarthik2222@gmail.com", "shyamsnair471@gmail.com",
        "simransv1402@gmail.com", "adijha2905@gmail.com", "edwinnreji@gmail.com", "raimohitrai11111@gmail.com", "bikashsahu252@gmail.com", "umnik11234@gmail.com"
    ]
    if (names.includes(profile.getName()) || emails.includes(profile.getEmail())) {
        var x = document.getElementById("myDIV");
        x.style.display = "block";
        y.style.display = "block";
        var z = document.getElementById("BecomeMember");
        z.style.display = "none";
    } else {
        var x = document.getElementById("myDIV");
        x.style.display = "none";
        y.style.display = "none";
        var z = document.getElementById("BecomeMember");
        z.style.display = "block";
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
    location.reload();
}