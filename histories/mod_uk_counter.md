# Changelog — JP Counter

## [2.6] - 2026-03-25

### Changed

- jQuery: Replaced bundled jquery.js with Joomla core assets (jquery, jquery-noconflict)
- Proper WAM dependency chain: jquery → jquery-noconflict → waypoints → counterup

### Fixed

- Fixed WebAssetManager dependency declaration: dependencies moved from param 3 (options) to param 5 (dependencies)

### Removed

- Removed bundled jquery.js registration from template

## [2.5.0] - 2025-02-07

### Added

- Full migration to modern Joomla 5/6 architecture with namespaced classes
- Namespace: Joomlaplates\Module\UkCounter with proper PSR-4 autoloading
- src/Helper/CounterHelper.php - Namespaced helper class with type hints
- src/Dispatcher/Dispatcher.php - Modern dispatcher using AbstractModuleDispatcher
- services/provider.php - Dependency Injection container registration
- New parameter: "Card Class" - Add custom CSS classes to uk-card div
- German language files (de-DE) - Complete translation
- JavaScript dependency management: jQuery → Waypoints → CounterUp
- Type-safe PHP code (PHP 7.4+ type hints throughout)
- Module class suffix applied to layout wrapper (mod_uk_counter + suffix).
- Empty index.html in root, forms, js, languages, languages/en-GB, languages/de-DE, tmpl, src, src/Helper, src/Dispatcher, services.
- MIGRATION.md - Complete documentation of architectural changes
- CHANGELOG_2.5.0.md - Detailed documentation of new features

### Changed

- mod_uk_counter.php - Modern bootModule() approach with legacy fallback
- tmpl/default.php - WebAssetManager for JavaScript loading (replaces direct <script> tags)
- tmpl/default.php - Card class parameter implemented with XSS protection
- Manifest: Added namespace definition, new folders (src, services), and de-DE language
- Template: wrapper div with moduleclass_sfx; removed unused Factory/Text imports.
- Language files: package set to mod_uk_counter, typo "clooapse" → "collapse", new keys for form labels, license URL to https.
- Form: duplicate count_number_size field removed; "Font Awesomee" → language key; form fields use size instead of class.

### Fixed

- Joomla 5 and Joomla 6 compatibility. Works with and without the Joomla compatibility plugin.

## [2.0]

### Fixed

- All modules use "JP" name prefix.

### Removed

- Dropped XML version requirement for J5/J6.

### Notes

- Ready for J5 and J6 without compatibility plugin.

## [1.2.6]

### Fixed

- Updated XML path for updates.

## [1.2.5]

### Added

- Module class suffix option.

## [1.2.4]

### Added

- jQuery scripts loaded locally.

## [1.2.3]

### Fixed

- Removed duplicate module-before-content output.

## [1.2.2]

### Added

- Scripts loaded locally; RGBA colors; Counter delay and time options.

## [1.2.0]

### Added

- Initial release.
