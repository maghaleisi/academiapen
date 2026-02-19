

## Fix: Cloudflare Pages Build Failure

### Problem
Cloudflare Pages runs `npm ci` (clean install) by default, which requires `package-lock.json` to be perfectly in sync with `package.json`. Your lockfile has missing/mismatched dependencies.

### Solution (Two Parts)

#### 1. Cloudflare Pages Dashboard Setting (Manual Step)
In your Cloudflare Pages project settings, change the **Build command** from the default to:

```
npm install && npm run build
```

This uses `npm install` (which regenerates the lockfile) instead of `npm ci` (which fails on mismatches).

**Steps:**
- Go to Cloudflare Dashboard > Pages > your project > Settings > Builds & deployments
- Set **Build command** to: `npm install && npm run build`
- Set **Node.js version** environment variable `NODE_VERSION` to `20` (Node 18 is EOL)
- Save and redeploy

#### 2. GitHub Actions Workflow Update (Code Change)
Update `.github/workflows/deploy.yml`:
- Change `npm ci` to `npm install` on line 27 (matches what the last diff attempted)
- Update `node-version` to `20` (already set, just confirming)

This ensures both deployment targets (Cloudflare Pages and GitHub Pages) use `npm install`.

### Technical Details

| Setting | Current | Updated |
|---------|---------|---------|
| Cloudflare build command | `npm ci && npm run build` (default) | `npm install && npm run build` |
| GitHub Actions install | `npm ci` | `npm install` |
| Node version | 18 | 20 |

