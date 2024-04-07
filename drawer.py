from typing import Callable, Optional

from nicegui.page_layout import Drawer
from nicegui.element import Element

class CustomDrawer(Element, component='drawer.js'):

    def __init__(self, width: int, mousemove: Optional[Callable] = None):
        super().__init__()
        self._props['width'] = width
        self.on('mousemove', mousemove)

    def toggle(self):
        self.run_method('toggle')
