function checkAll(checked) {
    var checkboxes = document.getElementsByTagName("input");
    for (i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked = checked;
    }
}