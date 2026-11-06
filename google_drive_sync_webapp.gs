// Google Apps Script for Live Syncing GEMS Mobile Chip Reviewer Feedback to Google Drive
// 1. Go to https://script.google.com and create a New Project.
// 2. Paste this file, click Deploy -> New deployment -> Web app (Execute as: Me, Who has access: Anyone).
// 3. Copy the Web App URL into the "Sync/Export" modal in the GEMS Chip Reviewer app.

function doPost(e) {
  var folderId = "1nfzcvz5K-yL8FMUhWcPteHfQ5IO_PS0_"; // GEMS-Argon Root Folder
  var folder = DriveApp.getFolderById(folderId);
  var fileName = "gems_v95a_live_chip_feedback.json";
  var files = folder.getFilesByName(fileName);
  var content = e.postData.contents;
  if (files.hasNext()) {
    var file = files.next();
    file.setContent(content);
  } else {
    folder.createFile(fileName, content, MimeType.PLAIN_TEXT);
  }
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", updated: new Date().toISOString() }))
    .setMimeType(ContentService.MimeType.JSON);
}
