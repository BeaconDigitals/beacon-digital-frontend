const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");

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
