#!/bin/bash
# Batch photo processor for Sean's website

BASE_DIR="/home/sean/Projects/SeanKennethDohertyWebsite2026/Kimi3/Photos"
DEST_BASE="/home/sean/Projects/SeanKennethDohertyWebsite2026/Kimi3/app/public/images/galleries"

process_folder() {
  local src="$1"
  local dest="$2"
  local name="$3"
  
  mkdir -p "$dest"
  local count=0
  
  for img in "$src"/*.jpg "$src"/*.jpeg "$src"/*.png; do
    [ -f "$img" ] || continue
    local filename=$(basename "$img")
    convert "$img" -resize 1920x1920\> -strip -quality 85 "$dest/$filename" 2>/dev/null
    ((count++))
  done
  
  echo "  $name: $count images"
}

echo "=== Processing Events ==="
process_folder "$BASE_DIR/Events/Beach House Concert" "$DEST_BASE/events-beach-house" "Beach House Concert"
process_folder "$BASE_DIR/Events/Fire Dancer" "$DEST_BASE/events-fire-dancer" "Fire Dancer"

echo ""
echo "=== Processing Landscapes ==="
process_folder "$BASE_DIR/Landscapes/American Landscapes" "$DEST_BASE/landscapes-american-landscapes" "American Landscapes"
process_folder "$BASE_DIR/Landscapes/Costa Rica" "$DEST_BASE/landscapes-costa-rica" "Costa Rica"
process_folder "$BASE_DIR/Landscapes/Big Bend FIlm" "$DEST_BASE/landscapes-big-bend-film" "Big Bend Film"

echo ""
echo "=== Processing Portraits ==="
process_folder "$BASE_DIR/Portraits/BlackBeltBBJ" "$DEST_BASE/portraits-blackbeltbbj" "Black Belt BBJ"
process_folder "$BASE_DIR/Portraits/Hillary Astrid" "$DEST_BASE/portraits-hillary-astrid" "Hillary Astrid"

echo ""
echo "=== Processing Weddings ==="
process_folder "$BASE_DIR/Weddings" "$DEST_BASE/weddings" "Weddings Main"
process_folder "$BASE_DIR/Weddings/Lauren 2024" "$DEST_BASE/weddings-lauren-2024" "Lauren 2024"

echo ""
echo "=== Processing Areospace ==="
process_folder "$BASE_DIR/Areospace/Astro" "$DEST_BASE/aerospace-astro" "Astro"
process_folder "$BASE_DIR/Areospace/Lone Star Rallycross" "$DEST_BASE/aerospace-lone-star-rallycross" "Lone Star Rallycross"
process_folder "$BASE_DIR/Areospace/Starbase" "$DEST_BASE/aerospace-starbase" "Starbase"

echo ""
echo "Done!"
