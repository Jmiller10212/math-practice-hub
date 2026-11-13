$ErrorActionPreference = 'Stop'
Push-Location (Split-Path $PSScriptRoot -Parent)
try {
    $siteRepo = if (Test-Path -LiteralPath 'github-pages/.git') { 'github-pages' } else { '.' }
    node publishing-tools/build.cjs
    if ($LASTEXITCODE -ne 0) { throw 'Preparing the site failed. Nothing was published.' }
    node modular-hub/tests/run.cjs
    if ($LASTEXITCODE -ne 0) { throw 'Validation failed. Nothing was published.' }
    git -C $siteRepo add index.html assets sw.js version.json manifest.webmanifest icon-192.png icon-512.png .nojekyll modular-hub publishing-tools README.md
    if ($LASTEXITCODE -ne 0) { throw 'Preparing the update failed.' }
    git -C $siteRepo diff --cached --quiet
    if ($LASTEXITCODE -eq 1) {
        git -C $siteRepo commit -m 'Update modular Math Practice Hub'
        if ($LASTEXITCODE -ne 0) { throw 'Saving the update failed.' }
    } elseif ($LASTEXITCODE -ne 0) { throw 'Checking changes failed.' }
    git -C $siteRepo push origin HEAD:main
    if ($LASTEXITCODE -ne 0) { throw 'Uploading failed. Reconcile remote changes before retrying.' }
    Write-Host 'Uploaded. GitHub Pages will build the update shortly.'
    Write-Host 'Site: https://jmiller10212.github.io/math-practice-hub/'
    Write-Host 'On each device, click Check for Updates, then Reload to Update.'
} finally { Pop-Location }
