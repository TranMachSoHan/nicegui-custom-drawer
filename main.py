#!/usr/bin/env python3
from drawer import CustomDrawer
from nicegui import ui

with ui.header(elevated=True).style('background-color: #3874c8').classes('items-center'):
        ui.button(on_click=lambda: left_drawer.toggle(), icon='menu').props('flat color=white')
        ui.label('Bookstore')
with ui.column():
        ui.markdown('''
                #### Welcome to bookstore system
        ''')
        ui.label("- You can open or close drawer by clicking burger menu")
        ui.label("- You can drag the drawer and extend the drawer by using mouse click and drag")
with ui.footer().style('background-color: #3874c8'):
        ui.label('FOOTER')
with CustomDrawer(width=300)\
                .style('background-color: #ebf1fa')\
                .props('bordered') as left_drawer:
                ui.label("")
        
ui.run()
