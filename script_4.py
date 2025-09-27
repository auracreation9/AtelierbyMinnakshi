# Create CNAME file for custom domain (you can update this with your actual domain)
cname_content = '''# Uncomment and replace with your actual domain name
# atelierbyminnakshi.com
# www.atelierbyminnakshi.com

# For GitHub Pages with custom domain:
# 1. Uncomment one of the lines above with your domain
# 2. Configure DNS settings with your domain provider
# 3. Point A records to GitHub Pages IPs or CNAME to yourusername.github.io
'''

# Save the CNAME file
with open('CNAME', 'w', encoding='utf-8') as f:
    f.write(cname_content)

print("✅ CNAME file created (currently commented out)")