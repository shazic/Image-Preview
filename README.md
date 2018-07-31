# Image-Preview  

This package includes a javascript `ipreview.js` that would preview an image before upload or any subsequent manipulation.
The package does not provide any server side functionality.

## Set up 

### CSS dependencies
This package uses Bootstrap 4 and Font Awesome 5. 

You must include these in the `head` of your HTML/PHP/template.  

#### Bootstrap
```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
```
#### Font Awesome
```
<link href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" rel="stylesheet">
```
### Javascript dependencies
The package uses Vue JS, hence you need to include Vue.
Also, include the file ipreview.js from the /js folder.

## How to use  

A sample `index.html` has been provided for reference.

First, you would need to declare a `div` with id "profile".
```
<div id="profile">
```

Inside this div, use the component `<image-uploader></image-uploader>`

```
<image-uploader source="/initial/image/source.jpg" source-id="an-id-for-your-image"></image-uploader>
```
The `source-id` would be used to define the `name` as well as `id` attributes of the component. So, if you want to submit a form, this is what the request would submit.

## Screenshot

<p align="center"> 
  <img src="https://raw.githubusercontent.com/shazic/Image-Preview/master//screenshot/Image-Preview.png">
</p> 
