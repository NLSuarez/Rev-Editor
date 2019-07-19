# Main Goal
Create a basic text editor that allows users to type some sort of standard syntax that will then be parsed for a preview tab.
## Sub goal: Decide what syntax
Turns out neither bbcode nor markdown have really survived well enough for Rev's text editor to choose either or without any problems. I will have to extend them one way or another, which is bad news and good news at the same time. I may still be able to do markdown provided I can easily extend a piece of software.
Best BBCode Parser that might be extensible:
https://github.com/JiLiZART/bbob 
Best markdown parser that is extensible:
https://github.com/showdownjs/showdown
Both will have to be filtered server side of any html or harmful characters just in case.
https://pypi.org/project/bbcode/

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

### Eventual
1. Undo
2. Redo

##Functionality Plugins to Look For
Color Wheel (Look at react-color)

Notes on Parser For Frontend:
- Things that work
  - The basic tags (bold, italics, underline, strikethrough) work interchangeably and do not break.
  - images
- Things that don't work
  - Size __Not working even with fix__ (consider markdown instead when you get a chance given that bbcode is not playing nice)
  - Color __Fixed__
  - Align
  - Code