# Changelog — JP Timeline

## [2.5] - 2025-02-01

### Added

- Added services/provider.php for Dependency Injection Container
- Added src/Dispatcher/Dispatcher.php (replaces mod_uk_timeline.php)
- Added namespace Joomlaplates\Module\UkTimeline
- Added README.md
- Added blank index.html to all directories

### Changed

- Migrated to Joomla 5/6 native module architecture (Namespace, Dispatcher, Service Provider)

### Fixed

- Fixed Module Class Suffix not being applied in template output
- Fixed formsource path (removed leading slash)

### Removed

- Removed legacy entry file mod_uk_timeline.php

### Notes

- No longer requires System - Backward Compatibility plugin
- Existing module settings are preserved on update

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.3]

### Fixed

- Changed the xml path for updates
- Add css directly instead of load css file

## [1.2.2]

### Added

- Module Class Suffix

## [1.2.1]

### Added

- Add if else for title and subtile
- Add more animations settings

### Removed

- Removed the hr

## [1.2.0]

### Added

- Initial Release
