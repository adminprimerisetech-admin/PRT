$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceZip = Join-Path $PSScriptRoot "primerisetech-static-site.zip"
$outputZip = Join-Path $PSScriptRoot "primerisetech-hostinger-static.zip"
$stage = Join-Path ([System.IO.Path]::GetTempPath()) "primerisetech-hostinger-package"
$assets = Join-Path $projectRoot ".output\public\assets"

if (Test-Path -LiteralPath $stage) {
  Remove-Item -LiteralPath $stage -Recurse -Force
}

Expand-Archive -LiteralPath $sourceZip -DestinationPath $stage -Force
Copy-Item -Path (Join-Path $assets "*") -Destination (Join-Path $stage "assets") -Force

$newStyles = (Get-ChildItem $assets -Filter "styles-*.css" | Select-Object -First 1).Name
$newIndex = (Get-ChildItem $assets -Filter "index-*.js" | Select-Object -First 1).Name

Get-ChildItem -Path $stage -Filter "*.html" -Recurse | ForEach-Object {
  $html = Get-Content -LiteralPath $_.FullName -Raw
  $html = $html -replace '/assets/styles-[^"'']+\.css', "/assets/$newStyles"
  $html = $html -replace '/assets/index-[^"'']+\.js', "/assets/$newIndex"

  if ($_.FullName -eq (Join-Path $stage "index.html")) {
    $html = $html -replace ' class="absolute inset-0 will-change-transform" style="transform:translate3d\(0px, 0px, 0\) scale\(1\.08\);transition:transform 0\.4s cubic-bezier\(0\.22, 1, 0\.36, 1\)"', ' class="absolute inset-0"'
    $html = $html -replace ' object-right animate-hero-float', ' object-right'
  }

  if ($_.FullName -eq (Join-Path $stage "contact\index.html")) {
    $html = $html -replace '(?s)<div class="glass rounded-3xl overflow-hidden border border-primary/20">\s*<iframe.*?</iframe>\s*</div>', ''
  }

  Set-Content -LiteralPath $_.FullName -Value $html -NoNewline
}

if (Test-Path -LiteralPath $outputZip) {
  Remove-Item -LiteralPath $outputZip -Force
}

Compress-Archive -Path (Join-Path $stage "*") -DestinationPath $outputZip -CompressionLevel Optimal
Write-Output "Created $outputZip"
