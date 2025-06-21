#! /bin/dash

# find yuji in the current directory and all subdirectories
find . -type f -name "*" -exec grep -H "yuji" {} \;