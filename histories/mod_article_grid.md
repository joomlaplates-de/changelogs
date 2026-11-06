# Changelog — JP Article Grid

## [2.7] - 2026-04-20

### Added

- Back to Version Recursion prevention for {loadmodule}/{loadposition} is now user-controlled

### Changed

- XML field show_featured aligned with core mod_articles (values: show/hide/only, default "show", validate="options", removed filter="integer")

### Fixed

- Fixed "Show Featured Articles" parameter had no effect

### Notes

- After update please re-save each module instance so the new option value is stored correctly

## [2.6] - 2026-02-15

### Added

- Added "Exclude articles with {loadmodule}" toggle (default: No)
- Added include/exclude articles feature (modal_article field, like core mod_articles)
- Added "Exclude Current Article" toggle

### Changed

- Recursion prevention for {loadmodule}/{loadposition} is now user-controlled
- Previously articles with {loadmodule} were always excluded (memory overflow protection)
- Admin can now decide per module instance whether to filter these articles
- Version bump to 2.6

### Language

- Added language keys MOD_ARTICLES_FIELD_EXCLUDE_LOADMODULE_LABEL/DESC (en-GB, de-DE)

## [2.5] - 2026-02-01

### Added

- Added index.html files to all directories for security
- Added README.md with installation and usage instructions
- Joomla 5/6 native - no backward compatibility layer needed
- Works with and without compatibility plugin

### Changed

- Complete migration to Joomla 5/6 architecture
- Based on core Joomla mod_articles structure (Joomla 5.2+)
- Implemented namespace structure (Joomla\Module\ArticleGrid\Site)
- Added Dispatcher pattern for Joomla 5/6 compatibility
- Created services/provider.php for dependency injection
- Migrated helper class to namespaced ArticleGridHelper
- Uses modern MVC Factory pattern for content model
- Implements DatabaseAwareInterface and DatabaseAwareTrait
- Updated to use ContentComponent::CONDITION_PUBLISHED
- Modern event dispatcher for content plugins (afterDisplayTitle, beforeDisplayContent, afterDisplayContent)
- Module caching using ModuleHelper::moduleCache
- Updated manifest XML with namespace declaration
- Reorganized language files into language/en-GB/ folder
- Added comprehensive language strings for all fields
- Updated all template files with modern Joomla 5/6 structure
- Template uses original introtext_limit and strip_tags parameters from XML
- Fixed Module Class Suffix - only applied to main container, removed from headlines
- Content preparation with HTMLHelper::_('content.prepare') in helper
- Image removal from introtext when image parameter is disabled

## [2.3] - 2026-01-04

### Fixed

- Fixed Readmore Button

## [2.2]

### Added

- Add more sorting options

## [2.1]

### Added

- Add Article Link to the Image Option

## [2.0]

### Changed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.7]

### Fixed

- Replaced "&" for "?" for J4 Popup

## [1.2.6]

### Fixed

- Select Strip HTML Tags > YES or NO

## [1.2.5]

### Fixed

- Fixed Strip HTML Tags

## [1.2.4]

### Fixed

- Fixed Deprecated in PHP 8

## [1.2.3]

### Fixed

- Fixed missing DIV

## [1.2.2]

### Added

- Add Language Tag > ALL

## [1.2.1]

### Added

- Add Readmore class and Text

## [1.2.0]

### Added

- Initial Release
  
  Legend:
