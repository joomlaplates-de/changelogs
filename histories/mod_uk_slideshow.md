# Changelog — JP Slideshow

## [2.5] - 2025-02-02

### Added

- Module class suffix applied to layout wrapper (class on outer div)
- README.md and JOOMLA_5_6_COMPATIBILITY.md documentation
- index.html in each folder for security (directory listing prevention)

### Changed

- Version set to 2.5
- Creation date set to 2025-02-02
- Changelog updated for 2.5 release
- Folder structure aligned with Joomla core: custom form field moved from models/fields/ to forms/fields/

### Removed

- Joomla 5.x and 6.x (with or without backward compatibility plugins)
- PHP 8.1+

### Notes

- ### Additions
- ### Changes
- ### Compatibility

## [2.1.1] - 2026-01-27

### Removed

- mod_uk_slideshow.xml: Version and description updated; Joomla 5 & 6 compatible
- forms/form.xml: addfieldpath corrected to /modules/mod_uk_slideshow/forms/fields
- forms/fields/videos.php: FormFieldVideos, _JEXEC guard, DocBlocks
- tmpl/default.php: Uri::base(), htmlspecialchars() for output escaping

### Notes

- ### Joomla 5 & 6 compatibility fixes
- #### Critical
- #### Recommended

## [2.1] - 2026-01-27

### Removed

- Joomla 4 support

## [2.0]

### Added

- Main image link

### Fixed

- Prefix change to "JP" for all modules
- Ready for J5 and J6 without compatibility plugin

### Removed

- Removed XML version (not needed for J5/J6)

## [1.2.9]

### Fixed

- Changed XML path for updates

## [1.2.8]

### Added

- Module class suffix (Advanced options)

## [1.2.7]

### Fixed

- Fixed Pause on Hover option
- Fixed Endless Slides option

## [1.2.6]

### Added

- Colour selection for background and content

### Removed

- Removed animations

## [1.2.5]

### Added

- ALT tag for images

## [1.2.4]

### Fixed

- Fixed autoplay interval bug

## [1.2.3]

### Added

- Local video files (mp4 etc.), slide videos and/or images

### Fixed

- Fixed Pause on Hover

## [1.2.2]

### Added

- Animation options

## [1.2.1]

### Added

- More content position options
- Editor field before slideshow

## [1.2.0]

### Added

- Initial release
  
  Legend: * Security | # Bug fix | $ Language | + Addition | ^ Change | - Removed | ! Note
