# Changelog — JP Gallery Text

## [2.5] - 2025-02-07

### Added

- Full Joomla 5/6 Architecture Implementation
- Modern Dispatcher Pattern for J5/6
- Namespaced Helper Classes (Joomlaplates\Module\UkGalleryText)
- Automatic detection: Works with AND without Compatibility Plugin
- Dual-mode support: Legacy (J3/4) and Modern (J5/6) side by side
- Joomla 6 API compatibility (Language classes)
- Type-hints and modern PHP standards (already had strict_types)
- Added overlay style parameter with two options:
- Empty index.html in every folder
- README.md

### Changed

- Improved code structure and maintainability
- Joomla 5 and 6 compatibility (flat structure, works with and without compatibility plugin)
- Namespace updates: Joomla\CMS\Helper\ModuleHelper, Joomla\CMS\Language\Text, Joomla\CMS\Utilities\ArrayHelper
- Manifest: version 2.5, requires Joomla 5.0.0, UTF-8 encoding, module name from language key
- Module class suffix applied to wrapper only (not to title)

### Fixed

- Fixed "Undefined array key" error - ensures all item keys exist in tagsList
- Bug fix: grid_params first_column_class was assigned to wrong variable
- Template: escaped output, fixed tag display (removed erroneous 'UTF-8')
- Helper: Joomla\CMS\Utilities\ArrayHelper, type hints, array_unique via PHP

### Removed

- Dark Overlay with White Plus Icon (uk-overlay-primary)
- Light Overlay with Dark Plus Icon (uk-overlay-default)

### Notes

- Fully backward compatible - no breaking changes

## [2.1]

### Added

- Add Shadow Option

### Fixed

- Fixed an open DIV

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.5]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin
- Changed the xml path for updates

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.4]

### Added

- Module Class Suffix

## [1.2.3]

### Fixed

- Back to 1.2.1 settings. Title will show the overlay

## [1.2.2]

### Fixed

- Add the content to popup view

## [1.2.1]

### Added

- Fixed Mansonry Options

## [1.2.0]

### Added

- Initial Release
