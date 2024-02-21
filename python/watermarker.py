from PIL import Image, ImageDraw, ImageFont
import os

#fill out these details
input_folder = "../includes/photos/climbingphotos/pano2023"
output_folder = "../includes/photos/climbingphotos/pano2023"
watermark_text = "\u00A9 Jordan Allen"
font_size = 60  # Adjust the font size as needed

def add_watermark(input_folder, output_folder, watermark_text, font_size):
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Iterate over each file in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith(('.jpg', '.jpeg', '.png')):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)

            # Open the image
            image = Image.open(input_path)

            # Create a drawing object
            draw = ImageDraw.Draw(image)

            # Load a font
            font = ImageFont.load_default()

            # Load a font with the specified size
            font = ImageFont.truetype("arial.ttf", font_size)

            # Define watermark text and position
            text = watermark_text
            text_position = (20, 20)  # You can adjust the position as needed

            # Add watermark to the image
            draw.text(text_position, text, fill=(255, 255, 255), font=font)

            # Save the watermarked image to the output folder
            image.save(output_path)

            print(f"Watermark added to {filename}")

if __name__ == "__main__":
    

    add_watermark(input_folder, output_folder, watermark_text, font_size)
