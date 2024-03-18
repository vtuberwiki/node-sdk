```javascript
// Import the SDK
const Sdk = require("vtuberwiki-sdk");

// Create an instance of the SDK
const sdk = Sdk.getInstance();

sdk.setApiVersion('1');

// Example: Get information about Vtubers
sdk.getVtubers({ limit: 5 }).then(vtubers => {
    console.log("Vtubers:", vtubers);
});

// Example: Get information about Software
sdk.getSoftware({ limit: 3 }).then(software => {
    console.log("Software:", software);
});

// Example: Get information about Guides
sdk.getGuides({ limit: 1 }).then(guides => {
    console.log("Guides:", guides);
});

// Example: Get information about Authors
sdk.getAuthors({ limit: 16 }).then(authors => {
    console.log("Authors:", authors);
});

// Example: Get information about Changelogs
sdk.getChangelogs({ limit: 2 }).then(changelogs => {
    console.log("Changelogs:", changelogs);
});

// Example: Get information about Partners
sdk.getPartners({ limit: 5 }).then(partners => {
    console.log("Partners:", partners);
});

// Example: Get information about Topics
sdk.getTopics({ limit: 4 }).then(topics => {
    console.log("Topics:", topics);
});

// Example: Get information about Blogs
sdk.getBlogs({ limit: 6 }).then(blogs => {
    console.log("Blogs:", blogs);
});
```
