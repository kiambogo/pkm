# Open Tasks

## Critical:
```dataview
TASK
WHERE contains(upper(text), "#CRITICAL")
AND (!completed OR completion > (date(now)-dur(1day)))
```
## Opportunity:
```dataview
TASK
WHERE contains(upper(text), "#OPPORTUNITY")
AND (!completed OR completion > (date(now)-dur(1day)))
```
## Horizon:
```dataview
TASK
WHERE contains(upper(text), "#HORIZON")
AND (!completed OR completion > (date(now)-dur(1day)))
```

---
# Notes