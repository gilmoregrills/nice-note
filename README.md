# nice_note (WIP)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Build Status](https://travis-ci.org/gilmoregrills/nice-note.svg?branch=master)](https://travis-ci.org/gilmoregrills/nice-note)

A simple notes app.

The project uses Lerna to split work/deployments between the backend webhook stuff and the eventual electron frontend. It might be
overkill for such a small project, but I wanted to give it a try 🤷‍♀️

Currently, the code for the webhook that dialogflow calls is in packages/backend, and the electron app is in packages/frontend. This
will probably change as I add more components/realise all the horrible mistakes I've inevitably made.

The structure of the monorepo and the component importing stuff is based on this nice tutorial/blog post: https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875 