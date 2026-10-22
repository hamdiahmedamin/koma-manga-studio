# Koma UI upgrade

Preserve the dense paper/ink/lime workspace, existing books, editing gestures, Undo, mobile touch targets, and offline installation.

Completed:
- Web Awesome action buttons and collapsible settings.
- All 12 dropdowns, including dynamic panel, corner, character, and crop choices.
- All 15 text/number fields and both textareas, including book/library forms and character/dialogue editors.

- All 22 sliders, with value tooltips, live preview, and gesture-level Undo.

- Settings switches and checkboxes, including dynamic shared-picture selections.

- All six color pickers, with named palettes, exact hex values, and invalid-entry protection.

- Designer tabs, with keyboard navigation and sticky phone navigation.
- Export menu, including PDF, print, CBZ, and PNG choices.
- Library tabs, with separate picture/character panes and edit preservation.
- Phone page-actions menu, with named actions, keyboard navigation, and shared desktop handlers.
- Confirmation dialog, with Cancel focus and cleanup after each accept/cancel/close.
- Dismissible status messages, with reading time and pause on hover or keyboard focus.
- Export progress bar, with completed-page counts and percentages.

Final verification:
- All 20 test suites pass.
- Desktop and phone keyboard navigation, dialog focus, menu dismissal, reading preview, and PDF/CBZ/PNG generation checked.
- Offline worker handlers tested with network failures against every packaged shell file.
- Accessible names added to remaining dialogs and inner tab lists/menus.
- Physical Android airplane-mode testing remains unverified.

UI upgrade complete. Native file, share, print, and install flows are preserved.

For each stage: bundle free components locally, run relevant regressions, verify actual browser flows, publish, and refresh the PWA shell.

### Page layers — implemented

- Canvas Layers shortcut opens the Panel inspector list without adding another cramped tab.
- Front-to-back panel order, nested lettering, selection, names, forward/backward controls.
- Explicit position locks protect dragging, resizing, and corners; panel locks inherit to lettering. Joined dividers stop at locked neighbors. Text, pictures, styles, stacking, and page layout remain editable.
- Backups, legacy defaults, independent duplicates, and Undo/Redo covered by the new layers suite. All 21 suites pass.

### Panel multi-selection — implemented

- Shift-click and phone selection switch, layer/canvas toggles, Select all, Keep current only.
- Shared-boundary group movement by drag, keys, or touch arrows; six alignment controls and two equal-spacing controls.
- Atomic position-lock protection, no-overlap spacing constraints, transient selection scoped to page/book, single-step Undo per operation.
- Phone drawer backdrop now shares the fixed app's stacking context, so it cannot intercept settings taps.
- All 23 automated suites pass; browser desktop movement/drag/keys/Undo and 320px phone selection/alignment verified locally before publishing.

- Layer focus waits for the component’s native button before restoring focus; stale and detached focus requests are ignored.

### PNG imports, Arabic lettering and direct book creation — implemented

- Visible workspace New book shortcut shares the library's save-first creation workflow; 44px phone buttons under a readable title.
- PNG transparency is retained; alternate decoding, generic/legacy MIME labels and actionable errors improve import compatibility.
- Supplied 1536×1024 PNG passed integrity checks and imported in the updated browser app; the phone-specific original failure was not reproduced.
- Automatic/manual lettering direction and Arabic system font apply to live text and shared Canvas exports. Grapheme wrapping preserves diacritics.
- Deferred component initialization fixes an empty-tab race on fresh launches.
- 25 automated suites pass. Real transparent PNG alpha, supplied PNG, new-book workflow, Arabic reader rendering and 320px layout checked.
