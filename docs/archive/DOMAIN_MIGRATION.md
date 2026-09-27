# Squarespace → Netlify Domain Migration

## The Problem
Your domain is still using Squarespace's nameservers, so traffic goes to your old Squarespace site instead of Netlify.

## The Fix: Change Nameservers in Squarespace

### Step 1: Log into Squarespace
1. Go to https://account.squarespace.com/
2. Sign in with your account

### Step 2: Go to Domain Settings
1. Click **Home** → **Settings** (gear icon)
2. Click **Domains**
3. Click on `seankennethdoherty.com`
4. Click **Advanced Settings**

### Step 3: Change to Custom Nameservers
1. Find **Nameservers** section
2. Click **Use custom nameservers**
3. **Delete all existing Squarespace nameservers**:
   - Remove: `ns1.squarespace.com`
   - Remove: `ns2.squarespace.com`
   - Remove: `ns3.squarespace.com`
   - Remove: `ns4.squarespace.com`

### Step 4: Add Netlify Nameservers
Add these 4 nameservers exactly as shown:

```
dns1.p05.nsone.net
dns2.p05.nsone.net
dns3.p05.nsone.net
dns4.p05.nsone.net
```

### Step 5: Save
Click **Save** or **Update Nameservers**

---

## Verification

### Check Progress (Terminal)
```bash
# Check nameservers
nslookup -type=NS seankennethdoherty.com

# Should show:
# dns1.p05.nsone.net
# dns2.p05.nsone.net
# etc.
```

### Online Tools
- https://whatsmydns.net/#NS/seankennethdoherty.com
- https://dnschecker.org/#NS/seankennethdoherty.com

---

## Timeline

| Stage | Time |
|-------|------|
| Nameserver change | Immediate |
| Global propagation | 15 min - 48 hours |
| Usually complete | 2-4 hours |

---

## Troubleshooting

### Still seeing Squarespace after 24 hours?
1. Clear browser cache
2. Try incognito/private mode
3. Check on your phone (different network)
4. Run: `dig seankennethdoherty.com NS` to verify

### Can't find "Use custom nameservers"?
Some Squarespace accounts show it as:
- "Third-party nameservers"
- "External nameservers"
- Under **Advanced** → **DNS**

### Domain locked?
If you see "Domain locked" error:
1. In Squarespace, go to domain settings
2. Look for **Lock Domain** toggle
3. Turn it OFF (you can re-lock after migration)

---

## Alternative: Keep Squarespace DNS (Not Recommended)

If changing nameservers is problematic, you can keep Squarespace DNS and just point the A record:

1. In Squarespace, go to **DNS Settings**
2. Delete all A records (the ones pointing to 198.49.23.144, etc.)
3. Add a CNAME record:
   - **Host:** `@` or `www`
   - **Type:** CNAME
   - **Data:** `seankennethdohertywebsite.netlify.app`
4. Wait for propagation

But changing nameservers is cleaner and gives you full control via Netlify.

---

## After Migration Works

Once your domain points to Netlify:

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click on your domain
   - Enable **HTTPS** (Let's Encrypt certificate)
   - Force HTTPS (recommended)

2. **Test:**
   - https://seankennethdoherty.com should show your new site
   - https://www.seankennethdoherty.com should redirect to non-www

---

## Need Help?

- Squarespace Support: https://support.squarespace.com/hc/en-us/articles/217601147
- Netlify DNS Docs: https://docs.netlify.com/domains-https/custom-domains/
