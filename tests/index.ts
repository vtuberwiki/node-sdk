import VtuberSdk from '../lib/index';
import vars from '../lib/vars';

const sdk = VtuberSdk.getInstance();

console.log(vars);

sdk.setApiVersion('1');

(async () => {
    
    await sdk.getVtubers({ skip: 2, limit: 5, showMetadata: true }).then((vtubers) => {
        console.log(vtubers);
    });
    
    await sdk.getSoftware({ skip: 2, limit: 5, showMetadata: true }).then((software) => {
        console.log(software);
    });
    
    await sdk.getGuides({ showMetadata: true, formatDates: true }).then((guides) => {
        console.log(guides);
    });

    await sdk.getAuthors({ showMetadata: true }).then((authors) => {
        console.log(authors);
    });

    await sdk.getChangeLogs({ showMetadata: true }).then((changeLogs) => {
        console.log(changeLogs);
    });

    await sdk.getPartners({ showMetadata: true }).then((partners) => {
        console.log(partners);
    });

    await sdk.getBlogs({ showMetadata: true }).then((blogs) => {
        console.log(blogs);
    });

    await sdk.getTopics({ showMetadata: true }).then((topics) => {
        console.log(topics);
    });
})();