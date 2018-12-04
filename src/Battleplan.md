# Main Goal
Create a basic text editor that allows users to type markdown without actually having to know markdown.
## Things that are not in markdown naturally that I will have to parse from bbcode
Color for text.
Size for text.
Alignment.

These will require us to parse the text twice or find a way to combine marked + bbcode parsing. (This will likely be the end result, as I don't want html at all.)

Look into:
https://github.com/JimLiu/bbcode-to-react
https://github.com/JiLiZART/bbob (seems very promising)

## Buttons for the Toolbar
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
15. Tasks
16. Align