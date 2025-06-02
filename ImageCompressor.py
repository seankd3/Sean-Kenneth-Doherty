import os
import sys
from PIL import Image

def resize_and_convert_images(input_dir, output_dir):
    """
    Resize and convert images from JPG to WebP format.
    
    Args:
        input_dir (str): Directory containing input images
        output_dir (str): Directory to save converted images
    """
    try:
        if not os.path.exists(input_dir):
            print(f"Error: Input directory '{input_dir}' does not exist.")
            return False
            
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            print(f"Created output directory: {output_dir}")

        # Recursively walk through input_dir
        processed_count = 0
        error_count = 0
        found_any = False

        for root, dirs, files in os.walk(input_dir):
            jpg_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg'))]
            if not jpg_files:
                continue
            found_any = True
            # Determine relative path to maintain directory structure in output
            rel_path = os.path.relpath(root, input_dir)
            current_output_dir = os.path.join(output_dir, rel_path)
            if not os.path.exists(current_output_dir):
                os.makedirs(current_output_dir)
                print(f"Created output directory: {current_output_dir}")

            for filename in jpg_files:
                try:
                    img_path = os.path.join(root, filename)

                    # Open and process image
                    with Image.open(img_path) as img:
                        # Convert to RGB if necessary (for JPEG compatibility)
                        if img.mode in ('RGBA', 'LA', 'P'):
                            img = img.convert('RGB')

                        # Resize image by 50% using modern resampling method
                        new_width = img.width // 2
                        new_height = img.height // 2

                        # Use Image.LANCZOS instead of deprecated Image.ANTIALIAS
                        resized_img = img.resize((new_width, new_height), Image.LANCZOS)

                        # Convert to WebP format
                        output_filename = os.path.splitext(filename)[0] + '.webp'
                        output_path = os.path.join(current_output_dir, output_filename)

                        # Save with optimized WebP settings
                        resized_img.save(output_path, 'webp', quality=85, optimize=True)
                        print(f"✓ Processed {os.path.join(rel_path, filename)} -> {os.path.join(rel_path, output_filename)}")

                        # Delete the original JPG file only after successful conversion
                        os.remove(img_path)
                        print(f"✓ Deleted original file {os.path.join(rel_path, filename)}")

                        processed_count += 1

                except Exception as e:
                    print(f"✗ Error processing {os.path.join(rel_path, filename)}: {str(e)}")
                    error_count += 1
                    continue

        if not found_any:
            print(f"No JPG files found in '{input_dir}'")
            return True

        print(f"\nProcessing complete!")
        print(f"Successfully processed: {processed_count} files")
        if error_count > 0:
            print(f"Errors encountered: {error_count} files")
            
        return error_count == 0
        
    except Exception as e:
        print(f"Fatal error: {str(e)}")
        return False

def main():
    """Main function with command line argument support."""
    if len(sys.argv) >= 3:
        input_directory = sys.argv[1]
        output_directory = sys.argv[2]
    else:
        # Default directories
        input_directory = 'src/assets/images'
        output_directory = 'src/assets/images'
    
    print("Image Compressor and Converter")
    print("=" * 40)
    print(f"Input directory: {input_directory}")
    print(f"Output directory: {output_directory}")
    print("=" * 40)
    
    success = resize_and_convert_images(input_directory, output_directory)
    
    if success:
        print("\n🎉 All images processed successfully!")
        sys.exit(0)
    else:
        print("\n❌ Some errors occurred during processing.")
        sys.exit(1)

if __name__ == "__main__":
    main()