document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('div.highlight').forEach(function(codeBlock) {
        var btn = document.createElement('button');
        btn.textContent = 'Copy';
        btn.addEventListener('click', function() {
            navigator.clipboard.writeText(codeBlock.textContent).then(function() {
                btn.textContent = 'Copied!';
                setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        });
        codeBlock.appendChild(btn);
    });
});
