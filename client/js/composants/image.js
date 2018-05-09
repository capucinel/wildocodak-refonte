export const createImage = (img) => {
return `
<div class="gallery_product col-md-2">
<a href="#${img.id}">
  <img src="${img.url}" class="thumbnail" />
</a>
</div>

<a href="#_" class="lightbox" id="${img.id}">
<img src="${img.url}">
</a>
`
}