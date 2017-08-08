#!/bin/bash
set -e

# Download & install the Google Cloud SDK
if [ ! -d $HOME/google-cloud-sdk/bin ]; then
  rm -rf $HOME/google-cloud-sdk;
  curl https://sdk.cloud.google.com | bash;
fi;

source ${HOME}/google-cloud-sdk/path.bash.inc
