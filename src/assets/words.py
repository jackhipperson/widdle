input_file_name = "game-words.txt"
output_file_name = "output.txt"

try:
    with open(input_file_name, "r") as input_file:
        lines = input_file.readlines()

    modified_lines = []
    for line in lines:
        modified_line = line[2:-3] + "\n" 
        modified_lines.append(modified_line)

    with open(output_file_name, "w") as output_file:
        output_file.writelines(modified_lines)

    print("File successfully processed.")
except FileNotFoundError:
    print(f"The file '{input_file_name}' was not found.")
except Exception as e:
    print("An error occurred:", e)
