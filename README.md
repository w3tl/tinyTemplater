##tinyTemplater

###How to use:

1. Download **tinyTemplater**.
2. Insert the following code after `<head>` tag:
```javascript 
<script src="tiniTetplater.js"></script>
```

3. Create a template code to be inserted inside the `<body>` tag with:
```html
	<template id="template">
      <div>${caption}</div>
	</template>
```
[Supported browsers](http://caniuse.com/#search=template), or
```html
	<script type="template" id="template">
      <div id="template">${caption}</div>
	</template>
```
> To replace text, use variables enclosed in `${variable}`.

4. Use the function `createFromTemplate(template, data)` that returns the `DOM` element, where:
<table cellspacing="0" style="padding: 5px">
	<tr>
		<th>Parameter</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><code>template</code></td>
		<td>DOM element that contains the template</td>
	</tr>
	<tr>
		<td><code>data</code></td>
		<td>json array of elements with values of variables</td>
	</tr>
</table>

####Done!

###Example
HTML
```html
<html>
<head>
	<script src="tinyTemplater.js"></script>
</head>
<body>
	<temlate>
		<li>${name}<li>
	</template>
	<ul id="list">
		<li>Mich</li>
	</ul>
	<script>
		var template = document.getElementById('template'),
		    data = [{name: 'Jack'}, {name: 'Jill'}],
		    el = createFromTemplate(template, data);
		document.getElementById('list').appendChild(el);
	</script>
</body>
</html>
```

You will see:

 - Mich
 - Jack
 - Jill
 
-

###License
-
tinyTemplater is licensed under the MIT license.
