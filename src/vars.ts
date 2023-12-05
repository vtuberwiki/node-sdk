/**
 * Configuration variables for the application.
 * @typedef {Object} Vars
 * @property {string} WEB_URL - The base URL of the web application.
 * @property {string} WEB_API_URL - The base URL for accessing the web API.
 * @property {Object} GITHUB_DATA - GitHub-related configuration.
 * @property {string} GITHUB_DATA.OWNER - The owner (organization or user) of the GitHub repositories.
 * @property {string} VERSION - The version of the API.
 */

/**
 * Application configuration variables.
 * @type {Vars}
 * @constant
 */
const vars = {
    WEB_URL: "https://vtubers.wiki",
    WEB_API_URL: "https://vtubers.wiki/api",
    GITHUB_DATA: {
        OWNER: "vtuberwiki",
    },
    VERSION: "1",
    MAX_VERSION: 50,
};

export default vars;
