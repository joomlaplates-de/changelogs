# Changelog — JP Slider

## [2.5] - 2025-02-02

### Added

- Card Animation parameter added (card_animation) - enables/disables uk-card-hover CSS class for card hover effects
- Image Animation parameter added (img_animation) - enables/disables img-hover CSS class for image hover effects
- German language files added (de-DE/mod_uk_slider.ini and mod_uk_slider.sys.ini)
- Card CSS class parameter added (card_class) - allows custom CSS classes for uk-card div (e.g. uk-card-hover)
- Module class suffix applied to layout wrapper (mod_uk_slider + suffix)
- README.md and COMPATIBILITY_VERIFICATION.md added
- index.html added to each folder for security
- Responsive CSS added - slider container offset removed on mobile/tablet (max-width: 959px)
- hover-effect class added to images for consistent hover behavior

### Changed

- CSS class names changed from .card_animation to .uk-card-hover (UIkit naming convention)
- CSS class names changed from .img-animation to .img-hover (consistent naming)
- Fixed CSS selector bug: img-animation:hover changed to .img-hover:hover (missing dot)
- default.php: uk-card-hover class now conditionally added based on card_animation parameter
- default.php: img-hover class now conditionally added based on img_animation parameter
- Center content option changed from "text-left" to "text-start" for better Bootstrap/UIkit compatibility
- Hover effect simplified - replaced complex backdrop animation with CSS filter brightness effect
- Card HTML structure improved - uk-card class moved to outer div, center class applied to content div
- Folder structure aligned with Joomla core: language/ (singular), en-GB/mod_uk_slider.ini and mod_uk_slider.sys.ini
- Manifest: languages folder="language", moduleclass_sfx type="text", XML indentation normalized

### Removed

- Removed legacy languages/ folder and en-GB.*.ini filenames

### Language

- Language: typos fixed (Grid collapse, Auto-width), sys description updated

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.8]

### Fixed

- Changed the xml path for updates

## [1.2.7]

### Added

- Module Class Suffix

## [1.2.6]

### Added

- Add Editor to content area

## [1.2.5]

### Fixed

- Fixed Pause on Hover Bug

## [1.2.4]

### Fixed

- Fixed Deprecated $classes in PHP 8

## [1.2.3]

### Fixed

- Fixed Shadow inline

## [1.2.2]

### Fixed

- Fixed Autoplay Interval

## [1.2.1]

### Added

- Fixed Link Target > blank self

## [1.2.0]

### Added

- Initial Release
