# Deleted Legacy Files - Phase 1

## Files Removed (can be restored from git if needed)

### Layout System
- `src/layouts/Layout.astro` - Legacy layout, replaced by Base.astro

### i18n System  
- `src/utils/hreflang.ts` - Legacy manual hreflang mappings, replaced by lib/i18n.ts

### URL Workarounds
- `src/utils/url-cleaner.ts` - Workaround for double language prefixes (will clean up imports in Phase 2)
- `src/utils/i18nRoutes.ts` - Duplicate routing logic (if exists)

## Reason for Deletion
These files were part of a legacy system that created:
- Dual layout systems (Layout.astro vs Base.astro)
- Dual i18n systems (utils/hreflang.ts vs lib/i18n.ts)
- URL workarounds for issues that Base.astro now prevents

## Restoration
If needed, restore from git:
```bash
git checkout HEAD -- src/layouts/Layout.astro
git checkout HEAD -- src/utils/hreflang.ts
```

## Date Deleted
2025-10-03 (Phase 1 of consolidation)
