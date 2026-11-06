# Changelog — JP Video Slideshow

## [2.5]

### Added

- Module class suffix output on wrapper div (Advanced tab)
- README.md added
- Empty index.html in each folder (root, forms, languages, languages/en-GB, models, models/fields, tmpl)

### Changed

- Version set to 2.5, creation date 2025-02-03

## [2.0.2]

### Fixed

- Namespace: Joomla\Module\UkVideoSlideshow (PascalCase, J4/5/6)
- Language: MOD_UK_VIDEO_SLIDESHOW_* prefix, MVC conform headers, form labels/options use constants
- forms/form.xml: all labels/descriptions/options use language constants
- Manifest config: label constants updated to MOD_UK_VIDEO_SLIDESHOW_*
- Doc block in main file: compatibility, no DB, no custom events, layout override path
- sys.ini: module title and description aligned with main .ini

## [2.0.1]

### Fixed

- Joomla 5 and 6 compatibility (with and without backward compatibility plugin)
- Manifest: namespace, formsource path relative (forms/form.xml), models folder in files
- Custom field models/fields/videos.php: use Joomla\CMS\Form\Field\FilelistField, _JEXEC, class_alias for JFormFieldVideos
- Main module: normalise subform items to objects, strict require only when items exist
- Layout: null-safe item properties, htmlspecialchars for output, skip slides without YouTube ID

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

- Fixed Bug in Autoplay Interval

## [1.2.4]

### Added

- Add Automute and Autoplay

### Fixed

- Bug fixed

## [1.2.2]

### Fixed

- Only Youtube Videos. For local videos use the mod_uk_slideshow

## [1.2.1]

### Fixed

- Fixxed Video

## [1.2.0]

### Added

- Initial Release
