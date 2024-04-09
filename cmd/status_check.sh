#!/bin/bash

# Loop through all modified files
while read -r file; do
    # Check if the file is a Markdown file
    if [[ "$file" == *.md ]]; then
        # Check if the Status is 'Pending'
        if grep -q "Status: 'Pending'" "$file"; then
            echo "Error: File $file is in 'Pending' status. Aborting commit."
            exit 1
        fi
    fi
done < <(git diff --cached --name-only)

exit 0