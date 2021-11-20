# Project5
A fully responsive CSS Grid 'lightbox' photo gallery with accessibility using tab key, plus accessible image search function.

Used baguetteBox.js to create lightbox effect, but modified some css to make all fields focusable (and thus accessible).

Used caption data as elements within an array, and then iterated over indices to match gallery images, thumbnails and captions. This works, provided their is a i 
match between caption and image! Therefore it is necessary to load new elements and correlate image title with order of caption in array.

Created my own search function using the caption data array - seemed like the cleanest solution. Then hide/display unmatched/matched images correlated via caption data text.
