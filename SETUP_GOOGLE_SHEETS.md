# Google Sheets Contact Form Setup Guide

This guide will help you set up your contact form to save submissions to Google Sheets and send email notifications.

## Setup Steps

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name it something like "Website Contact Form Submissions"
4. Keep this tab open - you'll need it

### Step 2: Deploy the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Copy the entire contents of `google-apps-script/Code.gs` from this project
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) or press Ctrl+S
6. Name your project (e.g., "Contact Form Handler")

### Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Contact Form API
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Review permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
7. **IMPORTANT**: Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/AKfy...../exec`)

### Step 4: Update Your Website Code

1. Open `src/components/ContactModal.tsx`
2. Find this line around line 24:
   ```typescript
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your copied Web app URL
4. Save the file

### Step 5: Test the Form

1. Start your development server if not running:
   ```bash
   npm run dev
   ```
2. Open your website and submit a test form
3. Check your Google Sheet - you should see the submission appear!
4. Check your email - you should receive a notification

## What You Get

✅ **Automatic Google Sheet Updates**
- Every form submission is saved with timestamp
- Columns: Timestamp, Name, Email, Project Brief, Status
- Data is automatically formatted and organized

✅ **Email Notifications**
- Instant email when someone submits the form
- Beautiful HTML formatted email with all details
- Direct links to reply or view the spreadsheet

✅ **Export to Excel**
- In Google Sheets: **File** → **Download** → **Microsoft Excel (.xlsx)**
- Or use **Google Sheets to Excel** add-ons for automatic sync

## Customization Options

### Change Email Recipient

By default, emails go to the Google account that owns the script. To send to a different email:

1. Open your Apps Script
2. Find line 53: `const emailTo = Session.getActiveUser().getEmail();`
3. Replace with: `const emailTo = 'your-email@example.com';`
4. Save and redeploy

### Add More Form Fields

1. Update `ContactModal.tsx` to add new fields to the `formData` state
2. Update the Apps Script to handle the new fields in the `sheet.appendRow()` call
3. Update the email template to include the new fields

### Change Email Template

Edit the `htmlBody` variable in the `sendEmailNotification` function in your Apps Script.

## Troubleshooting

### Form submits but data doesn't appear in sheet

- Make sure you deployed as "Execute as: Me" and "Who has access: Anyone"
- Check Apps Script execution logs: Apps Script editor → **Executions**
- Verify the URL in `ContactModal.tsx` matches your deployment URL

### Not receiving emails

- Check your spam/junk folder
- Verify the email address in the script
- Check Apps Script quota: [Google Apps Script Quotas](https://developers.google.com/apps-script/guides/services/quotas)

### "Authorization required" error

- Redeploy the script and authorize it again
- Make sure you're logged into the same Google account

## Data Privacy & Security

- Data is stored in your personal Google Sheet (you control it)
- Only you can access the spreadsheet
- The web app URL is public but only accepts POST requests
- Consider adding rate limiting if you get spam submissions

## Need Help?

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Sheets API Reference](https://developers.google.com/sheets/api)

---

**Note**: Google Apps Script has daily quotas:
- Email: 100 emails/day (free account)
- Script runtime: 6 min/execution
- Triggers: 90 min/day

For a small business website, these limits are more than sufficient.


Deployment ID - AKfycbzCmMMUiaMF-GPsCFh_79NKOLaCQqOE-PqLa8KZtz6HsT18qjpKrwAVQc6RXYnLNFu-

WebApp - https://script.google.com/macros/s/AKfycbzCmMMUiaMF-GPsCFh_79NKOLaCQqOE-PqLa8KZtz6HsT18qjpKrwAVQc6RXYnLNFu-/exec