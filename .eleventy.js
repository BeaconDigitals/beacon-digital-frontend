const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");

    // Ignore .github directory to prevent processing of non-template files
    eleventyConfig.ignores.add(".github/**");
    // Ignore the subdirectory to prevent duplicate processing
    eleventyConfig.ignores.add("beacon-digital-frontend-main/**");

    // Add blog collection if not already present
    eleventyConfig.addCollection("blog", function(collectionApi) {
        return collectionApi.getFilteredByGlob("blog/*.md");
    });

    // Add a date filter for Nunjucks
    eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "MMMM d, yyyy") {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
    });

    return {

        dir: {
            input: ".",
            output: "_site"
        }
    };
};
