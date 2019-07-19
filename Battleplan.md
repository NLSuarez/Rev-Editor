# Main Goal

Alter the ToastUI editor with my own extensions for Rev.

## Library Notes

Turns out neither bbcode nor markdown have really survived well enough for Rev's text editor to choose either or without any problems. That said, Markdown seems to be the closest to what we need, and I've found a nice editor that, with a little work, will be perfect for our needs. [Toast UI Editor](http://ui.toast.com/tui-editor/) will be sufficient for now, provided we follow a few caveats:

1. Due to database space constraints, we won't allow image uploads, but we will allow image linking. It's difficult to turn this feature off in the editor pop-up window without cutting us off from future updates, but I can attempt to catch the change while it's being made and prevent it from happening or even just recreate the image plugin without that second option. Either way, any base-64 data codes we find will have to be stripped out and forwarded to a default static image instead.
2. Mode switching has to be disabled. While it would be nice to keep mode-switching, it would strip out any custom html we might allow our users to have while switching. This is part of the editor's design for saftey. It will specifically become a problem when we add in the alignment buttons as described in step 3.
3. The editor does not naturally support alignment, so we'll have to add in a custom extension to do so for us.

Best markdown parser that is extensible:
[Showdown for frontend Markdown Parser](https://github.com/showdownjs/showdown)
Both will have to be filtered server side of any html or harmful characters just in case.
[BBCode Parser for Python](https://pypi.org/project/bbcode/)
[Mistune for Markdown Parser](https://github.com/lepture/mistune)

## Buttons for the Toolbar

### Mandatory

1. Write
2. Preview
3. Header
4. Bold
5. Italics
6. Strike through
7. Fontsize
8. Fontcolor
9. Link
10. Quote
11. Code
12. Image
13. UL
14. OL
15. Align
