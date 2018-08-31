var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1531921765050-176b9ba5f8d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=752d6621550e81effb5d6048eb2882cd&auto=format&fit=crop&w=500&q=60",
        description: `Nisi ut laboriosam quo quisquam molestiae. Doloremque mollitia qui similique sunt. 
        Enim qui corrupti alias. Officiis delectus amet omnis. Mollitia voluptatem quia dicta et aut 
        officiis. Culpa voluptatem aut ullam eius Vel nihil velit rerum ullam tempore cum ut provident. 
        Distinctio quo molestiae velit fugiat qui accusamus debitis ea. Quod quisquam commodi facere 
        magnam perferendis occaecati nam ullam. Qui eaque id magnam exercitationem voluptatem quisquam 
        sit. Autem fugit similique possimus.`
    },
    {
        name: "Red Horn", 
        image: "https://images.unsplash.com/photo-1531874993088-51b60dda4452?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c320738cec51295e2599457e9de8a8e&auto=format&fit=crop&w=500&q=60",
        description: `Nisi ut laboriosam quo quisquam molestiae. Doloremque mollitia qui similique sunt. 
        Enim qui corrupti alias. Officiis delectus amet omnis. Mollitia voluptatem quia dicta et aut 
        officiis. Culpa voluptatem aut ullam eius Vel nihil velit rerum ullam tempore cum ut provident. 
        Distinctio quo molestiae velit fugiat qui accusamus debitis ea. Quod quisquam commodi facere 
        magnam perferendis occaecati nam ullam. Qui eaque id magnam exercitationem voluptatem quisquam 
        sit. Autem fugit similique possimus.`
    },
    {
        name: "Sheep Hill", 
        image: "https://images.unsplash.com/photo-1531971085967-431db1ec65a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=212d5ac2d6b763d2f2168d4f0a85b36c&auto=format&fit=crop&w=500&q=60",
        description: `Nisi ut laboriosam quo quisquam molestiae. Doloremque mollitia qui similique sunt. 
        Enim qui corrupti alias. Officiis delectus amet omnis. Mollitia voluptatem quia dicta et aut 
        officiis. Culpa voluptatem aut ullam eius Vel nihil velit rerum ullam tempore cum ut provident. 
        Distinctio quo molestiae velit fugiat qui accusamus debitis ea. Quod quisquam commodi facere 
        magnam perferendis occaecati nam ullam. Qui eaque id magnam exercitationem voluptatem quisquam 
        sit. Autem fugit similique possimus.`
    },
];

function seedDB() {
    // Remove campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("[-] Removed campgrounds");
            // Add a few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("[+] Added a campground");
                        // Create a comment
                        Comment.create(
                            {
                                text: "This text is great, but I wish there was internet!",
                                author: "Homer"
                            }, function(err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("[+] Created new comment");
                                }
                        });
                    }
                });
            });
        }
    });
}


module.exports = seedDB;