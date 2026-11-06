# Changelog — JP Dgallery

## [2.6] - 2025-02-24

### Added

- Unique ID per module instance for correct JavaScript scoping
- Disable module caching when used multiple times on same page

### Changed

- Subform items: normalize array to first element (Dispatcher + Legacy)
- Layout always rendered in legacy mode (also with 0 images) for multiple instances
- Compatibility class aliases (FactoryCompat, TextCompat, UriCompat, FolderCompat) only created if not exists

### Fixed

- Fixed "Cannot declare class" when module is loaded multiple times in one article (loadmodule)
- Fixed Load More button not working when module is used twice on same page
- Fixed only one module displayed when two instances are loaded via loadmodule

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

## [2.3.1] - 2025-02-07

### Added

- Added overlay style parameter with two options:

### Changed

- Uses native UIkit overlay classes (no custom CSS needed)

### Removed

- Dark Overlay with White Plus Icon (uk-overlay-primary)
- Light Overlay with Dark Plus Icon (uk-overlay-default)

## [2.3.0] - 2025-02-07

### Added

- Full Joomla 5/6 Architecture Implementation
- Modern Dispatcher Pattern for J5/6
- Namespaced Helper Classes (Joomlaplates\Module\UkDgallery)
- Automatic detection: Works with AND without Compatibility Plugin
- Dual-mode support: Legacy (J3/4) and Modern (J5/6) side by side
- Joomla 6 API compatibility (Filesystem, Language, Uri classes)
- Type-hints and modern PHP standards

### Changed

- Improved code structure and maintainability

### Notes

- Fully backward compatible - no breaking changes

## [2.1]

### Fixed

- Add Shadow option again

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.0]

### Added

- Initial Release
