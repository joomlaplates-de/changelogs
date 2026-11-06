# Changelog — JP Switcher

## [2.6]

### Notes

- Detailed release notes for this version are not available in the supplied package.

## [2.5] - 2025-02-03

### Added

- Module class suffix applied to layout wrapper (mod_uk_switcher + suffix)
- README.md and COMPLIANCE_REPORT.md added
- Empty index.html in each folder for security (directory listing prevention)

### Changed

- Version set to 2.5, creation date updated
- Changelog restructured
- Folder structure aligned with Joomla core: "languages" renamed to "language", language files to mod_uk_switcher.ini / mod_uk_switcher.sys.ini (no en-GB. prefix)

### Removed

- **Typ:** Yes/No Radio Button
- **Funktion:** Aktiviert die CSS-Klasse `uk-card-hover` auf dem Karten-DIV
- **Effekt:** Karte hebt sich beim Hover um 10px nach oben
- **CSS:**
    ```css
    .uk-card-hover {
      transition: all 0.5s ease !important;
    }
    .uk-card-hover:hover {
      transform: translateY(-10px);
    }
    ```
- **Typ:** Yes/No Radio Button
- **Funktion:** Aktiviert die CSS-Klasse `img-hover` auf Bildern
- **Effekt:** Bild wird beim Hover dunkler (Brightness 0.5)
- **CSS:**
    ```css
    .img-hover { 
      transition: filter 0.5s 
    }
    .img-hover:hover { 
      filter: brightness(0.5); 
    }
    ```
- **Typ:** Textfeld
- **Funktion:** Fügt beliebige CSS-Klassen als Suffix hinzu
- **Beispiel:** `my-custom-class another-class`

### Notes

- #### 1. **Card Animation**
- #### 2. **Image Animation**
- #### 3. **Card Class**

## [2.0] - 2024-12-30

### Added

- Joomla 5/6 compatibility: targetplatform, form-control classes, escaping, language keys
- MOD_UK_SWITCHER_* language prefix (MVC conform), sys.ini for name/description
- Language load in module PHP for layout/overrides

### Changed

- Changes prefix: all modules now use "JP" module name
- Ready for Joomla 5 and Joomla 6 without compatibility plugin

### Removed

- Removed XML version (not needed for J5/J6)

## [1.2.7]

### Changed

- Changed the XML path for updates

## [1.2.6]

### Added

- Module class suffix (admin option)

## [1.2.5]

### Added

- Editor option for content

## [1.2.4]

### Fixed

- Fixed background NONE style

## [1.2.3]

### Added

- Grid @small and space for text

## [1.2.2]

### Removed

- Removed tooltip for J4 with Bootstrap 5

## [1.2.1]

### Fixed

- Fixed bug in autoplay interval

## [1.2.0]

### Added

- Initial release
  
  
  Legend
- Addition

### Changed

- Change

### Fixed

- Bug fix

### Security

- Security fix

### Removed

- Removed

### Language

- Language fix or change

### Notes

- Note
