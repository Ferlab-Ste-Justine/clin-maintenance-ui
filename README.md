# clin-maintenance-ui
Maintenance page for Clin Generic and Clin Prescription


## Development

## Variables

This application takes minimally the following variables as input:

- **SASS_PATH**: SASS Path needed to.

## Development Setup

Before going further, make sure that ```docker``` is installed on your system.

```bash
# 1. clone the repository
  git clone --recursive git@github.com:Ferlab-Ste-Justine/clin-maintenance-ui.git

# 2. enter the project's folder
  cd clin-maintenance-ui

**Note:** If the repository was not clone with submodule, please run

  git submodule update --init
  git submodule update –remote

### Resolve submodule error or out of sync

  git submodule deinit -f style
  git submodule update --init

### With docker

# 1. in a terminal, run docker build from project's Dockerfile file.
  docker build . -t clin-maintenance-ui

# 2. in termine, run docker run
  docker run -p 8080:80 clin-maintenance-ui:latest

#3. In your favorite browser, go to this url
  http://localhost:8080
```
