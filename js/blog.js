const blog = {
    "blogPosts": [
        {
            "title": "The Future of Transportation: Electric Cars",
            "imageSrc": "images/post_1.png",
            "date": "September 23, 2023",
            "author": "Anderson",
            "content": "Electric cars are revolutionizing the way we travel. Discover the future of transportation and the impact of electric cars on our environment and daily lives."
        },
        {
            "title": "Top Electric Cars of 2024: Why you should buy one",
            "imageSrc": "images/post_2.png",
            "date": "August 08, 2023",
            "author": "Williams",
            "content": "Explore the top electric car models of 2024. Learn about their features, performance, and how they are shaping the future of the automotive industry."
        },
        {
            "title": "The best car rent in the entire planet",
            "imageSrc": "images/post_3.png",
            "date": "July 17, 2023",
            "author": "Robin",
            "content": "Discover the best electric car models currently available in the market. We review their performance, design, and environmental benefits."
        }
    ]
}
// Function to create a blog post HTML element
function createBlogPost(post) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="post-entry-1 h-100">
                <img src="${post.imageSrc}" alt="Image" class="img-fluid">
                <div class="post-entry-1-contents">
                    <h2>${post.title}</h2>
                    <span class="meta d-inline-block mb-3">${post.date} <span class="mx-2">by</span> ${post.author}</span>
                    <p>${post.content}</p>
                    <p><a href="#" class="btn btn-primary btn-sm">Read More</a></p>
                </div>
            </div>
        </div>`;
}

// Function to populate the blog posts
function populateBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts");
    const blogPosts = blog.blogPosts;

    blogPosts.forEach(function (post) {
        const postHTML = createBlogPost(post);
        blogPostsContainer.innerHTML += postHTML;
    });
}

// Call the function to populate the blog posts
populateBlogPosts();

document.addEventListener("DOMContentLoaded", function () {
    const blogPostsContainer = document.getElementById("blog-posts");
    const blogSearchInput = document.getElementById("blogSearch");

    // Function to filter blog posts based on search input
    function filterBlogPosts() {
        const searchTerm = blogSearchInput.value.toLowerCase();

        const filteredPosts = blog.blogPosts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm)
        );

        // Clear the current blog post listings
        blogPostsContainer.innerHTML = "";

        // Add filtered blog posts to the container
        filteredPosts.forEach(function (post) {
            const postHTML = `
              <div class="col-lg-4 col-md-6 mb-4">
                  <div class="post-entry-1 h-100">
                      <img src="${post.imageSrc}" alt="Image" class="img-fluid">
                      <div class="post-entry-1-contents">
                          <h2>${post.title}</h2>
                          <span class="meta d-inline-block mb-3">${post.date} <span class="mx-2">by</span> ${post.author}</span>
                          <p>${post.content}</p>
                          <p><a href="#" class="btn btn-primary btn-sm">Read More</a></p>
                      </div>
                  </div>
              </div>`;

            blogPostsContainer.innerHTML += postHTML;
        });
    }

    // Add event listener to the search input
    blogSearchInput.addEventListener("input", filterBlogPosts);

    // Initially load all blog posts
    filterBlogPosts();
});
