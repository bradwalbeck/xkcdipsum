param(
  [int]$Start = 2169,
  [int]$End   = 3160,
  [string]$OutFile = 'xkcd.txt',
  [int]$DelaySeconds = 1
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$outPath = Join-Path $scriptDir $OutFile

# create/clear output file
Set-Content -Path $outPath -Value '' -Encoding utf8

$headers = @{ 'User-Agent' = 'xkcdipsum-scraper/1.0' }

for ($i = $Start; $i -le $End; $i++) {
  $url = "https://xkcd.com/$i/info.0.json"
  Write-Host "Fetching $i -> $url"
  try {
    $obj = Invoke-RestMethod -Uri $url -Headers $headers -TimeoutSec 30 -ErrorAction Stop
    # convert back to compact JSON for output
    $json = ($obj | ConvertTo-Json -Depth 10)
    Add-Content -Path $outPath -Value ($json + "`n")
  } catch {
    Write-Warning ("Request failed for {0}: {1}" -f $i, $_.Exception.Message)
  }
  Start-Sleep -Seconds $DelaySeconds
}

Write-Host "Done. Output written to $outPath"