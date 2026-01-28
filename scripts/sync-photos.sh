#!/bin/bash
# Sync Photos/ folder to galleries/ folder
# Usage: ./scripts/sync-photos.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PHOTOS_DIR="$PROJECT_ROOT/Photos"
GALLERIES_DIR="$PROJECT_ROOT/app/public/images/galleries"

echo "========================================="
echo "  Syncing Photos to Galleries"
echo "========================================="
echo ""
echo "Source: $PHOTOS_DIR"
echo "Target: $GALLERIES_DIR"
echo ""

# Create a mapping of folder names ( Photos -> galleries )
declare -A FOLDER_MAP=(
    ["Abstract/From Above"]="abstract-from-above"
    ["Aerospace/Astro"]="aerospace/astro"
    ["Aerospace/Charlie Duke"]="aerospace/astronauts-charlie-duke"
    ["Aerospace/Fred haise"]="aerospace/astronauts-fred-haise"
    ["Aerospace/Lone Star Rallycross"]="aerospace/lone-star-rallycross"
    ["Aerospace/Starbase"]="aerospace/starbase"
    ["Aerospace/Starbase Film"]="aerospace-starbase-film"
    ["Events/Beach House Concert"]="events/beach-house-concert"
    ["Events/Fire Dancer"]="events/fire-dancer"
    ["Landscapes/American Landscapes"]="landscapes-american-landscapes"
    ["Landscapes/Big Bend FIlm"]="landscapes-big-bend-film"
    ["Landscapes/Costa Rica"]="landscapes-costa-rica"
    ["Landscapes/Hudson Valley"]="landscapes-new-york-winter"
    ["Portraits/BlackBeltBBJ"]="portraits-blackbeltbbj"
    ["Portraits/Hillary Astrid"]="portraits-hillary-astrid"
    ["Weddings"]="weddings"
)

# Track if any changes were made
CHANGES_MADE=0

# Function to sync a folder
sync_folder() {
    local src="$1"
    local dest="$2"
    local name="$3"
    
    if [ ! -d "$src" ]; then
        echo "  ⚠️  Source not found: $src"
        return
    fi
    
    # Create destination if it doesn't exist
    mkdir -p "$dest"
    
    # Count files
    local src_count=$(find "$src" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
    local dest_count=$(find "$dest" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
    
    echo "  📁 $name"
    echo "     Source: $src_count images"
    
    # Use rsync to sync files (case-insensitive, remove extra files)
    rsync -av --delete \
        --include='*.jpg' --include='*.JPG' \
        --include='*.jpeg' --include='*.JPEG' \
        --include='*.png' --include='*.PNG' \
        --exclude='*' \
        "$src/" "$dest/" 2>/dev/null | grep -E "^sent|^deleting" || true
    
    local new_count=$(find "$dest" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
    echo "     Gallery: $new_count images"
    
    if [ "$src_count" -ne "$dest_count" ] || [ "$src_count" -ne "$new_count" ]; then
        CHANGES_MADE=1
    fi
    echo ""
}

echo "Syncing galleries..."
echo ""

# Sync each mapped folder
for photos_path in "${!FOLDER_MAP[@]}"; do
    gallery_path="${FOLDER_MAP[$photos_path]}"
    sync_folder "$PHOTOS_DIR/$photos_path" "$GALLERIES_DIR/$gallery_path" "$gallery_path"
done

echo "========================================="

if [ $CHANGES_MADE -eq 1 ]; then
    echo "✅ Sync complete! Changes were made."
    echo ""
    echo "Next steps:"
    echo "  1. Run: npm run sync-galleries"
    echo "  2. Run: npm run build"
else
    echo "✅ Sync complete! No changes needed."
fi

echo "========================================="
