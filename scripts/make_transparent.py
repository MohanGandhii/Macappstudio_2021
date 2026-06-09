import sys
import os

try:
    from PIL import Image
except ImportError:
    print("Pillow is not installed. Installing pillow...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

def make_transparent(img_path, output_path):
    print(f"Processing {img_path}...")
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        return
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if the pixel is near white (R, G, B > 248)
        if item[0] > 248 and item[1] > 248 and item[2] > 248:
            newData.append((255, 255, 255, 0)) # Set to fully transparent white
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    base_dir = "/Users/Alwyn/Downloads/Macappstudio_2021/public/assets/images/resources/challenges_and_squads"
    
    stressed_dev = os.path.join(base_dir, "stressed_developer.png")
    team_collab = os.path.join(base_dir, "team_collaboration.png")
    
    make_transparent(stressed_dev, stressed_dev)
    make_transparent(team_collab, team_collab)
