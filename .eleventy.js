import { hashAssets, updateHashedLinks } from "build-hasher";
import dotenv from 'dotenv';

dotenv.config();

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({
    "src/static/.htaccess": ".htaccess"
  });

  eleventyConfig.addGlobalData("baseUrl", process.env.ELEVENTY_ENV === 'development' ? '' : process.env.BASE_URL);  

  eleventyConfig.on('afterBuild', async ({ runMode, outputMode, dir }) => {
    console.log('🚀 Starting post-build processing...');
    
    try {
      console.log('🚀 Starting file hashing...');
      const hashManifest = hashAssets({
        outputDir: dir.output,
        extensions: ['.js', '.json', '.css'],
        ignoredFiles: ['site.webmanifest.json']
      });

      updateHashedLinks({
        hashManifest: hashManifest,
        outputDir: dir.output,
        extensions: ['.html', '.js'],
        files: ['.htaccess'],
        replaceRule: {
          '.js': ['js/', './'],
        },
      });
      console.log('✅ File hashing completed!');
      console.log('✅ Post-build processing completed successfully!');
    } catch (error) {
      console.error('❌ Error during post-build processing:', error.message);
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
