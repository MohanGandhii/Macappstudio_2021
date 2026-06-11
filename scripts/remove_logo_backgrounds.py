import os
import sys
from PIL import Image

def process_image(img_path):
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        return
    
    img = Image.open(img_path)
    img = img.convert("RGBA")
    width, height = img.size
    
    # Get corner pixel color as reference background color
    # We will sample the four corners and take the average or the top-left corner
    pixels = img.load()
    ref_color = pixels[0, 0]
    print(f"Image: {os.path.basename(img_path)}, Size: {width}x{height}, Corner color: {ref_color}")
    
    # We will make transparent any pixel close to the corner color,
    # or near-white pixels (R, G, B > 240)
    ref_r, ref_g, ref_b, ref_a = ref_color
    
    newData = []
    datas = img.getdata()
    
    for item in datas:
        r, g, b, a = item
        # Distance to corner color
        dist = ((r - ref_r)**2 + (g - ref_g)**2 + (b - ref_b)**2)**0.5
        
        # Also check if it is very close to white/light grey generally
        is_light = (r > 240 and g > 240 and b > 240)
        is_close_to_bg = (dist < 40)
        
        if is_light or is_close_to_bg:
            # Make transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(img_path, "PNG")
    print(f"Saved transparent image to {img_path}")

if __name__ == "__main__":
    logo_dir = "public/assets/images/resources/hero"
    files = ["dailmer.png", "healthcare.png", "intel.png", "jio.png", "paytm.png"]
    
    for f in files:
        path = os.path.join(logo_dir, f)
        process_image(path)
