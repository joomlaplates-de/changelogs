# Changelog — JP Slide Portfolio

## [2.6]

### Notes

- Detailed release notes for this version are not available in the supplied package.

## [2.5]

### Added

- Modern namespace support (Joomlaplates\Module\UkSlidePortfolio)
- Dispatcher pattern implementation for Joomla 5/6
- Service Provider with Dependency Injection
- Type hints and strict typing throughout codebase
- German language files (de-DE)
- Module class suffix (Advanced tab)
- README.md with detailed documentation
- index.html in each folder for security

### Changed

- MAJOR: Full migration to Joomla 5/6 architecture
- Updated helper.php with legacy wrapper for backwards compatibility
- Modernized code structure with PSR-12 compliance

### Fixed

- Fixed "Undefined array key 0" warning in default.php for items without tags
- Fixed type handling for subform data in Dispatcher and Helper
- Improved robustness for stdClass to array conversion
- Changelog and language files updated

### Notes

- Now fully compatible with Joomla 5 & 6 WITHOUT Compatibility Plugin
- Backwards compatible with Joomla 4.x

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.7]

### Fixed

- Fixed Pause on Hover Option
- Fixed Endless Slides Option

## [1.2.6]

### Fixed

- Fixed Deprecated $classes in PHP 8

## [1.2.5]

### Fixed

- Remove special chars from modalbox > äüÖÜ_:;!"§$%&/()=?

## [1.2.4]

### Added

- Content before

## [1.2.3]

### Removed

- Removed Tooltp For J4 with Bootsrap 5

## [1.2.2]

### Fixed

- Fixed Bug in Autoplay Interval

## [1.2.1]

### Added

- Add Modalbox Typ > Center and Fullscreen

## [1.2.0]

### Added

- Initial Release
