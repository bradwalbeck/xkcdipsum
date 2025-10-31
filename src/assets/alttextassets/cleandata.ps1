# ...existing code...
# Reads fulldatafromapi.json and fulldatafromapi2.json, extracts every "alt" value (in-order),
# writes cleanaltdata.csv with each line as: "alt text",
# Replaces any double-quote characters inside the alt text with single quotes before CSV-escaping.

$base = 'C:\Repository\xkcdipsum\src\assets\alttextassets'
$inputs = @(
    Join-Path -Path $base -ChildPath 'fulldatafromapi.json'
    Join-Path -Path $base -ChildPath 'fulldatafromapi2.json'
)
$out = Join-Path -Path $base -ChildPath 'cleanaltdata.csv'

$pattern = '"alt"\s*:\s*"((?:\\.|[^"\\])*)"'
$lines = [System.Collections.Generic.List[string]]::new()
$decodedList = [System.Collections.Generic.List[string]]::new()
$replacedCount = 0

foreach ($file in $inputs) {
    if (-not (Test-Path $file)) {
        Write-Warning "Input file not found: $file"
        continue
    }
    $text = Get-Content -Raw -LiteralPath $file

    $matches = [regex]::Matches($text, $pattern)
    foreach ($m in $matches) {
        $raw = $m.Groups[1].Value

        # Decode JSON-escaped string safely
        try {
            $decoded = ConvertFrom-Json -InputObject ('"' + $raw + '"')
        } catch {
            $decoded = [System.Text.RegularExpressions.Regex]::Unescape($raw)
        }

        if ($null -eq $decoded) { $decoded = '' }
        $decoded = ($decoded -replace '[\r\n]+', ' ').Trim()

        # Replace any internal double-quote characters with single quotes
        if ($decoded.Contains('"')) {
            $decoded = $decoded.Replace('"', "'")
            $replacedCount++
        }

        $decodedList.Add($decoded)

        $csvEscaped = '"' + ($decoded -replace '"', '""') + '",'
        $lines.Add($csvEscaped)
    }
}

# Write full CSV (UTF8 without BOM)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllLines($out, $lines, $utf8NoBom)
Write-Host "Wrote $($lines.Count) lines to $out"

if ($replacedCount -gt 0) {
    Write-Host "Replaced double quotes with single quotes in $replacedCount alt entries."
} else {
    Write-Host "No internal double quotes were found in alt entries."
}
# ...existing code...