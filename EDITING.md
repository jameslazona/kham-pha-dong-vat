# How to edit the activities

All the questions, answers, hints and Vietnamese text are in one file: **`activities.js`**.
After you save a change there, every student link picks it up within a minute or two. You don't need to copy anything to the other links.

## Make a change on GitHub

1. Open `activities.js` in the repo.
2. Click the pencil icon (Edit this file).
3. Press Ctrl+F and type the activity number, for example `ST.push({id:3` for Activity 3.
4. Change the text. Keep the quote marks `'...'`, commas and brackets exactly as they are.
5. Click **Commit changes**. Write a short note such as "Fix hint in activity 3", then click **Commit changes** again.
6. Wait about a minute, then open the student link and refresh to check.

If something breaks (a blank page), go to the file's **History**, open the last good version, and copy it back. You can also message James.

## What each part means

At the top of each activity:

| Field | What it is |
|---|---|
| `title` | Vietnamese name of the activity |
| `en` | English name |
| `pages:[46,47]` | Workbook pages |
| `mission` | The "Nhiệm vụ" sentence on the start screen |
| `vocab` | Word cards: `en` English word, `vi` Vietnamese meaning |
| `can` | "I can…" checklist at the end (English, Vietnamese) |
| `helper` | Workbook reminders at the end (page, what to do) |

Inside `tasks`, each `{type:...}` is one question:

| Field | What it is |
|---|---|
| `q` | Question in English (also read aloud) |
| `vi` | Vietnamese meaning of the question |
| `kw` | Key words: `['english','vietnamese']` |
| `hint` | Text shown when a student taps Gợi ý |
| `ref`, `pg` | Workbook question number and page |
| `opts` | Answer choices |
| `ans` | The correct answer (must match one of the choice ids) |
| `word` | The word to spell, in spelling questions |
| `bank` | Words students can choose from |
| `write` | What students should then write in the book |

## Please don't change

- `images.js`, which holds the pictures. It's very large and isn't meant to be edited by hand.
- Picture names like `'anat_05'` or `'g_27'`. You can swap one picture name for another that already exists, but a new name won't show a picture.
- `index.html` and the numbered folders `1/` to `15/`, unless you know HTML.

## Students' stars

Stars are saved in each student's own browser. Editing the activities doesn't erase them.
