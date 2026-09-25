SENSEI ADVISORS — NETLIFY DEPLOYMENT
====================================

This folder is ready for drag-and-drop deployment on Netlify.

FAST DEPLOYMENT
1. Go to https://app.netlify.com/drop
2. Sign in or create a Netlify account.
3. Drag THIS ENTIRE FOLDER (sensei-advisors-netlify) onto Netlify Drop.
   - Do not drag only the ZIP file unless Netlify explicitly offers ZIP upload in your interface.
   - The folder must contain index.html at its top level.
4. Netlify will create a temporary *.netlify.app website immediately.
5. Open the temporary site and test desktop + mobile.
6. In Netlify: Site configuration / Domain management -> Add a domain -> senseiadvisors.com.
7. Netlify will show the DNS records it needs.
8. In Squarespace Domains, open the DNS settings for senseiadvisors.com and enter the records Netlify provides.
9. Wait for DNS and HTTPS provisioning. Netlify will issue the SSL certificate automatically after the domain resolves.

CONTACT FORM
- The contact form is configured for Netlify Forms with the form name: sensei-inquiry.
- After deployment, submit one test inquiry from the live Netlify URL.
- View submissions in the Netlify site's Forms area.
- You can configure email notifications from Netlify so new inquiries are sent to your preferred email address.

FILES
- index.html          Main website
- styles.css          Complete responsive design
- script.js           Mobile menu + subtle scroll/reveal behavior
- thank-you.html      Confirmation page after contact form submission
- netlify.toml        Netlify publish + security header configuration
- favicon.svg         Sensei Advisors SA browser icon
- robots.txt          Search engine rules
- sitemap.xml         Sitemap for senseiadvisors.com
- assets/             Founder portrait

EDITING LATER
The site is intentionally plain HTML/CSS/JS. Any text can be edited directly in index.html.
The core brand colors are at the top of styles.css under :root.

IMPORTANT
The contact form asks prospects not to transmit sensitive financial information.
No analytics or tracking code is included by default.


V2 FORM FIX
-----------
The inquiry form now submits inline using Netlify Forms and shows a confirmation on the homepage. It no longer redirects to /thank-you.html, eliminating the 404 redirect issue. Redeploy the entire folder to Netlify.

V4 MOBILE HEADER FIX
- Prevents the closed mobile navigation from leaking Founder / Start a conversation above the hero on iPhone browsers.
- Keeps the founder caption spacing from V3 and the inline inquiry form fix from V2.
