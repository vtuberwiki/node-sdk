import axios from 'axios';
import { VtuberParams, SoftwareParams, GuideParams, AuthorParams, BlogParams, SocialMediaParams, ChangeLogParams, PartnerParams, TopicParams } from './interfaces/config/methods';
import { fDate, fTime } from "developer-toolkit-utils";
import vars from './vars';
import { AxiosError } from 'axios';

/**
 * Format a date based on specified parameters.
 * @param {Object} params - Formatting parameters.
 * @param {string} date - Date to be formatted.
 * @returns {string | Date} - Formatted date string or Date object.
 */

const formatDate = (params: any, date: string) => {
    const dateObj = new Date(date);
    if (params?.formatDates) {
        return `${fDate(dateObj)} at ${fTime(dateObj)}`;
    } else {
        return dateObj;
    }
};

/**
 * Software Development Kit (SDK) for accessing various data from the web API.
 */
class Sdk {
    private static instance: Sdk;
    public API_VERSION = vars.VERSION;

    /**
     * Private constructor to enforce singleton pattern.
     */
    constructor() {
        if (Sdk.instance) {
            throw new Error('Error - use Sdk.getInstance()');
        }
        Sdk.instance = this;
    }

    /**
     * Get information about Vtubers.
     * @param {VtuberParams} params - Parameters for filtering Vtuber data.
     * @returns {Object | Array} - Vtuber data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */
    public async getVtubers(params?: VtuberParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/vtubers.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }

        let Data = response.data;


        if (params?.hideGraduated) Data = Data.filter((vtuber: any) => vtuber.graduated === 'No');

        if (params?.limit) Data = Data.slice(0, params.limit);

        if (params?.skip) Data = Data.slice(params.skip);

        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    hideGraduated: params.hideGraduated ? params.hideGraduated : false,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
     * Get information about software.
     * @param {SoftwareParams} params - Parameters for filtering software data.
     * @returns {Object | Array} - Software data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */
    public async getSoftware(params?: SoftwareParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/software.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }

        let Data = response.data.map((software: any) => {
            return {
                name: software.label,
                link: software.value,
                description: software.description,
                author: software.author,
                image: software.image,
                body: software.body,
            }
        });

        if (params?.limit) Data = Data.slice(0, params.limit);
        if (params?.skip) Data = Data.slice(params.skip);
        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
     * Get information about guides.
     * @param {GuideParams} params - Parameters for filtering guide data.
     * @returns {Object | Array} - Guide data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */
    public async getGuides(params?: GuideParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/guides.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }


        let Data = response.data.map((guide: any) => {
            return {
                title: guide.title,
                pubDate: formatDate(params, guide.pubDate),
                description: guide.description,
                author: guide.author,
                slug: guide.slug,
            }
        });

        if (params?.limit) Data = Data.slice(0, params.limit);
        if (params?.skip) Data = Data.slice(params.skip);
        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
     * Get information about authors.
     * @param {AuthorParams} params - Parameters for filtering author data.
     * @returns {Object | Array} - Author data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */

    public async getAuthors(params?: AuthorParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/authors.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }

        let Data = response.data.map((author: any) => {
            return {
                name: author.login,
                link: author.html_url,
                image: author.avatar_url,
            }
        });

        if (params?.limit) Data = Data.slice(0, params.limit);
        if (params?.skip) Data = Data.slice(params.skip);
        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
     * Get information about blogs.
     * @param {BlogParams} params - Parameters for filtering blog data.
     * @returns {Object | Array} - Blog data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */
    public async getBlogs(params?: BlogParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/blog.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }

        let Data = response.data.map((blog: any) => {
            return {
                title: blog.title,
                slug: blog.slug,
                description: blog.description,
                author: blog.author,
            }
        });

        if (params?.limit) Data = Data.slice(0, params.limit);
        if (params?.skip) Data = Data.slice(params.skip);
        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
     * Get information about changelogs.
     * @param {ChangeLogParams} params - Parameters for filtering changelog data.
     * @returns {Object | Array} - Changelog data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */
    public async getChangeLogs(params?: ChangeLogParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/changelog.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }

        let Data = response.data.map((changelog: any) => {
            return {
                name: changelog.name,
                codeName: changelog.code_name,
                date: changelog.date,
                log: {
                    changes: changelog.changed,
                    additions: changelog.added,
                    removals: changelog.removed,
                    fixes: changelog.fixed,
                    deprecations: changelog.deprecated,
                    security: changelog.security,
                    unreleased: changelog.unreleased,
                },
                body: changelog.body,
                slug: changelog.slug,
            }
        });

        if (params?.limit) Data = Data.slice(0, params.limit);
        if (params?.skip) Data = Data.slice(params.skip);
        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
     * Get information about partners.
     * @param {PartnerParams} params - Parameters for filtering partner data.
     * @returns {Object | Array} - Partner data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */
    public async getPartners(params?: PartnerParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/partners.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }

        let Data = response.data.map((partner: any) => {
            return {
                name: partner.name,
                link: partner.link,
                image: partner.image,
                description: partner.description,
            }
        });

        if (params?.limit) Data = Data.slice(0, params.limit);
        if (params?.skip) Data = Data.slice(params.skip);
        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
    * Get information about topics.
    * @param {TopicParams} params - Parameters for filtering topic data.
    * @returns {Object | Array} - Topic data or metadata based on parameters.
    * @throws {Error} - If the request to the web API fails.
    */
    public async getTopics(params?: TopicParams) {
        const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/topics.json`);

        if (response.status !== 200) {
            throw new Error(`Error - ${response.status}: ${response.statusText}`);
        }

        let Data = response.data.map((topic: any) => {
            return {
                slug: topic.slug,
                title: topic.title,
                description: topic.description,
                pubDate: formatDate(params, topic.pubDate),
            }
        });

        if (params?.limit) Data = Data.slice(0, params.limit);
        if (params?.skip) Data = Data.slice(params.skip);
        if (params?.showMetadata) {
            return {
                data: Data,
                metadata: {
                    count: Data.length ? Data.length : 0,
                    total: response.data.length ? response.data.length : 0,
                    skip: params.skip ? params.skip : 0,
                    limit: params.limit ? params.limit : response.data.length,
                    statusCode: response.status,
                }
            }
        } else {
            return Data;
        }
    }

    /**
     * Get information about the social media.
     * @param {SocialMediaParams} params - Parameters for filtering data.
     * @returns {Object | Array} - Social Media data or metadata based on parameters.
     * @throws {Error} - If the request to the web API fails.
     */
    public async getSocials(params?: SocialMediaParams) {
        try {
            const response = await axios.get(`${vars.WEB_API_URL}/v${this.API_VERSION}/socials.json`);
    
            if (response.status !== 200) {
                throw new Error(`Error - ${response.status}: ${response.statusText}`);
            }
    
            const responseData = response.data;
    
            let Data = responseData.map(($: any) => {
                return {
                    name: $.name,
                    href: $.href,
                    icon: `https://vtubers.wiki${$.icon}`,
                };
            });
    
            if (params?.limit) Data = Data.slice(0, params.limit);
            if (params?.skip) Data = Data.slice(params.skip);
            if (params?.showMetadata) {
                return {
                    data: Data,
                    metadata: {
                        count: Data.length,
                        total: responseData.length,
                        skip: params.skip || 0,
                        limit: params.limit || responseData.length,
                        statusCode: response.status,
                    },
                };
            } else {
                return Data;
            }
        } catch (error) {
            console.error("Error fetching socials:", (error as Error).message);
            
            if (axios.isAxiosError(error)) {
                console.error("Response object:", (error as AxiosError).response);
            }
        }
    }    

    /**
     * Get a singleton instance of the SDK.
     * @returns {Sdk} - The SDK instance.
     */
    public static getInstance(): Sdk {
        if (!Sdk.instance) {
            Sdk.instance = new Sdk();
        }

        return Sdk.instance;
    }

    /**
     * Set the API version.
     * @param {string} version - The API version.
     * @returns {void}
     * @throws {Error} - If the API version is invalid.
     * @example
     * sdk.setApiVersion('1');
     */
    public setApiVersion(version: string) {
        if (parseInt(version) < 1 || parseInt(version) > vars.MAX_VERSION) {
            throw new Error(`Error - API version must be between 1 and ${vars.MAX_VERSION}`);
        }

        this.API_VERSION = Number(version)
    }
}

export default Sdk;