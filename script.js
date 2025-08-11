document.getElementById("exportBtn").addEventListener("click", function() {
    let table = document.getElementById("reportTable");

    html2canvas(table, { scale: 2, backgroundColor: null }).then(canvas => {
        // Convert to data URL
        let imageData = canvas.toDataURL("image/png");

        // Create a download link
        let link = document.createElement("a");
        link.href = imageData;
        link.download = "comprehensive_report.png";

        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(err => {
        console.error("Error exporting table:", err);
    });
});
