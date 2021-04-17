

    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
    apiKey: 'AIzaSyCvIzZi8ELrKZYduLFVHjzvDNPcx5CD8UY',
    authDomain: 'projects-84d0d.firebaseapp.com',
    projectId: 'projects-84d0d'
    });

    var db = firebase.firestore();

    // projectArr = [
    //     {
    //         name: 'blog',
    //         description:"Kasasa wanted to move their blogs from Wordpress to Hubspot for this project. I was given a Hubspot template to start with and added the header, footer, topics menu, search bar and subscribe pages. I also made sure the styles throughout the template were updated to match Kasasa's brand.",
    //         repo: null,
    //         website:"https://www.kasasa.com/blog",
    //     },
    //     {
    //         name: 'quiz',
    //         description:"This is a quiz template I built for Kasasa to educate their audience in an interactive way. It was built in Hubspot using Bootstrap carousels and Jquery. The template itself is customizable so content managers can build more quizzes easily.",
    //         repo: null,
    //         website:"https://www.kasasa.com/lp/borrowers-quiz",
    //     },
    //     {
    //         name: 'dungeon',
    //         description:"This is a CLI dungeon crawl game that I developed with Node.js. It uses Inquirer.js to prompt questions then pass the answers to handlers. The current version demonstrates the character creator, exploration, combat and loot systems.",
    //         repo:"https://github.com/construktivist/react-digital-pet",
    //         website:null
    //     },
    //     {
    //         name: 'monster',
    //         description:"This is a game that allows a user to create and save a monster that can be used to fight other monsters. This project focuses primarily on using PHP for most of the functionality. The monsters are saved to a database with MySQL.",
    //         repo:"https://github.com/construktivist/monster-game",
    //         website:"https://monster-game.herokuapp.com/",
    //     },
    // ]

    // function postFire(n, d, r, w) {
    //     db.collection("projects").add({
    //         name: n,
    //         description: d,
    //         repo: r,
    //         website: w
    //     }).then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });
    // }

    // projectArr.forEach(e => {
    //     postFire(e.name, e.description, e.repo, e.website);
        
    // });

    $(document).ready(function(){
    db.collection("projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data(doc.id));
            $('#projectCards').append('<div class="project-card col-sm-12 col-md-6">' +
            '<div class="project-card-title">' +
                '<h3>'+ doc.data(doc.id).name +'</h3>' +
            '</div>' +
            '<div class="project-card-copy">' +
                '<p>' + doc.data(doc.id).description +'</p>' +
            '</div>' +
            '<div class="project-card-links">' +
                '<a href="'+ doc.data(doc.id).repo +'" class="btn">repo</a>' +
                '<a href="' + doc.data(doc.id).website +'" class="btn">website</a>' +
            '</div>' +
            '</div>');
        });
    });
    });

    console.log('test')