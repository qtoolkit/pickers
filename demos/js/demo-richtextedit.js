var data = [
    {
        "text": "Welcome!\n",
        "size": 30
    },
    {
        "text": "\nYou've found the demo page for "
    },
    {
        "text": "Carota",
        "bold": true,
        "color": "orange",
        "size": 14
    },
    {
        "text": ", a rich text editor implemented entirely in JavaScript that uses HTML5 Canvas for rendering. Most in-browser editors use a built-in feature called "
    },
    {
        "text": "contentEditable",
        "font": "monospace"
    },
    {
        "text": " to do most of the hard work, but this has some limitations and drawbacks that are just too much for more sensitive people, like me, to bear, so I decided to start from scratch. (Anyway, it's fun to write your own editor!) \n\nThe source code is released under the very permissive "
    },
    {
        "text": "MIT license",
        "bold": true
    },
    {
        "text": ", so you can do pretty much anything you want with it. \n\nAt runtime Carota has "
    },
    {
        "text": "no external dependencies",
        "italic": true
    },
    {
        "text": ". You just pull in the carota-min.js file using the SCRIPT tag and away you go. Or else get node and use: \n\n "
    },
    {
        "text": "npm install carota",
        "font": "monospace"
    },
    {
        "text": " \n\nto get the full source, including this demo site. By the way, "
    },
    {
        "text": "Carota",
        "bold": true,
        "color": "orange",
        "size": 14
    },
    {
        "text": " itself is displaying all this text, meaning that you can play with the editor right now! Try "
    },
    {
        "text": "Ctrl+A",
        "font": "monospace"
    },
    {
        "text": " and then "
    },
    {
        "text": "Backspace",
        "font": "monospace"
    },
    {
        "text": " to clear this document and see how the JSON view on the right changes as you make further edits. Press "
    },
    {
        "text": "Ctrl+Z",
        "font": "monospace"
    },
    {
        "text": " to undo your changes. \n\n"
    },
    {
        "text": "Click the links below for more information...",
        "bold": true
    },
    {
        "text": "\n\n"
    }
];
var imageURL = "/demos/assets/test.jpg";
function onReady(app) {
	var RichText = qtk.RichText;
	var RichTextEdit= qtk.RichTextEdit;
	var TWEEN = qtk.TWEEN;
	var Group = qtk.Group;
	var Align = qtk.Align;
	var AlignV = qtk.AlignV;
	var AlignH = qtk.AlignH;
	var Events = qtk.Events;
	var Image = qtk.Image;
	var Button = qtk.Button;
	var Direction = qtk.Direction;
	var WidgetState = qtk.WidgetState;
	var Orientation = qtk.Orientation;
	var RadioButton = qtk.RadioButton;
	var WindowNormal = qtk.WindowNormal;
	var ImageDrawType = qtk.ImageDrawType;
	var SimpleLayouter = qtk.SimpleLayouter;
	var SimpleLayouterParam= qtk.SimpleLayouterParam;
	var LinearLayouter = qtk.LinearLayouter;
	var LinearLayouterParam= qtk.LinearLayouterParam;
	var DockLayouter = qtk.DockLayouter;
	var DockLayouterParam = qtk.DockLayouterParam;
	var Events = qtk.Events;
	
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});
	win.childrenLayouter = DockLayouter.create();
	
	var toolBar = qtk.Group.create({h:40});
	toolBar.layoutParam = DockLayouterParam.create({position:Direction.TOP});
	toolBar.childrenLayouter = LinearLayouter.createH();
	win.addChild(toolBar);

	var bold = qtk.CheckButton.create({w:60, h:30, text:"bold"});
	bold.layoutParam = LinearLayouterParam.create();
	toolBar.addChild(bold);
	bold.on(Events.CHANGE, function(evt) {
		richTextEdit.setSelectedBold(evt.value);
	});
	
	var italic = qtk.CheckButton.create({w:60, h:30, text:"italic"});
	italic.layoutParam = LinearLayouterParam.create();
	toolBar.addChild(italic);
	italic.on(Events.CHANGE, function(evt) {
		richTextEdit.setSelectedItalic(evt.value);
	});
	
	var underline = qtk.CheckButton.create({w:60, h:30, text:"underline"});
	underline.layoutParam = LinearLayouterParam.create();
	toolBar.addChild(underline);
	underline.on(Events.CHANGE, function(evt) {
		richTextEdit.setSelectedUnderline(evt.value);
	});
	
	var richTextEdit = RichTextEdit.create();
	richTextEdit.layoutParam = DockLayouterParam.create({position:Direction.TOP, size:"100%"});
	richTextEdit.data = data;
	win.addChild(richTextEdit);
	
	win.open();
}
