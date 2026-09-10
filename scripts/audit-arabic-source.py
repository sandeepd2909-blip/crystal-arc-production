# -*- coding: utf-8 -*-
"""Source-level mixed-language scan for the Arabic pages.

Pulls out string LITERALS and JSX text runs rather than whole lines, so object
keys, class names and style props stop generating noise. Reports any run that
contains Arabic AND a Latin word that is not an approved name. Covers metadata,
keywords and JSON-LD — none of which the DOM audit can see, since they are not
in <body>.
"""
import io, re, glob, sys

AR = re.compile(u"[\u0600-\u06FF]")
ALLOW = set("""Crystal Arc LLC WhatsApp Emirates ADNOC Etihad Expo Formula Amazon Google Workspace
Analytics Meta Facebook Instagram LinkedIn ChatGPT OpenAI Claude Anthropic Netlify GDPR PDF English
AED USD SAR GST GCC UAE PO NDA CRM Disney Aramco Cartier Adidas Etisalat ENOC DHL ATP FIFA KAYALI
Nafis Nespresso Deyaar Sobha Realty Bank First Abu Dhabi Ports Grand Prix Airways Museum Future
Police Cup Majid Al Futtaim Saudi Vision Rajhi Esports Ministry Health Kuwait Royal Commission
Jubail Yanbu Makkah Route Initiative Cricket Fujairah International Airport Dubai Airwing Marathon
Aamro Freight Shipping Grosvenor House Ferrari Owners Club Leo Burnett Mahd Sports NBD DP World T20
City Rolex Moosa Tower Trade Center Riyadh King Abdulaziz Road crystalarc net com sa ae info""".split())

ENTITY = re.compile("&[a-zA-Z]+;|&#[0-9]+;")
DQ = re.compile('"([^"\n]*)"')
SQ = re.compile("'([^'\n]*)'")
TAGS = re.compile("<[^>]*>")
BRACES = re.compile(r"\{[^}]*\}")

hits, seen = [], set()
for path in sorted(glob.glob("src/app/(ar)/**/*.tsx", recursive=True)):
    for i, line in enumerate(io.open(path, encoding="utf-8", newline="").read().splitlines(), 1):
        if not AR.search(line):
            continue
        runs = DQ.findall(line) + SQ.findall(line)
        # the bare-text fallback is for JSX prose only. On a line that already
        # has quoted literals it just re-reads them with their object keys
        # attached, which is where all the `title:`/`sub:` noise came from.
        if '"' not in line and "'" not in line:
            runs += [r.strip() for r in BRACES.sub(" ", TAGS.sub(" ", line)).split("  ") if r.strip()]
        for run in runs:
            # &nbsp; &middot; &larr; ... are markup, not untranslated words
            run = ENTITY.sub(" ", run)
            if not AR.search(run):
                continue
            words = [w for w in re.findall("[A-Za-z][A-Za-z'&+-]*", run) if w not in ALLOW]
            words = [w for w in words if len(w) > 1 and not re.match("^[a-z]+[A-Z]", w)]
            if not words:
                continue
            key = (path, run)
            if key in seen:
                continue
            seen.add(key)
            hits.append((path.replace("src/app/(ar)/ar/", "").replace("\\", "/"), i, words[:8], run[:130]))

for p, i, w, t in hits:
    print("%-32s %5d  %-30s %s" % (p, i, ",".join(w), t))
print("\n%d run(s)" % len(hits))
