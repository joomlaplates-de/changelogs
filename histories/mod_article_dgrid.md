# Changelog — JP Article Dgrid

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

- Added language keys MOD_ARTICLES_FIELD_EXCLUDE_LOADMODULE_LABEL/DESC (en-GB)

## [2.5]

### Added

- Service Provider (services/provider.php) für Dependency Injection
- Dispatcher-Klasse mit ModuleHelper::moduleCache() Caching (wie natives mod_articles)
- Namespaced Helper (src/Helper/ArticleDgridHelper.php) mit getArticles(Registry, SiteApplication)

### Changed

- Vollständige Migration auf native Joomla 5/6 mod_articles Architektur
- Event-Dispatching via konkrete Event-Klassen (Content\AfterTitleEvent, etc.) statt $app->triggerEvent()
- Event-Ergebnisse in $item->event->afterDisplayTitle etc. (stdClass, wie natives mod_articles)
- Introtext-Verarbeitung (truncate, strip_tags) im Helper statt in Templates (displayIntrotext)
- Image-Parsing via Registry statt json_decode (robuster)
- Login-Redirect mit Menu-Item-Lookup (wie natives mod_articles)
- ContentComponent::CONDITION_PUBLISHED statt hartkodierter 1
- PluginHelper::importPlugin() vor Event-Dispatching
- Model-Instanziierung via bootComponent()->getMVCFactory()->createModel()
- Factory::getUser() ersetzt durch getIdentity()
- Factory::getDbo() ersetzt durch DatabaseAwareTrait DI

### Removed

- BaseDatabaseModel::getInstance() entfernt (deprecated/removed in J6)
- BaseDatabaseModel::addIncludePath() entfernt (deprecated/removed in J6)
- Alte helper.php ohne Namespace entfernt

### Notes

- Kompatibel mit Joomla 5.x und 6.x ohne Compatibility Plugin

## [2.3]

### Fixed

- Fixed Readmore Button

## [2.2]

### Added

- Add sorting options

## [2.1]

### Added

- Add Article Link to the Image Option

## [2.0]

### Fixed

- Changes Prefix. All modules have now the "JP"-Module Name
- Ready for J5 and J6 without compatibility Plugin

### Removed

- Removed the XML version. Not needed anymore for J5 or J6

## [1.2.2]

### Fixed

- Changed the xml path for updates

## [1.2.1]

### Added

- Add Image Animation

## [1.2.0]

### Added

- Initial Release
