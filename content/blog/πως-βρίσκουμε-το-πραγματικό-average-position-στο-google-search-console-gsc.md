---
path: True_avg_position_GSC
date: 2019-10-13T07:00:51.877Z
title: 'Πως βρίσκουμε το πραγματικό average position στο Google Search Console [GSC];'
thumbnail: /assets/snap-2019-10-12-at-18.19.54.jpg
description: >-
  Ξυπνάς ένα πρωί και βλέπεις το project σου να έχει πέσει 50 θέσεις στο GSC.
  Πριν αρχίσεις τις αναζητήσεις για το καινούργιο core update της Google θα
  πρέπει να σκεφτείς ότι με το πέρασμα του καιρού, η μηχανή αναζήτησης συνδέει
  το site σου με περισσότερα queries [αναζητήσεις].
categories: 'Google Search Console, SEO'
tags: 'Google Search Console, SEO, Average Position'
---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://optimistic-volhard-c69d07.netlify.com/%CF%80%CF%89%CF%82-%CE%B2%CF%81%CE%AF%CF%83%CE%BA%CE%BF%CF%85%CE%BC%CE%B5-%CF%84%CE%BF-%CF%80%CF%81%CE%B1%CE%B3%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CF%8C-average-position-%CF%83%CF%84%CE%BF-google-search-console-gsc/"
  },
  "headline": "Πως βρίσκουμε το πραγματικό average position στο Google Search Console [GSC];",
  "description": "Ξυπνάς ένα πρωί και βλέπεις το project σου να έχει πέσει 50 θέσεις στο GSC. Πριν αρχίσεις τις αναζητήσεις για το καινούργιο core update της Google θα πρέπει να σκεφτείς ότι με το πέρασμα του καιρού, η μηχανή αναζήτησης συνδέει το site σου με περισσότερα queries [αναζητήσεις].",
  "image": "https://raw.githubusercontent.com/panosmakris/gatsby-starter-blog/master/static/assets/snap-2019-10-12-at-18.19.54.jpg",  
  "author": {
    "@type": "Person",
    "name": "Panos Makris"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Performance Marketing Athens",
    "logo": {
      "@type": "ImageObject",
      "url": "https://optimistic-volhard-c69d07.netlify.com/static/3a40b396e0bdf467af525d0e3696b1dd/30d3a/25.jpg",
      "width": 50,
      "height": 50
    }
  },
  "datePublished": "2019-10-13",
  "dateModified": "2020-01-01"
}
</script>



Ξυπνάς ένα πρωί και βλέπεις το project σου να έχει πέσει 50 θέσεις στο GSC. Πριν αρχίσεις τις αναζητήσεις για το καινούργιο core update της Google θα πρέπει να σκεφτείς ότι με το πέρασμα του καιρού, η μηχανή αναζήτησης συνδέει το site σου με περισσότερα queries \[αναζητήσεις]. Το πρόβλημα με τις ελληνικές αναζητήσεις είναι ότι θα συνδέσει το site σου με αναζητήσεις που μπορεί να μην έχουν σχέση με το site σου. Ένας λόγος είναι ότι η μηχανή αναζήτησης δουλεύει καλύτερα με αγγλικές αναζητήσεις σε σχέση με αναζητήσεις στις υπόλοιπες γλώσσες. 

![avg_position_GSC_performance_marketing_blog](/assets/snap-2019-10-12-at-18.19.54.jpg "False_avg_position_GSC")

## Οπότε, πως βρίσκουμε το πραγματικό Avg. Position;

Μέσα στο GSC > performance, πατάμε το κουμπί με το βελάκι και στις επιλογές που θα εμφανιστούν πατάμε το Google Sheets. Περιμένουμε λίγο για να φορτώσει και στο tab/καρτέλα που ακολουθεί κρύβουμε τα rows που δεν έχουν σχέση με το site σας.

Μετά μπορούμε να κάνουμε ένα από τα 2 πράγματα: 

Το πρώτο είναι να κλικάρουμε όλες τις καταχωρήσεις στο κελί E που είναι το Position \[πχ Ε2:Ε500] και μετά να κάνουμε κλικ κάτω δεξιά που βρίσκεται το SUM και θα μας εμφανιστούν κάποιες επιλογές. Μια από αυτή είναι και το Average Position.

![True_avg_position_GSC_performance_marketing_blog](/assets/snap-2019-10-12-at-18.19.35.jpg "True_avg_position_GSC_performance_marketing_blog")

Το δεύτερο είναι να γράψουμε στο κελί Ε501:  =SUBTOTAL(101, E2:E500)

Αυτό θα μας δείξει το average position για την στήλη Ε αφού έχει εξαιρέσει τα hidden rows. 

Τώρα έχουμε μια καλύτερη εικόνα για την πορεία και την κατάταξη του site στην μηχανή αναζήτησης της Google για την χρονική περίοδο που έχουμε επιλέξει.

Αντίο για τώρα

Πάνος
