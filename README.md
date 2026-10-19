# Koma Manga Studio

Koma is a free, installable progressive web app with no build step, application accounts, API keys, or third-party runtime dependencies. Keep `index.html`, `pwa.js`, `book-store.js`, `image-tools.js`, `book-output.js`, `sw.js`, `manifest.webmanifest`, and the `icons/` folder together when hosting it. The core editor can still open directly from the HTML file, but installation and offline relaunch require a secure hosted address.

## Install on your phone

1. Open the hosted HTTPS website in your phone's browser while connected to the internet.
2. In **Settings**, wait until Koma says **Ready to work offline on this device**.
3. **Android / Chrome:** tap **Add to home screen** in Koma's Settings, or choose **Install app** / **Add to Home screen** from Chrome's menu.
4. **iPhone / Safari:** tap **Share**, choose **Add to Home Screen**, keep **Open as Web App** enabled if shown, and tap **Add**.
5. Launch **Koma** from its new home-screen icon. After setup, the editor, icons, and built-in sample art can reopen offline. Imported pictures and books stay in your device's IndexedDB storage.

Download a project from the old editor and use **Open** in the installed app to transfer an existing book. Projects do not automatically sync across devices, browser apps, or website addresses. Browser storage can be cleared, so keep downloaded project backups.

The install card also contains platform instructions. Browsers that do not expose an installation prompt can still use their own menu. Downloaded HTML files and a computer's plain HTTP LAN address do not provide installable PWAs. HTTPS hosting or localhost is required.

The service worker precaches only the listed public application files. It does not upload or cache private picture/project requests. When an update is waiting, **Save & update app** writes the open book to device storage before activating the new version. If saving fails, the app keeps the current editor open.

To package a new version from the workspace, run `python3 package_pwa.py`. This updates the offline-cache version from the app files' content and creates `../koma-pwa.zip`. Upload the ZIP's extracted contents to a static HTTPS host. Relative manifest, icon, worker, and launch URLs support deployment at either a domain root or a project subdirectory.

## Your book library

Tap **Books** beside the book title to see saved books with first-page covers. Create a blank book, search, rename, make an independent copy, or open another book. **Import** adds a downloaded project as a separate book. Switching books saves the open book first and resets undo history. Delete removes a device copy permanently after confirmation; open another book before deleting the current one.

The previous single-book autosave is copied into the library on the first launch of this version. Its original storage record is retained. The library works offline after the app update finishes. Books remain specific to this device, browser, and site address; download project backups for transfer or safekeeping.

## Sound effects and rotated lettering

Open **Text → Sound effect** to add outlined manga lettering such as **BAM!**. Edit the words, font, size (up to 96 pixels for sound effects), alignment, text color, and outline color. **Letter outline** controls stroke thickness from 0 to 8 pixels. The background stays transparent, and the words display in uppercase. The Impact lettering choice uses available system fonts, with local fallbacks; no font download is needed.

Use **Text rotation** to tilt sound effects, speech bubbles, thoughts, or captions from −60° to 60°. Drag lettering in **Move** mode to place it. **Duplicate** makes an independent editable copy, including its styling, and offsets it slightly. Undo and redo support these changes. Each panel supports 12 lettering elements in total.

Sound effects share measured line breaks, outline padding, and font-baseline placement between the editor and rendered pages. Rotation and outlines are included in the reader, covers, PNG, PDF, and CBZ output. A warning appears when the lettering box extends outside any edge of its panel. Existing projects open with zero rotation and no text outline on ordinary dialogue.

## Save and reuse custom layouts

In **Settings**, arrange a page, then tap **Save layout** and give it a name. **My layouts** shows previews of up to 40 saved layouts, with search, rename, download, import, and delete controls. Both freeform arrangements and the built-in templates can be saved.

A saved layout includes panel geometry, stacking order, borders, backgrounds, corner rounding, aspect locks, page margin, template spacing, paper color, header/footer visibility, snapping, and guides. It excludes pictures, picture adjustments, dialogue, chapter text, footer text, and the page picture filter.

Choose **This page** or **All pages in this book**, then tap **Apply**. Pictures and dialogue stay in the same numbered panels. If the layout has fewer panels, extra content remains stored in hidden slots; applying a larger layout reveals it again. Applying to all pages is one Undo step. Each page receives an independent copy of the geometry.

Download a `.koma-layout.json` file to back up or transfer a layout, then use **My layouts → Import** on the other device. Imported files are limited to 150 KB and validated before saving. Layouts use the same device database as your books, under separate keys; no database upgrade is needed. Deleting a saved layout does not change pages already using it. Layouts are separate from editable book project backups.

## Read and download a complete book

Tap **Read** beside **Books** for a clean preview. Use Previous / Next, the page slider, or swipe between pages. **Manga · right to left** makes a rightward swipe (or the left arrow key) advance; **Left to right** reverses that behavior. The selector saves the reading direction in the editable project. Old projects default to manga reading direction. Native pinch zoom remains available in the reader.

Choose **Download CBZ** in the reader, or **Export → Download whole book**. Koma renders every page at 1800 × 2544 as a PNG, then builds a CBZ archive with ordered page filenames and ComicInfo metadata for title, page count, and reading direction. Pages stay in story order in both reading modes. The ComicInfo direction follows the [Anansi ComicInfo 2.0 schema](https://anansi-project.github.io/docs/comicinfo/schemas/v2.0); a comic reader must support that metadata to apply it automatically.

On phones, use **Save book** or **Share book** when available. On desktop, the archive downloads directly. A progress dialog allows cancellation without downloading an incomplete archive. Export runs on the device and works offline. Keep an editable project backup too: CBZ contains finished pages rather than editable panels. The reader retains at most three rendered pages and releases their temporary image URLs when closed.

## Make a manga book

1. Upload JPG, PNG, or WebP pictures, or try the four original sample illustrations.
2. Select a panel and click a picture to place it. On desktop, you can also drag pictures or picture files onto panels.
3. Choose **Freeform** to drag panels anywhere and resize them with the four corner handles. Use the settings form for exact X/Y positions, widths, and heights. You can add up to 16 panels, duplicate or delete them, overlap them, and bring them to the front or send them to the back. Grid snapping and proportional resizing are optional. Six preset layouts are still available under **Templates**.
4. Customize panel borders, colors, rounded corners, and backgrounds. Picture controls include fill/contain, zoom, position, rotation, horizontal/vertical flips, brightness, contrast, saturation, and opacity. Original, B&W, and Ink styles are available; saturation applies to Original pictures.
5. Add speech bubbles, thoughts, and captions. Click a bubble to edit its text, font, bold/italic styling, alignment, text and background colors, outline color, and speech tail. Drag it to reposition it. A warning appears if the text extends below the panel.
6. Under **Page & print appearance**, adjust the page margin and paper color. Customize the chapter label and footer, or hide the header and footer entirely. Guides and editing handles are excluded from exports.
7. Add, duplicate, and reorder pages in the bottom strip. New pages inherit your layout and appearance settings without copying pictures or dialogue. Undo and redo support editing across the book.
8. Use **Save project** to download an editable `.koma.json` backup. Use **Open** to import it into your library later. Files from the first version still open, with their original panel positions preserved when converted to Freeform.
9. Use **Export book** to download the current page as a 1800 × 2544 PNG, or print the entire book. In the print dialog, select **Save as PDF**, **A5**, **no margins**, and disable headers and footers.

All features are free and run on your device. Pictures are resized to a maximum of 2000 pixels on the longest side. Nothing is uploaded. The editor supports up to 40 pages, 16 visible freeform panels per page, 60 pictures, and 12 dialogue or sound-effect elements per panel. Pictures in hidden template slots are retained when switching layouts.

Autosave uses browser storage when available. Browser privacy settings and local-file restrictions can affect storage, so download a project backup for anything you want to keep. Projects are stored separately for each browser and site address.

The B&W and Ink options are image filters, not AI photo-to-manga conversion. No image-generation service is connected.

Keyboard shortcuts: **Ctrl/Command Z** to undo, **Ctrl/Command Shift Z** to redo, **Ctrl/Command S** to save a project, and **Delete** to remove the selected bubble. In Freeform, focus a panel and use the **arrow keys** to move it, **Shift + arrows** for larger steps, or **Alt + arrows** to resize. **Escape** cancels an active panel drag or resize. Text fields retain normal text-editing shortcuts.

## On a phone or touch tablet

- Use the bottom toolbar: **Canvas**, **Pictures**, **Designer**, and **Text**. Pictures and settings open in scrollable sheets with a close button. Tap the shaded area or Canvas to return to your page. Placing a picture returns you to the canvas automatically.
- Choose **Picture** to drag a picture inside its panel. Use two fingers on the picture to zoom while keeping the image under your fingers. Lift one finger to continue dragging. Each gesture is one undo step; **Escape** cancels it. The same mode is available from **Drag / pinch picture** in Designer → Image, with offset sliders for precise adjustments.
- Choose **Move** to drag panels and bubbles or resize a panel using its corner handles. Choose **View** to scroll the canvas without changing your layout. Use **+** and **−** to zoom from 60% to 300%, and **Fit** to see the whole page. Browser pinch zoom is available in View mode.
- Use **Text** to open dialogue controls. Settings fields use larger text to avoid automatic input zoom, and the editor adapts to the on-screen keyboard and safe areas.
- Swipe the page strip to see more pages. The **+** tile adds a page. The **three dots** menu contains reorder, duplicate, and delete actions.
- PNG export shows a preview with **Save image** and, when supported by your browser, **Share image**. You can also press and hold the preview to use your browser's image-saving options.
- Photo selection accepts JPEG, PNG, WebP, AVIF, and HEIC/HEIF. Each format still requires decoding support in your browser; if a phone photo cannot be decoded, export a JPG or PNG copy and upload that instead.

The phone layout supports portrait and landscape orientations. The HTML file must be opened in a browser that runs JavaScript; some file-manager preview screens do not run web apps.

## Optional local preview

From this folder, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173` in your browser.

## Verification

Verified JavaScript syntax, element references, version 2 project round trips, migration from an actual version 1 project, 54 combinations of template layout/gutter/page margin, and 10,000 move/resize cases covering all corners, snapping, aspect locks, and canvas boundaries. Checked panel add/duplicate/delete limits, independent duplicates, layer order, template/freeform switching, undo/redo, Unicode dialogue wrapping, and rejection of 25 malformed project/style cases.

An instrumented export check verified finite drawing coordinates, custom paper color, hidden metadata, image rotation/flips/opacity, and dialogue font/color settings. These checks exercise application logic and drawing instructions, not browser pixels. The public HTTPS app has also been checked in the browser at a 390 × 844 phone viewport, including the save-and-update flow and offline-ready installation status. Physical Android installation still depends on the browser and launcher.

Mobile logic checks cover page fitting for small and short viewports, 60–300% zoom limits, keyboard viewport calculations, native pinch-zoom preservation, tool-sheet state and focus restoration, touch jitter rejection, View mode, secondary-touch rejection, real panel touch callbacks with cancellation/undo, and bubble drag cancellation. These are unit checks, not physical-device or browser-rendering tests.

PWA checks cover offline shell/icon requests, caching boundaries, deletion of only this app's old caches, failed precache installation, explicit update activation, relative-path deployment, registration, platform instructions, install prompts, offline feedback, and saving before an update reload. PNG icons were verified at 192, 512, and 180 pixels, including a separate maskable icon. These checks do not verify a physical phone's installation UI.

Library checks cover independent book records, cover metadata, activation, atomic write failure, deletion isolation, preservation of legacy data, queued save ordering, and snapshots before asynchronous work. Picture checks cover anchored pinch math, 1,000 bounded gesture cases, exported-project offset validation, real pointer handlers, touch jitter, pan/pinch/pan transitions, cancellation, and single-step undo.

Live browser checks for the library covered migration of the previous saved book, blank-book creation, reload persistence, independent copying, renaming, searching, switching, direct picture dragging, and persistence of image offsets without changing the original book. Two-finger pinch was checked through pointer-handler and geometry tests; it has not been exercised on physical phone hardware.

Reader/export checks cover direction-aware keyboard and swipe navigation, scroll/jitter rejection, project migration and validation, reader cache limits and URL cleanup, closing while a page renders, archive cancellation, rendering failures, and ZIP filename validation. A separate Python ZIP reader verified all 40 ordered entries and CRC checksums from a generated archive, and XML parsing verified escaped Unicode titles and ComicInfo direction.

Live browser checks at 390 × 844 verified a two-page clean reader, Previous / Next boundary states, keyboard turns in both reading directions, and generation of a two-page 1.5 MB CBZ with the phone save dialog. The in-app browser did not deliver download events or a retrievable file, so the real browser-generated CBZ download and Android save/share behavior remain unverified. Archive construction itself passed independent ZIP/XML validation.

Custom-layout checks cover all 54 preset/margin/spacing combinations, independent geometry copies, preservation and recovery of hidden pictures/dialogue, image-adjustment and chapter/footer preservation, portable-file normalization that strips private content, 15 malformed layout cases, whole-book application with single-step Undo, and isolated storage operations including failed writes.

Live browser checks at 390 × 844 verified saving a freeform layout, importing a synthetic `.koma-layout.json` through the file picker, searching, renaming, persistence across reloads, and applying a four-panel layout to both pages of a test book. All three existing pictures and dialogue elements remained present, and one Undo restored the original geometry. No browser console errors were observed.

Lettering checks cover sound-effect creation and migration, independent duplication with bounded coordinates and single-step Undo, the shared 12-element limit, validation of rotation/outline/font/type values, Unicode line wrapping, outline padding and baseline measurement, transparent outlined exports, stroke-before-fill ordering, optional outline removal, rotated ordinary dialogue, balanced canvas state, and warnings at all panel edges.


## Panel Designer and professional workspace

The compact desktop workspace has graphite app controls, a source-image column, the page canvas and a focused inspector. Designer tabs separate Layout, Panel, Image, Text and Book controls. On a phone, tap **Designer** to open the same tools in a touch-friendly sheet. Installation and app updates are under **Designer → Book**.

- Choose **Panel** and select Rectangle, Ellipse, Diagonal, Trapezoid, Diamond or Hexagon. Shape presets work with both templates and freeform page layouts.
- Tap **Edit corners on canvas** to convert the current shape into an editable polygon. An ellipse becomes an eight-point polygon. Drag numbered points, or focus one and use the arrow keys (Shift moves farther).
- Select a corner in the inspector for precise X/Y coordinates. **Add point** inserts a point after it, and **Remove point** removes it. Polygons support 3–12 points, including concave cutouts. Joined straight edges move together when you drag a corner. Crossed edges, tiny edges and collapsed shapes are prevented.
- Use **Shape** below the canvas to return to corner editing, **Move** to move/resize whole panels, **Picture** to pan or pinch the picture, and **View** to explore the page.
- Corner drags are a single Undo step. Escape or a cancelled touch restores the original shape. Presets and point edits preserve pictures and lettering.
- Custom shapes and inside borders carry through project backups, reusable layouts, new/duplicated pages, book covers, page thumbnails, reader, PNG, CBZ and print exports. Existing books and saved layouts migrate to rectangles.

Run `node tests/designer.cjs` for shape geometry, project/layout migration, invalid import rejection, independent copies, concave polygons, 5,000 bounded point moves, add/remove controls, Canvas geometry and real point-pointer cancellation/undo checks.

Live browser checks at 390 × 844 verified the Designer sheet and presets, direct custom-corner dragging, single-step undo/redo, adding/removing a point, numeric coordinates, and persistence of custom polygons and ellipses after reopening. Clean reader rendering and the 1800 × 2544 PNG preview were checked. These are browser viewport checks, not physical Android testing.

## Linked panel resizing

In Freeform, resizing a frame automatically adjusts adjoining frames along the shared divider. Rows, columns, T junctions and connected four-panel junctions stay aligned and retain their existing gutters. Adjacency uses the page's panel-spacing setting, with a small tolerance for rounded coordinates. Detached frames and deliberate overlaps stay independent.

Corner dragging, Alt + arrow resizing and Width/Height fields share this behavior. Moving a whole panel or changing its X/Y position remains independent. Corner-point shape edits also bend adjoining straight panel edges. A connected resize stops before any frame becomes smaller than 10% page width or 8% page height. The selected frame's proportion lock is preserved; adjoining frames adapt to the divider as they do when applying a layout.

A drag is one Undo step for every affected frame. Escape or a cancelled gesture restores all frame positions. Pictures, shapes, lettering, hidden panels and page order are preserved. Saved projects, reusable layouts, thumbnails and exports use the resulting geometry.

Run `node tests/linked-resize.cjs` for row/column following, junctions, gutter preservation, minimum sizes, proportion locks, independent overlapping/detached panels, 2,880 template-derived corner resizes, numeric fields, content preservation, live SVG updates, cancellation, reversing from limits and single-step undo/redo.


## Joined shape corners

In **Shape** mode, dragging a numbered corner now bends adjoining straight panel edges with it. The connection follows actual polygon edges, including T junctions and four-panel junctions. Adding a midpoint and pulling it inserts a matching point in the neighboring edge when needed. Removing a joined corner straightens the adjoining edge too. Keyboard arrows and corner X/Y fields use the same geometry.

Adjoining frames may expand to contain their new outlines; pictures and lettering continue to fill each frame. Existing gaps are retained as offsets between joined edges. Separate artwork, deliberate overlaps and curved ellipse edges remain independent. Shapes stop before an adjoining polygon folds over or leaves the page. A neighbor already using all 12 corners may require removing a point before another join can be inserted.

A gesture is one Undo step for the entire joined edit. Escape/cancel restores all affected shapes and frames. Shape editing a template switches to Freeform while keeping its visible arrangement. Shared shapes carry through project backups, layouts, covers, reader and exports. Clicks in cutout areas reach the visible panel beneath them.

Run `node tests/shape-follow.cjs` for the original pointer regression, shared endpoint/gutter preservation, inserted midpoint joins, returning a divider without bounds drift, T/four-panel propagation, 720 non-overlapping template-derived cases, joined-point removal, project/layout round trips, hidden content preservation, cancellation and single-step undo/redo.

## Automatic picture layouts

Open **Pictures → Auto layout**, or **Designer → Layout → Arrange pictures into pages**. Tap thumbnails in story order; their numbered badges show the selection order. Choose 1–6 pictures per page and either filled panels or whole pictures. Select all uses the library order.

**Create pages** inserts the complete batch after the current page. The last page uses exactly the remaining pictures. Picture placement follows the book's right-to-left or left-to-right reading direction. New pages inherit the current page's paper, spacing, picture effect, chapter and header/footer settings, plus the selected panel's border/background style. Frames start rectangular with fresh picture positioning and no lettering; existing pages remain intact. All generated frames support the normal Freeform, shape and picture tools.

A complete batch is one Undo step. Generation respects the 40-page book limit and never creates a partial batch when it will not fit. Switching books clears the temporary selection.

Run `node tests/auto-layout.cjs` for 144 combinations of batching, ordering, reading direction and picture fit; exact final-page counts; independent page/frame state; metadata/content preservation; project validation; actual creation and single-step Undo/Redo; missing assets; book switching; and atomic capacity checks.

## Direct PDF download

Choose **Export → Download PDF**. Koma renders the complete book, then offers **Save PDF** and, on devices supporting file sharing, **Share PDF**. No print dialog or network service is needed. A progress dialog supports Cancel between pages. **Print book** remains available separately.

The PDF contains A5 portrait pages in the book's existing page order, with a right-to-left viewer preference for manga books. Each page uses the same renderer as PNG/CBZ, including custom shapes, layering, lettering, image adjustments, paper and page numbers. Artwork is rasterized at 1800 × 2544 and encoded as high-quality JPEG; text in the PDF is part of the page image, not selectable text. An editable project backup is still needed for future changes. PDF titles preserve Unicode characters. Pages are fitted proportionally and any tiny edge bands match the paper color.

The PDF writer runs locally without external libraries. Page canvases are released after encoding. Cancellation or rendering/encoding failures close the progress dialog and never offer a partial file. PDF and CBZ share the same rendering/progress/cancellation flow and file-ready dialog.

Run `node tests/pdf-export.cjs` for exact byte offsets, binary streams, 1/2/40-page output, A5 dimensions, Unicode titles, reading directions, invalid image rejection, page limits, quality settings, sequential rendering, cancellation, error cleanup, canvas release and CBZ/ready-dialog regression checks. Independent Poppler checks and rendered page inspection validate a PDF made with the actual manga page renderer.

## Character references

Open **Pictures → Characters** and choose **+ New**. Each book can keep up to 30 characters, with a name, role, appearance/story notes, and up to six reference pictures per character. Select a thumbnail to inspect it beside your page. Characters stay available while moving between pages.

**Choose pictures** links pictures already in the library. **Upload references** uses the same local image processing and 60-picture library limit as normal uploads, then links the new pictures to the character. Unlink removes only the reference association. A picture used by a character cannot be removed from the library until it is unlinked. Reference pictures can also be placed in panels through the Pictures tab.

Names, roles, notes and references autosave with the book. They carry through editable project backups and book copies; older books open with an empty character library. Character notes and unused references are not added to the reader or rendered book exports. Removing a character leaves its pictures in the library and supports Undo. Uploading a batch of references is a single Undo step. Field edits form one Undo step when leaving the field.

Uploads capture their destination book and character. If that destination changes or is removed before processing finishes, the result is discarded with a retry message. Other upload failures restore the controls and preserve existing content.

Run `node tests/characters.cjs` for legacy migration, Unicode notes, project round trips, malformed/orphan/duplicate references, independent copies, creation and field Undo/Redo, character/reference limits, asset protection, unlink/removal recovery, unchanged manga pages, reference upload batches, book-switch races and failed-upload cleanup.

## Page organizer

Open **Pages** beside the page strip, or **Designer → Book → Organize pages**. On phones, Pages is in the strip's three-dot menu. The organizer shows layout thumbnails and opens with the current page selected.

Tap thumbnails to select several pages, or use Select all / Clear. Shift-click extends a selection range on desktop. **Earlier/Later** move the selected group one position while preserving order; they stop when the group reaches the book boundary. **First/Last** gather the selection at the beginning/end. Desktop users can also drag a selected page onto another page to insert the selected group before it. Dragging an unselected page moves only that page.

**Duplicate** inserts an independent copy after each original and selects the copies. Page and lettering IDs are regenerated; pictures, custom shapes, hidden panels, adjustments and dialogue remain intact. The entire batch is refused if it would exceed 40 pages. **Remove** asks for confirmation, retains at least one page, and leaves pictures and character references in the book. **Edit page** opens a single selected page in the editor.

Each action saves automatically and is one Undo step. Undo/Redo are available inside the organizer, including Ctrl/Cmd+Z, Ctrl/Cmd+Shift+Z and Ctrl/Cmd+Y. Moving pages and undoing a move retain the editor's current page by identity when it still exists. Closing returns focus to the page controls. The resulting page order carries through project backups, reading mode and exports.

Run `node tests/page-organizer.cjs` for 5,116 exhaustive group movements; source/order preservation; independent copies and limits; actual action handlers and Undo/Redo; multi-page removal, cancellation and book-switch guards; asset/character preservation; real pointer drag handlers, jitter/foreign-pointer rejection, touch scrolling, Escape/lost-capture cancellation; and range selection. Thumbnails and page duplication share the same helpers as the existing page strip controls.
