// Google Apps Script for Contact Form
// This script receives form submissions, saves them to Google Sheets, and sends email notifications

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // If this is the first submission, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Project Brief', 'Status']);
      sheet.getRange('A1:E1').setFontWeight('bold').setBackground('#4F46E5').setFontColor('#FFFFFF');
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Append the form data to the sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.projectBrief,
      'New'
    ]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 5);
    
    // Send email notification
    sendEmailNotification(data, timestamp);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data, timestamp) {
  // Get your email from the spreadsheet owner or set it manually
  const emailTo = Session.getActiveUser().getEmail();
  
  // Email subject
  const subject = `New Contact Form Submission from ${data.name}`;
  
  // Email body (HTML)
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
      </div>
      
      <div style="background: #f7fafc; padding: 30px; border: 1px solid #e2e8f0;">
        <h2 style="color: #2d3748; margin-top: 0;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0; font-weight: bold; width: 150px;">Name:</td>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0;">
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0; font-weight: bold;">Submitted:</td>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0;">${timestamp.toLocaleString()}</td>
          </tr>
        </table>
        
        <h3 style="color: #2d3748; margin-top: 25px;">Project Brief</h3>
        <div style="background: #fff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 4px; white-space: pre-wrap;">${data.projectBrief}</div>
        
        <div style="margin-top: 25px; padding: 15px; background: #edf2f7; border-left: 4px solid #667eea;">
          <p style="margin: 0; color: #4a5568;">
            <strong>Quick Actions:</strong><br>
            • View all submissions in your <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}" style="color: #667eea;">Google Sheet</a><br>
            • Reply directly to <a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a>
          </p>
        </div>
      </div>
      
      <div style="background: #2d3748; padding: 20px; text-align: center; color: #a0aec0; font-size: 12px;">
        <p style="margin: 0;">This email was automatically generated from your website contact form.</p>
      </div>
    </div>
  `;
  
  // Plain text version
  const plainBody = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Submitted: ${timestamp.toLocaleString()}

Project Brief:
${data.projectBrief}

---
View all submissions: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
Reply to: ${data.email}
  `;
  
  // Send the email
  MailApp.sendEmail({
    to: emailTo,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody
  });
}

// Optional: Test function to verify setup
function testScript() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    projectBrief: "This is a test submission to verify the script is working correctly."
  };
  
  const testEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(testEvent);
  Logger.log(result.getContent());
}
