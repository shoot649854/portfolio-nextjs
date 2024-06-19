---
Status: Published # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'
docType: Article # 'Project', 'Article'
id: 20
title: pnpm installation on Mac
description: 
slug: pnpm_installation_on_Mac
date: 20246-18
author: Shoto Morisaki
image: project/entrance.jpg
category: Project
tags: [React, frontend, mac, pnpm]
relatedDoc1: 
relatedDoc2: 
relatedDoc3: 
relatedDoc4: 
relatedDoc5: 
editor_img: https://raw.githubusercontent.com/shoot649854/IMG_DB/main/profile.webp
editor_bio: Computer Science @ University of California Santa Cruz | Intern @ LiNK
editor_name: Shoto Morisaki
editor_social:
-
icon: fab fa-linkedin
url: https://www.linkedin.com/in/shoto-morisaki-93b0a71bb/
-
icon: fab fa-github
url: https://github.com/shoot649854/
-
icon: fab fa-portfolio
url: https://portfolio-shoto.vercel.app/
---

```bash
nodenv install 20.12.2                                                                                           

nodenv: /Users/YOURNAME/.nodenv/versions/20.12.2 already exists
continue with installation? (y/N) y
To follow progress, use 'tail -f /var/folders/_n/zkwnlxm959j1s3pt15cz_xmw0000gn/T/node-build.20240618190736.40867.log' or pass --verbose
Downloading node-v20.12.2-darwin-arm64.tar.gz...
-> https://nodejs.org/dist/v20.12.2/node-v20.12.2-darwin-arm64.tar.gz
Installing node-v20.12.2-darwin-arm64...

```

```bash
nodenv local 20.12.2
Installed node-v20.12.2-darwin-arm64 to /Users/YOURNAME/.nodenv/versions/20.12.2
nodenv local 20.12.2

```

```bash
node -v                                                                                                          
v20.5.0
```


Check where the node is located
```bash
which node                                                                                                         
/Users/YOURNAME/.nvm/versions/node/v20.5.0/bin/node
```

```bash
nvm deactivate                                                                                                     

/Users/YOURNAME/.nvm/*/bin removed from ${PATH}
```

Give a correct node location with export
```bash
export PATH="$HOME/.nodenv/bin:$HOME/.nodenv/shims:$PATH"                                                          
eval "$(nodenv init -)"

which node                                                                                              
/Users/YOURNAME/.nodenv/shims/node
node -v                                                                                                 
v20.12.2
```

---


## ERR_PNPM_UNSUPPORTED_ENGINE  Unsupported environment (bad pnpm and/or Node.js version)


```bash
pnpm i                                                                                                        
 ERR_PNPM_UNSUPPORTED_ENGINE  Unsupported environment (bad pnpm and/or Node.js version)

Your pnpm version is incompatible with "/Users/YOURNAME/Engineering/frontend_1day_intern_20240623".

Expected version: 8.6.6
Got: 9.4.0

This is happening because the package's manifest has an engines.pnpm field specified.
To fix this issue, install the required pnpm version globally.

To install the latest version of pnpm, run "pnpm i -g pnpm".
To check your pnpm version, run "pnpm -v".
```

of course you dont have any global version for it
```bash
pnpm i -g pnpm@8.6.6                                                                                            

ERR_PNPM_NO_GLOBAL_BIN_DIR  Unable to find the global bin directory

Run "pnpm setup" to create it automatically, or set the global-bin-dir setting, or the PNPM_HOME env variable. The global bin directory should be in the PATH.
```

export the correct path
```bash
export PNPM_HOME="/Users/YOURNAME/Library/pnpm"                                                               
export PATH="$PNPM_HOME:$PATH"

export PATH="/Users/YOURNAME/Library/pnpm:$PATH"
source ~/.zshrc
```

