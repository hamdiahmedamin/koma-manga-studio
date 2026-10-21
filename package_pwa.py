"""Version the offline shell and create a deployable ZIP. Standard library only."""
from pathlib import Path
import hashlib
import re
import zipfile

ROOT = Path(__file__).resolve().parent
SHELL = [
    'index.html', 'ui-components.css', 'vendor/webawesome.js', 'vendor/webawesome.css', 'vendor/WEB-AWESOME-LICENSE.md', 'pwa.js', 'book-store.js', 'image-tools.js', 'screen-tools.js', 'book-output.js', 'manifest.webmanifest',
    'icons/app-192.png', 'icons/app-512.png',
    'icons/maskable-512.png', 'icons/apple-touch-icon.png',
]
digest = hashlib.sha256()
for name in SHELL:
    digest.update(name.encode())
    digest.update((ROOT / name).read_bytes())
version = digest.hexdigest()[:16]
worker = ROOT / 'sw.js'
source = worker.read_text()
source, count = re.subn(r"const VERSION = '[^']+';", f"const VERSION = '{version}';", source)
if count != 1:
    raise SystemExit('Could not locate the service worker version.')
worker.write_text(source)
archive = ROOT.parent / 'koma-pwa.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as output:
    for name in SHELL + ['sw.js', '.nojekyll', 'README.md']:
        output.write(ROOT / name, name)
print(f'Offline version: {version}')
print(f'Deployment archive: {archive}')
