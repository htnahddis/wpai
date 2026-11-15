import re
import os

with open('public/monday.com _ Dashboards & Reporting.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

matches = set(re.findall(r'Dashboards\s*(?:&|&amp;)\s*Reporting_files/([^"\'\s>\)]+)', text))
print(f"Total unique assets: {len(matches)}")
for m in sorted(matches):
    print(m)
