

let quill = new Quill('#editor-container', {
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    },
    placeholder: 'hãy chia sẻ cảm nghĩ...',
    theme: 'snow' // or 'bubble'
});


