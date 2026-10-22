# UI upgrade verification

Release: 501b02fda0f62de68e11ccd7f2ba60bc8dba813c

- All 20 test suites pass, covering editing, joined geometry, crops, lettering, page organization, exports, feedback, accessibility adapters, and offline worker behavior.
- Browser checks at 1280 × 900, 390 × 844, and 320 × 740. No horizontal page overflow.
- Tab lists and menus have accessible names; menu triggers retain open/closed state. Native help, installation, and image export dialogs have explicit titles.
- Keyboard navigation, focus return, Cancel/Escape, deletion with Undo, nested organizer confirmations, and settings dropdown dismissal checked.
- PDF generation checked in the preceding feedback release; reader preview, CBZ, and PNG generation rechecked during final verification. PNG output is 1800 × 2544.
- Offline tests execute the actual worker handlers with failed network requests. Every cached shell resource matches the local file. Tests cover installed launch URLs, failed installation, private-request isolation, cache cleanup, and first-launch fallback.
- Public release files and the offline ZIP match the source.
- Physical Android airplane-mode behavior and native device download/share/install dialogs were not tested.
- Synthetic test book restored. User books unchanged.

Narrow-phone numeric grid corrected to permit both columns to shrink. Help instructions now use the current Designer and Panel labels.

Final browser measurement at 320px: Layout, Panel, Image, Text, and Book all have equal client and scroll widths, confirming no internal horizontal overflow.

## Outer-page scrollbar correction

Release: cb260e043d6ee0bd9a882be50074661c6c690a3c

Before: at 1360 × 776 the document scroll extent reached 1034px. Settings had its own independent scrollbar. Returning focus from Help could shift outer containers.

After: the editor is fixed to the viewport. Body, app, and workspace do not accept focus scrolling; settings/library/canvas retain their own scrolling. In the failing sequence (open/close Help, resize to 1360 × 500, open/close Help again), document, body, app, and workspace scroll positions stay at zero while Settings scrolls to reach its bottom controls. App bounds remain at 0–500px. Phone bounds rechecked at 390 × 844. Print rules restore normal document flow.

Targeted accessibility, offline shell, and PDF-export tests passed. Final public CSS and worker match source; the offline ZIP was refreshed. No book content changed.

### Page layers — 2026-10-20

Published 6cca8a06cb65dfea44080652d74cb59a97f10980; worker 8e86620692c9aef6. GitHub Pages built; exact public HTML, CSS, and worker bytes match source. Offline ZIP matches.

All 21 Node suites pass; final indicator correction rechecked with layers.cjs, accessibility.cjs, and offline-shell.cjs. Live desktop: rename, panel ordering, lettering ordering, position lock, removed handles/disabled geometry, inherited switch state, selection, Undo, and save/reload persistence. Phone 320×740: every toolbar control inside viewport (rightmost edge 312), layer rows 44px, no horizontal inspector overflow, root scroll height equals viewport. Desktop root also fixed. Browser errors empty. Viewport reset, synthetic picture-span test book restored, original user books untouched.

Proof: /home/aminos/code/azerty/koma-layers-desktop.jpg and /home/aminos/code/azerty/koma-layers-phone.jpg.

### Panel multi-selection — 2026-10-20

Published 6238ea38e52e25e22aa3ee89ed73e59c1bf2fc3a; worker 8ea6aa97f976d5a2. GitHub Pages built, exact public HTML/CSS/worker bytes equal source and offline ZIP. All 23 automated suites pass.

Local desktop: real Shift-click, group pointer drag, keyboard movement, nudge, Undo, and locked-selection controls. Phone 320×740: switch and layer selection, actual alignment, group controls at 44px minimum, inspector client/scroll width both303, document client/scroll width320 and height740. Drawer backdrop moved inside the fixed app so settings receive real taps.

Live release: group nudge and single-step Undo restore the exact original panel geometry and shared-picture CSS. Entering picture editing clears the group and refreshes the current panel's geometry fields. Asynchronous layer focus waits for the native button and ignores obsolete/disabled/detached rows; a dedicated regression suite covers this failure.

Proof: /home/aminos/code/azerty/koma-panel-groups-desktop.jpg and /home/aminos/code/azerty/koma-panel-groups-phone.jpg.

Final app update activated. Repeated layer toggles produce no new browser errors compared with the pre-update log baseline. Test book geometry and shared-picture CSS match their original state exactly. Temporary local preview closed, server stopped, viewport reset, live tab retained.

### PNG / Arabic / New book — 2026-10-20

Release 5c8d0bcf253191c1a0cf4e06f12fe854757368cb, worker ae152582a3270ed0. GitHub Pages built; public HTML/CSS/worker exactly match source and offline ZIP. All 25 suites pass; startup change additionally checked by fresh browser launch and offline/accessibility suites.

The supplied 2,366,805-byte RGB PNG (1536×1024) passes PNG integrity verification and imports at full dimensions in the updated local app. A browser-imported transparent PNG retains alpha0 at an edge and alpha255 at the center, checked independently with Pillow. The original phone-specific failure was not reproduced; no universal decode guarantee is claimed. User photo tested locally and never copied to the public repository.

Arabic text with diacritics/numbers has RTL direction in HTML and shared Canvas reading preview; Arabic system font and direction controls are available. Book creation, cancellation and save safety checked, including a newly named Arabic book in the isolated preview. Fresh component startup now shows the picture library reliably. Local preview logs empty.

Published installed-app update activated. New book opens the name dialog from the workspace; Cancel leaves Picture span check intact. At320×740 the New book button is44px high, document scroll/client width320 and height740, all4 original pictures retained. Viewport reset, temporary preview closed, local server stopped and live tab retained.

Proof: /home/aminos/code/azerty/koma-new-book-live-phone.jpg, /home/aminos/code/azerty/koma-arabic-new-book-phone.jpg, /home/aminos/code/azerty/koma-arabic-reader.jpg.

## Page zoom — 2026-10-20
Raised page zoom to 500% on phone and desktop. Exercised the actual zoom functions: upper limit, disabled + at 500%, zoom out, lower limit, and Fit reset pass.

## Bubble opacity — 2026-10-20
Added 0–100% whole-lettering opacity. Existing books default to 100%. Real slider Undo/Redo, project round trip, validation, and Canvas alpha for all four lettering types passed. Local browser verified 50% computed opacity, persisted opacity after reload, phone slider within 390px viewport, and no console errors. Arabic, speech tails, slider history, and PDF checks pass.
Published commit f1ac922; live HTML, service worker and offline ZIP match source.

## Background-only opacity correction — 2026-10-20
The user clarified that transparency should affect the background. The same saved slider now changes background fill only, preserving solid text and outlines in DOM, SVG tails and Canvas exports. Browser verified transparent legacy fill/tail, 50% SVG speech fill, parent opacity 1, solid color/stroke, and phone control. Opacity, Arabic and speech-tail suites pass.

## Canvas quick actions — 2026-10-20
Right-click panels and lettering or use the selected panel ⋯ button. Panel actions route to edit, move/resize handles, crop, shape, speech, duplicate, layer order and deletion. Lettering supports edit/duplicate/delete. Native popover supports outside dismissal; menu keys include arrows, Home/End, Escape and Shift+F10. Minimum count, locks, template limits and stale target guards apply. All 27 suites pass. Desktop right-click, duplicate/Undo, resize handles, keyboard navigation/Escape, lettering context, phone 320px tap target, menu bounds, delete/Undo and direct edit verified. No local browser errors observed.
Published commit 4f1f20f; live HTML, worker and offline ZIP match source.

## Mouse-wheel page zoom — 2026-10-20
Plain vertical wheel over the stage zooms around the pointer from 60–500%. Modified and horizontal wheel gestures retain browser behavior; wheel during a drag is ignored. Unit checks cover cursor anchoring, upper/lower bounds, pixel/line/page deltas and modifier preservation. Real browser wheel input increased/decreased zoom, preserved cursor image coordinates to <0.001 at enlarged zoom, and Fit reset worked; no browser errors observed. Quick actions and offline shell checks also pass.
Published commit 98087cf; live HTML, worker and offline ZIP match source.

## Phone / TV screen replacement — 2026-10-21
Added a separate screen editor from Image settings and panel quick actions. Choose a library picture or upload screen content, drag four corners with perspective, adjust opacity, and apply as a PNG copy. Original images remain; saved metadata reopens editable corners and screen content. Pure projective mapping is shared by preview and final composition. All 29 suites pass; updated offline shell serves screen-tools.js. Browser verified source selection, new screen upload, mouse and keyboard corner movement, Apply, reopen with same corners, Undo, and 390px phone layout with no horizontal overflow and visible Apply. Saved PNG pixel checks retain exact outside pixels and screen colors at full source dimensions.
Reader Canvas generation verified with the edited picture. Published commit 9b06124: live HTML, perspective helper, service worker and ZIP match source. Installed update activated and the screen editor opened successfully without altering the existing public test book.

## Ready-made phone and TV panels — 2026-10-21
Layout includes Phone panel and TV panel actions. Generated device frames prefit the screen, reuse the screen editor for library selection/upload, and apply as new freeform panels with contain fit and preserved device proportions. Existing panels remain; one Undo removes the new panel and assets. Reopening uses saved screen edits. Frame/source dependencies are protected from library removal to preserve editability. All 30 suites passed; focused device, character, screen replacement and offline checks passed after the dependency guard. Browser verified phone add/Undo, TV add on 390px phone layout, screen reopening and no console errors. PNG check confirmed TV dimensions 900×600, transparent outer pixels and intact stand.

## Whole screen shape and lettering variants — 2026-10-21
Screen editing now defaults to a single draggable shape plus one resize handle. Four corners are hidden unless Perspective corners is chosen. Shared transforms clamp whole-shape move/resize and preserve valid geometry. Verified real mouse move and keyboard resize followed by Apply. Root font-synthesis:none was inherited by lettering and could prevent unavailable bold/italic font variants from appearing; lettering now allows weight/style synthesis, and the typing field matches chosen font, weight and italic. Browser verified actual page weight 700/style italic/synthesis weight style, Undo returning to normal, Redo restoring italic, and persistence across reload. All 31 suites pass, including new lettering style regression coverage and screen transform checks.
Published commits cd0dc0e and 10e03f7. Live HTML, perspective helper, service worker and offline ZIP match the final source.
Installed update activated. Published app smoke check verified page text weight 700/style italic/synthesis weight style; temporary test caption and toggles were undone and original zero-lettering test book restored. Phone template preview verified move/resize visible and zero visible corner handles in default mode; draft cancelled without adding assets.
The screen preview height allowance was reduced by 60px after adding the editing-mode row so desktop Apply/Add actions remain in view. Final shell version 7b43a1c9214ec436.
Final layout commit f983afa is published; final live files and offline ZIP verified against source.

## Device picture fitting and larger screen editor (2026-10-21)

31 suites passed, including portrait/landscape contain bounds, cover coverage, invalid fit rejection and legacy metadata compatibility. Desktop phone preview increased from 250 to 518 pixels tall at 1280×720. Mobile 390×844 retains a large preview with Add/Apply visible. Saved TV Fill screen mode restored on reopen. Public update is pending explicit user approval after automatic review rejected the Git push. Prepared commit: 06bbea8; offline version: 92a16be4b2fa2599.

Publication approved by user and completed: fd2a6998429a34f3fe205cf3400760bbefc8561b, offline version 764373b2ef741e62. Live index/helper/worker and offline ZIP match source. Public browser verified Phone 5 layer with thumbnail, selection, and Edit device screen reopening the stored fit. Test addition undone and original four-panel book restored. Layer and focus regression suites passed.
