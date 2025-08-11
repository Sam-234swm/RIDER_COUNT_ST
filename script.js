document.getElementById("exportBtn").addEventListener("click", function() {
    let table = document.getElementById("reportTable");

    html2canvas(table, { scale: 2 }).then(canvas => {
        let link = document.createElement("a");
        link.download = "comprehensive_report.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
