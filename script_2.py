# Create package.json for npm/yarn compatibility
package_json_content = '''{
  "name": "atelier-by-minnakshi",
  "version": "1.0.0",
  "description": "Luxury soft skills training website for Atelier by Minnakshi",
  "main": "index.html",
  "scripts": {
    "dev": "live-server --port=3000",
    "build": "echo 'No build process required for static HTML'",
    "preview": "live-server --port=8080",
    "deploy": "gh-pages -d ."
  },
  "keywords": [
    "luxury",
    "soft-skills",
    "training",
    "coaching",
    "website",
    "atelier",
    "minnakshi"
  ],
  "author": "Atelier by Minnakshi",
  "license": "MIT",
  "devDependencies": {
    "gh-pages": "^6.0.0",
    "live-server": "^1.2.2"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/atelier-by-minnakshi.git"
  },
  "homepage": "https://yourusername.github.io/atelier-by-minnakshi",
  "engines": {
    "node": ">=14.0.0"
  }
}'''

# Save the package.json file
with open('package.json', 'w', encoding='utf-8') as f:
    f.write(package_json_content)

print("✅ package.json file created successfully!")