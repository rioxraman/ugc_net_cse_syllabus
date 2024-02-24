from sphinx.application import Sphinx
from sphinx.util.fileutil import copy_asset
import os

def setup(app: Sphinx):
    app.add_js_file('copycode.js')  # Add custom JavaScript file
    app.connect('build-finished', copy_assets)

def copy_assets(app, exception):
    if exception:
        return
    asset_path = os.path.join(app.confdir, '_static')
    static_dir = os.path.join(app.outdir, '_static')
    copy_asset(asset_path, static_dir)
