module.exports = function isMarkdownLink(text) {
    const matchMarkdownLink = /(?:__|[*#])|\[(.*?)\]\(.*?\)/
    return matchMarkdownLink.test(text)
}