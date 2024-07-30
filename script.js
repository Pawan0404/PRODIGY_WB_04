function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    function onScanSuccess(decodeText, decodeResult) {
        // Display the scanned result
        document.getElementById('result').innerHTML = `
            <p>Scanned URL: <a href="${decodeText}" target="_blank">${decodeText}</a></p>
        `;
        // Redirect to the scanned URL
        window.location.href = decodeText;
    }

    function onScanFailure(error) {
        // Display a message indicating scanning failure
        document.getElementById('result').innerHTML = `
            <p class="error">Scanning failed. Please try again.</p>
        `;
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    htmlscanner.render(onScanSuccess, onScanFailure);
});
