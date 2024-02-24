from sphinx.application import Sphinx
import os

def setup(app: Sphinx):
    app.add_js_file('socialButtons.js')  # Assumes socialButtons.js is placed in '_static' directory
    app.connect('builder-inited', lambda app: app.config.html_static_path.append('_static'))

    # Optional: Include FontAwesome CDN if not already included
    app.add_js_file('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js', priority=200)
