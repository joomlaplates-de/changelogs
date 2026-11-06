# Changelog — JP Article Slideshow

## [2.7] - 2026-04-20

### Added

- Back to Version Recursion prevention for {loadmodule}/{loadposition} is now user-controlled

### Changed

- XML-Feld show_featured an Core-mod_articles angeglichen (Werte: show/hide/only, default "show", validate="options", filter="integer" entfernt)
- Helper auf einen einzigen setState('filter.featured', ...) Aufruf vereinfacht

### Fixed

- Parameter „Show Featured Articles" hatte keine Wirkung – behoben

### Notes

- Nach dem Update bitte jede Modul-Instanz einmal erneut speichern, damit der neue Optionswert korrekt abgelegt wird

## [2.6] - 2026-02-15

### Added

- Added "Exclude articles with {loadmodule}" toggle (default: No)
- Added include/exclude articles feature (modal_article field, like core mod_articles)
- Added "Exclude Current Article" toggle

### Changed

- Recursion prevention for {loadmodule}/{loadposition} is now user-controlled
- Previously articles with {loadmodule} were always excluded (memory overflow protection)
- Admin can now decide per module instance whether to filter these articles
- Version bump to 2.6

### Language

- Added language keys MOD_ARTICLES_FIELD_EXCLUDE_LOADMODULE_LABEL/DESC (en-GB, de-DE)

## [2.5]

### Added

- src/Helper/ArticleSlideshowHelper.php (getArticles, MVC Factory, DatabaseAwareInterface)
- src/Dispatcher/Dispatcher.php (getLayoutData, ModuleHelper::moduleCache)
- services/provider.php
- Sprachdateien in language/en-GB/
- index.html in allen Ordnern

### Changed

- Joomla 5/6 Migration: Namespace-Struktur (Joomla\Module\ArticleSlideshow\Site)
- Templates: Events über $item->event (afterDisplayTitle, beforeDisplayContent, afterDisplayContent)
- Module Class Suffix nur am Hauptcontainer
- Alle Newsflash-Reste entfernt: newsflash-title → mod-article-slideshow-title, MOD_ARTICLES_NEWS_* → MOD_ARTICLE_SLIDESHOW_*

### Removed

- Altes helper.php entfernt (ersetzt durch namespaced Helper)
- Help-Key JHELP_EXTENSIONS_MODULE_MANAGER_ARTICLES_NEWSFLASH entfernt

## [2.2]

### Added

- Weitere Sortieroptionen

## [2.0]

### Changed

- Alle Module tragen nun den „JP“-Namen
- Kompatibel mit J5 und J6 ohne Kompatibilitäts-Plugin

### Removed

- XML-Version entfernt (für J5/J6 nicht mehr nötig)

## [1.2.4]

### Added

- Modul-Klassensuffix

### Fixed

- Update-Server geändert

## [1.2.3]

### Added

- Option „HTML aus Inhalt entfernen“ (Strip Tags)

## [1.2.2]

### Fixed

- Pause on Hover korrigiert
- Endlos-Sliding korrigiert

## [1.2.1]

### Fixed

- Deprecated $classes unter PHP 8 behoben

## [1.2.0]

### Added

- Erste Veröffentlichung
  
  
  	Legende:
- = Neue Funktion / Ergänzung

### Changed

- = Änderung / Anpassung

### Fixed

- = Bugfix

### Security

- = Sicherheitsfix

### Removed

- = Entfernt

### Language

- = Sprach-/Textanpassung

### Notes

- = Hinweis
