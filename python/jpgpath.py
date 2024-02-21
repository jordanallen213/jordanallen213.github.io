import os

# fill this out
directory_path = '../includes/photos/climbingphotos/eaglelake2023'
output_file_path = 'output.txt'



# gets the path for each jpg in directory
def get_image_paths(directory):
    image_paths = [os.path.join(directory, file) for file in os.listdir(directory) if file.lower().endswith(('.jpg', '.jpeg', ))]
    return image_paths

# writes the path as an <img src="PATH"> thing
def write_paths_to_file(image_paths, output_file):
    with open(output_file, 'w') as file:
        for path in image_paths:
            path = path.replace('.JPG', '.jpg')
            file.write(f'<img src="../../'+ path + '">'+'\n')

image_paths = get_image_paths(directory_path)
write_paths_to_file(image_paths, output_file_path)