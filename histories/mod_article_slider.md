# Changelog — JP Article Slider

## [2.7] - 2026-04-20

### Added

- Back to Version Recursion prevention for {loadmodule}/{loadposition} is now user-controlled

### Changed

- XML field show_featured aligned with core mod_articles (values: show/hide/only, default "show", validate="options", removed filter="integer")
- Helper simplified to a single setState('filter.featured', ...) call

### Fixed

- Fixed "Show Featured Articles" parameter had no effect

### Notes

- After update please re-save each module instance so the new option value is stored correctly

## [2.6]

### Added

- Added "Exclude articles with {loadmodule}" toggle (default: No)
- Added include/exclude articles feature (modal_article field, like core mod_articles)
- Added "Exclude Current Article" toggle

### Changed

- Recursion prevention for {loadmodule}/{loadposition} is now user-controlled
- Previously articles with {loadmodule} were always excluded (memory overflow protection)
- Admin can now decide per module instance whether to filter these articles
- Version bump to 2.6

### Fixed

- Fixed deprecated Factory::getUser() replaced with $app->getIdentity()
- Fixed deprecated Factory::getDbo() replaced with DatabaseInterface DI

### Language

- Added language keys MOD_ARTICLES_FIELD_EXCLUDE_LOADMODULE_LABEL/DESC (en-GB, de-DE)

## [2.5]

### Added

- Added README.md (project description, installation, structure)
- Added empty index.html in every folder (directory listing protection)
- Added targetplatform to manifest (Joomla 5.x and 6.x)
- Added installation script (script.php)
- Migrated from mod_articles_news to mod_articles
- Full namespace support (Joomla\Module\ArticleSlider)
- Service Provider implementation

### Changed

- Version set to 2.5 (manifest, changelog, README)
- Declared compatibility with Joomla 5 and Joomla 6
- getTagsList() now always sets tagsArray per item (empty array when no tags)
- Changed finite, pause_on_hover, center from radio to list
- All buttons now properly styled and functional
- Improved installation script - runs on all install types
- Additional cleanup_article_slider.php tool provided
- Automatically removes old template files on update
- Removes: style1.php, style2.php from tmpl/ folder
- Shows message which files were removed
- Minimum Joomla 4.0 and PHP 7.4 check
- Event results now properly converted to strings
- Handles both array and string returns from plugins
- Try-catch blocks around all event dispatchers
- Debug messages when JDEBUG is enabled
- Uses modern Joomla "Articles" module as base
- Updated all language strings to MOD_ARTICLES_*
- Improved ordering options matching mod_articles
- Better compatibility with Joomla 5/6
- Modern Event Dispatcher API
- MVCFactory for model loading
- PSR-12 compliant code

### Fixed

- Fixed: Articles with no tags - missing entry in tags list caused notices in templates
- Fixed: Grey/disabled Yes/No buttons in backend
- Fixed: Old layout options appearing in backend
- Fixed: Module name not showing (changed <n> to <name> tag)
- Fixed Array-to-String conversion warning in templates
- Added error handling for plugin events
- Prevents module from breaking if content plugins have errors
- Handles incompatible plugins gracefully
- All deprecated code removed

### Notes

- If old files still exist, use cleanup tool (see documentation)
- Reminder: ALL template files in tmpl/ folder must be updated
- MAJOR UPDATE: Now based on mod_articles (not deprecated mod_articles_news)

## [2.4.0]

### Added

- Added namespace support
- Added Service Provider

### Changed

- Modernized Helper class
- Updated Event Dispatcher
- Language files moved to language/ folder

### Notes

- MAJOR UPDATE: Full Joomla 5 and 6 compatibility

## [2.3]

### Fixed

- Fixed Readmore Button

## [2.2]

### Added

- Add more sorting functions

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name

## [1.2.12]

### Fixed

- Replaced "&" for "?" for J4 Popup

## [1.2.11]

### Fixed

- Fixed Pause on Hover Option
- Fixed Endless Slides Option

## [1.2.10]

### Fixed

- Fixed read more link

## [1.2.9]

### Added

- Add Modalbox Link Option

## [1.2.8]

### Fixed

- Select Option to Fixed HTML Strip Tag

## [1.2.7]

### Fixed

- Fixed HTML Strip Tag

## [1.2.6]

### Fixed

- Fixed Deprecated $classes in PHP 8

## [1.2.5]

### Added

- Add container Offset for shadow style

### Removed

- Removed the Popup

## [1.2.4]

### Added

- Add Language Tag > ALL

## [1.2.2]

### Fixed

- Fixed Bug in Autoplay Interval

## [1.2.1]

### Added

- Add Readmore class and Text

## [1.2.0]

### Added

- Initial Release
