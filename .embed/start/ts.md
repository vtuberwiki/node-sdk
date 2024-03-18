```typescript
// Import the SDK
import Sdk from "vtuberwiki-sdk";

// Create an instance of the SDK
const sdk = Sdk.getInstance()

sdk.setApiVersion('1');

// Example: Get information about Vtubers
const vtubers = await sdk.getVtubers({ limit: 5 });
console.log("Vtubers:", vtubers);

// Example: Get information about Software
const software = await sdk.getSoftware({ limit: 3 });
console.log("Software:", software);

// Example: Get information about Guides
const guides = await sdk.getGuides({ limit: 1 });
console.log("Guides:", guides);

// Example: Get information about Authors
const authors = await sdk.getAuthors({ limit: 16 });
console.log("Authors:", authors);

// Example: Get information about Changelogs
const changelogs = await sdk.getChangelogs({ limit: 2 });
console.log("Changelogs:", changelogs);

// Example: Get information about Partners
const partners = await sdk.getPartners({ limit: 5 });
console.log("Partners:", partners);

// Example: Get information about Topics
const topics = await sdk.getTopics({ limit: 4 });
console.log("Topics:", topics);

// Example: Get information about Blogs
const blogs = await sdk.getBlogs({ limit: 6 });
console.log("Blogs:", blogs);
```
