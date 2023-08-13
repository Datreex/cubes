#!/bin/bash
echo "Starting AACT database initialization..."
# URL of the zip file
url="https://aact.ctti-clinicaltrials.org//static/static_db_copies/daily/2023-07-31"

# Name of the zip file
zip_file="2023-07-31.zip"

# Name of the dump file inside the zip
dump_file="postegres.dmp"

# Check if dump file already exists
if [ -e "$dump_file" ]; then
    echo "$dump_file already exists. No need to download or extract."
else
    # Download the zip file
    wget "$url" -O "$zip_file"

    # Check if wget command was successful
    if [ $? -eq 0 ]; then
        # Extract the dump file
        unzip "$zip_file" "$dump_file"

        # Check if unzip command was successful
        if [ $? -eq 0 ]; then
            echo "Dump file extracted successfully."
        else
            echo "Error extracting dump file."
        fi
        echo "Removing zip file..."
        # Clean up - remove the downloaded zip file
        rm "$zip_file"
    else
        echo "Error downloading zip file."
    fi
fi
createdb -U mahdichaari aact
pg_restore -e -U mahdichaari -v -O -x -d aact --no-owner /postgres.dmp