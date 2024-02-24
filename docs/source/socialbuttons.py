from sphinx.application import Sphinx
import os

def setup(app: Sphinx):
    app.add_js_file('socialButtons.js')  # Assumes socialButtons.js is placed in '_static' directory
    app.connect('builder-inited', lambda app: app.config.html_static_path.append('_static'))

    # Optional: Include FontAwesome CDN if not already included
    app.add_js_file('https://kit.fontawesome.com/f8fd821bc4.js', priority=200)
