# Changelog — UIkit Framework Plugin

## [4.0.17]

### Notes

- Detailed plugin-specific release notes for version 4.0.17 are not available in the supplied package.
- Bundled UIkit library: 3.25.26. The following notes describe the library release, not a separate plugin version.
- Fixed
      Fix handling of canceled Pointer Events while dragging Sortable items
      Fixed
      Fix preventing Slider autoplay from starting its next transition before the prior one is painted

## [4.0.14] - 2025-02-15

### Fixed

- **Assets not in page source:** UIkit CSS and JS were sometimes missing from the HTML source (e.g. with caching or certain plugin order). The plugin now registers assets in `onAfterDispatch` as well, so they are attached to the document earlier and reliably appear in the output.

## [4.0.13] - 2025-02-01

### Changed

- **Descriptions:** All references to “UIkit 3” were updated to “UIkit 4”, and “Joomla 4, 5, and 6” to “Joomla 5 and Joomla 6” in:
- `uikit4.xml` (description)
- `language/en-GB/plg_system_uikit4.ini`
- `language/en-GB/plg_system_uikit4.sys.ini`
- `language/de-DE/plg_system_uikit4.ini`
- `language/de-DE/plg_system_uikit4.sys.ini`
- **Manifest:** Removed incorrect “Uikit 3 Version: 3.25.07” line from the description; replaced with “UIkit 4 (Joomla 5 / 6 core compatible)”.

### Fixed

- **Media path mismatch:** Plugin was registering assets under `media/plg_system_uikit4/` while the manifest installs files to `media/uikit4/`. Asset paths in `src/Extension/Uikit4.php` were updated to `media/uikit4/` so CSS and JS load correctly.
- **Provider robustness:** `services/provider.php` now handles a `null` return from `PluginHelper::getPlugin('system', 'uikit4')` (e.g. when the plugin is disabled or not found) and uses an empty config array instead of casting null.

### Notes

- ### Joomla 5 & 6 compatibility
- **Added** `<targetplatform name="joomla" version="^(5|6)\."/>` in the manifest so the extension is explicitly compatible with Joomla 5.x and Joomla 6.x.
- **Verified** plugin works on Joomla 5 and Joomla 6 with and without the compatibility (comp) plugin.

## [4.0.0]

### Notes

- Initial UIkit 4 integration for Joomla.
- System plugin loading UIkit CSS/JS via Web Asset Manager.
- Option to defer JavaScript.
- UIkit Icons script loaded as dependency of main UIkit script.
  
  
  [4.0.14]: https://github.com/joomlaplates/plg_system_uikit4/compare/4.0.13...4.0.14
  [4.0.13]: https://github.com/joomlaplates/plg_system_uikit4/compare/4.0.12...4.0.13
