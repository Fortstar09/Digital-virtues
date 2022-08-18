# digitalvirtues.com

## Development
`hugo server --enableGitInfo --printI18nWarnings --printMemoryUsage --printPathWarnings --printUnusedTemplates --templateMetrics --templateMetricsHints --gc --buildDrafts --navigateToChanged --noHTTPCache --debug --verbose`

## Release
`rm -rf resources public && HUGO_ENV=production hugo --enableGitInfo --printI18nWarnings --printPathWarnings --minify --gc`
