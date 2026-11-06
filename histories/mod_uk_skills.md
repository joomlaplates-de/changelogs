# Changelog — JP Skills

## [2.5]

### Fixed

- Joomla 5 & 6 Compatibility - mod_uk_skills

### Removed

- ❌ Legacy entry file (`mod_uk_skills.php`)
- ❌ No namespaces
- ❌ No service provider
- ❌ No custom dispatcher
- ⚠️ XSS vulnerabilities (no output escaping)
- ❌ No German language files
- ⚠️ HTML error in manifest
- ⚠️ Empty sys.ini file
- ✅ Modern architecture with Service Provider
- ✅ Custom Dispatcher with namespace `Joomlaplates\Module\UkSkills`
- ✅ PSR-4 autoloading
- ✅ All output properly escaped (XSS-safe)
- ✅ English + German language files
- ✅ Valid HTML in manifest
- ✅ Complete language files
- Added `htmlspecialchars()` for all text output
- Added `(int)` casting for numeric values (circle parameters)
- Protected against XSS attacks
- Fixed HTML error in manifest (`<p ... p>` → `<p>`)
- Filled empty `sys.ini` file
- Fixed package name in sys.ini (was `mod_uk_slider`)
- Created German language files (DE)
- Registered DE files in XML
- Created Service Provider
- Created Custom Dispatcher with namespace
- Dispatcher prepares slider parameters (`$sw_params`)
- Dispatcher prepares grid/column classes (`$classes`)
- Added namespace to XML
- Updated version to 2.5
- Simplified template (parameters now from Dispatcher)
- Deleted legacy entry file
- Updated XML files section
- Slider parameters (velocity, autoplay, etc.)
- Grid and column classes
- Items from subform
- All module parameters
- **Circular progress indicators** with customizable colors
- **Percentage display** in the center
- **Title and description** below each circle
- **Slider functionality** (UIkit slider)
- **Grid layout** with responsive columns
- **Animation on scroll**
- Circle Color
- Circle Background Color
- Circle Value (0-100%)
- Circle Width (px)
- Circle Speed (animation duration in ms)
- Circle Thickness (px)
- ✅ Clean, maintainable code
- ✅ Modern architecture
- ✅ PSR-4 autoloading
- ✅ Testable design
- ✅ Proper separation of concerns
- ✅ Better security
- ✅ German language support
- ✅ Future-proof (J7+ ready)
- ✅ Smooth animations
- ✅ No compatibility plugin needed
- ✅ Long-term support
- ✅ Production-ready
- **uk-slider** for slider functionality
- **uk-grid** for responsive layouts
- **uk-card** for styling
- Custom ToxProgress library for circle animations

### Notes

- **Module:** JP Skills
- **Version:** 2.5
- **Date:** February 2025
- **Status:** ✅ Fully Compatible
- ## Summary
  
  The module **mod_uk_skills** has been successfully modernized to **Joomla 4/5/6 architecture** with namespaces, service providers, and custom dispatcher pattern. It is now **fully compatible** with Joomla 5 and 6, with and without backward compatibility plugins.
- ## Migration Details
- ### Before (Version 2.0)
- ### After (Version 2.5)
- ## Changes Made (Step by Step)
- ### Step 1: Security - Output Escaping
- **Files:** `tmpl/default.php`
- ### Step 2: Language Files
- **Files:** `languages/*`, `mod_uk_skills.xml`
- ### Step 3: Modern Architecture
- **Files:** `services/provider.php`, `src/Dispatcher/Dispatcher.php`, `mod_uk_skills.xml`
- ### Step 4: Final Cleanup
- **Files:** `tmpl/default.php`, `mod_uk_skills.php` (deleted)
- ## Architecture
- ### Service Provider
  ```
  services/provider.php
  ```
  Registers the module with Joomla's dependency injection container using the modern service provider pattern.
- ### Custom Dispatcher
  ```
  src/Dispatcher/Dispatcher.php
  Namespace: Joomlaplates\Module\UkSkills\Site\Dispatcher
  ```
  Extends `AbstractModuleDispatcher` and prepares all data for the template in `getLayoutData()`:
- ### Template
  ```
  tmpl/default.php
  ```
  Receives prepared data from Dispatcher. All output is properly escaped.
- ### Custom JavaScript
  ```
  js/mod_uk_skills.js
  ```
  ToxProgress library for animated skill circles.
- ## Features
  
  This module creates animated skill circles with:
- ### Circle Parameters (per item):
- ## Compatibility Matrix
  
  | Environment | Status | Notes |
  |-------------|--------|-------|
  | Joomla 4.x | ✅ Works | Modern architecture |
  | Joomla 5.x (no plugin) | ✅ Works | Fully compatible |
  | Joomla 5.x (with plugin) | ✅ Works | Plugin not needed |
  | Joomla 6.x (no plugin) | ✅ Works | Fully compatible |
  | Joomla 6.x (with plugin) | ✅ Works | Plugin not needed |
- ## Security Improvements
  
  | Issue | Before | After |
  |-------|--------|-------|
  | Content class | ❌ No escaping | ✅ htmlspecialchars() |
  | Item style | ❌ No escaping | ✅ htmlspecialchars() |
  | Center class | ❌ No escaping | ✅ htmlspecialchars() |
  | Circle parameters | ❌ No validation | ✅ (int) casting |
  | Circle colors | ❌ No escaping | ✅ htmlspecialchars() |
  | Title output | ❌ No escaping | ✅ htmlspecialchars() |
  | Content output | ❌ No escaping | ✅ htmlspecialchars() |
- ## Testing Performed
  
  Each step was tested individually:
  
  1. ✅ **Step 1 (Escaping):** Module displayed correctly with security improvements
  2. ✅ **Step 2 (Languages):** German/English translations working
  3. ✅ **Step 3 (Architecture):** Modern dispatcher working properly, slider parameters correct
  4. ✅ **Step 4 (Finalization):** Legacy entry file removed, module still works
- ## Benefits
- ### For Developers
- ### For Users
- ### For Site Operators
- ## UIkit 3 Integration
  
  The module uses UIkit 3 components:
- ## Conclusion
  
  The module is now **fully compatible** with Joomla 4, 5, and 6, follows best practices, and is ready for production use.
- **Migration completed successfully.**

## [2.0]

### Fixed

- Joomla 5 and Joomla 6 ready

## [1.2.2]

### Fixed

- Changed the xml path for updates

## [1.2.1]

### Fixed

- Delete "hidden" class
- Joomla 5 ready without compatibility PLugin enabled

## [1.2.0]

### Added

- Initial Release
