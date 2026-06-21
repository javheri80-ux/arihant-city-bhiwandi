
import os
import re

def find_unused_images(root_dir):
    images_dir = os.path.join(root_dir, 'images')
    if not os.path.exists(images_dir):
        print("Images directory not found.")
        return

    # List all files in images directory
    all_images = [f for f in os.listdir(images_dir) if os.path.isfile(os.path.join(images_dir, f))]
    
    # Files to search in
    search_files = []
    for root, dirs, files in os.walk(root_dir):
        if 'images' in dirs:
            dirs.remove('images') # Don't search inside images dir
        if '.git' in dirs:
            dirs.remove('.git')
        
        for file in files:
            if file.endswith(('.php', '.html', '.js', '.json', '.css', '.txt')):
                search_files.append(os.path.join(root, file))

    unused_images = set(all_images)
    
    for file_path in search_files:
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                for img in list(unused_images):
                    # Search for the image name in the file content
                    if img in content:
                        unused_images.remove(img)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")

    return list(unused_images)

if __name__ == "__main__":
    root = r'c:\xampp\htdocs\arihant-city'
    unused = find_unused_images(root)
    if unused:
        print("Unused images found:")
        for img in unused:
            print(img)
    else:
        print("No unused images found.")
