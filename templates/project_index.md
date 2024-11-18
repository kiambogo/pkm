# Tasks

```dataview
TASK
WHERE contains(lower(text), join(list("#", regexreplace(this.file.folder, ".*\/([^\/]+)$", "$1")), ""))
AND (!completed OR completion > (date(now)-dur(1day)))
```
