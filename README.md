# Joomlaplates changelogs

Public release notes for 67 templates, 28 modules and the UIkit Framework plugin.
Installable premium packages are **not** stored in this repository.

## Public endpoints

- Website data: `https://raw.githubusercontent.com/joomlaplates-de/joomlaplates-changelogs/main/generated/catalog.json`
- Joomla XML: `https://raw.githubusercontent.com/joomlaplates-de/joomlaplates-changelogs/main/generated/xml/PRODUCT_ID.xml`

The XML URL belongs in `<changelogurl>` in the extension installation manifest and in its existing update-server entries. An XML changelog describes release notes; it does not provide an update ZIP or change how premium downloads work.

## Edit a release

Edit the relevant file in `histories/`. All templates share `histories/templates.md`; Top and Barrierefrei have explicit per-version exceptions. An exception replaces that version's entire entry for that template, so include all applicable notes. Exceptions for an older version remain valid when a new shared version is added.

Use this exact Markdown format (newest release first):

```markdown
# Changelog — Product

## [2.9] - 2026-11-06

### Fixed

- Corrected the mobile menu.

### Changed

- Updated compatibility settings.
```

The date is optional; omit it when unknown. Supported categories are `Added`, `Changed`, `Fixed`, `Security`, `Removed`, `Language`, `Notes`. Text after `- ` is literal text; indent continuation lines by two spaces. Do not insert free-form paragraphs, raw headings or fenced blocks outside a bullet. Inline Markdown is retained as text, not executed or interpreted as HTML.

Use the **exact extension version**, e.g. `2.6` when its manifest says `2.6`. Plugin and bundled UIkit library versions are separate. Use `Security` only for an actual security fix; a compatibility change is not a security fix.

Update the current version in `products.json` when publishing an extension release. For all templates at once:

```sh
npm run release-version -- templates 2.9
```

For one module:

```sh
npm run release-version -- mod_uk_slider 2.6
```

These commands require the version to exist in Markdown first. They update catalog metadata, not the extension ZIP or the existing update server version. Those still belong to your normal release process.

## Generate and validate

Node.js 22 or newer; no dependencies or install step:

```sh
npm test
npm run build
```

Each product has its own XML with its real extension element, type, version and optional plugin group. The JSON catalog groups shared templates for the website. Generated files are committed so raw GitHub URLs work immediately, without Pages, an API token or a separate hosting service.

On a push to `main`, GitHub Actions validates the Markdown, generates the output and commits updated `generated/` files. If repository policy prevents Actions from committing, run the same commands locally and commit the generated files with the source changes. Pull requests validate and generate without pushing.

## Imported history and known gaps

`archive/` preserves the supplied source texts. `IMPORT-REPORT.json` records the package hashes, two explicit version aliases, merged duplicate sections and five missing/current incomplete histories. No unknown release details or dates were invented. Old source dates were retained as supplied, including apparent chronological inconsistencies.

For a current release without documented changes, the history says that detailed notes are unavailable. The UIkit plugin's 4.0.17 entry labels the bundled UIkit 3.25.26 library notes separately. The template 2.8 exceptions for Top and Barrierefrei do not claim that a missing menu file was fixed.

The initial migration covers the supplied 96 packages. The existing PageBuilder repository and all existing update-server URLs remain in place.

## Website module

Install `mod_jp_changelog` separately on your Joomla 5/6 website. Default source: this repository, branch `main`, directory `generated`. Public access needs no token. Publish the module, enable Content – Load Modules and embed `{loadmoduleid ID}` in an article. Set the module's menu assignment to all relevant pages and its access to Public.

Leave Products empty for all histories, use `templates` for the shared history plus exceptions, or enter comma-separated product IDs. The module caches public data for 60 minutes and keeps the last successful response during a GitHub outage.

The generator and accompanying tooling are licensed under GPL-2.0-or-later. Historical release notes remain attributable to Joomlaplates.
