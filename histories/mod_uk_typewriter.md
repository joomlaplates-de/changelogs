# Changelog — JP Typewriter

## [2.6]

### Fixed

- Fixed JavaScript crash with Lenis/Astroid scroll integrations (`getAttribute is not a function`) by validating DOM elements before accessing attributes
- Reworked typewriter initialization to use `DOMContentLoaded` (no `window.onload` override, fewer script conflicts)
- Typewriter behavior changed to run once and stop after finishing the last configured text (no endless loop)
- Restored support for speed/timing data attributes in script logic (`data-speed`, `data-start`, `data-end`, `data-dltSpeed`, `data-random`)

## [2.5]

### Added

- Module class suffix applied to wrapper in layout (mod_uk_typewriter + suffix)
- README.md with install, config, override path and structure
- Empty index.html in root, js, tmpl, language, language/en-GB

### Changed

- Version set to 2.5; creation date 2025-02-03

## [2.0.2]

### Added

- Event system: dispatch onContentPrepare for "Content Before" (J4/J5/J6; content plugins supported)
- Language: MVC-conform language files (language/en-GB/mod_uk_typewriter.ini, .sys.ini); manifest uses language constants
- Load mod_uk_typewriter language in entry point for Text::_() support

### Fixed

- Template overrides: use templates/TEMPLATE/html/mod_uk_typewriter/default.php (ModuleHelper::getLayoutPath)

### Notes

- No database schema (module does not use custom tables)

## [2.0.1]

### Added

- Use WebAssetManager for typewriter.js (J5/J6 best practice)
- php_minimum 8.1 in manifest; fixed description typo in XML

### Fixed

- Joomla 5 and 6 compatibility: $params fallback when not in scope (with/without compatibility plugin)
- XSS hardening: escaped output for class, data-text, and tag names; safe JSON for typewriter text

### Security

- Whitelist type_font tag names; safe data-text via json_encode

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.0.2]

### Fixed

- Changed the xml path for updates

## [1.0.1]

### Added

- Module Class Suffix

## [1.0.0]

### Added

- Initial Release
