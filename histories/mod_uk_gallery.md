# Changelog — JP Gallery

## [2.5] - 2025-02-07

### Added

- Full Joomla 5/6 Architecture Implementation
- Modern Dispatcher Pattern for J5/6
- Namespaced Helper Classes (Joomlaplates\Module\UkGallery)
- Automatic detection: Works with AND without Compatibility Plugin
- Dual-mode support: Legacy (J3/4) and Modern (J5/6) side by side
- Joomla 6 API compatibility (Language classes)
- Type-hints and modern PHP standards
- Added overlay style parameter with two options:
- Empty index.html in every folder
- README.md

### Changed

- Helper ensures all item keys are present in tagsList
- Improved code structure and maintainability
- Joomla 5 and Joomla 6 compatibility (with and without compatibility plugin)
- Manifest: version 2.5, encoding UTF-8, license URL https
- Module class suffix: use text field, output in template

### Fixed

- Fixed "Undefined array key" error with subform items
- Improved tags handling - now preserves item keys correctly
- Added safety checks for missing tags and titles
- Fixed first_column_class bug (was writing to wrong variable)
- Fixed tag output (removed stray 'UTF-8', use htmlspecialchars)
- Fixed variable shadowing in template ($itemClass vs $item_class)

### Removed

- Dark Overlay with White Plus Icon (uk-overlay-primary)
- Light Overlay with Dark Plus Icon (uk-overlay-default)

### Language

- Language: FORM_ING -> FORM_IMG, sys.ini MOD_UK_GRID -> MOD_UK_GALLERY

### Notes

- Fully backward compatible - no breaking changes

## [2.1]

### Added

- Add Shadow Option

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.7]

### Fixed

- Changed the xml path for updates

## [1.2.6]

### Added

- Module Class Suffix

## [1.2.5]

### Fixed

- Fixed missing closing div

## [1.2.4]

### Fixed

- Fixed Mansonry Option

## [1.2.3]

### Fixed

- Fixed Image Caption in LIghtbox

## [1.2.2]

### Fixed

- Fixed Deprecated $classes in PHP 8

## [1.2.1]

### Fixed

- Transition load now when Scrollspy

## [1.2.0]

### Added

- Initial Release
