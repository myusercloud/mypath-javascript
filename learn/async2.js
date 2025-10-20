const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"},
    {title: "post three", body: "this is post three"}
]

function getPosts() {
    setTimeout(() => {
        let output = [];
        posts.forEach((posts, index) => {
            output += `${posts.title}`
        });
        console.log(output);
    }, 1000);
}




getPosts();


//async await example