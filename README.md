# Koma Manga Studio

Koma is a free, installable progressive web app with no build step, application accounts, API keys, or third-party runtime dependencies. Keep `index.html`, `pwa.js`, `book-store.js`, `image-tools.js`, `sw.js`, `manifest.webmanifest`, and the `icons/` folder together when hosting it. The core editor can still open directly from the HTML file, but installation and offline relaunch require a secure hosted address.

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

All features are free and run on your device. Pictures are resized to a maximum of 2000 pixels on the longest side. Nothing is uploaded. The editor supports up to 40 pages, 16 visible freeform panels per page, 60 pictures, and 12 dialogue elements per panel. Pictures in hidden template slots are retained when switching layouts.

Autosave uses browser storage when available. Browser privacy settings and local-file restrictions can affect storage, so download a project backup for anything you want to keep. Projects are stored separately for each browser and site address.

The B&W and Ink options are image filters, not AI photo-to-manga conversion. No image-generation service is connected.

Keyboard shortcuts: **Ctrl/Command Z** to undo, **Ctrl/Command Shift Z** to redo, **Ctrl/Command S** to save a project, and **Delete** to remove the selected bubble. In Freeform, focus a panel and use the **arrow keys** to move it, **Shift + arrows** for larger steps, or **Alt + arrows** to resize. **Escape** cancels an active panel drag or resize. Text fields retain normal text-editing shortcuts.

## On a phone or touch tablet

- Use the bottom toolbar: **Canvas**, **Pictures**, **Settings**, and **Text**. Pictures and settings open in scrollable sheets with a close button. Tap the shaded area or Canvas to return to your page. Placing a picture returns you to the canvas automatically.
- Choose **Picture** to drag a picture inside its panel. Use two fingers on the picture to zoom while keeping the image under your fingers. Lift one finger to continue dragging. Each gesture is one undo step; **Escape** cancels it. The same mode is available from **Drag / pinch picture** in Settings, with offset sliders for precise adjustments.
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
