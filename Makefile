# Build and deploy script for WorkHero Landing Page

.PHONY: build deploy status

build:
	@echo "Build complete - static HTML/CSS/JS only"
	@echo "Running lighthouse audit..."
	@npx lighthouse-cli index.html --view

deploy:
	@echo "Pushing to GitHub Pages..."
	@git add .
	@git commit -m "Update landing page"
	@git push origin main

status:
	@echo "Checking git status..."
	@git status

# Deploy to GitHub Pages
github-push:
	git add -A
	git commit -m "Update WorkHero Landing Page" -m "Co-Authored-By: Claude <noreply@openclaude.dev>"
	git push origin main
