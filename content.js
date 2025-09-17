function updateDirectionBasedOnContent(editableDiv, composerDiv) {
    const text = editableDiv.innerText || '';
    const clean = text.replace(/[\d\s.,;:!?'"()\[\]{}\-+*/\\|@#$%^&~`=<>\n\r\t]/g, '');

    // Match Hebrew and Arabic character ranges
    const rtlChars = clean.match(/[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/g);
    const isRTL = rtlChars && rtlChars.length > clean.length / 2;

    composerDiv.style.direction = isRTL ? 'rtl' : 'ltr';
    composerDiv.style.textAlign = isRTL ? 'right' : 'left';
}

function attachInputHandlerIfNeeded() {
    const composer = document.querySelector('[name="prompt-textarea"]')?.parentElement;
    const editable = composer?.querySelector('#prompt-textarea[contenteditable="true"]');

    if (!composer || !editable || editable._directionHandlerAttached) return;

    editable.addEventListener('input', () => {
        updateDirectionBasedOnContent(editable, composer);
    });

    editable._directionHandlerAttached = true;
}

// Start observing the DOM for composer and prompt-textarea
const observer = new MutationObserver(() => {
    attachInputHandlerIfNeeded();
});

// Observe once DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, { childList: true, subtree: true });
        attachInputHandlerIfNeeded(); // just in case already rendered
    });
} else {
    observer.observe(document.body, { childList: true, subtree: true });
    attachInputHandlerIfNeeded();
}
