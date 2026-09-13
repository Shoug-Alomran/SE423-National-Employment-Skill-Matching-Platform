#!/bin/sh
# Renders the brand assets into public/. Needs Google Chrome, rsvg-convert and ImageMagick (macOS: brew install librsvg imagemagick).
set -e
cd "$(dirname "$0")/.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

# Social share banner, 1200x630.
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --virtual-time-budget=8000 \
  --screenshot="$PWD/public/og-image.png" "file://$PWD/brand/og-image.html"

# Home-screen icon and legacy favicon.
rsvg-convert -w 180 -h 180 brand/app-icon.svg -o public/apple-touch-icon.png
rsvg-convert -w 16 -h 16 public/favicon.svg -o /tmp/nesmp-16.png
rsvg-convert -w 32 -h 32 public/favicon.svg -o /tmp/nesmp-32.png
rsvg-convert -w 48 -h 48 public/favicon.svg -o /tmp/nesmp-48.png
magick /tmp/nesmp-16.png /tmp/nesmp-32.png /tmp/nesmp-48.png public/favicon.ico
