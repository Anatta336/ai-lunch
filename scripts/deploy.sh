#!/bin/bash

# This script should be run from the root of the project.
# (Do not run it from the scripts directory.)

npm run build

remote_ip="188.166.154.230"

# Copy client files to server.
rsync -avz --no-perms --no-owner --no-group --delete \
    --exclude-from=.rsync-filter \
    ./dist/ root@188.166.154.230:/var/www/ai-lunch/public/
