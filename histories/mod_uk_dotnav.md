# Changelog — JP Dotnav

## [2.5] - 2025-02-07

### Added

- Full Joomla 5/6 Architecture Implementation
- Modern Dispatcher Pattern for J5/6
- Namespaced Dispatcher (Joomlaplates\Module\UkDotnav)
- Automatic detection: Works with AND without Compatibility Plugin
- Dual-mode support: Legacy (J3/4) and Modern (J5/6) side by side
- Joomla 5 and Joomla 6 compatibility (with and without compatibility plugin)
- Based on core mod_articles patterns (ModuleHelper, layout in tmpl/); flat structure for compatibility plugin support
- Namespace updates: use Joomla\CMS\Helper\ModuleHelper
- declare(strict_types=1) and modern PHP in mod_uk_dotnav.php and tmpl/default.php
- Module class suffix applied in layout; field type text (was textarea)
- Manifest: version 2.5, language keys for all admin labels, formsource relative path
- Language files: MOD_UK_DOTNAV_* keys, LICENSE URL https
- Empty index.html in root, forms/, tmpl/, languages/, languages/en-GB/

### Changed

- Improved code structure and maintainability

### Fixed

- Fixed typo authorUrl (joomaplates -> joomlaplates)

### Removed

- Removed unused params/vars from main file (slider/slidenav/velocity etc.)

### Notes

- Fully backward compatible - no breaking changes
- Simple module - no Helper class needed

## [2.0]

### Fixed

- Changes prefix. All modules have now the "JP" module name
- Ready for J5 and J6 without compatibility plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.5]

### Fixed

- Changed the xml path for updates

## [1.2.4]

### Added

- Module Class Suffix

## [1.2.3]

### Added

- Add Bootstrap Tooltip

### Removed

- Removed Uikit Tooltip

## [1.2.2]

### Added

- Add Tooltip in Joomla 4

## [1.2.1]

### Fixed

- Fixed target self and blank

### Removed

- Removed Tooltip in Joomla 4

## [1.2.0]

### Added

- Initial Release
  
  Legend:
- Addition

### Changed

- Change

### Fixed

- Bug Fix

### Security

- Security Fix

### Removed

- Removed

### Language

- Language fix or change

### Notes

- Note
