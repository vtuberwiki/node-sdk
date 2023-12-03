/**
 * Parameters for retrieving information about Vtubers.
 * @typedef {Object} VtuberParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [hideGraduated=false] - Hide graduated Vtubers.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 */

interface VtuberParams {
    limit?: number
    skip?: number
    hideGraduated?: boolean
    showMetadata?: boolean
}

/**
 * Parameters for retrieving information about Software.
 * @typedef {Object} SoftwareParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 */

interface SoftwareParams {
    limit?: number
    skip?: number
    showMetadata?: boolean
}
/**
 * Parameters for retrieving information about Guides.
 * @typedef {Object} GuideParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 * @property {boolean} [formatDates=false] - Format the date.
 */

interface GuideParams {
    limit?: number
    skip?: number
    showMetadata?: boolean
    formatDates?: boolean
}

/**
 * Parameters for retrieving information about Authors.
 * @typedef {Object} AuthorParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 */

interface AuthorParams {
    limit?: number
    skip?: number
    showMetadata?: boolean
}

/**
 * Parameters for retrieving information about ChangeLogs.
 * @typedef {Object} ChangeLogParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 */

interface ChangeLogParams {
    limit?: number
    skip?: number
    showMetadata?: boolean
}

/**
 * Parameters for retrieving information about Partners.
 * @typedef {Object} PartnerParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 */

interface PartnerParams {
    limit?: number
    skip?: number
    showMetadata?: boolean
}

/**
 * Parameters for retrieving information about Topics.
 * @typedef {Object} TopicParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 * @property {boolean} [formatDates=false] - Format the date.
 */

interface TopicParams {
    limit?: number
    skip?: number
    showMetadata?: boolean
    formatDates?: boolean
}

/**
 * Parameters for retrieving information about Blogs.
 * @typedef {Object} BlogParams
 * @property {number} [limit=0] - Limit the number of results returned.
 * @property {number} [skip=0] - Skip the first n results.
 * @property {boolean} [showMetadata=false] - Show metadata from the request.
 */

interface BlogParams {
    limit?: number
    skip?: number
    showMetadata?: boolean
}

export {
    VtuberParams,
    SoftwareParams,
    GuideParams,
    AuthorParams,
    ChangeLogParams,
    PartnerParams,
    TopicParams,
    BlogParams

}