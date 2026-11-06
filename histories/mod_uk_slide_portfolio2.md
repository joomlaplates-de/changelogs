# Changelog — JP Slide Portfolio2

## [2.5]

### Added

- Added namespace support (Joomlaplates\Module\UkSlidePortfolio2)
- Added src/Helper/UkSlidePortfolio2Helper.php with modern helper structure
- Added src/Dispatcher/Dispatcher.php for Joomla 5/6 compatibility
- Added services/provider.php for Dependency Injection
- Now fully compatible with Joomla 5.x and 6.x WITHOUT compatibility plugin
- Automatic Modal ID generation (based on module ID and item index)
- Added "Card Animation" parameter (enables uk-card-hover class)
- Added "Image Animation" parameter (enables img-hover class)
- Added "Card Class" parameter (custom CSS classes for cards)

### Changed

- Migrated to Joomla 5/6 architecture with namespaces
- Modernized entry point (mod_uk_slide_portfolio2.php)
- Updated XML manifest with namespace declaration
- Changed "Content" field from textarea to editor (full WYSIWYG support)

### Fixed

- Fixed: Modal IDs are now always unique, even with multiple module instances

### Removed

- Removed manual "modal_link" field from form (no longer needed)
- Removed Modal ID info note from form (cleaner interface)

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin (claimed, but not implemented)

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.1]

### Fixed

- Fixed Pause on Hover Bug

## [1.2.0]

### Added

- Initial Release
