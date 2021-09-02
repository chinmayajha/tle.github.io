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
    var names = ["Chinmay Jha", "Priyansh Agarwal", "Soham Ghoshal", "Yogesh Kumar"];
    var manual_emails = ["sayskar500@gmail.com", "sg1192k@gmail.com", "tle.eliminators@gmail.com", "aryanmaskara@gmail.com", "angaleabhishek@gmail.com",
        "f20190282@goa.bits-pilani.ac.in", "yashjain0333@gmail.com", "rupinderg00@gmail.com", "keshavagarwal1710@gmail.com", "yuviaku@gmail.com", "paramk1508@gmail.com",
        "soum.choudhuri@gmail.com", "ykwbcps2@gmail.com"
    ]
    var emails = []
    if (names.includes(profile.getName()) || emails.includes(profile.getEmail()) || manual_emails.includes(profile.getEmail())) {
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