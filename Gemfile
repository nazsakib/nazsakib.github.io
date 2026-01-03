source "https://rubygems.org"

# Use the GitHub Pages gem to ensure local environment matches GitHub's servers
gem "github-pages", group: :jekyll_plugins

# Required for using themes like Hydejack that aren't built into GitHub Pages
group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-include-cache"
end

# Windows compatibility gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]