param(
  [string]$Url = 'http://127.0.0.1:3000/cv/',
  [string]$BrowserPath = "${env:ProgramFiles(x86)}/Microsoft/Edge/Application/msedge.exe"
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path $PSScriptRoot -Parent
$output = Join-Path $repoRoot 'public/alibay-arlan-cv.pdf'
$temporaryPdf = Join-Path $env:TEMP ('portfolio-cv-' + [guid]::NewGuid() + '.pdf')
$browserProfile = Join-Path $env:TEMP ('portfolio-cv-browser-' + [guid]::NewGuid())

if (-not (Test-Path -LiteralPath $BrowserPath)) {
  throw 'Chromium browser missing. Pass -BrowserPath with the path to Edge or Chrome.'
}
$response = Invoke-WebRequest -Uri $Url
if ($response.StatusCode -ne 200 -or $response.Content -notmatch 'Professional Summary') {
  throw 'Start the portfolio server and check that /cv/ renders before exporting.'
}

$process = Start-Process -FilePath $BrowserPath -WindowStyle Hidden -PassThru -Wait -ArgumentList @(
  '--headless', '--disable-gpu', '--no-pdf-header-footer',
  "--user-data-dir=`"$browserProfile`"", "--print-to-pdf=`"$temporaryPdf`"", $Url
)
if ($process.ExitCode -ne 0 -or -not (Test-Path -LiteralPath $temporaryPdf)) {
  throw 'PDF export failed; the existing CV has been preserved.'
}
Copy-Item -LiteralPath $temporaryPdf -Destination $output
Write-Output "Exported $output. Render and inspect before committing."
