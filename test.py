a = """In the todo App, everything is organized into notes.

Even background theme is also a note,
which means you can edit it by pressing 'Shift + E'

Click on add a note icon on the side to begin
(For keyboard user: <b>Ctrl + Shift + A</b>)"""

import json
# json.dumps(a)
with open("json/homepage.json", "w") as f:
    f.write(json.dumps(a))