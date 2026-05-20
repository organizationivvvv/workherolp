#!/bin/bash

# WorkHero Landing Page - Deploy Script

echo "Deploying WorkHero Landing Page to GitHub Pages..."

# Check if we're on main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Add all changes
git add -A

# Commit
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S') - Deploy via deploy.sh" || echo "No changes to commit"

# Push to GitHub
git push origin main

echo "Deploy completed!"
echo ""
echo "GitHub Pages URL: https://organizationivvvv.github.io/workherolp/"
