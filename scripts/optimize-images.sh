#!/bin/bash

# Image Optimization Script
# Converts high-res photos to web-optimized versions

set -e

SOURCE_DIR="../Photos"
OUTPUT_DIR="../app/public/images"
MAX_WIDTH=2000
QUALITY=85

echo "🖼️  Image Optimization Script"
echo "=============================="

# Check for ImageMagick
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Install with:"
    echo "   Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "   macOS: brew install imagemagick"
    exit 1
fi

# Create output directories
mkdir -p "$OUTPUT_DIR"/{weddings,aerospace,events,landscapes,portraits,abstract}

optimize_image() {
    local input="$1"
    local output="$2"
    local filename=$(basename "$input")
    
    echo "  📷 Processing: $filename"
    
    # Resize and optimize
    convert "$input" \
        -resize "${MAX_WIDTH}x${MAX_WIDTH}>" \
        -quality "$QUALITY" \
        -strip \
        -interlace Plane \
        -sampling-factor 4:2:0 \
        "$output"
    
    # Get file sizes for comparison
    local orig_size=$(du -h "$input" | cut -f1)
    local new_size=$(du -h "$output" | cut -f1)
    
    echo "     ✅ $orig_size → $new_size"
}

# Process Weddings
echo ""
echo "💒 Processing Weddings..."
count=0
for img in "$SOURCE_DIR"/Weddings/*.jpg "$SOURCE_DIR"/Weddings/*.JPG; do
    if [ -f "$img" ]; then
        if [ $count -lt 20 ]; then  # Limit to first 20 for demo
            optimize_image "$img" "$OUTPUT_DIR/weddings/wedding-$count.jpg"
        fi
        ((count++))
    fi
done
echo "   Processed $count wedding photos"

# Process Aerospace
echo ""
echo "🚀 Processing Aerospace..."
count=0
for img in "$SOURCE_DIR"/Areospace/Starbase/*.jpg "$SOURCE_DIR"/Areospace/Astro/*.jpg; do
    if [ -f "$img" ]; then
        optimize_image "$img" "$OUTPUT_DIR/aerospace/aerospace-$count.jpg"
        ((count++))
    fi
done
echo "   Processed $count aerospace photos"

# Process Events
echo ""
echo "🎵 Processing Events..."
count=0
for img in "$SOURCE_DIR"/Events/*/*.jpg; do
    if [ -f "$img" ]; then
        optimize_image "$img" "$OUTPUT_DIR/events/event-$count.jpg"
        ((count++))
    fi
done
echo "   Processed $count event photos"

# Process Landscapes
echo ""
echo "🏔️  Processing Landscapes..."
count=0
for img in "$SOURCE_DIR"/Landscapes/*/*.jpg "$SOURCE_DIR"/Landscapes/*.jpg; do
    if [ -f "$img" ]; then
        optimize_image "$img" "$OUTPUT_DIR/landscapes/landscape-$count.jpg"
        ((count++))
    fi
done
echo "   Processed $count landscape photos"

echo ""
echo "=============================="
echo "✅ All done!"
echo ""
echo "Next steps:"
echo "  1. Update gallery-config.ts with new image paths"
echo "  2. Run: npm run build"
echo "  3. Deploy to Netlify"
