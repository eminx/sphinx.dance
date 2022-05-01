// const nextTranslate = require("next-translate");

// module.exports = nextTranslate();

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
